import {NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {TuiDay} from '@taiga-ui/cdk/date-time';
import {TuiTextfieldContent} from '@taiga-ui/core/components/textfield';

import {TuiInputDateDirective} from './input-date.directive';

@Component({
    standalone: true,
    selector: 'input[tuiInputDate][type="date"]',
    imports: [NgIf, TuiTextfieldContent],
    templateUrl: './input-date.template.html',
    styleUrls: ['./input-date.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        ngSkipHydration: 'true',
        '[type]': '"text"',
        '[attr.list]': 'null',
    },
})
export class TuiInputDateComponent {
    protected readonly host = inject(TuiInputDateDirective);

    @Input()
    public list: string | null = null;

    protected onInput(value: string): void {
        if (!value) {
            return this.host.onChange(null);
        }

        const [year = 0, month = 0, day = 0] = value.split('-').map(Number);

        this.host.onChange(new TuiDay(year, month - 1, day));
    }
}
