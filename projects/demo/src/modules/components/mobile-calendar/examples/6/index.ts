import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {TUI_CHOOSE_DAY_OR_RANGE_TEXTS} from '@taiga-ui/kit';

@Component({
    selector: 'tui-mobile-calendar-example-6',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_CHOOSE_DAY_OR_RANGE_TEXTS,
            useValue: null,
        },
    ],
})
export class TuiMobileCalendarExample6 {
    min = new TuiDay(new Date().getFullYear(), new Date().getMonth(), 1);
    max = new TuiDay(new Date().getFullYear(), new Date().getMonth(), 10);
}
