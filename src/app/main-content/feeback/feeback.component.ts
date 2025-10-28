import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FeedbackDataService } from './feedback.service';
import { SingleFeedComponent } from './single-feed/single-feed.component';
import { TranslationsService } from '../../translationService';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-feeback',
  standalone: true,
  imports: [
    CommonModule,
    SingleFeedComponent
  ],
  templateUrl: './feeback.component.html',
  styleUrl: './feeback.component.scss'
})
export class FeebackComponent {
  currentLanguae: any;
  feedbacks: any[] = [];
  displayedFeedbacks: any[] = [];
  slideTransformValue: number = 0;

  constructor(
    private translationService: TranslationsService,
    private languageService: LanguageService,
    private feedbackDataService: FeedbackDataService
  ) { }

    ngOnInit() {
      this.languageService.currentLanguage$.subscribe(lang => {
        this.currentLanguae = lang;
      });
    this.feedbacks = this.feedbackDataService.feedBackList;
    this.displayedFeedbacks = [...this.feedbacks];
  }

  translate(textKey: string): string {
    return this.translationService.translate(textKey, this.currentLanguae);
  };

  feedbacklistdata = inject(FeedbackDataService);

}
