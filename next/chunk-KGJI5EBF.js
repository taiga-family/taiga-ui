import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiDay} from '@taiga-ui/cdk';
import {TuiCalendar} from '@taiga-ui/core';

@Component({
    imports: [TuiCalendar],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: TuiDay | null = null;

    protected onDayClick(day: TuiDay): void {
        this.value = day;
    }
}
`;export{t as default};
