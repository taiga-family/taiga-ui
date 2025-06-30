import {InjectionToken} from '@angular/core';
import {tuiExtractI18n} from '@taiga-ui/i18n/utils';

export const TUI_INPUT_SEARCH = new InjectionToken('TUI_INPUT_SEARCH', {
    factory: tuiExtractI18n('inputSearch'),
});
