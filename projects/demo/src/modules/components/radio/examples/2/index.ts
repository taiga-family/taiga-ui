import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-radio-example-2',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiRadioExample2 {
    protected testForm = new FormGroup({
        testValue1: new FormControl('One'),
        testValue2: new FormControl({value: 'One', disabled: true}),
    });
}
