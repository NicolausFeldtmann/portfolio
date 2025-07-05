import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SingleProjectComponent } from './single-project/single-project.component';
import { ProjectdataService } from './projects.service';

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

  projectlistdata = inject(ProjectdataService);
}
