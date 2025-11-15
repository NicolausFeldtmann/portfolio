import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FeedbackDataService } from './feedback.service';
import { SingleFeedComponent } from './single-feed/single-feed.component';
import { TranslationsService } from '../../translationService';
import { LanguageService } from '../../language.service';
import { dir } from 'node:console';

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
  @ViewChild('slider', { static: false }) slider!: ElementRef;
  currentLanguae: any;
  feedbacks: any[] = [];
  displayedFeedbacks: any[] = [];
  isAnimating: boolean = false
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

  scrollFeedback(direction: 'left' | 'right') {
    this.rotate(direction);
    this.scrollDot(direction);
  }

  rotate(direction: 'left' | 'right') {
    if (this.isAnimating || !this.slider) return;
    this.isAnimating = true;

    const nativEl = this.slider.nativeElement;
    const scrollAmount = 300;

    if (direction === 'left') {
      nativEl.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else if (direction === 'right') {
      nativEl.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
    setTimeout(() => {
      this.isAnimating = false;
    }, 500);
  }

  scrollDot(direction: 'left' | 'right') {
    let feedbackCount = this.feedbacks.length;
    if (direction === 'left') {
      if (this.activeDotIdx === 0) {
        return;
      } else {
        this.activeDotIdx -= 1;
      }
    } else if (direction === 'right') {
      if (this.activeDotIdx === feedbackCount - 1) {
        return;
      } else {
        this.activeDotIdx += 1;
      }
    }
  }
}
