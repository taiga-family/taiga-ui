import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiDataListWrapper,
    TuiFilterByInputPipe,
    TuiStringifyContentPipe,
} from '@taiga-ui/kit';
import {TuiComboBoxModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiComboBoxModule,
        ReactiveFormsModule,
        TuiTextfieldControllerModule,
        TuiDataListWrapper,
        TuiStringifyContentPipe,
        TuiFilterByInputPipe,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl<{name: string; surname: string} | null>(
        null,
    );

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
