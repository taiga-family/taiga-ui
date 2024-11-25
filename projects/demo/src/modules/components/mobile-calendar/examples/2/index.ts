import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiMobileCalendar} from '@taiga-ui/addon-mobile';
import {TuiDay} from '@taiga-ui/cdk';
import {tuiCalendarSheetOptionsProvider} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiMobileCalendar],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [tuiCalendarSheetOptionsProvider({rangeMode: true})],
})
export default class Example {
    protected min = new TuiDay(new Date().getFullYear(), new Date().getMonth(), 1);
    protected max = new TuiDay(new Date().getFullYear(), new Date().getMonth(), 10);
}
