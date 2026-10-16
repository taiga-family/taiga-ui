# ButtonSelect

- **Package**: `KIT`
- **Type**: components

`ButtonSelect` is a form control for selecting one or multiple values, similar to a standard select element but with a button-based interface.

### Usage Examples

#### Basic

**Template:**
```html
<button appearance="outline-grayscale" iconStart="@tui.star" size="m" tuiButton tuiButtonSelect [(ngModel)]="value" > {{ value }} <tui-data-list-wrapper *tuiDropdown [items]="items" />
</button>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiDropdown} from '@taiga-ui/core';
import {TuiButtonSelect, TuiDataListWrapper} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiButton, TuiButtonSelect, TuiDataListWrapper, TuiDropdown],
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
<button appearance="secondary-grayscale" iconStart="@tui.user" size="m" tuiButton tuiButtonSelect [(ngModel)]="value" > {{ value.length === 1 ? value[0]?.name : `Selected ${value.length}` }} <tui-data-list *tuiDropdown>
<tui-opt-group label="Users" tuiMultiSelectGroup > @for (name of items; track name.id) { <button tuiOption type="button" [value]="name" > {{ name.name }} </button> } </tui-opt-group>
</tui-data-list>
</button>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiDataList, TuiDropdown} from '@taiga-ui/core';
import {TuiButtonSelect, TuiMultiSelect} from '@taiga-ui/kit';

interface User {
    readonly id: number;
    readonly name: string;
}

@Component({
    imports: [
        FormsModule,
        TuiButton,
        TuiButtonSelect,
        TuiDataList,
        TuiDropdown,
        TuiMultiSelect,
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

#### Date

**Template:**
```html
<button iconEnd="@tui.calendar" tuiButton tuiButtonSelect [(ngModel)]="value" > {{ value || 'Select date' }} <tui-calendar *tuiDropdown />
</button>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiDay} from '@taiga-ui/cdk';
import {TuiButton, TuiCalendar, TuiDropdown} from '@taiga-ui/core';
import {TuiButtonSelect} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiButton, TuiButtonSelect, TuiCalendar, TuiDropdown],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: TuiDay | null = null;
}
```
