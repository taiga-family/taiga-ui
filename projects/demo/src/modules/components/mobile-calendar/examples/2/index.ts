import {Component} from '@angular/core';
import {TuiDay} from '@taiga-ui/cdk';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-mobile-calendar-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiMobileCalendarExample2 {
    protected min = new TuiDay(new Date().getFullYear(), new Date().getMonth(), 1);
    protected max = new TuiDay(new Date().getFullYear(), new Date().getMonth(), 10);
}
