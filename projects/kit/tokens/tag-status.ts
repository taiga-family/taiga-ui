import {InjectionToken} from '@angular/core';
import {TuiStatus} from '@taiga-ui/kit/types';

// TODO: 3.0 use TUI_TAG_OPTIONS instead of it
export const TUI_TAG_STATUS = new InjectionToken<TuiStatus>(
    `Status for tags inside InputTag component`,
    {
        factory: () => 'primary',
    },
);
