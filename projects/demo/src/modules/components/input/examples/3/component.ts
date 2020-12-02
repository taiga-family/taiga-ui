import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TuiTextMaskOptions} from '@taiga-ui/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-input-example-3',
    templateUrl: './template.html',
    styleUrls: ['./style.less'],
    changeDetection,
    encapsulation,
})
export class TuiInputExample3 {
    testForm = new FormGroup({
        testValue1: new FormControl(''),
        testValue2: new FormControl(''),
    });

    textMaskOptions1: TuiTextMaskOptions = {
        guide: false,
        mask: [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
    };

    textMaskOptions2: TuiTextMaskOptions = {
        guide: false,
        mask: [
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
            /\d/,
            '-',
            /\d/,
            /\d/,
        ],
    };
}
