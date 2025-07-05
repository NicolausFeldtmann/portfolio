import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ProjectdataService {

    constructor() { }

    projectList = [
        {
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
            img2: "./../../../assets/img/PNG/screens/frost-grave2.png",
        }
    ]
}