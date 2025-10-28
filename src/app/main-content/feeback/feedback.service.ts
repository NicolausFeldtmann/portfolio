import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class FeedbackDataService {

    constructor() { }

    feedBackList = [
        {
            name: "Anne Vollmann",
            feedBackKey: "FEEDBACK1"
        },
        {
            name: "Andrei Buha",
            feedBackKey: "FEEDBACK2"
        },
        {
            name: "Raphaela Multhaup",
            feedBackKey: "FEEDBACK3"
        }
    ]
} 