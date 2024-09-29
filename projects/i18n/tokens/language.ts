import {inject} from '@angular/core';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_ENGLISH_LANGUAGE} from '@taiga-ui/i18n/languages/english';
import type {TuiLanguage} from '@taiga-ui/i18n/types';
import type {Observable} from 'rxjs';
import {of} from 'rxjs';

/**
 * Default Language for Taiga UI libraries i18n
 */
export const TUI_DEFAULT_LANGUAGE = tuiCreateTokenFromFactory<TuiLanguage>(
    () => TUI_ENGLISH_LANGUAGE,
);

/**
 * Language for Taiga UI libraries i18n
 */
export const TUI_LANGUAGE = tuiCreateTokenFromFactory<Observable<TuiLanguage>>(() =>
    of(inject(TUI_DEFAULT_LANGUAGE)),
);
