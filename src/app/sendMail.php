<?php
use PHPMailer\src\PHPMailer;
use PHPMailer\src\Exception;

require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"):
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case ("POST"):
        header("Access-Control-Allow-Origin: *");
        $json = file_get_contents('php://input');
        $params = json_decode($json);
        if (!$params) {
            echo "Invalid JSON";
            exit;
        }

        $email = $params->email;
        $name = $params->name;
        $messageText = $params->message;

        $mail = new PHPMailer(true); // true für exception

        try {
            // SMTP-Server konfigurieren
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com'; // SMTP-Server
            $mail->SMTPAuth = true;
            $mail->Username = 'deine.email@gmail.com'; // Dein SMTP-Benutzer
            $mail->Password = 'dein-passwort'; // Dein SMTP-Passwort
            $mail->SMTPSecure = 'tls'; // Verschlüsselung
            $mail->Port = 587; // Port für TLS

            // Absender
            $mail->setFrom('deine.email@gmail.com', 'Meine Webseite');

            // Empfänger
            $mail->addAddress('nicolaus.feldtmann@gmx.de'); 

            // Inhalt
            $mail->isHTML(true);
            $mail->Subject = "Contact From <$email>";
            $mail->Body    = "From: " . htmlspecialchars($name) . "<br>" . nl2br(htmlspecialchars($messageText));

            $mail->send();
            echo 'Mail erfolgreich gesendet';
        } catch (Exception $e) {
            error_log("Mail konnte nicht gesendet werden. Fehler: {$mail->ErrorInfo}");
            echo "Fehler beim Versenden der Mail: {$mail->ErrorInfo}";
        }
        break;
    default:
        header("Allow: POST", true, 405);
        echo "Method Not Allowed";
        exit;
}
?>