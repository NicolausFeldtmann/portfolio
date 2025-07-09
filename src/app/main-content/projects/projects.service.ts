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
            skillIcon1: "html-green.png",
            skillIcon2: "css-green.png",
            skillIcon3: "js-green.png",
            gitLink: "https://github.com/NicolausFeldtmann/FrostGrave",
            projectLink: "https://nicolaus-feldtmann.developerakademie.net/FrostGrave/",
            img1: "frost-grave2.png",
            img2: "frost-grave2.png",
        },
        {
            name: "join",
            skill1: "HTML",
            skill2: "CSS",
            skill3: "JavaScript",
            proNr: "02",
            description: "Side-Scroller game basedon object-oriented approach. Collect falling stars the fight the undead Icegigant.",
            skillIcon1: "html-green.png",
            skillIcon2: "css-green.png",
            skillIcon3: "js-green.png",
            gitLink: "https://github.com/NicolausFeldtmann/Join",
            projectLink: "https://nicolaus-feldtmann.developerakademie.net/Join/",
            img1: "join.png",
            img2: "join2.png",
        }
    ]
}