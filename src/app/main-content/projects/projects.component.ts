import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';
import { ProjectdataService } from './projects.service';
import { TranslationsService } from '../../translationService';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    SingleProjectComponent,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
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

  projectlistdata = inject(ProjectdataService);
}
