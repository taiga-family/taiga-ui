import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiDataListWrapper,
    TuiFilterByInputPipe,
    TuiStringifyContentPipe,
} from '@taiga-ui/kit';
import {TuiComboBoxModule} from '@taiga-ui/legacy';

interface User {
    readonly id: number;
    readonly name: string;
}

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiComboBoxModule,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
        TuiStringifyContentPipe,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = [
        'John Cleese',
        'Eric Idle',
        'Graham Chapman',
        'Michael Palin',
        'Terry Gilliam',
        'Terry Jones',
    ];

    protected readonly users = [
        {id: 1, name: 'John Cleese'},
        {id: 2, name: 'Eric Idle'},
        {id: 3, name: 'Graham Chapman'},
        {id: 4, name: 'Michael Palin'},
        {id: 5, name: 'Terry Gilliam'},
    ];

    protected readonly form = new FormGroup({
        user: new FormControl<User | null>(null),
        user2: new FormControl<User | null>(null),
    });

    protected readonly stringify = ({name}: User): string => name;

    protected readonly matcherString = (name: string, search: string): boolean =>
        name.split(' ').pop()!.toLowerCase().startsWith(search.toLowerCase());

    protected readonly matcherUser = (user: User, search: string): boolean =>
        user.name.toLowerCase().startsWith(search.toLowerCase());
}
