<?php
$to = 'deine.email@beispiel.de'; // Ersetze durch deine Testadresse
$subject = 'Test E-Mail';
$message = 'Dies ist eine Test-Mail.';
$headers = 'From: noreply@deine-domain.de' . "\r\n" .
           'Reply-To: noreply@deine-domain.de' . "\r\n" .
           'X-Mailer: PHP/' . phpversion();

if (mail($to, $subject, $message, $headers)) {
    echo 'E-Mail erfolgreich versendet.';
} else {
    echo 'Fehler beim Versenden der E-Mail.';
}
?>