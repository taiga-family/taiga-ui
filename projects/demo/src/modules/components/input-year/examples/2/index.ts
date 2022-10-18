import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `input-year-example-2`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class InputYearExample2 {
    readonly testForm = new FormGroup({
        testValue: new FormControl(null),
    });
}
