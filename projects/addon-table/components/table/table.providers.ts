import {
    INTERSECTION_ROOT_MARGIN,
    INTERSECTION_THRESHOLD,
    IntersectionObserverService,
} from '@ng-web-apis/intersection-observer';
import {
    TUI_TEXTFIELD_APPEARANCE,
    TUI_TEXTFIELD_LABEL_OUTSIDE,
    TuiAppearance,
} from '@taiga-ui/core';

export const TUI_TABLE_PROVIDERS = [
    {
        provide: INTERSECTION_ROOT_MARGIN,
        useValue: '10000px 10000px 10000px 0px',
    },
    {
        provide: INTERSECTION_THRESHOLD,
        useValue: [0, 1],
    },
    {
        provide: TUI_TEXTFIELD_APPEARANCE,
        useValue: TuiAppearance.Table,
    },
    {
        provide: TUI_TEXTFIELD_LABEL_OUTSIDE,
        useValue: {
            labelOutside: true,
        },
    },
    IntersectionObserverService,
];
