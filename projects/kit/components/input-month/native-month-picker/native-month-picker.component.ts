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
import {TuiControl} from '@taiga-ui/cdk/classes';
import {TuiMonth} from '@taiga-ui/cdk/date-time';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {TuiTextfieldContent} from '@taiga-ui/core/components/textfield';

import {TuiInputMonthDirective} from '../input-month.directive';

@Component({
    standalone: true,
    selector: 'input[tuiInputMonth][type="month"]',
    imports: [NgIf, TuiTextfieldContent],
    templateUrl: './native-month-picker.template.html',
    styleUrls: ['./native-month-picker.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[type]': '"text"',
    },
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
