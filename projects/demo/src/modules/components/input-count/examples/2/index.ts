import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-input-count-example-2`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiInputCountExample2 {
    testForm = new FormGroup({
        testValue1: new FormControl(10, Validators.required),
        testValue2: new FormControl(10, Validators.required),
    });
}
