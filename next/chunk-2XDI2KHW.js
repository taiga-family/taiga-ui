import"./chunk-42JZD6NG.js";var o=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {tuiDateFormatProvider, TuiTextfield} from '@taiga-ui/core';
import {TuiInputDateMulti} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputDateMulti, TuiTextfield],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [tuiDateFormatProvider({mode: 'MDY', separator: '/'})],
})
export default class Example {
    protected value = [new TuiDay(2025, 6, 6)];
}
`;export{o as default};
