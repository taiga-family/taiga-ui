import {inject, Provider} from '@angular/core';
import {TUI_LANGUAGE} from '@taiga-ui/i18n/tools';

import {TuiLanguageSwitcher} from './language.switcher';

export const TUI_LANGUAGE_SWITCHER: Provider[] = [
    TuiLanguageSwitcher,
    {
        provide: TUI_LANGUAGE,
        useFactory: () => inject(TuiLanguageSwitcher).getValue(),
    },
];
