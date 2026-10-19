# InputPin

- **Package**: `KIT`
- **Type**: components

### How to Use (Import)

```ts
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputPin} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiTextfield,
    TuiInputPin,
  ],
  // ...
})
export class Example {
  readonly testForm = new FormGroup({
    testValue: new FormControl(null),
  });
}
```

### How to Use (Template)

```html
<form [formGroup]="testForm">
  <tui-textfield>
    <input
      maxlength="4"
      tuiInputPin
      [formControl]="control"
    />
  </tui-textfield>
</form>
```

### Usage Examples

#### Basic

**Template:**
```html
<tui-textfield>
<input maxlength="4" placeholder="••••" tuiInputPin [formControl]="control" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputPin} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputPin, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl('', Validators.minLength(4));
}
```

#### Alphanumeric

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
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputPin} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputPin, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = '';
}
```

#### Hidden

**Template:**
```html
<tui-textfield tuiTextfieldSize="s" [style.-webkit-text-security]="'disc'" [style.gap.rem]="1" [style.width.rem]="9" >
<input maxlength="3" tuiInputPin [formControl]="control" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputPin} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputPin, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl(null);
}
```
