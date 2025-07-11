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

  translate() {
    this.isSwitched = !this.isSwitched;
  }

}
