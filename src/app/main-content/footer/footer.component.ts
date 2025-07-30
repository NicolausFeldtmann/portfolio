import { Component, OnInit } from '@angular/core';
import { TranslationsService } from '../../translationService';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
currenLanguage: any;

  constructor(
    private translationService: TranslationsService,
    private languageService: LanguageService
  ) {}

  ngOnInit() {
      this.languageService.currentLanguage$.subscribe(lang => {
        this.currenLanguage = lang;
      });
  }

  translate(textKey: string): string {
    return this.translationService.translate(textKey, this.currenLanguage);
  }

}
