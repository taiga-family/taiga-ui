import {inject, Injectable, LOCALE_ID, type Signal, signal} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class TuiFormatDateService {
    protected readonly locale = inject(LOCALE_ID);

    public format(timestamp: number): Signal<string> {
        return signal(
            new Date(timestamp).toLocaleTimeString(this.locale, {
                hour: 'numeric',
                minute: '2-digit',
            }),
        );
    }
}
