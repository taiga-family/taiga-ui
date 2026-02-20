import"./chunk-HU6DUUP4.js";var t=`import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiStringMatcher} from '@taiga-ui/cdk';
import {
    TuiChevron,
    TuiComboBox,
    TuiDataListWrapper,
    TuiFilterByInputPipe,
    TuiStringifyContentPipe,
} from '@taiga-ui/kit';

interface User {
    readonly id: number;
    readonly name: string;
}

@Component({
    imports: [
        ReactiveFormsModule,
        TuiChevron,
        TuiComboBox,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
        TuiStringifyContentPipe,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example<T extends User = User> {
    protected readonly items = inject<readonly string[]>('Pythons' as any);

    protected readonly users = [
        {id: 1, name: 'John Cleese'},
        {id: 2, name: 'Eric Idle'},
        {id: 3, name: 'Graham Chapman'},
        {id: 4, name: 'Michael Palin'},
        {id: 5, name: 'Terry Gilliam'},
    ] as unknown as readonly T[];

    protected readonly form = new FormGroup({
        user: new FormControl<T | null>(null),
        user2: new FormControl<T | null>(null),
    });

    protected readonly stringify = ({name}: T): string => name;

    protected readonly matcherString = (name: string, search: string): boolean =>
        name.split(' ').pop()?.toLowerCase().startsWith(search.toLowerCase()) ?? false;

    protected readonly matcherUser: TuiStringMatcher<T> = (user, search): boolean =>
        user.name.toLowerCase().startsWith(search.toLowerCase());
}
`;export{t as default};
