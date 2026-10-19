# InputNumber

- **Package**: `KIT`
- **Type**: components

InputNumber is a form field to provide numerical input.

### How to Use (Import)

```ts
import {ReactiveFormsModule} from '@angular/forms';
import {TuiNumberFormat} from '@taiga-ui/core';
import {TuiInputNumber, tuiInputNumberOptionsProvider} from '@taiga-ui/kit';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, TuiInputNumber, TuiNumberFormat],
  providers: [
    /**
     * (Optional)
     * Customize default behavior for all InputNumber-s
     * inside specific Dependency Injection scope
     */
    tuiInputNumberOptionsProvider({
      min: 0,
      max: 100,
      postfix: '%',
    }),
  ],
})
export class Example {
  protected readonly control = new FormControl(42);
}
```

### How to Use (Template)

```html
<tui-textfield>
  <input
    tuiInputNumber
    [formControl]="control"
    [tuiNumberFormat]="{precision: 2}"
  />
</tui-textfield>
```

### Example

```html
<ng-template>
<tui-textfield [iconEnd]="icons.iconEnd" [iconStart]="icons.iconStart" [tuiTextfieldCleaner]="textfieldDoc.cleaner" [tuiTextfieldSize]="textfieldDoc.size" >
<label *ngIf="textfieldDoc.size !== 's'" tuiLabel > Enter a number </label>
<input tuiInputNumber [formControl]="control" [invalid]="controlDoc.invalid" [max]="max" [min]="min" [placeholder]="textfieldDoc.size === 's' ? 'Enter a number' : ''" [postfix]="postfix" [prefix]="prefix" [quantum]="quantum" [readOnly]="controlDoc.readonly" [step]="step" [tuiDisabled]="controlDoc.disabled" [tuiNumberFormat]="{ thousandSeparator: numberFormatDoc.thousandSeparator(), decimalSeparator: numberFormatDoc.decimalSeparator(), precision: numberFormatDoc.precision(), decimalMode: numberFormatDoc.decimalMode(), rounding: numberFormatDoc.rounding(), }" />
</tui-textfield>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [min] | `number | null` | value in the range of permitted values |
| [max] | `number | null` | value in the range of permitted values |
| [step] | `number` | Step to increase/decrease value with keyboard and buttons on the side |
| [prefix] | `string` | number |
| [postfix] | `string` | number |
| [quantum] | `number` |  |

### Usage Examples

#### Form control value

Form control value is of `null` (for empty textfield only) and `number` (all other cases) types. Use Validators.required (built-in validator provided by Angular team) with our FieldError pipe to notify your users about required field.

**Template:**
```html
<tui-textfield>
<label tuiLabel>Enter a number</label>
<input tuiInputNumber [formControl]="control" />
</tui-textfield>
<tui-error [error]="[] | tuiFieldError | async" [formControl]="control" />
<p><strong>Control value:</strong></p>
<code>{{ control.value | json }}</code>
```

**TypeScript:**
```ts
import {AsyncPipe, JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiError, TuiTextfield} from '@taiga-ui/core';
import {
    TuiFieldErrorPipe,
    TuiInputNumber,
    tuiValidationErrorsProvider,
} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        JsonPipe,
        ReactiveFormsModule,
        TuiError,
        TuiFieldErrorPipe,
        TuiInputNumber,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiValidationErrorsProvider({
            required: 'Required field',
        }),
    ],
})
export default class Example {
    protected readonly control = new FormControl<number | null>(
        null,
        Validators.required,
    );
}
```

#### Textfield-based

Use all powers of Textfield : put any number of Icons and Tooltips inside (and control their order and color), modify the size of the textbox and etc. Explore its documentation page for more customization options.

**Template:**
```html
<tui-textfield iconStart="@tui.euro" tuiTextfieldSize="m" >
<label tuiLabel>I am a label</label>
<input placeholder="I am placeholder" tuiInputNumber [(ngModel)]="value" />
<tui-icon icon="@tui.circle-alert" style="color: var(--tui-status-negative)" />
<tui-icon tuiTooltip="I am a hint" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber, TuiTooltip} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiIcon, TuiInputNumber, TuiTextfield, TuiTooltip],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: number | null = null;
}
```

#### Localization

TuiNumberFormat allows to customize separators specific for your locale.

**Template:**
```html
<tui-textfield>
<label tuiLabel>Type number like a German</label>
<input tuiInputNumber [tuiNumberFormat]="numberFormat" [(ngModel)]="value" />
<tui-icon tuiHintDirection="right" tuiTooltip="In Germany people use comma as decimal separator and point for thousands" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiIcon,
    TuiNumberFormat,
    type TuiNumberFormatSettings,
    TuiTextfield,
} from '@taiga-ui/core';
import {TuiInputNumber, TuiTooltip} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiIcon,
        TuiInputNumber,
        TuiNumberFormat,
        TuiTextfield,
        TuiTooltip,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: number | null = 1_234_567.89;
    protected numberFormat: Partial<TuiNumberFormatSettings> = {
        decimalSeparator: ',',
        thousandSeparator: '.',
    };
}
```

#### Affixes

Use `prefix` / `postfix` parameters to set non-removable text before / after the number. To get currency symbol use Currency pipe.

**Template:**
```html
<tui-textfield>
<label tuiLabel>Price</label>
<input tuiInputNumber [min]="0" [prefix]="'USD' | tuiCurrency" [(ngModel)]="value" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCurrencyPipe} from '@taiga-ui/addon-commerce';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiCurrencyPipe, TuiInputNumber, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: number | null = null;
}
```

#### Step

Positive value of `step` property enables sided button to increase / decrease the number by the specified step's value. Moreover, keyboard keys `ArrowUp` / `ArrowDown` will also work in the same way.

**Template:**
```html
<tui-textfield>
<label tuiLabel>Percentage</label>
<input postfix="%" tuiInputNumber [max]="100" [min]="0" [step]="1" [(ngModel)]="value" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputNumber, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: number | null = null;
}
```

#### Custom step buttons

**Template:**
```html
<tui-textfield [tuiTextfieldCleaner]="false">
<input tuiInputNumber [min]="0" [(ngModel)]="value" (keydown.arrowDown)="onStep(-1)" (keydown.arrowUp)="onStep(+1)" />
<button appearance="floating" size="s" tuiButton type="button" (click.prevent)="onStep(+100)" > + 100 </button>
<button appearance="floating" size="s" tuiButton type="button" (click.prevent)="onStep(+1000)" > + 1000 </button>
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiButton, TuiInputNumber, TuiTextfield],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: number | null = 1_000;

    protected onStep(step: number): void {
        this.value = Math.max(0, (this.value ?? 0) + step);
    }
}
```

**LESS:**
```less
tui-textfield {
    gap: 0.375rem;
}

[tuiButton] {
    border-radius: 10rem;
}
```

#### Fluid typography

Use FluidTypography directive to adjusts font size for the textfield value to fit in the textfield box.

**Template:**
```html
<tui-textfield [style.width.rem]="10">
<input postfix=" €" tuiFluidTypography tuiInputNumber [min]="0" [(ngModel)]="value" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiFluidTypography, TuiInputNumber} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiFluidTypography, TuiInputNumber, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = 10000;
}
```

#### Value transformer

`TuiValueTransformer` is a great opportunity to override default form control's value format without breaking component's internal logic. This example demonstrates how to use `NaN` -value for empty textfield instead of default `null` -value to keep type strictly "number" .

**Template:**
```html
<tui-textfield>
<input placeholder="Form control contains NaN" tuiInputNumber [(ngModel)]="value" />
</tui-textfield>
<p> Control value: <code>{{ value.toString() }}</code>
</p>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiValueTransformer} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber, tuiInputNumberOptionsProvider} from '@taiga-ui/kit';

class NaNTransformer extends TuiValueTransformer<number | null, number> {
    public override fromControlValue(value: number): number | null {
        return Number.isNaN(value) ? null : value;
    }

    public override toControlValue(value: number | null): number {
        return value ?? NaN;
    }
}

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputNumber, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputNumberOptionsProvider({
            valueTransformer: new NaNTransformer(),
        }),
    ],
})
export default class Example {
    protected value = NaN;
}
```

#### Quantum

Property `[quantum]` allows to set minimum indivisible value. Form control value never contains a number that is not divisible by value of this property. Even if user enters any invalid number, it will be rounded to the nearest valid one on `blur` event. In this example, form control value can only contain `0` , `0.05` , `0.1` , `0.15` ... `0.9` , `0.95` , `1` .

**Template:**
```html
<tui-textfield>
<input tuiInputNumber [max]="1" [min]="0" [quantum]="0.05" [(ngModel)]="value" />
</tui-textfield>
<p><strong>Control value:</strong></p>
<code>{{ value | json }}</code>
```

**TypeScript:**
```ts
import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, JsonPipe, TuiInputNumber, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = 0.5;
}
```
