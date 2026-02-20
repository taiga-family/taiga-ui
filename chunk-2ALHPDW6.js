import"./chunk-HU6DUUP4.js";var i=`import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {type TuiDay, type TuiHandler} from '@taiga-ui/cdk';
import {TuiCalendar, tuiCalendarOptionsProvider} from '@taiga-ui/core';

const dayType: TuiHandler<TuiDay, string> = (day) => {
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
    providers: [tuiCalendarOptionsProvider({dayType})],
})
export default class Example {}
`;export{i as default};
