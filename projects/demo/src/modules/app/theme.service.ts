import {Inject, Injectable, InjectionToken} from '@angular/core';
import {LOCAL_STORAGE} from '@ng-web-apis/common';
import {BehaviorSubject} from 'rxjs';

export const DEFAULT_THEME = `Open-source`;

export const TUI_DEMO_DEFAULT_THEME = new InjectionToken<string>(
    `[TUI_DEMO_DEFAULT_THEME]: Name of default theme`,
    {factory: () => DEFAULT_THEME},
);

@Injectable({
    providedIn: `root`,
})
export class TuiThemeService extends BehaviorSubject<string> {
    constructor(
        @Inject(TUI_DEMO_DEFAULT_THEME) fallback: string,
        @Inject(LOCAL_STORAGE) private readonly storage: Storage,
    ) {
        super(storage.getItem(`theme`) || fallback);
    }

    next(value: string): void {
        this.storage.setItem(`theme`, value);
        super.next(value);
    }
}
