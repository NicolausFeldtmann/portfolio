import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TranslationsService } from './translationService';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'nicolaus-feldtmann';
  currentLanguage: string = 'en';

  constructor(private translationsService: TranslationsService) {}

  translate(text: string): string {
    return this.translationsService.translate(text, this.currentLanguage);
  }

  switchLanguage(lang: string) {
    this.currentLanguage = lang;
  }

  onActive(event: any) {
    if (typeof window !== 'undefined') {
      window.scroll({
        top:0,
        behavior: 'smooth'
      })
    }
  }
}
