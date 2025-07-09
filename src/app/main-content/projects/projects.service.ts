import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ProjectdataService {

    constructor() { }

    projectList = [
        {
            name: "Frost Grave",
            proNr: "01",
            description: "Side-Scroller game basedon object-oriented approach. Collect falling stars the fight the undead Icegigant.",
            gitLink: "https://github.com/NicolausFeldtmann/FrostGrave",
            projectLink: "https://nicolaus-feldtmann.developerakademie.net/FrostGrave/",
            img1: "frost-grave2.png",
            img2: "frost-grave2.png",
            skills:[
                {
                    skillName:  "HTML",
                    skillIcon: "html-green.png",
                },
                {
                    skillName:  "CSS",
                    skillIcon: "css-green.png",
                },
                {
                    skillName:  "JavaScript",
                    skillIcon: "js-green.png",
                },
        ]
        },
        {
            name: "Join",
            proNr: "02",
            description: "Side-Scroller game basedon object-oriented approach. Collect falling stars the fight the undead Icegigant.",
            gitLink: "https://github.com/NicolausFeldtmann/Join",
            projectLink: "https://nicolaus-feldtmann.developerakademie.net/Join/",
            img1: "join.png",
            img2: "join2.png",
            skills: [
                {
                    skillName: "HTML",
                    skillIcon: "html-green.png",
                },
                {
                    skillName: "CSS",
                    skillIcon: "css-green.png",
                },
                {
                    skillName: "JavaScript",
                    skillIcon: "js-green.png",
                },
                {
                    skillName: "Firebase",
                    skillIcon: "fireBase-green.png",
                }
            ]
        },
        {
            name: "DA-Notes",
            skill1: "HTML",
            skill2: "CSS",
            skill3: "TypeScript",
            skill4: "Firebase",
            skill5: "Angular",
            proNr: "03",
            description: "Side-Scroller game basedon object-oriented approach. Collect falling stars the fight the undead Icegigant.",
            skillIcon1: "html-green.png",
            skillIcon2: "css-green.png",
            skillIcon3: "js-green.png",
            skillIcon4: "fireBase-green.png",
            skillIcon5: "angular-green.png",
            gitLink: "https://github.com/NicolausFeldtmann/Join",
            projectLink: "https://nicolaus-feldtmann.developerakademie.net/Join/",
            img1: "da-notes.png",
            img2: "da-notes2.png",
            skills: [
                {
                    skillName: "HTML",
                    skillIcon: "html-green.png",
                },
                {
                    skillName: "CSS",
                    skillIcon: "css-green.png",
                },
                {
                    skillName: "TypeScript",
                    skillIcon: "ts-green.png",
                },
                {
                    skillName: "Angular",
                    skillIcon: "angular-green.png",
                }
            ]
        }
    ]
}