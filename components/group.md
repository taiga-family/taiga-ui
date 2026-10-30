# Group

- **Package**: `CORE`
- **Type**: components

A directive for grouping other components. For example, Input or Button .

### Example

```html
<div tuiGroup class="group" [collapsed]="collapsed" [orientation]="orientation" [rounded]="rounded" [size]="size" >
<button appearance="outline" size="l" tuiButton type="button" > Button 1 </button>
<button appearance="outline" size="l" tuiButton type="button" > Button 2 </button>
<button appearance="outline" size="l" tuiButton type="button" > Button 3 </button>
</div>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [collapsed] | `boolean` | by default) |
| [rounded] | `boolean` | the first and the last items are rounded |
| [orientation] | `TuiOrientation` | horizontal or vertical orientation of group |
| [size] | `TuiSizeL` | size of rounding |

### Usage Examples

#### Inputs

**Template:**
```html
<form class="input-wrapper" [formGroup]="form" >
<div tuiGroup class="group" >
<div>
<tui-textfield [style.border-radius]="'inherit'">
<input formControlName="value" placeholder="House" tuiInput />
<label tuiLabel>House</label>
<tui-icon tuiTooltip="Write a number" />
</tui-textfield>
<tui-error formControlName="value" />
</div>
<div>
<tui-textfield multi tuiChevron [rows]="1" [style.border-radius]="'inherit'" [tuiTextfieldCleaner]="false" >
<input formControlName="multi" placeholder="Building" tuiInputChip />
<tui-input-chip *tuiItem />
<tui-data-list-wrapper *tuiDropdown tuiMultiSelectGroup [items]="items" />
<tui-icon tuiTooltip="Write house building" />
</tui-textfield>
<tui-error formControlName="multi" />
</div>
<div>
<tui-textfield [style.border-radius]="'inherit'">
<input formControlName="number" placeholder="Apartment number" tuiInput />
<label tuiLabel>Apartment</label>
<tui-icon tuiTooltip="Write an apartment number only" />
</tui-textfield>
<tui-error formControlName="number" />
</div>
</div>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiError, TuiGroup, TuiIcon, TuiInput} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiDataListWrapper,
    TuiInputChip,
    TuiMultiSelect,
    TuiTooltip,
} from '@taiga-ui/kit';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiChevron,
        TuiDataListWrapper,
        TuiError,
        TuiGroup,
        TuiIcon,
        TuiInput,
        TuiInputChip,
        TuiMultiSelect,
        TuiTooltip,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = ['Option 1', 'Option 2', 'Option 3'];

    protected readonly form = new FormGroup({
        value: new FormControl('', Validators.required),
        multi: new FormControl<string[]>([], Validators.required),
        number: new FormControl('', Validators.required),
    });
}
```

**LESS:**
```less
.group {
    max-inline-size: 30.25rem;
}
```

#### ButtonGroup

**Template:**
```html
<div tuiGroup class="group" [collapsed]="true" >
<button appearance="outline" tuiButton type="button" > Button 1 </button>
<button appearance="outline" tuiButton type="button" > Button 2 </button>
<button appearance="outline" iconStart="@tui.chevron-down" title="A sample of icon-button in a group" tuiIconButton type="button" [style.flex]="'0 0 auto'" ></button>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiGroup} from '@taiga-ui/core';

@Component({
    imports: [TuiButton, TuiGroup],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
.group {
    max-inline-size: 30rem;
    white-space: nowrap;
}
```

#### Vertical group

**Template:**
```html
<form orientation="vertical" tuiGroup class="group" [collapsed]="true" [formGroup]="form" >
<label tuiBlock [style.justify-content]="'space-between'" > Oranges <input formControlName="value" tuiRadio type="radio" value="orange" />
</label>
<label tuiBlock> Apples <input formControlName="value" tuiRadio type="radio" value="apple" [style.margin-inline-start]="'auto'" />
</label>
<label tuiBlock> Pineapples <input formControlName="value" tuiRadio type="radio" value="pineapple" />
</label>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiGroup, TuiRadio} from '@taiga-ui/core';
import {TuiBlock} from '@taiga-ui/kit';

@Component({
    imports: [ReactiveFormsModule, TuiBlock, TuiGroup, TuiRadio],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected form = new FormGroup({value: new FormControl('orange')});
}
```

#### Directive

**Template:**
```html
<p>Directive helps to avoid extra layers of HTML</p>
<form tuiGroup [collapsed]="true" [formGroup]="form" >
<label tuiBlock>
<span tuiTitle> Orange <span tuiSubtitle>An orange is a fruit of various citrus species in the family Rutaceae</span>
</span>
<input formControlName="value" tuiRadio type="radio" value="orange" />
</label>
<label tuiBlock>
<span tuiTitle> Pineapple <span tuiSubtitle> Not to be confused with neither <em>pines</em> nor <em>apples</em>
</span>
</span>
<input formControlName="value" tuiRadio type="radio" value="pineapple" />
</label>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiGroup, TuiRadio, TuiTitle} from '@taiga-ui/core';
import {TuiBlock} from '@taiga-ui/kit';

@Component({
    imports: [ReactiveFormsModule, TuiBlock, TuiGroup, TuiRadio, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly form = new FormGroup({value: new FormControl('')});
}
```

**LESS:**
```less
.content {
    padding: 0.5rem 0;
    white-space: normal;
}
```
