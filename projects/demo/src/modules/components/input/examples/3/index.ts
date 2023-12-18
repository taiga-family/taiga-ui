import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {MaskitoOptions} from '@maskito/core';

@Component({
    selector: 'tui-input-example-3',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiInputExample3 {
    readonly testForm = new UntypedFormGroup({
        testValue1: new UntypedFormControl(''),
        testValue2: new UntypedFormControl(''),
    });

    readonly maskOptions1: MaskitoOptions = {
        mask: [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
    };

    readonly maskOptions2: MaskitoOptions = {
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

    readonly unmask = (value: string): string => value.replace(/-/g, '');
}
