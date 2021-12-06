import {Component} from '@angular/core';

import {changeDetection} from '../../../../../change-detection-strategy';

@Component({
    selector: 'tui-combo-box-example-4',
    templateUrl: './index.html',
    changeDetection,
})
export class TuiComboBoxExample4 {
    readonly items = [
        {name: 'John', surname: 'Cleese'},
        {name: 'Eric', surname: 'Idle'},
        {name: 'Graham', surname: 'Chapman'},
        {name: 'Michael', surname: 'Palin'},
        {name: 'Terry', surname: 'Gilliam'},
        {name: 'Terry', surname: 'Jones'},
    ];

    readonly stringify = (item: {name: string; surname: string}) =>
        `${item.name} ${item.surname}`;

    value = null;
}
