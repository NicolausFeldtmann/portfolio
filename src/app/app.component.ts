import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TranslationsService } from './translationService';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
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
