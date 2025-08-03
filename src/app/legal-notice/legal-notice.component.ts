import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationsService } from '../translationService';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent implements OnInit{
  currentLanguage: any;

    constructor(
      private translationService: TranslationsService,
      private languageService: LanguageService
    ) {}
  
    ngOnInit() {
        this.languageService.currentLanguage$.subscribe((lang: any) => {
          this.currentLanguage = lang;
        });
    }
  
    translate(textKey: string): string {
      return this.translationService.translate(textKey, this.currentLanguage);
    }
}
