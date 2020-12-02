import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-text-area-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiTextAreaExample1 {
    testForm = new FormGroup({
        testValue1: new FormControl('Просто поле', Validators.required),
        testValue2: new FormControl('А здесь может увеличиться', Validators.required),
    });
}
