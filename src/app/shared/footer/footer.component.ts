import { Component, OnInit } from '@angular/core';
import { TranslationsService } from '../../translationService';
import { LanguageService } from '../../language.service';
import { RouterLink } from '@angular/router';
import { ToggleService } from '../toggle.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss','./mobile.scss']
})
export class FooterComponent implements OnInit {
currenLanguage: any;
isShow = false;
showImpressum = false;
showLegal = false;

  constructor(
    private translationService: TranslationsService,
    private languageService: LanguageService,
    private toggleService: ToggleService 
  ) {}

  ngOnInit() {
      this.languageService.currentLanguage$.subscribe(lang => {
        this.currenLanguage = lang;
      });
  }

  translate(textKey: string): string {
    return this.translationService.translate(textKey, this.currenLanguage);
  }

  show() {
    this.isShow = !this.isShow;

    if (this.isShow) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  updateBodyScroll() {
    if (this.showImpressum || this.showLegal) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

}
