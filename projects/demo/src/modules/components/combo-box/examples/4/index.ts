import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    TuiDataListWrapper,
    TuiFilterByInputPipe,
    TuiStringifyContentPipe,
} from '@taiga-ui/kit';
import {TuiComboBoxModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiComboBoxModule,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
        TuiStringifyContentPipe,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class ExampleComponent {
    protected value = null;

    protected readonly items = [
        {name: 'John', surname: 'Cleese'},
        {name: 'Eric', surname: 'Idle'},
        {name: 'Graham', surname: 'Chapman'},
        {name: 'Michael', surname: 'Palin'},
        {name: 'Terry', surname: 'Gilliam'},
        {name: 'Terry', surname: 'Jones'},
    ];

    protected readonly stringify = (item: {name: string; surname: string}): string =>
        `${item.name} ${item.surname}`;
}
