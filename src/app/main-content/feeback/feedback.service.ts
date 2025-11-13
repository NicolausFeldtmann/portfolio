import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class FeedbackDataService {

    constructor() { }

    feedBackList = [
        {
            name: "Anne Vollmann - Teampartner*in",
            feedBackKey: "FEEDBACK1"
        },
        {
            name: "Andrei Buha - Teampartner*in",
            feedBackKey: "FEEDBACK2"
        },
        {
            name: "Raphaela Multhaup - Teampartner*in",
            feedBackKey: "FEEDBACK3"
        },
    ]
} 