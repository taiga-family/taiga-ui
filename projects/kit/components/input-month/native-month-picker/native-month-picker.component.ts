import {NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    forwardRef,
    inject,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_IS_MOBILE, TuiControl, TuiMonth} from '@taiga-ui/cdk';
import {TuiTextfieldContent} from '@taiga-ui/core';

import {TuiInputMonthDirective} from '../input-month.directive';

@Component({
    standalone: true,
    selector: 'input[tuiInputMonth][type="month"]',
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

    @ViewChild('input', {read: ElementRef})
    protected input?: ElementRef<HTMLInputElement>;

    protected readonly host = inject<TuiInputMonthDirective>(
        forwardRef(() => TuiInputMonthDirective),
    );

    public enabled = inject(TUI_IS_MOBILE);

    public showPicker(): void {
        // TODO: remove the last optional chaining after Safari 16+ & Chrome 101+
        this.input?.nativeElement.showPicker?.();
    }

    protected onInput(value: string): void {
        if (!value) {
            return this.control.onChange(null);
        }

        const [year = 0, month = 0] = value.split('-').map(Number);

        this.control.onChange(new TuiMonth(year, month - 1));
    }
}
