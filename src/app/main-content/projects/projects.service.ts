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
            skillIcon1: "./../../../assets/img/PNG/icons-green/html-green.png",
            skillIcon2: "./../../../assets/img/PNG/icons-green/css-green.png",
            skillIcon3: "./../../../assets/img/PNG/icons-green/js-green.png",
            gitLink: "https://github.com/NicolausFeldtmann/FrostGrave",
            projectLink: "https://nicolaus-feldtmann.developerakademie.net/FrostGrave/",
            img1: "./../../../assets/img/PNG/screens/frost-grave2.png",
            img2: "./../../../assets/img/PNG/screens/frost-grave2.png",
        }
    ]
}