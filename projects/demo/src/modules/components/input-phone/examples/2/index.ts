import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-input-phone-example-2',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputPhoneExample2 {
    protected readonly control = new FormControl('', Validators.minLength(12));
}
