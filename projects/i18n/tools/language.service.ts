import {inject, Injectable} from '@angular/core';
import {LOCAL_STORAGE} from '@ng-web-apis/common';
import {Language} from '@taiga-ui/i18n';
import {TUI_I18N_STORAGE_KEY, TUI_STORED_LANGUAGE} from '@taiga-ui/i18n/tools';
import {ReplaySubject} from 'rxjs';
@Injectable()
export class TuiLanguageService extends ReplaySubject<Language> {
    storedLanguage = inject(TUI_STORED_LANGUAGE);
    storageKey = inject(TUI_I18N_STORAGE_KEY);
    storage = inject(LOCAL_STORAGE);
    constructor() {
        super(1);
        this.next(this.storedLanguage);
    }
    setLang(lang: Language) {
        this.storage.setItem(this.storageKey, lang.code);
        super.next(lang);
    }
}
