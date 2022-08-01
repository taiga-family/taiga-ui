import {Inject, inject, Injectable} from '@angular/core';
import {LOCAL_STORAGE} from '@ng-web-apis/common';
import {tuiIsPresent, tuiNormalizeCommonJSImport} from '@taiga-ui/cdk';
import {TuiLanguage, TuiLanguageName} from '@taiga-ui/i18n/interfaces';
import {TUI_DEFAULT_LANGUAGE} from '@taiga-ui/i18n/tools';
import {BehaviorSubject, from, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {TUI_LANG_DEFAULT_KEY, TUI_LANG_STORAGE_KEY} from './options';

// @dynamic
@Injectable({providedIn: `root`})
export class TuiLanguageSwitcher extends BehaviorSubject<Observable<TuiLanguage>> {
    constructor(@Inject(LOCAL_STORAGE) private readonly storage: Storage) {
        super(TuiLanguageSwitcher.getDefaultLanguage(storage));
    }

    private static getDefaultLanguage(storage: Storage): Observable<TuiLanguage> {
        const language = storage.getItem(TUI_LANG_STORAGE_KEY) as TuiLanguageName;

        return tuiIsPresent(language)
            ? (from(
                  tuiNormalizeCommonJSImport(
                      import(`@taiga-ui/i18n/languages/${language}`),
                  ),
              ).pipe(
                  map(module => module?.[`TUI_${language.toUpperCase()}_LANGUAGE`]),
              ) as Observable<TuiLanguage>)
            : inject(TUI_DEFAULT_LANGUAGE);
    }

    get lang(): TuiLanguageName {
        return (
            (this.storage.getItem(TUI_LANG_STORAGE_KEY) as TuiLanguageName) ??
            TUI_LANG_DEFAULT_KEY
        );
    }

    setLang(name: TuiLanguageName): void {
        this.storage.setItem(TUI_LANG_STORAGE_KEY, name);
    }

    removeLang(): void {
        this.storage.removeItem(TUI_LANG_STORAGE_KEY);
    }
}
