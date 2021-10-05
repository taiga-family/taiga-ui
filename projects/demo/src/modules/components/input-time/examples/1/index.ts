import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TuiTime} from '@taiga-ui/cdk';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-input-time-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiInputTimeExample1 {
    readonly testForm = new FormGroup({
        testValue: new FormControl(new TuiTime(12, 30)),
    });
}
