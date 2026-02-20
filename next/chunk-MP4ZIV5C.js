import"./chunk-HU6DUUP4.js";var t=`import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDayOfWeek} from '@taiga-ui/cdk';
import {tuiCalendarOptionsProvider} from '@taiga-ui/core';
import {TuiCalendarRange} from '@taiga-ui/kit';

@Component({
    selector: 'example-4',
    imports: [TuiCalendarRange],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiCalendarOptionsProvider({weekStart: signal(TuiDayOfWeek.Sunday)})],
})
export default class Example {}
`;export{t as default};
