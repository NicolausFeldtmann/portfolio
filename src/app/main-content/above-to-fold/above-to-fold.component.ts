import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-above-to-fold',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './above-to-fold.component.html',
  styleUrl: './above-to-fold.component.scss'
})
export class AboveToFoldComponent {
  isSwitched = false;
  isShow = false;

  translate() {
    this.isSwitched = !this.isSwitched;
  }

  showMenu() {
    if (!this.isShow) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

}
