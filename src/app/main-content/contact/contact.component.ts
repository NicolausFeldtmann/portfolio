import { Component, inject, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { TranslationsService } from '../../translationService';
import { LanguageService } from '../../language.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { ToggleService } from '../../shared/toggle.service';

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
  styleUrls: ['./contact.component.scss', './mobile.scss']
})
export class ContactComponent implements OnInit {
    @ViewChild('nameInput') nameInput!: ElementRef<HTMLInputElement>;
    isChecked = false;
    isActive = false;
    isShow = false;
    isSent = false;
    currenLanguage: any;
    contactData = {
        name: '',
        email: '',
        message: ''
    }

    http = inject(HttpClient)

    constructor(
        private translationService: TranslationsService,
        private languageService: LanguageService,
        private toggleService: ToggleService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.languageService.currentLanguage$.subscribe(lang => {
            this.currenLanguage = lang;
        });

        this.route.fragment.subscribe(fragment => {
            if (fragment === 'contact') {
                this.focusInput();
            }
        })

        this.isSent = false;
    }

    focusInput() {
        setTimeout(() => {
            this.nameInput.nativeElement.focus();
        }, 0);
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

    triggerToggleLegal() {
        this.toggleService.triggerToggleLegal();
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
                this.contactData = {name: '', email: '', message: ''}
                this.isChecked = false;
                this.changeBtn();
                this.isSent = true;
            }).catch((error) => {
                console.log(error);
            });
        }
    }
}

