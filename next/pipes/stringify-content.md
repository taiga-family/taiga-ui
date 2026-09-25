# StringifyContent

- **Package**: `KIT`
- **Type**: pipes

Pipe that turns `TuiStringHandler` into content that works with `$implicit` .

### Usage Examples

#### Basic

**Template:**
```html
<tui-textfield tuiChevron [stringify]="stringify" [tuiTextfieldCleaner]="false" >
<label tuiLabel>Pick your guy</label>
<input tuiComboBox [(ngModel)]="value" />
<tui-data-list-wrapper *tuiDropdown [itemContent]="stringify | tuiStringifyContent" [items]="items | tuiFilterByInput" />
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
} from '@taiga-ui/kit';

interface User {
    readonly name: string;
    readonly surname: string;
}

@Component({
    imports: [
        FormsModule,
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
