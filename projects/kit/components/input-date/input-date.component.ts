import {
    ChangeDetectionStrategy,
    Component,
    inject,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {TuiDay} from '@taiga-ui/cdk/date-time';
import {
    TuiTextfieldContent,
    TuiWithNativePicker,
} from '@taiga-ui/core/components/textfield';

import {TuiInputDateDirective} from './input-date.directive';

@Component({
    selector: 'input[tuiInputDate][type="date"]',
    imports: [TuiTextfieldContent],
    templateUrl: './input-date.template.html',
    styleUrl: './input-date.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiWithNativePicker],
    host: {
        ngSkipHydration: 'true',
        '[attr.list]': 'null',
    },
})
export class TuiInputDateComponent {
    protected readonly host = inject(TuiInputDateDirective);

    public readonly list = input<string>();

    protected onInput(value: string): void {
        if (!value) {
            return this.host.onChange(null);
        }

        const [year = 0, month = 0, day = 0] = value.split('-').map(Number);

        this.host.onChange(new TuiDay(year, month - 1, day));
    }
}
