import { Component, OnInit } from '@angular/core';
import { TranslationsService } from '../../translationService';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})

export class SkillSetComponent implements OnInit {
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
