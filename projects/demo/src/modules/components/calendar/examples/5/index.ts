import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {type TuiDay, type TuiHandler} from '@taiga-ui/cdk';
import {TUI_DAY_TYPE_HANDLER, TuiCalendar} from '@taiga-ui/core';

const useValue: TuiHandler<TuiDay, string> = (day) => {
    if (day.day === 10) {
        return 'holiday';
    }

    return day.isWeekend ? 'weekend' : 'weekday';
};

@Component({
    imports: [TuiCalendar],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection,
    providers: [{provide: TUI_DAY_TYPE_HANDLER, useValue}],
})
export default class Example {}
