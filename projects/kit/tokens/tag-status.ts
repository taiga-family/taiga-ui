import {InjectionToken} from '@angular/core';
import {TuiStatus} from '@taiga-ui/kit/enums';

// TODO use TUI_TAG_OPTIONS instead of it in v3.0
export const TUI_TAG_STATUS = new InjectionToken<TuiStatus>(
    'Status for tags inside InputTag component',
    {
        factory: () => TuiStatus.Primary,
    },
);
