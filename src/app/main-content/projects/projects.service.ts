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
        },
        {
            name: "KanMind",
            proNr: "04",
            descrKey: "PROJECT4_DESCRIPTION",
            gitLink: "https://github.com/NicolausFeldtmann/kanmind_backend",
            projectLink: "https://github.com/NicolausFeldtmann/kanmind_backend",
            img1: "kanmind_1.png",
            img2: "kanmind_2.png",
            skills: [
                {
                    skillName: "Python",
                    skillIcon: "python-white.png",
                },
                {
                    skillName: "Django",
                    skillIcon: "django-white.png",
                },
                {
                    skillName: "DRF",
                    skillIcon: "drf-white.png",
                },
                {
                    skillName: "SQL",
                    skillIcon: "sq-white.png"
                }
            ]
        },
        {
            name: "Coderr",
            proNr: "05",
            descrKey: "PROJECT5_DESCRIPTION",
            gitLink: "https://github.com/NicolausFeldtmann/coderr_backend",
            projectLink: "https://coderr-feldtmann.de/",
            img1: "coderr_1.png",
            img2: "coderr_2.png",
            skills: [
                {
                    skillName: "Python",
                    skillIcon: "python-white.png",
                },
                {
                    skillName: "Django",
                    skillIcon: "django-white.png",
                },
                {
                    skillName: "DRF",
                    skillIcon: "drf-white.png",
                },
                {
                    skillName: "Cloud",
                    skillIcon: "google-white.png"
                }
            ]
        },
        {
            name: "Videoflix",
            proNr: "06",
            descrKey: "PROJECT6_DESCRIPTION",
            gitLink: "https://github.com/NicolausFeldtmann/videofix_backend",
            projectLink: "https://github.com/NicolausFeldtmann/videofix_backend",
            img1: "videoflix_1.png",
            img2: "videoflix_2.png",
            skills: [
                {
                    skillName: "Python",
                    skillIcon: "python-white.png",
                },
                {
                    skillName: "Django",
                    skillIcon: "django-white.png",
                },
                {
                    skillName: "DRF",
                    skillIcon: "drf-white.png",
                },
                {
                    skillName: "PostgreSQL",
                    skillIcon: "postgresq-whitel.png",
                },
                {
                    skillName: "Docker",
                    skillIcon: "docker-white.png",
                },
            ]
        }
    ]
}