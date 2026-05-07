import {JsonPipe} from '@angular/common';
import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {TuiButton, TuiGroup} from '@taiga-ui/core';
import {TuiDatePicker} from '@taiga-ui/experimental';
import {TuiChevron, TuiDataListWrapper, TuiSelect} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        JsonPipe,
        TuiButton,
        TuiChevron,
        TuiDataListWrapper,
        TuiDatePicker,
        TuiSelect,
        TuiGroup,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly modes = ['single', 'multi', 'range'] as const;
    protected readonly mode = signal(this.modes[2]);
    protected readonly min = TuiDay.currentLocal().append({month: -2, year: -10});
    protected readonly max = TuiDay.currentLocal().append({month: 2, year: 10});
    protected readonly value = signal<any>(
        new TuiDayRange(TuiDay.currentLocal(), TuiDay.currentLocal().append({day: 7})),
    );

    protected readonly disabledItemHandler = (item: TuiDay): boolean => item.day === 13;
}
