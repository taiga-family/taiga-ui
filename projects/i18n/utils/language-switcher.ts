import type {Provider} from '@angular/core';
import {inject, Injectable} from '@angular/core';
import {WA_LOCAL_STORAGE} from '@ng-web-apis/common';
import {
    TUI_DEFAULT_LANGUAGE,
    TUI_LANGUAGE,
    TUI_LANGUAGE_LOADER,
    TUI_LANGUAGE_STORAGE_KEY,
} from '@taiga-ui/i18n/tokens';
import type {TuiLanguage, TuiLanguageLoader, TuiLanguageName} from '@taiga-ui/i18n/types';
import type {Observable} from 'rxjs';
import {BehaviorSubject, of, switchAll} from 'rxjs';

import {tuiAsyncLoadLanguage} from './load-language';

export function tuiLanguageSwitcher(loader: TuiLanguageLoader): Provider[] {
    return [
        {
            provide: TUI_LANGUAGE_LOADER,
            useFactory: () => loader,
        },
        {
            provide: TUI_LANGUAGE,
            useFactory: () => inject(TuiLanguageSwitcherService).pipe(switchAll()),
        },
    ];
}

@Injectable({
    providedIn: 'root',
})
export class TuiLanguageSwitcherService extends BehaviorSubject<Observable<TuiLanguage>> {
    private readonly fallback = inject(TUI_DEFAULT_LANGUAGE);
    private readonly key = inject(TUI_LANGUAGE_STORAGE_KEY);
    private readonly storage = inject(WA_LOCAL_STORAGE);
    private readonly loader = inject(TUI_LANGUAGE_LOADER, {optional: true});

    constructor() {
        super(
            tuiAsyncLoadLanguage(
                inject(WA_LOCAL_STORAGE).getItem(inject(TUI_LANGUAGE_STORAGE_KEY)),
                inject(TUI_LANGUAGE_LOADER, {optional: true}),
                inject(TUI_DEFAULT_LANGUAGE),
            ),
        );
    }

    public get language(): TuiLanguageName {
        return this.storage.getItem(this.key) || this.fallback.name;
    }

    public setLanguage(language: TuiLanguageName): void {
        this.storage.setItem(this.key, language);

        this.next(tuiAsyncLoadLanguage(language, this.loader, this.fallback));
    }

    protected clear(): void {
        this.storage.removeItem(this.key);

        this.next(of(this.fallback));
    }
}
