import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-input-example-10',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiInputExample10 {
    readonly testForm = new FormGroup({
        testValue: new FormControl(''),
    });
}
