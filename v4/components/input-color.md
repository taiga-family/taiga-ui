# InputColor

- **Package**: `KIT`
- **Type**: components

`InputColor` = `Textfield` + `type="color"` + `Maskito` + ❤️

### How to Use (Import)

```ts
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputColor} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiTextfield,
    TuiInputColor,
  ],
  // ...
})
export class Example {
  readonly testForm = new FormGroup({
    testValue: new FormControl(),
  });
}
```

### How to Use (Template)

```html
<form [formGroup]="testForm">
  <tui-textfield>
    <input
      tuiInputColor
      [formControl]="control"
    />
  </tui-textfield>
</form>
```

### Example

```html
<ng-template>
<tui-textfield [tuiTextfieldCleaner]="textfieldDoc.cleaner" [tuiTextfieldSize]="textfieldDoc.size" >
<label *ngIf="textfieldDoc.size !== 's'" tuiLabel > Choose color </label>
<input list="colors" tuiInputColor [align]="align" [format]="format" [formControl]="control" [invalid]="controlDoc.invalid" [placeholder]="textfieldDoc.size === 's' ? 'Choose color' : ''" [readOnly]="controlDoc.readonly" [tuiDisabled]="controlDoc.disabled" />
<datalist id="colors">
<option value="#800000"></option>
<option value="#8B0000"></option>
<option value="#A52A2A"></option>
<option value="#DC143C"></option>
</datalist>
</tui-textfield>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [align] | `TuiHorizontalDirection` | Alignment of the color picker |
| [format] | `'hex' | 'hexa'` | Color format |

### Usage Examples

#### Basic

**Template:**
```html
<tui-textfield iconStart=" ">
<label tuiLabel>Choose color</label>
<input list="colors" placeholder="#000000" tuiInputColor [formControl]="control" />
<datalist id="colors">
<option value="#800000"></option>
<option value="#8B0000"></option>
<option value="#A52A2A"></option>
<option value="#DC143C"></option>
</datalist>
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputColor} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputColor, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl();
}
```

#### Opacity

**Template:**
```html
<tui-textfield [iconStart]="'@tui.paintbrush'">
<label tuiLabel>Choose color</label>
<input placeholder="#00000000" tuiInputColor [(ngModel)]="value" />
</tui-textfield>
<label class="label">
<span>0%</span>
<span>Opacity</span>
<span>100%</span>
</label>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputColor, tuiInputColorOptionsProvider} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputColor, TuiTextfield],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [tuiInputColorOptionsProvider({format: 'hexa', align: 'right'})],
})
export default class Example {
    protected value = '#ff7f50cc';
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local.less';

.label {
    .tui-slider-ticks-labels();

    color: var(--tui-text-secondary);
    margin-block-start: 0.5rem;
}
```
