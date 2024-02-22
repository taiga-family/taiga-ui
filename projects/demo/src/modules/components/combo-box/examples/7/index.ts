import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-combo-box-example-7',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiComboBoxExample7 {
    protected value = null;

    protected readonly items = [
        {name: 'John', surname: 'Cleese', disabled: false},
        {name: 'Eric', surname: 'Idle', disabled: false},
        {name: 'Graham', surname: 'Chapman', disabled: true},
        {name: 'Michael', surname: 'Palin', disabled: true},
        {name: 'Terry', surname: 'Gilliam', disabled: false},
        {name: 'Terry', surname: 'Jones', disabled: false},
    ];

    protected readonly stringify = (item: {name: string; surname: string}): string =>
        `${item.name} ${item.surname}`;
}
