import {inject} from '@angular/core';
import {TuiLanguage} from '@taiga-ui/i18n/interfaces';
import {isObservable, Observable, of} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

import {TUI_LANGUAGE} from './language';

/**
 * @deprecated: use {@link tuiExtractI18n} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function extractI18n<K extends keyof TuiLanguage>(
    key: K,
): () => Observable<TuiLanguage[K]> {
    return () =>
        inject(TUI_LANGUAGE).pipe(
            switchMap((streamOrValue: Observable<TuiLanguage> | TuiLanguage) =>
                isObservable(streamOrValue) ? streamOrValue : of(streamOrValue),
            ),
            map((lang: TuiLanguage) => lang[key]),
        );
}

export const tuiExtractI18n = extractI18n;
