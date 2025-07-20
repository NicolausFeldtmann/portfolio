import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class TranslationsService {
    private translations: { [key: string]: { [lang: string]: string } } = {};

    constructor(private http: HttpClient) {
        this.loadTranslations();
    }

    private loadTranslations(): void {
        this.http.get<{ [key: string]: { [lang: string]: string } }>('/assets/i18n/translation.json')
            .subscribe(data => {
                this.translations = data;
            });
    }

    translate(text: string, lang: string): string {
        return this.translations[text]?.[lang] || text;
    }
}