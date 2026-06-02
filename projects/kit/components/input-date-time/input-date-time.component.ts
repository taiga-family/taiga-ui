import {Directive} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {
    tuiAsTextfieldContent,
    TuiTextfieldContent,
    TuiWithNativePicker,
} from '@taiga-ui/core/components/textfield';
import {TuiNativeTimePicker} from '@taiga-ui/kit/components/input-time';

import {TuiInputDateTimeContent} from './input-date-time-content.component';

@Directive({
    selector: 'input[tuiInputDateTime][type="datetime-local"]',
    providers: [tuiAsTextfieldContent(TuiInputDateTimeContent)],
    hostDirectives: [TuiWithNativePicker, TuiTextfieldContent],
    host: {'data-tui-version': TUI_VERSION},
})
export class TuiInputDateTimeComponent extends TuiNativeTimePicker {}
