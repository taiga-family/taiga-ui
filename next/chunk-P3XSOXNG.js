import"./chunk-LQ6M4NCU.js";var o=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay, TuiTime} from '@taiga-ui/cdk';
import {TuiInputDateTime, TuiTimeFormat} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputDateTime, TuiTimeFormat],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = [new TuiDay(2026, 8, 23), new TuiTime(18, 5)];
}
`;export{o as default};
