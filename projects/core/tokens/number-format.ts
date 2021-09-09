import {InjectionToken} from '@angular/core';
import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk';
import {NumberFormatSettings} from '@taiga-ui/core/interfaces';

export const TUI_NUMBER_FORMAT = new InjectionToken<NumberFormatSettings>(
    'Formatting configuration for displayed numbers',
    {
        factory: () => ({
            decimalSeparator: ',',
            thousandSeparator: CHAR_NO_BREAK_SPACE,
        }),
    },
);
