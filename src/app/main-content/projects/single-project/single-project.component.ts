import { CommonModule } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslationsService } from '../../../translationService';
import { LanguageService } from '../../../language.service';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss', './mobile.scss']
})
export class SingleProjectComponent implements OnInit {
  isShow = false;
  hovered: boolean = false;
  currenLanguage: any;

  @Input()project!: any;
  @Input() allProjects!: any[];
  @Output()projectname = new EventEmitter<string>();

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

  inputData = "";

  sendInputData() {
    this.projectname.emit(this.inputData);
    this.inputData = "";
  }

  show() {
    this.isShow = !this.isShow;

    if (this.isShow) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  showNext() {
    let currentIdx = this.allProjects.indexOf(this.project);
    let nextIdx = (currentIdx + 1) % this.allProjects.length;
    this.project = this.allProjects[nextIdx];
  }

}
