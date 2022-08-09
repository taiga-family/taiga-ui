import {InjectionToken} from '@angular/core';
import {TUI_DEFAULT_NUMBER_FORMAT} from '@taiga-ui/core/constants';
import {TuiNumberFormatSettings} from '@taiga-ui/core/interfaces';

export const TUI_NUMBER_FORMAT = new InjectionToken<TuiNumberFormatSettings>(
    `Formatting configuration for displayed numbers`,
    {
        factory: () => TUI_DEFAULT_NUMBER_FORMAT,
    },
);
