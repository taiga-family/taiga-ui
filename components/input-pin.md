# InputPin

- **Package**: `KIT`
- **Type**: components

Default configuration with digits only

Changing mask to allow letters

Minimal gap is 0.25rem, additional spacing can be added using
`gap`
on
`tui-textfield`

### Usage Examples

#### Basic

Default configuration with digits only

**Template:**
```html
<tui-textfield>
<input placeholder="••••" tuiInputPin [formControl]="control" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiInputPin} from '@taiga-ui/kit';

@Component({
    imports: [ReactiveFormsModule, TuiInputPin],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl('', Validators.minLength(4));
}
```

#### Alphanumeric

Changing mask to allow letters

**Template:**
```html
<tui-textfield tuiTextfieldSize="m" [style.text-transform]="'uppercase'" >
<input autocapitalize="characters" inputmode="text" mask="^[a-zA-Z0-9]+$" maxlength="5" tuiInputPin [(ngModel)]="value" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiInputPin} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputPin],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = '';
}
```

#### Hidden

Minimal gap is 0.25rem, additional spacing can be added using `gap` on `tui-textfield`

**Template:**
```html
<tui-textfield tuiTextfieldSize="s" [style.-webkit-text-security]="'disc'" [style.gap.rem]="0.75" [style.width.rem]="9" >
<input maxlength="3" tuiInputPin [formControl]="control" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiInputPin} from '@taiga-ui/kit';

@Component({
    imports: [ReactiveFormsModule, TuiInputPin],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl(null);
}
```
