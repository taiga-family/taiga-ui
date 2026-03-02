import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay, TuiTime} from '@taiga-ui/cdk';
import {TuiInputDateTime} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputDateTime],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = [new TuiDay(2020, 8, 20), new TuiTime(19, 19)];
}
`;export{o as default};
