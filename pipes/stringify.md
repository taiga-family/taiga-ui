# Stringify

- **Package**: `KIT`
- **Type**: pipes

Pipe that creates `TuiStringHandler` by given key.

### Usage Examples

#### Basic

**Template:**
```html
<tui-textfield tuiChevron [stringify]="'name' | tuiStringify" [tuiTextfieldCleaner]="false" >
<label tuiLabel>Pick your guy</label>
<input tuiComboBox [(ngModel)]="value" />
<tui-data-list-wrapper *tuiDropdown [itemContent]="'name' | tuiStringify | tuiStringifyContent" [items]="items | tuiFilterByInput" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFilterByInputPipe} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiComboBox,
    TuiDataListWrapper,
    TuiStringifyContentPipe,
    TuiStringifyPipe,
} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiChevron,
        TuiComboBox,
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
