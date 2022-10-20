import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDay, TuiHandler} from '@taiga-ui/cdk';
import {TUI_DAY_TYPE_HANDLER} from '@taiga-ui/core';

const handler: TuiHandler<TuiDay, string> = (day: TuiDay) => {
    if (day.day === 10) {
        return `holiday`;
    }

    return day.isWeekend ? `weekend` : `weekday`;
};

@Component({
    selector: `tui-calendar-example-5`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation: ViewEncapsulation.None,
    providers: [{provide: TUI_DAY_TYPE_HANDLER, useValue: handler}],
})
export class TuiCalendarExample5 {}
