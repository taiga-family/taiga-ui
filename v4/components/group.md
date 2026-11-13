# Group

- **Package**: `CORE`
- **Type**: components

A directive for grouping other components. For example, textfields and buttons .

### How to Use (Import)

```ts
import {TuiGroup} from '@taiga-ui/core';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiGroup,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<div
  class="group"
  tuiGroup
>
  <div>
    <tui-input
      formControlName="testValue"
      tuiHintContent="Write a number"
      [style.border-radius]="'inherit'"
    >
      House
      <input
        tuiTextfieldLegacy
        placeholder="House"
      />
    </tui-input>
    <tui-error
      formControlName="testValue"
      [error]="[] | tuiFieldError | async"
    ></tui-error>
  </div>
  <div>
    <tui-input
      formControlName="testValue2"
      tuiHintContent="Write house building"
      [style.border-radius]="'inherit'"
    >
      House building
      <input
        tuiTextfieldLegacy
        placeholder="House building"
      />
    </tui-input>
    <tui-error
      formControlName="testValue2"
      [error]="[] | tuiFieldError | async"
    ></tui-error>
  </div>
  <div>
    <tui-input
      formControlName="testValue3"
      tuiHintContent="Write an apartment number only"
      [style.border-radius]="'inherit'"
    >
      Apartment
      <input
        tuiTextfieldLegacy
        placeholder="Apartment number"
      />
    </tui-input>
    <tui-error
      formControlName="testValue3"
      [error]="[] | tuiFieldError | async"
    ></tui-error>
  </div>
</div>
```

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
| [rounded] | `boolean` | The first and the last items are rounded |
| [orientation] | `TuiOrientation` | Horizontal or vertical direction of group |
| [size] | `TuiSizeL` | Size of rounding |

### Usage Examples

#### Inputs

**Template:**
```html
<form class="input-wrapper" [formGroup]="testForm" >
<div tuiGroup class="group" >
<div>
<tui-input formControlName="testValue" tuiHintContent="Write a number" [style.border-radius]="'inherit'" > House <input placeholder="House" tuiTextfieldLegacy />
</tui-input>
<tui-error formControlName="testValue" [error]="[] | tuiFieldError | async" />
</div>
<div>
<tui-multi-select formControlName="multiSelectControl" tuiHintContent="Write house building" [editable]="false" [rows]="1" [style.border-radius]="'inherit'" [tuiTextfieldLabelOutside]="true" > Building <tui-data-list-wrapper *tuiDataList tuiMultiSelectGroup [items]="items" />
</tui-multi-select>
<tui-error formControlName="multiSelectControl" [error]="[] | tuiFieldError | async" />
</div>
<div>
<tui-input formControlName="testValue3" tuiHintContent="Write an apartment number only" [style.border-radius]="'inherit'" > Apartment <input placeholder="Apartment number" tuiTextfieldLegacy />
</tui-input>
<tui-error formControlName="testValue3" [error]="[] | tuiFieldError | async" />
</div>
</div>
</form>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiError, TuiGroup, TuiHint} from '@taiga-ui/core';
import {TuiDataListWrapper, TuiFieldErrorPipe} from '@taiga-ui/kit';
import {
    TuiInputModule,
    TuiMultiSelectModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        ReactiveFormsModule,
        TuiDataListWrapper,
        TuiError,
        TuiFieldErrorPipe,
        TuiGroup,
        TuiHint,
        TuiInputModule,
        TuiMultiSelectModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = ['Option 1', 'Option 2', 'Option 3'];

    protected testForm = new FormGroup({
        testValue: new FormControl('', Validators.required),
        multiSelectControl: new FormControl<string[]>([], Validators.required),
        testValue3: new FormControl('', Validators.required),
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
    standalone: true,
    imports: [TuiButton, TuiGroup],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
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
<form orientation="vertical" tuiGroup class="group" [collapsed]="true" [formGroup]="testForm" >
<label tuiBlock [style.justify-content]="'space-between'" > Oranges <input formControlName="testValue" tuiRadio type="radio" value="orange" />
</label>
<label tuiBlock> Apples <input formControlName="testValue" tuiRadio type="radio" value="apple" [style.margin-inline-start]="'auto'" />
</label>
<label tuiBlock> Pineapples <input formControlName="testValue" tuiRadio type="radio" value="pineapple" />
</label>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiGroup} from '@taiga-ui/core';
import {TuiBlock, TuiRadio} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiBlock, TuiGroup, TuiRadio],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected testForm = new FormGroup({
        testValue: new FormControl('orange'),
    });
}
```

#### Directive

**Template:**
```html
<p>Directive helps to avoid extra layers of HTML</p>
<form tuiGroup [collapsed]="true" [formGroup]="testForm" >
<label tuiBlock>
<span tuiTitle> Orange <span tuiSubtitle>An orange is a fruit of various citrus species in the family Rutaceae</span>
</span>
<input formControlName="testValue" tuiRadio type="radio" value="orange" />
</label>
<label tuiBlock>
<span tuiTitle> Pineapple <span tuiSubtitle> Not to be confused with neither <em>pines</em> nor <em>apples</em>
</span>
</span>
<input formControlName="testValue" tuiRadio type="radio" value="pineapple" />
</label>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiGroup, TuiTitle} from '@taiga-ui/core';
import {TuiBlock, TuiRadio} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiBlock, TuiGroup, TuiRadio, TuiTitle],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly testForm = new FormGroup({
        testValue: new FormControl(''),
    });
}
```

**LESS:**
```less
.content {
    padding: 0.5rem 0;
    white-space: normal;
}
```
