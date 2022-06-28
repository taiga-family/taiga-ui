import {inject} from '@angular/core';
import {Language} from '@taiga-ui/i18n/interfaces';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {TUI_LANGUAGE} from './language';

/**
 * @deprecated: use {@link tuiExtractI18n} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function extractI18n<K extends keyof Language>(
    key: K,
): () => Observable<Language[K]> {
    return () => inject(TUI_LANGUAGE).pipe(map(lang => lang[key]));
}

export const tuiExtractI18n = extractI18n;
