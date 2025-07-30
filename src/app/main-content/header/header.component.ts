import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslationsService } from '../../translationService';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
isSwitched = true;
isShow = false;
currentLanguage: string = 'en';

  constructor(
    private translationService: TranslationsService,
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      let savedLanguage = localStorage.getItem('language');
      if (savedLanguage) {
        this.switchLanguage(savedLanguage);
      }

      let savedSwich = localStorage.getItem('switchState');
      if (savedSwich !== null) {
        this.isSwitched = savedSwich === 'true';
      }
    }

    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    })
  }

  translate(text: string): string {
    this.isSwitched = !this.isSwitched;
    return this.translationService.translate(text, this.currentLanguage);
  }

  switchLanguage(lang: string): void {
    this.languageService.setLanguage(lang);
    localStorage.setItem('language', lang);
  }

  toggleLanguage() {
    if (this.currentLanguage === 'en') {
      this.switchLanguage('de');
      this.isSwitched = false;
    } else {
      this.switchLanguage('en')
      this.isSwitched = true;
    }
    localStorage.setItem('switchState', this.isSwitched.toString());
  }

  showMenu() {
    if (!this.isShow) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }
}
