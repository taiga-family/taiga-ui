import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-input-example-3`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiInputExample3 {
    readonly testForm = new FormGroup({
        testValue1: new FormControl(``),
        testValue2: new FormControl(``),
    });

    readonly textMaskOptions1 = {
        guide: false,
        mask: [/\d/, /\d/, /\d/, /\d/, ` `, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
    };

    readonly textMaskOptions2 = {
        guide: false,
        mask: [
            /\d/,
            /\d/,
            /\d/,
            `-`,
            /\d/,
            /\d/,
            /\d/,
            `-`,
            /\d/,
            /\d/,
            /\d/,
            `-`,
            /\d/,
            /\d/,
        ],
    };
}
