import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDocControl} from '@demo/components/control';
import {TuiDocDropdown} from '@demo/components/dropdown';
import {TuiDocIcons} from '@demo/components/icons';
import {TuiDocItemsHandlers} from '@demo/components/items-handlers';
import {TuiDocTextfield} from '@demo/components/textfield';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import type {TuiDayLike} from '@taiga-ui/cdk';
import {TUI_FIRST_DAY, TUI_LAST_DAY, TuiDay} from '@taiga-ui/cdk';
import {TuiDropdown, TuiTextfield} from '@taiga-ui/core';
import {TuiInputDateRange} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiDemo,
        TuiDocControl,
        TuiDocDropdown,
        TuiDocIcons,
        TuiDocItemsHandlers,
        TuiDocTextfield,
        TuiDropdown,
        TuiInputDateRange,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl();

    protected readonly dates = [
        TUI_FIRST_DAY,
        TuiDay.currentLocal(),
        TuiDay.currentLocal().append({year: 1, month: 1}),
        TuiDay.currentLocal().append({year: -1, month: -1}),
        TUI_LAST_DAY,
    ] as const;

    protected min = this.dates[0];
    protected max = this.dates[4];

    protected readonly limits = [{day: 3}, {day: 5}] as const;

    protected minLength: TuiDayLike | null = null;
    protected maxLength: TuiDayLike | null = null;

    protected readonly handler = (item: TuiDay): boolean => item.dayOfWeek() > 4;
}
