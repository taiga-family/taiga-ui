import {NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_IS_MOBILE, TuiControl, TuiMonth} from '@taiga-ui/cdk';
import {TuiTextfieldContent} from '@taiga-ui/core';

import {TuiInputMonthDirective} from '../input-month.directive';

@Component({
    standalone: true,
    selector: 'input[tuiTextfield][type="month"]',
    templateUrl: './native-month-picker.template.html',
    styleUrls: ['./native-month-picker.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        '[type]': '"text"',
    },
    imports: [TuiTextfieldContent, NgIf],
})
export class TuiNativeMonthPicker {
    private readonly control = inject(TuiControl);
    protected readonly host = inject(TuiInputMonthDirective);

    public enabled = inject(TUI_IS_MOBILE);

    protected onInput(value: string): void {
        if (!value) {
            return this.control.onChange(null);
        }

        const [year = 0, month = 0] = value.split('-').map(Number);

        this.control.onChange(new TuiMonth(year, month - 1));
    }
}
