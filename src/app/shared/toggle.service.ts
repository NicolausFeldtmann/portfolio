import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ToggleService {
    private toggleLegalSubject = new Subject<void>();
    toggleLegal$ = this.toggleLegalSubject.asObservable();

    triggerToggleLegal() {
        this.toggleLegalSubject.next();
    }
}