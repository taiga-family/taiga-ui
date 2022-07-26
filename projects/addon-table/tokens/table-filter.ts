import {InjectionToken} from '@angular/core';
import {TuiCheck} from '@taiga-ui/addon-table/interfaces';
import {ALWAYS_TRUE_HANDLER} from '@taiga-ui/cdk';

export const TUI_TABLE_FILTER = new InjectionToken<TuiCheck>(
    '[TUI_TABLE_FILTER] A method to filter table items',
    {
        factory: () => ({
            check: ALWAYS_TRUE_HANDLER,
        }),
    },
);
