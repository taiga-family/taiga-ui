import {Inject, Injectable} from '@angular/core';
import {LOCAL_STORAGE} from '@ng-web-apis/common';
import {Language} from '..';
import {TUI_I18N_STORAGE_KEY, TUI_STORED_LANGUAGE} from '@taiga-ui/i18n/tools';
import {BehaviorSubject, ReplaySubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TuiLanguageService extends BehaviorSubject<Language> {

    constructor(
        @Inject(TUI_STORED_LANGUAGE) private storedLanguage: Language,
        @Inject(TUI_I18N_STORAGE_KEY) private storageKey: string,
        @Inject(LOCAL_STORAGE) private storage: Storage,
    ) {
        super(storedLanguage)
    }
    setLang(lang: Language) {
        this.storage.setItem(this.storageKey, lang.code);
        this.next(lang);
    }
}
