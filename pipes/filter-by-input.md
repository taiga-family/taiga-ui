# FilterByInput

- **Package**: `KIT`
- **Type**: pipes

Pipe for filtering an array by value entered in a textfield

### Usage Examples

#### Basic

**Template:**
```html
<form [formGroup]="form">
<tui-textfield>
<input #input formControlName="user" tuiInput />
<label tuiLabel>User</label> @if (items | tuiFilterByInput; as filtered) { @if (input.value) { <tui-data-list-wrapper *tuiDropdown [items]="filtered" /> } } </tui-textfield>
</form>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFilterByInputPipe, TuiInput, TuiLabel} from '@taiga-ui/core';
import {TuiDataListWrapper} from '@taiga-ui/kit';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
        TuiInput,
        TuiLabel,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = inject<readonly string[]>('Pythons' as any);
    protected readonly form = new FormGroup({user: new FormControl('')});
}
```

#### Custom matcher

**Template:**
```html
<form [formGroup]="form">
<tui-textfield tuiChevron [tuiTextfieldCleaner]="false" >
<label tuiLabel>Search by last name</label>
<input formControlName="user" tuiComboBox />
<tui-data-list-wrapper *tuiDropdown [items]="items | tuiFilterByInput: bySurname" />
</tui-textfield>
<tui-textfield tuiChevron class="tui-space_top-5" [stringify]="stringify" [tuiTextfieldCleaner]="false" >
<label tuiLabel>With ids</label>
<input formControlName="user2" tuiComboBox />
<tui-data-list-wrapper *tuiDropdown [itemContent]="stringify | tuiStringifyContent" [items]="users | tuiFilterByInput: byId" />
</tui-textfield>
</form>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
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
```

#### Multiselect

**Template:**
```html
<tui-textfield multi tuiChevron [tuiTextfieldCleaner]="false" >
<label tuiLabel>Star Wars persons</label>
<input placeholder="Ignored text" tuiInputChip [formControl]="control" />
<tui-input-chip *tuiItem />
<tui-data-list-wrapper *tuiDropdown tuiMultiSelectGroup [items]="items | tuiFilterByInput" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFilterByInputPipe, TuiTextfield} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiDataListWrapper,
    TuiInputChip,
    TuiMultiSelect,
} from '@taiga-ui/kit';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiChevron,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
        TuiInputChip,
        TuiMultiSelect,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = [
        'Luke Skywalker and a long time ago in a galaxy far, far away..',
        'Leia Organa Solo',
        'Darth Vader',
        'Han Solo',
        'Obi-Wan Kenobi',
        'Yoda',
    ];

    protected readonly control = new FormControl([this.items[0]]);
}
```

#### Async

**Template:**
```html
<form [formGroup]="form">
<tui-textfield>
<input #input formControlName="user" tuiInput />
<label tuiLabel>User</label> @if (items$ | async | tuiFilterByInput; as filtered) { @if (input.value) { <tui-data-list-wrapper *tuiDropdown [items]="filtered" /> } } </tui-textfield>
</form>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFilterByInputPipe, TuiInput} from '@taiga-ui/core';
import {TuiDataListWrapper} from '@taiga-ui/kit';
import {delay, of, startWith} from 'rxjs';

@Component({
    selector: 'example-4',
    imports: [
        AsyncPipe,
        ReactiveFormsModule,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
        TuiInput,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items$ = of(inject<readonly string[]>('Pythons' as any)).pipe(
        startWith([]),
        delay(1000),
    );

    protected readonly form = new FormGroup({user: new FormControl('')});
}
```
