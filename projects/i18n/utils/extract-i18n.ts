import {inject} from '@angular/core';
import {TUI_LANGUAGE} from '@taiga-ui/i18n/tokens';
import type {TuiLanguage} from '@taiga-ui/i18n/types';
import type {Observable} from 'rxjs';
import {map} from 'rxjs';

export function tuiExtractI18n<K extends keyof TuiLanguage>(
    key: K,
): () => Observable<TuiLanguage[K]> {
    return () => inject(TUI_LANGUAGE).pipe(map((lang: TuiLanguage) => lang[key]));
}
