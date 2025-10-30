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
  styleUrls: ['./feeback.component.scss']
})
export class FeebackComponent {
  currentLanguae: any;
  feedbacks: any[] = [];
  displayedFeedbacks: any[] = [];
  isAnimating: boolean = false;
  activeDotIdx: number = 0;

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

  rotate(direction: 'left' | 'right') {
    if (this.isAnimating) {
      return;
    }
    this.isAnimating = true;

    if (direction === 'left') {
      this.feedbacks.push(this.feedbacks.shift()!);
      this.activeDotIdx = (this.activeDotIdx - 1) % this.feedbacks.length;
    } else if (direction === 'right') {
      this.feedbacks.unshift(this.feedbacks.pop()!);
      this.activeDotIdx = (this.activeDotIdx + 1 + this.feedbacks.length) % this.feedbacks.length;
    }

    this.displayedFeedbacks = [...this.feedbacks];

    setTimeout(() => {
      this.isAnimating = false;
    }, 500);
  }
}
