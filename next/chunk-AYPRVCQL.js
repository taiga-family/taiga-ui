import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCurrencyPipe} from '@taiga-ui/addon-commerce';
import {TuiInputRange} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiCurrencyPipe, TuiInputRange],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = [42, 777];
}
`;export{t as default};
