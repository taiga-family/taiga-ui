# Label

- **Package**: `CORE`
- **Type**: components

Label is used to show text related to textfields, checkboxes, toggles and radio buttons

### How to Use (Import)

```ts
import {FormsModule} from '@angular/forms';
import {TuiLabel} from '@taiga-ui/core';
import {TuiCheckbox} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    TuiCheckbox,
    TuiLabel,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<label tuiLabel>
  <input
    tuiCheckbox
    type="checkbox"
    size="s"
    [(ngModel)]="selected"
  />
  Label text
</label>
```

### Usage Examples

#### Basic

**Template:**
```html
<form [formGroup]="testForm">
<label tuiLabel>
<input formControlName="testValue1" tuiCheckbox type="checkbox" />
<span tuiTitle> Taiga UI <span tuiSubtitle>Angular UI Kit for awesome people</span>
</span>
</label>
<label tuiLabel class="tui-space_vertical-2" >
<input formControlName="testValue2" tuiCheckbox type="checkbox" />
<span tuiTitle>
<span> ng-polymorpheus&nbsp; <tui-icon tuiTooltip="Our first open-source project" />
</span>
<span tuiSubtitle>A tiny library for polymorphic templates in Angular</span>
</span>
</label>
<label tuiLabel>
<input formControlName="testValue3" tuiCheckbox type="checkbox" />
<span tuiTitle> ng-dompurify <span tuiSubtitle>Inclusive Angular API for DOMPurify</span>
</span>
</label>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiLabel, TuiTitle} from '@taiga-ui/core';
import {TuiCheckbox, TuiTooltip} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiCheckbox, TuiIcon, TuiLabel, TuiTitle, TuiTooltip],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected testForm = new FormGroup({
        testValue1: new FormControl(true),
        testValue2: new FormControl(false),
        testValue3: new FormControl(false),
    });
}
```

#### Small size

**Template:**
```html
<form [formGroup]="testForm">
<label tuiLabel>
<input formControlName="testValue" size="s" tuiRadio type="radio" value="taiga" />
<small>Taiga UI</small>
</label>
<label tuiLabel class="tui-space_vertical-2" >
<input formControlName="testValue" size="s" tuiRadio type="radio" value="polymorpheus" />
<small>ng-polymorpheus</small>
</label>
<label tuiLabel>
<input formControlName="testValue" size="s" tuiRadio type="radio" value="dompurify" />
<small>ng-dompurify</small>
</label>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLabel} from '@taiga-ui/core';
import {TuiRadio} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiLabel, TuiRadio],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected testForm = new FormGroup({
        testValue: new FormControl(),
    });
}
```

#### Switch

**Template:**
```html
<form [formGroup]="testForm">
<label tuiLabel>
<input formControlName="testValue1" tuiSwitch type="checkbox" /> Taiga UI </label>
<label tuiLabel class="tui-space_vertical-2" >
<input formControlName="testValue2" tuiSwitch type="checkbox" /> ng-polymorpheus </label>
<label tuiLabel>
<input formControlName="testValue3" tuiSwitch type="checkbox" /> ng-dompurify </label>
</form>
<form class="tui-space_top-4" [formGroup]="testForm" >
<label tuiLabel>
<input formControlName="testValue1" size="s" tuiSwitch type="checkbox" />
<small>Taiga UI</small>
</label>
<label tuiLabel class="tui-space_vertical-2" >
<input formControlName="testValue2" size="s" tuiSwitch type="checkbox" />
<small>ng-polymorpheus</small>
</label>
<label tuiLabel>
<input formControlName="testValue3" size="s" tuiSwitch type="checkbox" />
<small>ng-dompurify</small>
</label>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLabel} from '@taiga-ui/core';
import {TuiSwitch} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiLabel, TuiSwitch],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected testForm = new FormGroup({
        testValue1: new FormControl(true),
        testValue2: new FormControl(false),
        testValue3: new FormControl(false),
    });
}
```

#### Textfield

**Template:**
```html
<form [formGroup]="testForm">
<label tuiLabel> Label can be outside <tui-textfield>
<input formControlName="testValue" tuiTextfield />
</tui-textfield>
</label>
<tui-textfield class="tui-space_top-4">
<label tuiLabel>Or inside textfield</label>
<input formControlName="testValue" tuiTextfield />
</tui-textfield>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected testForm = new FormGroup({
        testValue: new FormControl('Input value'),
    });
}
```
