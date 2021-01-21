import {InjectionToken} from '@angular/core';
import {TuiStatus} from '@taiga-ui/kit/enums';

export const TUI_TAG_STATUS = new InjectionToken<TuiStatus>(
    'Status for tags inside InputTag component',
    {
        factory: () => TuiStatus.Primary,
    },
);
