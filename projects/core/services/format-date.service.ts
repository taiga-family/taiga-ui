import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import type {Observable} from 'rxjs';
import {of} from 'rxjs';

@Injectable({
    providedIn: `root`,
})
export class TuiFormatDateService {
    constructor(@Inject(LOCALE_ID) protected readonly locale: string) {}

    format(timestamp: number): Observable<string> {
        return of(
            new Date(timestamp).toLocaleTimeString(this.locale, {
                hour: `numeric`,
                minute: `2-digit`,
            }),
        );
    }
}
