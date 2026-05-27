import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPincode} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiPincode],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = '';
}
