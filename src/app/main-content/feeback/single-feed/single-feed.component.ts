import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslationsService } from '../../../translationService';
import { LanguageService } from '../../../language.service';

@Component({
  selector: 'app-single-feed',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './single-feed.component.html',
  styleUrl: './single-feed.component.scss'
})
export class SingleFeedComponent {
    @Input() name!: any;
    @Input() feedBackKey!: any;
    currenLanguage: any;

  constructor(
    private translationService: TranslationsService,
    private languageService: LanguageService
  ) { }

  ngOnInit() {
      this.languageService.currentLanguage$.subscribe(lang => {
        this.currenLanguage = lang;
      });
  }

  translate(textKey: string): string {
    return this.translationService.translate(textKey, this.currenLanguage);
  }
}
