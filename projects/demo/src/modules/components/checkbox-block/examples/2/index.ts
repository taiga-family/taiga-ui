import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-checkbox-block-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiCheckboxBlockExample2 {
    protected testForm = new FormGroup({
        testValue1: new FormControl(false),
        testValue2: new FormControl(false),
        testValue3: new FormControl(false),
    });
}
