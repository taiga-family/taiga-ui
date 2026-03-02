import"./chunk-HU6DUUP4.js";var i=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTime} from '@taiga-ui/cdk';
import {TuiIcon} from '@taiga-ui/core';
import {tuiCreateTimePeriods, TuiInputTime, TuiTooltip} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiIcon, TuiInputTime, TuiTooltip],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: TuiTime | null = null;
    protected acceptableValues = [
        // Array of TuiTime from 10:00 to 18:00 every half of hour
        ...tuiCreateTimePeriods(10, 18, [0, 30]),
        new TuiTime(18, 0),
    ];
}
`;export{i as default};
