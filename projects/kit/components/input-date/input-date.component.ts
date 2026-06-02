import {Directive, input} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {
    tuiAsTextfieldContent,
    TuiTextfieldContent,
    TuiWithNativePicker,
} from '@taiga-ui/core/components/textfield';

import {TuiInputDateContent} from './input-date-content.component';

@Directive({
    selector: 'input[tuiInputDate][type="date"]',
    providers: [tuiAsTextfieldContent(TuiInputDateContent)],
    hostDirectives: [TuiWithNativePicker, TuiTextfieldContent],
    host: {
        'data-tui-version': TUI_VERSION,
        '[attr.list]': 'null',
    },
})
export class TuiInputDateComponent {
    public readonly list = input<string>();
}
