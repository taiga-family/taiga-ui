import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-input-password-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputPasswordExample1 {
    protected testForm = new FormGroup({
        testValue: new FormControl('password', Validators.required),
    });
}
