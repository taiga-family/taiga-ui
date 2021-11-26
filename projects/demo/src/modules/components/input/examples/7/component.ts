import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-input-example-7',
    templateUrl: './template.html',
    styleUrls: ['./style.less'],
    changeDetection,
    encapsulation,
})
export class TuiInputExample7 {
    readonly control = new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
    ]);
}
