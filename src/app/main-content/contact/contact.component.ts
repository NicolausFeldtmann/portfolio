import { Component, inject, OnInit } from '@angular/core';
import { TranslationsService } from '../../translationService';
import { LanguageService } from '../../language.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: 
  [
    FormsModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
    isChecked = false;
    isActive = false;
    isShow = false;
    currenLanguage: any;
    contactData = {
        name: '',
        email: '',
        message: ''
    }

    http = inject(HttpClient)

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

    isFormValid(): boolean {
            let nameValid = this.contactData.name.trim() !== '';
            let emailValid = this.contactData.email.trim() !== '' &&
        this.validateEmail(this.contactData.email);
            let messageValid = this.contactData.message.trim() !== '';
            return nameValid && emailValid && messageValid && this.isChecked;
    }

    validateEmail(email: string): boolean {
        let pattern = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
        return pattern.test(email);
    }

    changeBtn() {
        this.isActive = this.isFormValid();
    }

    show() {
        this.isShow = !this.isShow;
    }

    sendMail(event: any){
        if (!this.isFormValid()) {
            return;
        } else {
            event.preventDefault();
            let data = new FormData()

            data.append('name', this.contactData.name);
            data.append('email', this.contactData.email);
            data.append('message', this.contactData.message);

            fetch("https://formspree.io/f/mblkjlgr", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(() => {
                this.show();
            }).catch((error) => {
                console.log(error);
            });
        }
    }
}

