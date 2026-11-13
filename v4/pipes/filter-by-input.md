# FilterByInput

- **Package**: `KIT`
- **Type**: pipes

Pipe for filtering an array by value entered in a textfield

### How to Use (Import)

```ts
import {TuiFilterByInputPipe} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiFilterByInputPipe,
  ],
  //  ...
})
export class Example {}
```

### How to Use (Template)

```html
<tui-input [formControl]="user">
  User
  <tui-data-list-wrapper
    *tuiDataList
    [items]="items | tuiFilterByInput"
  ></tui-data-list-wrapper>
</tui-input>
```

### Usage Examples

#### Basic

**Template:**
```html
<form [formGroup]="form">
<tui-input formControlName="user"> User <tui-data-list-wrapper *tuiDataList [items]="items | tuiFilterByInput" />
</tui-input>
</form>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataListWrapper, TuiFilterByInputPipe} from '@taiga-ui/kit';
import {TuiInputModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
        TuiInputModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = inject<readonly string[]>('Pythons' as any);
    protected readonly form = new FormGroup({
        user: new FormControl(''),
    });
}
```

#### Custom matcher

**Template:**
```html
<form [formGroup]="form">
<tui-combo-box formControlName="user"> Search by last name <tui-data-list-wrapper *tuiDataList [items]="items | tuiFilterByInput: matcherString" />
</tui-combo-box>
<tui-combo-box formControlName="user2" class="tui-space_top-5" [stringify]="stringify" > With ids <tui-data-list-wrapper *tuiDataList [itemContent]="stringify | tuiStringifyContent" [items]="users | tuiFilterByInput: matcherUser" />
</tui-combo-box>
</form>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiStringMatcher} from '@taiga-ui/cdk';
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
```

#### Multiselect

**Template:**
```html
<tui-textfield multi tuiChevron >
<label tuiLabel>Star Wars persons</label>
<input placeholder="Ignored text" tuiInputChip [formControl]="control" />
<tui-input-chip *tuiItem />
<tui-data-list-wrapper *tuiTextfieldDropdown new tuiMultiSelectGroup [items]="items | tuiFilterByInput" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiTextfield} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiDataListWrapper,
    TuiFilterByInputPipe,
    TuiInputChip,
    TuiMultiSelect,
} from '@taiga-ui/kit';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    standalone: true,
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
<tui-input formControlName="user"> User <tui-data-list-wrapper *tuiDataList [items]="items$ | async | tuiFilterByInput" />
</tui-input>
</form>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataListWrapper, TuiFilterByInputPipe} from '@taiga-ui/kit';
import {TuiInputModule} from '@taiga-ui/legacy';
import {delay, of, startWith} from 'rxjs';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        ReactiveFormsModule,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
        TuiInputModule,
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

    protected readonly form = new FormGroup({
        user: new FormControl(''),
    });
}
```
