import {forwardRef} from '@angular/core';
import {
    INTERSECTION_ROOT_MARGIN,
    INTERSECTION_THRESHOLD,
    IntersectionObserverService,
} from '@ng-web-apis/intersection-observer';
import {tuiProvide} from '@taiga-ui/cdk';
import {TUI_TEXTFIELD_OPTIONS} from '@taiga-ui/core';

import {TuiTableDirective} from '../directives/table.directive';
import {TUI_STUCK_PROVIDER} from './stuck.provider';

export const TUI_TABLE_PROVIDERS = [
    {
        provide: INTERSECTION_ROOT_MARGIN,
        useValue: '10000px 10000px 10000px 0px',
    },
    {
        provide: INTERSECTION_THRESHOLD,
        useValue: [0, 1],
    },
    tuiProvide(
        TUI_TEXTFIELD_OPTIONS,
        forwardRef(() => TuiTableDirective),
    ),
    IntersectionObserverService,
    TUI_STUCK_PROVIDER,
];
