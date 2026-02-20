import"./chunk-HU6DUUP4.js";var i=`import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiMobileCalendar} from '@taiga-ui/addon-mobile';
import {TuiDay, TuiDayOfWeek} from '@taiga-ui/cdk';
import {tuiCalendarOptionsProvider} from '@taiga-ui/core';

@Component({
    imports: [TuiMobileCalendar],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [tuiCalendarOptionsProvider({weekStart: signal(TuiDayOfWeek.Sunday)})],
})
export default class Example {
    protected min = TuiDay.currentLocal();
}
`;export{i as default};
