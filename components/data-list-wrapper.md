# DataListWrapper

- **Package**: `KIT`
- **Type**: components

`DataListWrapper` is an abstraction over `DataList` to simplify usage in common cases where precise control is not necessary.

### How to Use (Import)

```ts
import {TuiDataListWrapper} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiDataListWrapper,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<tui-input [formControl]="control">
  Account

  <tui-data-list-wrapper
    *tuiDataList
    [items]="items"
  ></tui-data-list-wrapper>
</tui-input>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [items] | `readonly T[] | ReadonlyArray<readonly T[]> | null` | Items to select |
| [itemContent] | `PolymorpheusContent<TuiValueContentContext<T>>` | Content of an item |
| [emptyContent] | `PolymorpheusContent` | Content to display when there are no options inside |
| [disabledItemHandler] | `TuiBooleanHandler<T>` |  |
| [size] | `TuiSizeL | TuiSizeXS` | Size of items |
| [labels] | `readonly string[]` | Group label |

### API - Outputs

| Event | Type | Description |
|-------|------|-------------|
| (itemClick) | `T` | Emits on click on item from datalist |

### Usage Examples

#### Disables items that start with T

**Template:**
```html
<tui-input [formControl]="control"> Account <tui-data-list-wrapper *tuiDataList emptyContent="No results found" size="s" [disabledItemHandler]="disabledItemHandler" [items]="items | tuiFilterByInput" />
</tui-input>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiBooleanHandler} from '@taiga-ui/cdk';
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
    protected readonly control = new FormControl('');
    protected readonly items = inject<readonly string[]>('Pythons' as any);

    protected readonly disabledItemHandler: TuiBooleanHandler<string> = (v) =>
        v.startsWith('T');
}
```

#### Custom item content

**Template:**
```html
<label> Type a name: <tui-combo-box [formControl]="control" [stringify]="stringify" [tuiTextfieldLabelOutside]="true" > Account <tui-data-list-wrapper *tuiDataList [itemContent]="stringify | tuiStringifyContent" [items]="items | tuiFilterByInput" />
</tui-combo-box>
</label>
```

**TypeScript:**
```ts
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
        ReactiveFormsModule,
        TuiComboBoxModule,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
        TuiStringifyContentPipe,
        TuiTextfieldControllerModule,
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
<tui-input [formControl]="control"> Menu <tui-data-list-wrapper *tuiDataList [items]="items" [labels]="labels" />
</tui-input>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiInputModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiDataListWrapper, TuiInputModule],
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
