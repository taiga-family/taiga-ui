import"./chunk-HU6DUUP4.js";var a=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiMobileCalendar} from '@taiga-ui/addon-mobile';
import {TuiDay} from '@taiga-ui/cdk';
import {TUI_CHOOSE_DAY_OR_RANGE_TEXTS} from '@taiga-ui/kit';

@Component({
    imports: [TuiMobileCalendar],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_CHOOSE_DAY_OR_RANGE_TEXTS,
            useValue: null,
        },
    ],
})
export default class Example {
    protected min = new TuiDay(new Date().getFullYear(), new Date().getMonth(), 1);
    protected max = new TuiDay(new Date().getFullYear(), new Date().getMonth(), 10);
}
`;export{a as default};
