import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  sendMail(event: any){
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("https://formspree.io/f/mblkjlgr", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        window.location.href = "/send";
    }).catch((error) => {
        console.log(error);
    });
}
}
