import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-input-number-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiInputNumberExample1 {
    readonly testForm = new FormGroup({
        testValue: new FormControl(),
    });
}
