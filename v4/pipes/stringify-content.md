# StringifyContent

- **Package**: `KIT`
- **Type**: pipes

Pipe that turns `TuiStringHandler` into content that works with `$implicit` .

### How to Use (Import)

```ts
import {TuiStringifyContentPipe} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiStringifyContentPipe,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<tui-combo-box
  [stringify]="stringify"
  [(ngModel)]="value"
>
  <tui-data-list-wrapper
    *tuiDataList
    [items]="items"
    [itemContent]="stringify | tuiStringifyContent"
  ></tui-data-list-wrapper>
</tui-combo-box>
```

### Usage Examples

#### Basic

**Template:**
```html
<tui-combo-box [stringify]="stringify" [(ngModel)]="value" > Pick your guy <tui-data-list-wrapper *tuiDataList [itemContent]="stringify | tuiStringifyContent" [items]="items | tuiFilterByInput" />
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
} from '@taiga-ui/kit';
import {TuiComboBoxModule} from '@taiga-ui/legacy';

interface User {
    readonly name: string;
    readonly surname: string;
}

@Component({
    standalone: true,
    imports: [
        FormsModule,
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
    protected value = null;

    protected readonly items = [
        {
            name: 'John',
            surname: 'Cleese',
        },
        {
            name: 'Eric',
            surname: 'Idle',
        },
    ];

    protected readonly stringify = ({name, surname}: User): string =>
        `${name} ${surname}`;
}
```
