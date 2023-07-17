import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {MaskitoOptions} from '@maskito/core';

@Component({
    selector: 'tui-input-example-3',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiInputExample3 {
    readonly testForm = new FormGroup({
        testValue1: new FormControl(''),
        testValue2: new FormControl(''),
    });

    readonly textMaskOptions1: MaskitoOptions = {
        mask: [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
    };

    readonly textMaskOptions2: MaskitoOptions = {
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
