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
            img1: "frost-grave.png",
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
            name: "DA-Bubble",
            proNr: "03",
            descrKey: "PROJECT3_DESCRIPTION",
            gitLink: "https://github.com/RaphaelaMulthaup/DABubble",
            projectLink: "https://dabubble-426.developerakademie.net/angular-projects/da-bubble/",
            img1: "da-bubble1.png",
            img2: "da-bubble2.png",
            skills: [
                {
                    skillName: "Angular",
                    skillIcon: "angular-green.png",
                },
                {
                    skillName: "Firebase",
                    skillIcon: "fireBase-green.png",
                },
                {
                    skillName: "Git",
                    skillIcon: "git-icon.png",
                },
            ]
        }
    ]
}