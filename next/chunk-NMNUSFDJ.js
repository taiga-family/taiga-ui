import"./chunk-HU6DUUP4.js";var a=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCalendarRange, tuiCreateDefaultDayRangePeriods} from '@taiga-ui/kit';

@Component({
    imports: [TuiCalendarRange],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected items = tuiCreateDefaultDayRangePeriods();
}
`;export{a as default};
