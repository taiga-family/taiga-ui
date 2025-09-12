import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiNumberFormatProvider} from '@taiga-ui/core';
import {TuiInputNumberModule, tuiInputNumberOptionsProvider} from '@taiga-ui/legacy';

@Component({
    imports: [FormsModule, TuiInputNumberModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiNumberFormatProvider({
            precision: 0,
        }),
        tuiInputNumberOptionsProvider({
            step: 1,
        }),
    ],
})
export default class Example {
    protected value = 237;
}
