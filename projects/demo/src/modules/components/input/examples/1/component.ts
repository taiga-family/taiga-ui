import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-input-example-1',
    templateUrl: './template.html',
    styleUrls: ['./style.less'],
    changeDetection,
    encapsulation,
})
export class TuiInputExample1 {
    testForm = new FormGroup({
        testValue: new FormControl('mail@mail.ru'),
    });
}
