import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({ providedIn: 'root' })

export class focusService {
    private focusSubject = new Subject<void>();
    focus$ = this.focusSubject.asObservable();

    triggerFocus() {
        this.focusSubject.next();
    }
}