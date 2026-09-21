# InputNumber

- **Package**: `KIT`
- **Type**: components

InputNumber is a form field to provide numerical input.

### Example

```html
<ng-template>
<tui-textfield [iconEnd]="icons.iconEnd" [iconStart]="icons.iconStart" [invalid]="controlDoc.invalid" [tuiAppearanceFocus]="appearance.focus" [tuiAppearanceState]="appearance.state" [tuiTextfieldCleaner]="textfieldDoc.cleaner" [tuiTextfieldSize]="textfieldDoc.size" > @if (textfieldDoc.size !== 's') { <label tuiLabel>Enter a number</label> } <input tuiInputNumber [formControl]="control" [max]="max" [min]="min" [placeholder]="textfieldDoc.size === 's' ? 'Enter a number' : ''" [postfix]="postfix" [prefix]="prefix" [quantum]="quantum" [readonly]="controlDoc.readonly" [step]="step" [tuiDisabled]="controlDoc.disabled" [tuiNumberFormat]="{ thousandSeparator: numberFormatDoc.thousandSeparator(), thousandSeparatorPattern: numberFormatDoc.thousandSeparatorPattern(), decimalSeparator: numberFormatDoc.decimalSeparator(), precision: numberFormatDoc.precision(), decimalMode: numberFormatDoc.decimalMode(), rounding: numberFormatDoc.rounding(), negativePattern: numberFormatDoc.negativePattern(), }" />
</tui-textfield>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [min] | `number | bigint | null` | value in the range of permitted values |
| [max] | `number | bigint | null` | value in the range of permitted values |
| [step] | `number | bigint` | step to increase/decrease value with keyboard and buttons on the side |
| [prefix] | `string` | number |
| [postfix] | `string` | number |
| [quantum] | `number | bigint` |  |

### Usage Examples

#### Number as form control value

By default, form control value is `number` or `null` when empty

**Template:**
```html
<tui-textfield>
<label tuiLabel>Enter a number</label>
<input tuiInputNumber [formControl]="control" />
</tui-textfield>
<tui-error [formControl]="control" />
<p>
<strong>Control value:</strong>
<code>{{ control.value | json }}</code>
</p>
```

**TypeScript:**
```ts
import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiError, tuiValidationErrorsProvider} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

@Component({
    imports: [JsonPipe, ReactiveFormsModule, TuiError, TuiInputNumber],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiValidationErrorsProvider({required: 'Required field'})],
})
export default class Example {
    protected readonly control = new FormControl<number | null>(
        null,
        Validators.required,
    );
}
```

#### BigInt as form control value

Form control value type can be changed to `bigint` . Just put `bigint` attribute and set new values for `min` , `max` and `precision` properties. For a more complex case with both extremely large integer and decimal parts, see this example.

**Template:**
```html
<tui-textfield>
<label tuiLabel>Enter a really huge integer</label>
<input bigint tuiInputNumber [(ngModel)]="value" />
</tui-textfield>
<p>
<strong>Control value:</strong>
<code>{{ stringified() }}</code>
</p>
```

**TypeScript:**
```ts
import {Component, computed, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiNumberFormatProvider} from '@taiga-ui/core';
import {TuiInputNumber, tuiInputNumberOptionsProvider} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputNumber],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputNumberOptionsProvider({
            min: -Infinity,
            max: Infinity,
        }),
        tuiNumberFormatProvider({precision: 0}),
    ],
})
export default class Example {
    protected readonly value = signal<bigint | null>(
        BigInt(`777${Number.MAX_SAFE_INTEGER}00`),
    );

    protected readonly stringified = computed((x = this.value()) =>
        typeof x === 'bigint' ? `${x}n` : 'null',
    );
}
```

#### Textfield-based

Use all powers of `Textfield` : put any number of Icons and Tooltips inside (and control their order and color), modify the size of the textbox and etc. Explore its documentation page for more customization options.

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
import {TuiIcon} from '@taiga-ui/core';
import {TuiInputNumber, TuiTooltip} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiIcon, TuiInputNumber, TuiTooltip],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: number | null = null;
}
```

#### Localization

TuiNumberFormat allows to customize separators specific for your locale. Explore a more advanced use case of `TuiNumberFormat` — grouping digits of the integer part in any way.

**Template:**
```html
<tui-textfield>
<label tuiLabel>Type number like a German</label>
<input tuiInputNumber [tuiNumberFormat]="numberFormat" [(ngModel)]="value" />
<tui-icon tuiHintDirection="end" tuiTooltip="In Germany people use comma as decimal separator and point for thousands" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiNumberFormat, type TuiNumberFormatSettings} from '@taiga-ui/core';
import {TuiInputNumber, TuiTooltip} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiIcon, TuiInputNumber, TuiNumberFormat, TuiTooltip],
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

Use `prefix` / `postfix` parameters to set non-removable text before / after the number. For currency symbols, use the Currency pipe. TuiNumberFormat with `negativePattern: 'minusFirst'` allow to position the minus sign before the currency symbol.

**Template:**
```html
<tui-textfield>
<label tuiLabel>Balance</label>
<input tuiInputNumber [prefix]="'USD' | tuiCurrency" [tuiNumberFormat]="{negativePattern: 'minusFirst'}" [(ngModel)]="value" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCurrencyPipe} from '@taiga-ui/addon-commerce';
import {TuiNumberFormat} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiCurrencyPipe, TuiInputNumber, TuiNumberFormat],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: number | null = -42;
}
```

#### Step

A positive value of the `step` property enables side buttons to increase / decrease the number by the specified step value. Additionally, the `ArrowUp` / `ArrowDown` keyboard keys provide the same functionality.

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
import {TuiInputNumber} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputNumber],
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
import {TuiButton} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiButton, TuiInputNumber],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
[tuiButton] {
    border-radius: 10rem;
    margin-inline-start: 0.125rem;
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
import {TuiFluidTypography, TuiInputNumber} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiFluidTypography, TuiInputNumber],
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
import {TuiInputNumber, tuiInputNumberOptionsProvider} from '@taiga-ui/kit';

class NaNTransformer extends TuiValueTransformer<number | null, number> {
    public override fromControlValue(value: number): number | null {
        return Number.isNaN(value) ? null : value;
    }

    public override toControlValue(value: number | null): number {
        return value ?? Number.NaN;
    }
}

@Component({
    imports: [FormsModule, TuiInputNumber],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiInputNumberOptionsProvider({valueTransformer: new NaNTransformer()})],
})
export default class Example {
    protected value = Number.NaN;
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
import {TuiInputNumber} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, JsonPipe, TuiInputNumber],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = 0.5;
}
```

#### Thousand separator pattern

TuiNumberFormat with `thousandSeparatorPattern` allows to group digits of the integer part in any way. It is a function that takes a string of digits and returns an array of groups. For example, large numbers in Japan are grouped by four digits.

**Template:**
```html
<tui-textfield>
<label tuiLabel>Amount in yen</label>
<input prefix="¥" tuiInputNumber [tuiNumberFormat]="numberFormat" [(ngModel)]="value" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiNumberFormat, type TuiNumberFormatSettings} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputNumber, TuiNumberFormat],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: number | null = 123_456_789;

    protected readonly numberFormat: Partial<TuiNumberFormatSettings> = {
        thousandSeparator: ',',
        // 1,2345,6789
        thousandSeparatorPattern: (digits) =>
            digits.match(/\d{1,4}(?=(?:\d{4})*$)/g) ?? [],
    };
}
```

#### Thousand separator pattern using Intl

Built-in `Intl.NumberFormat` knows digit grouping rules of every locale. Use it to create `thousandSeparatorPattern` for any locale, e.g. for the Indian numbering system.

**Template:**
```html
<tui-textfield>
<label tuiLabel>Amount in rupees</label>
<input prefix="₹" tuiInputNumber [min]="0" [tuiNumberFormat]="numberFormat" [(ngModel)]="value" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component, LOCALE_ID} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiNumberFormat, type TuiNumberFormatSettings} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

import {intlThousandSeparatorPattern} from './intl-pattern';

@Component({
    imports: [FormsModule, TuiInputNumber, TuiNumberFormat],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [{provide: LOCALE_ID, useValue: 'en-IN'}],
})
export default class Example {
    protected value: number | null = 123_456_789;

    protected readonly numberFormat: Partial<TuiNumberFormatSettings> = {
        thousandSeparator: ',',
        thousandSeparatorPattern: intlThousandSeparatorPattern(),
    };
}
```

#### Large integer and large decimal parts

JavaScript’s built‑in `number` type loses precision when a value contains too many digits in either the integer part, the decimal part, or both. The built‑in `bigint` type avoids this issue but supports only integers. If you need to preserve all extremely large digits of both parts, you can override the built‑in `TuiValueTransformer` and store the number as an `{significand: bigint; exp: number}` instead.

**Template:**
```html
<tui-textfield>
<input bigintWithDecimal postfix=" per day" prefix="$" tuiInputNumber [max]="infinity" [min]="0" [tuiNumberFormat]="{precision: infinity, decimalSeparator: '.'}" [(ngModel)]="value" />
</tui-textfield>
<p><strong>Control value:</strong></p>
<pre><code>{{ stringified() }}</code></pre>
```

**TypeScript:**
```ts
import {Component, computed, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiNumberFormat} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

import {BigIntWithDecimal, type ControlValue} from './transformer';

@Component({
    imports: [BigIntWithDecimal, FormsModule, TuiInputNumber, TuiNumberFormat],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly infinity = Infinity;

    protected readonly value = signal<ControlValue>({
        significand: 123456700042n,
        exp: -5,
    });

    protected readonly stringified = computed(() =>
        JSON.stringify(
            this.value(),
            (_, x) => (typeof x === 'bigint' ? `${String(x)}n` : x),
            2,
        ),
    );
}
```

If you need to preserve all extremely large digits of both parts, you can override the
built‑in
`TuiValueTransformer`
and store the number as an
`&#123;significand: bigint; exp: number&#125;`
instead.
