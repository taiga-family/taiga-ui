import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-label-example-3',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiLabelExample3 {
    readonly testForm = new FormGroup({
        testValue: new FormControl(),
    });
}
