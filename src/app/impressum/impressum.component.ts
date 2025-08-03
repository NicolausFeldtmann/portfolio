import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationsService } from '../translationService';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent implements OnInit {
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
}
