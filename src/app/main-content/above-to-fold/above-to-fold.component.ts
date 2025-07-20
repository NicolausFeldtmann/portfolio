import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslationsService } from '../../translationService';
import { retry } from 'rxjs';

@Component({
  selector: 'app-above-to-fold',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './above-to-fold.component.html',
  styleUrl: './above-to-fold.component.scss'
})
export class AboveToFoldComponent {
  isSwitched = false;
  isShow = false;
  currentLanguage: string = 'en';

  constructor(private translationService: TranslationsService) {}
  
  translate(text: string): string {
    return this.translationService.translate(text, this.currentLanguage);
  }

  switchLanguage(lang: string): void {
    this.currentLanguage = lang;
  }

  showMenu() {
    if (!this.isShow) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

}
