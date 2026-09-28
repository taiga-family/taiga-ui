# InputColor

- **Package**: `KIT`
- **Type**: components

`InputColor` = `Textfield` + `type="color"` + `Maskito` + ❤️

### Example

```html
<ng-template>
<tui-textfield [invalid]="controlDoc.invalid" [tuiAppearanceFocus]="appearance.focus" [tuiAppearanceState]="appearance.state" [tuiTextfieldCleaner]="textfieldDoc.cleaner" [tuiTextfieldSize]="textfieldDoc.size" > @if (textfieldDoc.size !== 's') { <label tuiLabel>Choose color</label> } <input list="colors" tuiInputColor [align]="align" [format]="format" [formControl]="control" [placeholder]="textfieldDoc.size === 's' ? 'Choose color' : ''" [readonly]="controlDoc.readonly" [tuiDisabled]="controlDoc.disabled" />
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
| [align] | `TuiHorizontalDirection` | alignment of the color picker |
| [format] | `'hex' \| 'hexa'` | color format |

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
import {TuiInputColor} from '@taiga-ui/kit';

@Component({
    imports: [ReactiveFormsModule, TuiInputColor],
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
<tui-textfield iconStart="@tui.paintbrush">
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
import {TuiInputColor, tuiInputColorOptionsProvider} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputColor],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [tuiInputColorOptionsProvider({format: 'hexa', align: 'end'})],
})
export default class Example {
    protected value = '#ff7f50cc';
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils.less';

.label {
    .tui-slider-ticks-labels();
}
```
