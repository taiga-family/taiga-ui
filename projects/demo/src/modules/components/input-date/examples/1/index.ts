import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TuiDay} from '@taiga-ui/cdk';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-input-date-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiInputDateExample1 {
    readonly testForm = new FormGroup({
        testValue: new FormControl(new TuiDay(2017, 0, 15)),
    });
}
