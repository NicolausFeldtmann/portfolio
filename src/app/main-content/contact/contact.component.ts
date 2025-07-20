import { Component, OnInit } from '@angular/core';
import { TranslationsService } from '../../translationService';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {

    currenLanguage: any;

    constructor(
        private translationService: TranslationsService,
        private languageService: LanguageService
    ) {}

    ngOnInit() {
        this.languageService.currentLanguage$.subscribe(lang => {
            this.currenLanguage = lang;
        });
    }

    translate(textKey: string): string {
        return this.translationService.translate(textKey, this.currenLanguage);
    }

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
