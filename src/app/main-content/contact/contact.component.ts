import { Component, OnInit } from '@angular/core';
import { TranslationsService } from '../../translationService';
import { LanguageService } from '../../language.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: 
  [
    FormsModule,
    CommonModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
    isChecked = false;
    isActive = false;
    currenLanguage: any;
    name: string = '';
    email: string = '';
    message: string= '';

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

    check() {
        this.isChecked = !this.isChecked;
        this.changeBtn();
    }

    isFormValid(): any {
        return(
            this.name.trim() !== '' &&
            this.email.trim() !== '' &&
            this.message.trim() !== '' &&
            this.isChecked
        );
    }

    changeBtn() {
        this.isActive = this.isFormValid();
    }

    sendMail(event: any){
        if (!this.isFormValid()) {
            return;
        } else {
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
}
