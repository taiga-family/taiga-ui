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
    protected value: readonly TuiDay[] = [];

    protected onDayClick(day: TuiDay): void {
        this.value = this.value.find((item) => item.daySame(day))
            ? this.value.filter((item) => !item.daySame(day))
            : this.value.concat(day);
    }
}
`;export{t as default};
