import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-radio-list-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiRadioListExample1 {
    protected readonly items = [
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

    protected readonly testForm = new FormGroup({
        tariff: new FormControl(this.items[0]),
    });
}
