import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-input-copy-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiInputCopyExample1 {
    readonly testForm = new FormGroup({
        testValue: new FormControl('', Validators.required),
    });
}
