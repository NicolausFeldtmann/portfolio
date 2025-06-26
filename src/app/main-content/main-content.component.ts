import { Component } from '@angular/core';
import { AboveToFoldComponent } from './above-to-fold/above-to-fold.component';
import { AboutMeComponent } from './about-me/about-me.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    AboveToFoldComponent,
    AboutMeComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
