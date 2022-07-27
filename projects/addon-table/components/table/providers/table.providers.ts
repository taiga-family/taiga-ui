import {forwardRef, SkipSelf} from '@angular/core';
import {
    INTERSECTION_ROOT_MARGIN,
    INTERSECTION_THRESHOLD,
    IntersectionObserverService,
} from '@ng-web-apis/intersection-observer';
import {
    MODE_PROVIDER,
    TUI_TEXTFIELD_APPEARANCE,
    TUI_TEXTFIELD_LABEL_OUTSIDE,
    TUI_TEXTFIELD_SIZE,
} from '@taiga-ui/core';
import {TUI_INPUT_COUNT_OPTIONS, TuiInputCountOptions} from '@taiga-ui/kit';

import {TuiTableDirective} from '../directives/table.directive';
import {TUI_STUCK_PROVIDER} from './stuck.provider';

// TODO: 3.0 remove in ivy compilation
export const TABLE_THRESHOLD = [0, 1];
export const TABLE_LABEL = {
    labelOutside: true,
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export function inputCountOptionsFactory(
    options: TuiInputCountOptions,
): TuiInputCountOptions {
    return {...options, hideButtons: true};
}

export const TUI_TABLE_PROVIDERS = [
    {
        provide: INTERSECTION_ROOT_MARGIN,
        useValue: `10000px 10000px 10000px 0px`,
    },
    {
        provide: INTERSECTION_THRESHOLD,
        useValue: TABLE_THRESHOLD,
    },
    {
        provide: TUI_TEXTFIELD_APPEARANCE,
        // TODO: 3.0 remove in ivy compilation
        useValue: `table`, // TuiAppearance.Table
    },
    {
        provide: TUI_TEXTFIELD_LABEL_OUTSIDE,
        useValue: TABLE_LABEL,
    },
    {
        provide: TUI_INPUT_COUNT_OPTIONS,
        deps: [[new SkipSelf(), TUI_INPUT_COUNT_OPTIONS]],
        useFactory: inputCountOptionsFactory,
    },
    {
        provide: TUI_TEXTFIELD_SIZE,
        useExisting: forwardRef(() => TuiTableDirective),
    },
    IntersectionObserverService,
    MODE_PROVIDER,
    TUI_STUCK_PROVIDER,
];
