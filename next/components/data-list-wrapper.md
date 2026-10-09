# DataListWrapper

- **Package**: `KIT`
- **Type**: components

`DataListWrapper` is an abstraction over `DataList` to simplify usage in common cases where precise control is not necessary.

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [items] | `readonly T[] \| ReadonlyArray<readonly T[]> \| null` | items to select |
| [itemContent] | `PolymorpheusContent<TuiContext<T>>` | content of an item |
| [emptyContent] | `PolymorpheusContent` | content to display when there are no options inside |
| [disabledItemHandler] | `TuiBooleanHandler<T>` |  |
| [size] | `TuiSizeL \| TuiSizeXS` | size of items |
| [labels] | `readonly string[]` | group labels |

### API - Outputs

| Event | Type | Description |
|-------|------|-------------|
| (itemClick) | `T` | emits on click on item from datalist |

### Usage Examples

#### Disables items that start with T

**Template:**
```html
<tui-textfield [disabledItemHandler]="disabledItemHandler">
<input #input tuiInput [formControl]="control" />
<label tuiLabel>Account</label> @if (items | tuiFilterByInput; as filtered) { @if (input.value) { <tui-data-list-wrapper *tuiDropdown emptyContent="No results found" size="s" [items]="filtered" /> } } </tui-textfield>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiBooleanHandler} from '@taiga-ui/cdk';
import {TuiDropdown, TuiFilterByInputPipe, TuiInput} from '@taiga-ui/core';
import {TuiDataListWrapper} from '@taiga-ui/kit';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiDataListWrapper,
        TuiDropdown,
        TuiFilterByInputPipe,
        TuiInput,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl('');
    protected readonly items = inject<readonly string[]>('Pythons' as any);

    protected readonly disabledItemHandler: TuiBooleanHandler<string> = (v) =>
        v.startsWith('T');
}
```

#### Custom item content

**Template:**
```html
<label tuiLabel> Type a name: <tui-textfield tuiChevron [stringify]="stringify" [tuiTextfieldCleaner]="false" >
<input placeholder="Account" tuiComboBox [formControl]="control" />
<tui-data-list-wrapper *tuiDropdown [itemContent]="stringify | tuiStringifyContent" [items]="items | tuiFilterByInput" />
</tui-textfield>
</label>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFilterByInputPipe} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiComboBox,
    TuiDataListWrapper,
    TuiStringifyContentPipe,
} from '@taiga-ui/kit';

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
```

#### Group by labels

**Template:**
```html
<tui-textfield>
<input #input tuiInput [formControl]="control" />
<label tuiLabel>Menu</label> @if (input.value) { <tui-data-list-wrapper *tuiDropdown [items]="items" [labels]="labels" /> } </tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiInput} from '@taiga-ui/core';
import {TuiDataListWrapper} from '@taiga-ui/kit';

@Component({
    imports: [ReactiveFormsModule, TuiDataListWrapper, TuiInput],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl('');

    protected readonly items = [
        ['Caesar', 'Greek', 'Apple and Chicken'],
        ['Broccoli Cheddar', 'Chicken and Rice', 'Chicken Noodle'],
    ] as const;

    protected labels = ['Salad', 'Soup'] as const;
}
```
