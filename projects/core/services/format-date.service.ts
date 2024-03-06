import {inject, Injectable, LOCALE_ID} from '@angular/core';
import type {Observable} from 'rxjs';
import {of} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TuiFormatDateService {
    protected readonly locale = inject(LOCALE_ID);

    public format(timestamp: number): Observable<string> {
        return of(
            new Date(timestamp).toLocaleTimeString(this.locale, {
                hour: 'numeric',
                minute: '2-digit',
            }),
        );
    }
}
