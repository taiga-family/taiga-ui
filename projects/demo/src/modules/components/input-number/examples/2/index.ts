import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-input-number-example-2',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiInputNumberExample2 {
    readonly testForm = new FormGroup({
        testValue: new FormControl(),
    });
}
