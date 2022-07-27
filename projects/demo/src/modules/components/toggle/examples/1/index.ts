import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-toggle-example-1`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiToggleExample1 {
    testForm = new FormGroup({
        testValue1: new FormControl(true),
        testValue2: new FormControl(false),
        testValue3: new FormControl(true),
        testValue4: new FormControl(false),
        testValue5: new FormControl(true),
        testValue6: new FormControl(false),
        testValue7: new FormControl(true),
        testValue8: new FormControl(false),
    });
}
