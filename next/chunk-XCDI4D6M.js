import"./chunk-42JZD6NG.js";var o=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTime} from '@taiga-ui/cdk';
import {TuiIcon, TuiTextfield} from '@taiga-ui/core';
import {tuiCreateTimePeriods, TuiInputTime, TuiTooltip} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiIcon, TuiInputTime, TuiTextfield, TuiTooltip],
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
`;export{o as default};
