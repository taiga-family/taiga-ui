# ButtonSelect

- **Package**: `KIT`
- **Type**: components

`ButtonSelect` is a form control for selecting one or multiple values, similar to a standard select element but with a button-based interface.

### How to Use (Import)

```ts
import {Component} from '@angular/core';
import {TuiButtonSelect} from '@taiga-ui/kit';
import {TuiButton, TuiDropdown} from '@taiga-ui/core';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiButton,
    TuiButtonSelect,
    TuiDropdown,
  ],
})
export class Example {}
```

### How to Use (Template)

```html
<button
  tuiButton
  tuiButtonSelect
  type="button"
  [(ngModel)]="item"
>
  {{ item }}
  <tui-data-list-wrapper
    *tuiDropdown
    new
    [items]="items"
  />
</button>
```

### Usage Examples

#### Basic

**Template:**
```html
<button appearance="outline-grayscale" iconStart="@tui.star" size="m" tuiButton tuiButtonSelect type="button" [(ngModel)]="value" > {{ value }} <tui-data-list-wrapper *tuiTextfieldDropdown new [items]="items" />
</button>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiTextfield} from '@taiga-ui/core';
import {TuiButtonSelect, TuiDataListWrapper} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiButton, TuiButtonSelect, TuiDataListWrapper, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items: string[] = inject('Pythons' as any);

    protected value = this.items[0];
}
```

#### Multiselect

**Template:**
```html
<button appearance="secondary-grayscale" iconStart="@tui.user" size="m" tuiButton tuiButtonSelect type="button" [(ngModel)]="value" > {{ value.length === 1 ? value[0]?.name : 'Selected ' + value.length }} <tui-data-list *tuiTextfieldDropdown>
<tui-opt-group label="Users" tuiMultiSelectGroup >
<button *ngFor="let name of items" new tuiOption type="button" [value]="name" > {{ name.name }} </button>
</tui-opt-group>
</tui-data-list>
</button>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiDataList, TuiTextfield} from '@taiga-ui/core';
import {TuiButtonSelect, TuiMultiSelect} from '@taiga-ui/kit';

interface User {
    readonly id: number;
    readonly name: string;
}

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        TuiButton,
        TuiButtonSelect,
        TuiDataList,
        TuiMultiSelect,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items: User[] = [
        {id: 42, name: 'Tommy Vercetti'},
        {id: 237, name: 'Carl Johnson'},
        {id: 666, name: 'Niko Bellic'},
        {id: 999, name: 'Trevor Philips'},
        {id: 123, name: 'Michael De Santa'},
        {id: 777, name: 'Franklin Clinton'},
    ];

    protected value = this.items;
}
```
