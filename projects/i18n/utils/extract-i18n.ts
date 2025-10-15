import {computed, inject, type Signal} from '@angular/core';
import {TUI_LANGUAGE} from '@taiga-ui/i18n/tokens';
import {type TuiLanguage} from '@taiga-ui/i18n/types';

export function tuiExtractI18n<K extends keyof TuiLanguage>(
    key: K,
): () => Signal<TuiLanguage[K]> {
    return (language = inject(TUI_LANGUAGE)) => computed(() => language()[key]);
}
