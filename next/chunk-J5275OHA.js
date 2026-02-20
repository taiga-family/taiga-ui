import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputChip, TuiInputNumber} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        TuiInputChip,
        TuiInputNumber,
        TuiTable,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly data = [
        {
            name: 'Alex Inkin',
            balance: 1323525,
            items: ['Wallet', 'Phone'],
        },
        {
            name: 'Roman Sedov',
            balance: '',
            items: ['Wallet'],
        },
    ];
}
`;export{o as default};
