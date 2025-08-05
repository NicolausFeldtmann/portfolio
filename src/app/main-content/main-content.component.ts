import { Component, OnInit } from '@angular/core';
import { AboveToFoldComponent } from './above-to-fold/above-to-fold.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { ProjectsComponent } from './projects/projects.component';
import { FeebackComponent } from './feeback/feeback.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { ActivatedRoute } from '@angular/router';

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
    FooterComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.route.fragment.subscribe(frgament => {
        if (frgament) {
          document.getElementById(frgament)?.scrollIntoView({ behavior: 'smooth' })
        }
      })
  }
}
