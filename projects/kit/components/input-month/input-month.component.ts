import {Directive, input} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {type TuiMonth} from '@taiga-ui/cdk/date-time';
import {
    tuiAsTextfieldContent,
    TuiTextfieldContent,
    TuiWithNativePicker,
} from '@taiga-ui/core/components/textfield';

import {TuiInputMonthContent} from './input-month-content.component';

@Directive({
    selector: 'input[tuiInputMonth][type="month"]',
    providers: [tuiAsTextfieldContent(() => TuiInputMonthContent)],
    hostDirectives: [TuiWithNativePicker, TuiTextfieldContent],
    host: {'data-tui-version': TUI_VERSION},
})
// TODO(v6): rename to TuiInputMonthNative
export class TuiInputMonthComponent {
    public readonly min = input<TuiMonth | null>(null);
    public readonly max = input<TuiMonth | null>(null);
}
