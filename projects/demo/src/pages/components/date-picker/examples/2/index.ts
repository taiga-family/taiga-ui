import {DatePipe} from '@angular/common';
import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiTitle} from '@taiga-ui/core';
import {tuiCalendarOptionsProvider, TuiDatePicker} from '@taiga-ui/experimental';
import {TuiInputDate} from '@taiga-ui/kit';

@Component({
    imports: [DatePipe, FormsModule, TuiDatePicker, TuiInputDate, TuiTitle],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiCalendarOptionsProvider({showWeek: false})],
})
export default class Example {
    protected readonly value = signal<TuiDay | null>(new TuiDay(2026, 5, 25));

    protected getLabel({day}: TuiDay): string {
        switch (day) {
            case 17:
            case 18:
            case 19:
                return 'Sick';
            case 20:
                return '••';
            case 25:
                return '•••';
            case 3:
                return '••';
            case 30:
                return 'Q2';
            case 4:
            case 5:
                return '•';
            default:
                return '';
        }
    }
}
