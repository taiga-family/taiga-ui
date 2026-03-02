import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDay} from '@taiga-ui/cdk';
import {tuiDateFormatProvider} from '@taiga-ui/core';
import {TuiInputDateTime} from '@taiga-ui/kit';

@Component({
    selector: 'example-6',
    imports: [FormsModule, ReactiveFormsModule, TuiInputDateTime],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiDateFormatProvider({mode: 'yyyy/mm/dd', separator: '-'})],
})
export default class Example {
    protected value = [new TuiDay(2017, 0, 15)];
}
`;export{t as default};
