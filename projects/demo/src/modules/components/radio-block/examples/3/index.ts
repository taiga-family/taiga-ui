import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-radio-block-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiRadioBlockExample3 {
    readonly testForm = new FormGroup({
        testValue: new FormControl('example1'),
    });
}
