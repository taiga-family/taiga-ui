# Stringify

- **Package**: `KIT`
- **Type**: pipes

Pipe that creates `TuiStringHandler` by given key.

### How to Use (Import)

```ts
import {TuiStringifyPipe} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    //...
    TuiStringifyPipe,
  ],
  //  ...
})
export class Example {}
```

### How to Use (Template)

```html
<tui-combo-box
  [stringify]="'name' | tuiStringify"
  [(ngModel)]="value"
>
  <!-- ... -->
</tui-combo-box>
```

### Usage Examples

#### Basic

**Template:**
```html
<tui-combo-box [stringify]="'name' | tuiStringify" [(ngModel)]="value" > Pick your guy <tui-data-list-wrapper *tuiDataList [itemContent]="'name' | tuiStringify | tuiStringifyContent" [items]="items | tuiFilterByInput" />
</tui-combo-box>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiDataListWrapper,
    TuiFilterByInputPipe,
    TuiStringifyContentPipe,
    TuiStringifyPipe,
} from '@taiga-ui/kit';
import {TuiComboBoxModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiComboBoxModule,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
        TuiStringifyContentPipe,
        TuiStringifyPipe,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = null;

    protected readonly items = [
        {
            name: 'John Cleese',
            role: 'Black Knight',
        },
        {
            name: 'Eric Idle',
            role: 'Dead collector',
        },
    ] as const;
}
```
