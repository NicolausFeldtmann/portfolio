import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-single-project',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent {
  @Input()project = {
      name: "Frost Grave",
      skill1: "HTML",
      skill2: "CSS",
      skill3: "JavaScript",
      proNr: "01",
      description: "Side-Scroller game basedon object-oriented approach. Collect falling stars the fight the undead Icegigant.",
      skillIcon1: "./../../../assets/img/PNG/js-png",
      gitLink: "https://github.com/NicolausFeldtmann/FrostGrave",
      porjectLink: "https://nicolaus-feldtmann.developerakademie.net/FrostGrave/",
      img1: "frost-grave.png",
  }

  inputData = "";

  @Output()projectname = new EventEmitter<string>();

  sendInputData() {
    this.projectname.emit(this.inputData);
    this.inputData = "";
  }
}
