import { CommonModule } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
export class SingleProjectComponent {
  isShow = false;

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
