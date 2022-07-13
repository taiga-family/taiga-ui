import {inject} from '@angular/core';
import {TuiLanguage} from '@taiga-ui/i18n/interfaces';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {TUI_LANGUAGE} from './language';

export function tuiExtractI18n<K extends keyof TuiLanguage>(
    key: K,
): () => Observable<TuiLanguage[K]> {
    return () => inject(TUI_LANGUAGE).pipe(map(lang => lang[key]));
}
