import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

interface User {
    readonly id: number;
    readonly name: string;
}

@Component({
    selector: 'tui-filter-by-input-example-2',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiFilterByInputExample2 {
    readonly items = [
        'John Cleese',
        'Eric Idle',
        'Graham Chapman',
        'Michael Palin',
        'Terry Gilliam',
        'Terry Jones',
    ];

    readonly users = [
        {id: 1, name: 'John Cleese'},
        {id: 2, name: 'Eric Idle'},
        {id: 3, name: 'Graham Chapman'},
        {id: 4, name: 'Michael Palin'},
        {id: 5, name: 'Terry Gilliam'},
    ];

    readonly form = new UntypedFormGroup({
        user: new UntypedFormControl(),
        user2: new UntypedFormControl(),
    });

    readonly stringify = ({name}: User): string => name;

    readonly matcherString = (name: string, search: string): boolean =>
        name.split(' ').pop()!.toLowerCase().startsWith(search.toLowerCase());

    readonly matcherUser = (user: User, search: string): boolean =>
        user.name.toLowerCase().startsWith(search.toLowerCase());
}
