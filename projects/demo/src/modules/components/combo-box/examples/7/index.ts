import {JsonPipe, NgFor} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataList} from '@taiga-ui/core';
import {TuiFilterByInputPipeModule} from '@taiga-ui/kit';
import {TuiComboBoxModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        NgFor,
        JsonPipe,
        FormsModule,
        TuiComboBoxModule,
        TuiDataList,
        TuiFilterByInputPipeModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
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
