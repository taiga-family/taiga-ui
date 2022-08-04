import {Inject, Injectable, Optional} from '@angular/core';
import {LOCAL_STORAGE} from '@ng-web-apis/common';
import {
    TuiLanguage,
    TuiLanguageLoader,
    TuiLanguageName,
    TuiLanguageStorage,
} from '@taiga-ui/i18n/interfaces';
import {TUI_LANGUAGE_LOADER, TUI_LANGUAGE_STORAGE_KEY} from '@taiga-ui/i18n/tokens';
import {TUI_DEFAULT_LANGUAGE} from '@taiga-ui/i18n/tools';
import {BehaviorSubject, Observable, of} from 'rxjs';

import {tuiAsyncLoadLanguage} from './utils';

// @dynamic
@Injectable({providedIn: `root`})
export class TuiLanguageSwitcher extends BehaviorSubject<Observable<TuiLanguage>> {
    constructor(
        @Inject(TUI_DEFAULT_LANGUAGE)
        private readonly fallback: TuiLanguage,
        @Inject(TUI_LANGUAGE_STORAGE_KEY)
        private readonly key: string,
        @Inject(LOCAL_STORAGE)
        private readonly storage: TuiLanguageStorage,
        @Optional()
        @Inject(TUI_LANGUAGE_LOADER)
        private readonly loader: TuiLanguageLoader | null,
    ) {
        super(tuiAsyncLoadLanguage(storage.getItem(key), loader, fallback));
    }

    get language(): TuiLanguageName {
        return this.storage.getItem(this.key) || this.fallback.name;
    }

    setLanguage(language: TuiLanguageName): void {
        this.storage.setItem(this.key, language);

        this.next(tuiAsyncLoadLanguage(language, this.loader, this.fallback));
    }

    clear(): void {
        this.storage.removeItem(this.key);

        this.next(of(this.fallback));
    }
}
