import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {GROUP_CLASS_NAMES} from '@taiga-ui/kit';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-group-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.style.less'],
    changeDetection,
    encapsulation,
})
export class TuiGroupExample1 {
    testForm = new FormGroup({
        testValue: new FormControl('', Validators.required),
        testValue2: new FormControl('', Validators.required),
        testValue3: new FormControl('', Validators.required),
        combo: new FormControl(null, Validators.required),
        money: new FormControl(null, Validators.required),
        select: new FormControl(null, Validators.required),
    });

    items = [1, 2, 3, 4, 5, 6];

    classNames = GROUP_CLASS_NAMES;
}
