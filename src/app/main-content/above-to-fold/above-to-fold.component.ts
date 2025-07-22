import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslationsService } from '../../translationService';
import { LanguageService } from '../../language.service';
import { enableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-above-to-fold',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './above-to-fold.component.html',
  styleUrls: ['./above-to-fold.component.scss','./mobile.scss', './apendix.scss']
})

export class AboveToFoldComponent {
  isSwitched = true;
  isShow = false;
  currentLanguage: string = 'en';

  constructor(
    private translationService: TranslationsService,
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  translate(text: string): string {
    this.isSwitched = !this.isSwitched;
    return this.translationService.translate(text, this.currentLanguage);
  }

  switchLanguage(lang: string): void {
    this.languageService.setLanguage(lang);
  }

  toggleLanguage() {
    if (this.currentLanguage === 'en') {
      this.switchLanguage('de');
      this.isSwitched = false;
    } else {
      this.switchLanguage('en')
      this.isSwitched = true;
    }
  }

  showMenu() {
    if (!this.isShow) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }
}
