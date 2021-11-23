import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {px} from '@taiga-ui/cdk';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-format-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiFormatExample1 {
    parametersForm = new FormGroup({
        value: new FormControl(11),
    });

    get px(): string {
        const {value} = this.parametersForm.value;

        return px(value);
    }
}
