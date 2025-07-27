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
            descrKey: "PROJECT1_DESCRIPTION",
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
            descrKey: "PROJECT2_DESCRIPTION",
            gitLink: "https://github.com/Marcel-Lukas/Task-Management-Software-Examination",
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
            proNr: "03",
            descrKey: "PROJECT3_DESCRIPTION",
            gitLink: "https://github.com/NicolausFeldtmann/",
            projectLink: "https://nicolaus-feldtmann.developerakademie.net/angular-projects/da-notes/",
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
        },
                {
            name: "Pokedex",
            proNr: "04",
            descrKey: "PROJECT4_DESCRIPTION",
            gitLink: "https://github.com/NicolausFeldtmann/Pok-dex",
            projectLink: "https://nicolaus-feldtmann.developerakademie.net/pokedex/",
            img1: "pokedex.png",
            img2: "pokedex2.png",
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
                    skillIcon: "ts-green.png",
                }
            ]
        }
    ]
}