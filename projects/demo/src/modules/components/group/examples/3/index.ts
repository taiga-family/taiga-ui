import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-group-example-3',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiGroupExample3 {
    testForm = new FormGroup({
        testValue: new FormControl('orange'),
    });
}
