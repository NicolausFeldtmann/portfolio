import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TranslationsService } from './translationService';
import { FooterComponent } from './main-content/footer/footer.component';
import { HeaderComponent } from './main-content/header/header.component';

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
}
