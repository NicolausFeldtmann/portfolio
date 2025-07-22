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
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent implements OnInit {
  isShow = false;
  hovered: boolean = false;

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

  @Input()project!: any;

  inputData = "";

  @Output()projectname = new EventEmitter<string>();

  sendInputData() {
    this.projectname.emit(this.inputData);
    this.inputData = "";
  }

  show() {
    if (!this.isShow) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

}
