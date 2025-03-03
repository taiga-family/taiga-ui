import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHint, TuiLink} from '@taiga-ui/core';
import {TuiFilterByInputPipe, TuiStringifyContentPipe} from '@taiga-ui/kit';
import {TuiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiFilterByInputPipe,
        TuiHint,
        TuiLink,
        TuiSelectModule,
        TuiStringifyContentPipe,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = [
        {name: 'John', surname: 'Cleese'},
        {name: 'Eric', surname: 'Idle'},
        {name: 'Graham', surname: 'Chapman'},
        {name: 'Michael', surname: 'Palin'},
        {name: 'Terry', surname: 'Gilliam'},
        {name: 'Terry', surname: 'Jones'},
    ];

    protected readonly form = new FormGroup({
        period: new FormControl(),
    });

    protected readonly stringify = (item: {name: string; surname: string}): string =>
        `${item.name} ${item.surname}`;
}
