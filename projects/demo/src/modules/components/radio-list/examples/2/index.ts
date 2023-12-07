import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-radio-list-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiRadioListExample2 {
    readonly items = [
        {
            name: 'Simple',
            description: 'Something usual',
        },
        {
            name: 'Advanced',
            description: 'Something better',
        },
        {
            name: 'PRO',
            description: 'Something cool',
        },
    ];

    readonly testForm = new UntypedFormGroup({
        tariff: new UntypedFormControl(this.items[0]),
    });
}
