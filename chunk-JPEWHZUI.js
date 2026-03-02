import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiMonth, TuiMonthRange} from '@taiga-ui/cdk';
import {TuiCalendarMonth, tuiCalendarMonthOptionsProvider} from '@taiga-ui/kit';

@Component({
    imports: [TuiCalendarMonth],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiCalendarMonthOptionsProvider({rangeMode: true})],
})
export default class Example {
    protected value: TuiMonth | TuiMonthRange | null = null;

    protected max = TuiMonth.currentLocal().append({year: 1});
    protected min = new TuiMonth(2019, 7);

    protected onMonthClick(month: TuiMonth): void {
        this.value =
            this.value instanceof TuiMonth
                ? TuiMonthRange.sort(this.value, month)
                : month;
    }
}
`;export{o as default};
