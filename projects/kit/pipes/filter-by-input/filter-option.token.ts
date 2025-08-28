import {InjectionToken} from '@angular/core';
import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk';

export const TUI_ONLY_MATCHING_ITEMS = new InjectionToken<boolean>(
    ngDevMode ? 'TUI_ONLY_MATCHING_ITEMS' : '',
    {
        factory: TUI_FALSE_HANDLER,
    },
);
