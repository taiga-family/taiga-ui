import"./chunk-HU6DUUP4.js";var t=`import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_DEFAULT_MATCHER} from '@taiga-ui/cdk';
import {type TuiFilterByInputOptions, TuiFilterByInputPipe} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiComboBox,
    TuiDataListWrapper,
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
        {id: 42, name: 'John Cleese'},
        {id: 0, name: 'Eric Idle'},
        {id: 444, name: 'Graham Chapman'},
        {id: 222, name: 'Michael Palin'},
        {id: 404, name: 'Terry Gilliam'},
    ] as unknown as readonly T[];

    protected readonly form = new FormGroup({
        user: new FormControl<T | null>(null),
        user2: new FormControl<T | null>(null),
    });

    protected readonly stringify = ({name}: T): string => name;

    protected readonly bySurname: TuiFilterByInputOptions<string>['filter'] = (
        items,
        search,
    ) =>
        items.filter((name) =>
            name.split(' ').pop()?.toLowerCase().startsWith(search.toLowerCase()),
        );

    protected readonly byId: TuiFilterByInputOptions<T>['filter'] = (users, search) =>
        users.find((x) => String(x.id) === search)
            ? users
            : users.filter(
                  (user) =>
                      String(user.id).includes(search) ||
                      TUI_DEFAULT_MATCHER(user, search, this.stringify),
              );
}
`;export{t as default};
