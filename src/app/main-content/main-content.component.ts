import { Component } from '@angular/core';
import { AboveToFoldComponent } from './above-to-fold/above-to-fold.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { ProjectsComponent } from './projects/projects.component';
import { FeebackComponent } from './feeback/feeback.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    AboveToFoldComponent,
    AboutMeComponent,
    SkillSetComponent,
    ProjectsComponent,
    FeebackComponent,
    ContactComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
