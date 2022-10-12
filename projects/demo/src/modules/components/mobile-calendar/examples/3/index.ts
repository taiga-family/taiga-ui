import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay, TuiDayOfWeek} from '@taiga-ui/cdk';
import {TUI_FIRST_DAY_OF_WEEK} from '@taiga-ui/core';

@Component({
    selector: `tui-mobile-calendar-example-3`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    providers: [
        {
            provide: TUI_FIRST_DAY_OF_WEEK,
            useValue: TuiDayOfWeek.Sunday,
        },
    ],
    changeDetection,
    encapsulation,
})
export class TuiMobileCalendarExample3 {
    min = TuiDay.currentLocal();
}
