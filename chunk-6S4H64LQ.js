import"./chunk-HU6DUUP4.js";var t=`import {DatePipe} from '@angular/common';
import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiTitle} from '@taiga-ui/core';
import {TuiCalendar} from '@taiga-ui/experimental';
import {TuiInputDate} from '@taiga-ui/kit';

@Component({
    imports: [DatePipe, FormsModule, TuiCalendar, TuiInputDate, TuiTitle],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
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
                return '\u2022\u2022';
            case 25:
                return '\u2022\u2022\u2022';
            case 3:
                return '\u2022\u2022';
            case 30:
                return 'Q2';
            case 4:
            case 5:
                return '\u2022';
            default:
                return '';
        }
    }
}
`;export{t as default};
