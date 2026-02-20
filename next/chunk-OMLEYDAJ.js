import"./chunk-HU6DUUP4.js";var e=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiMonth} from '@taiga-ui/cdk';
import {TuiCalendarMonth} from '@taiga-ui/kit';

@Component({
    imports: [TuiCalendarMonth],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: TuiMonth | null = null;
    protected hoveredMonth: TuiMonth | null = null;

    protected onMonthClick(month: TuiMonth): void {
        this.value = month;
    }

    protected onMonthHovered(month: TuiMonth | null): void {
        this.hoveredMonth = month;
    }
}
`;export{e as default};
