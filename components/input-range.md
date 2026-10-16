# InputRange

- **Package**: `KIT`
- **Type**: components

`InputRange` = `Textfield` + `InputNumber` × 2 + `Range` + ❤️ 2

### Example

```html
<ng-template>
<tui-input-range [content]="content" [formControl]="control" [invalid]="controlDoc.invalid" [keySteps]="keySteps || undefined" [max]="max" [min]="min" [postfix]="postfix" [prefix]="prefix" [quantum]="quantum" [readonly]="controlDoc.readonly" [segments]="segments" [step]="step" [style.--tui-thumb-size.px]="thumbSize" [tuiDisabled]="controlDoc.disabled" [tuiNumberFormat]="{ decimalMode: numberFormatDoc.decimalMode(), rounding: numberFormatDoc.rounding(), thousandSeparator: numberFormatDoc.thousandSeparator(), thousandSeparatorPattern: numberFormatDoc.thousandSeparatorPattern(), decimalSeparator: numberFormatDoc.decimalSeparator(), precision: numberFormatDoc.precision(), negativePattern: numberFormatDoc.negativePattern(), }" [tuiTextfieldSize]="textfieldDoc.size" />
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [min] | `number` | value in the range of permitted values |
| [max] | `number` | value in the range of permitted values |
| [prefix] | `readonly [string, string] \| null` | number |
| [postfix] | `readonly [string, string] \| null` | number |
| [content] | `[PolymorpheusContent, PolymorpheusContent]` | a template for custom view of the selected value. |
| [quantum] | `number` |  |
| [segments] | `number` | for no ticks) |
| [step] | `number` |  |
| [keySteps] | `TuiKeySteps` | anchor points of non-uniform format between value and position |
| [style.--tui-thumb-size.px] | `number` | size of thumb |

### Usage Examples

#### Example 1

TuiNumberFormat allows to customize separators specific for your locale.

**Template:**
```html
<tui-input-range [max]="max" [min]="min" [tuiNumberFormat]="numberFormat" [(ngModel)]="value" > Type number like a German </tui-input-range>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiNumberFormat, type TuiNumberFormatSettings} from '@taiga-ui/core';
import {TuiInputRange} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputRange, TuiNumberFormat],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly max = 1_000_000;
    protected readonly min = 0;
    protected value = [0.42, 123_456.78];

    protected readonly numberFormat: Partial<TuiNumberFormatSettings> = {
        precision: 2,
        decimalSeparator: ',',
        thousandSeparator: '.',
    };
}
```

#### Example 2

Use `prefix` / `postfix` parameters to set non-removable text before / after the number. To get currency symbol use Currency pipe.

**Template:**
```html
@let currency = 'USD' | tuiCurrency; <tui-input-range [max]="999" [min]="0" [postfix]="[' per day', ' per day']" [prefix]="[currency, currency]" [(ngModel)]="value" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCurrencyPipe} from '@taiga-ui/addon-commerce';
import {TuiInputRange} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiCurrencyPipe, TuiInputRange],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = [42, 777];
}
```

#### Example 3

Use mixin `tui-slider-ticks-labels` to arrange ticks' labels (it places them strictly below ticks).

**Template:**
```html
<tui-input-range [formControl]="control" [max]="100" [min]="0" [postfix]="['%', '%']" [segments]="5" [step]="20" > Select volume range </tui-input-range>
<div class="ticks-labels">
<tui-icon icon="@tui.volume-x" />
<span>20%</span>
<span>40%</span>
<span>60%</span>
<span>80%</span>
<tui-icon icon="@tui.volume-2" />
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon} from '@taiga-ui/core';
import {TuiInputRange} from '@taiga-ui/kit';

@Component({
    imports: [ReactiveFormsModule, TuiIcon, TuiInputRange],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl([20, 40]);
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

.ticks-labels {
    .tui-slider-ticks-labels();
}

tui-icon {
    block-size: 1.25rem;
    font-size: 1rem;
}
```

#### Example 4

**Template:**
```html
<tui-input-range [content]="[content, content]" [max]="10" [min]="0" [postfix]="[value[0] | i18nPlural: pluralize, value[1] | i18nPlural: pluralize]" [(ngModel)]="value" > Desired departure day </tui-input-range>
<ng-template #content let-value > @switch (value) { @case (0) { Today } @case (1) { Tomorrow } @case (7) { In a week } @default { {{ value }}{{ value | i18nPlural: pluralize }} } } </ng-template>
```

**TypeScript:**
```ts
import {I18nPluralPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiInputRange} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, I18nPluralPipe, TuiInputRange],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = [0, 7];

    // See https://angular.dev/api/common/I18nPluralPipe#example
    protected readonly pluralize = {
        '=1': ' day later',
        other: ' days later',
    };
}
```

#### Example 5

Key steps – anchor points of non-uniform format between control's value and slider's position. When `[keySteps]` property is enabled, `[step]` means percentage of total track length.

**Template:**
```html
<tui-input-range [keySteps]="keySteps" [max]="max" [min]="min" [segments]="segments" [step]="step" [(ngModel)]="value" > Not linear growing sliders </tui-input-range>
<div class="ticks-labels"> @for (label of ticksLabels; track label) { <span>{{ label }}</span> } </div>
<p>
<strong>Control value:</strong>
<output>
<code>{{ value | json }}</code>
</output>
</p>
```

**TypeScript:**
```ts
import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiKeySteps} from '@taiga-ui/core';
import {TuiInputRange} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, JsonPipe, TuiInputRange],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = [100_000, 500_000];
    protected readonly min = 0;
    protected readonly max = 1_000_000;
    protected readonly step = 5;
    protected readonly ticksLabels = ['0', '10K', '100K', '500k', '1000K'];
    protected readonly segments = this.ticksLabels.length - 1;

    protected readonly keySteps: TuiKeySteps = [
        // [percent, value]
        [0, this.min],
        [25, 10_000],
        [50, 100_000],
        [75, 500_000],
        [100, this.max],
    ];
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

.ticks-labels {
    .tui-slider-ticks-labels();
}
```

#### Example 6

Property `[quantum]` allows to set minimum indivisible value. Form control value never contains a number that is not divisible by value of this property. Even if user enters any invalid number, it will be rounded to the nearest valid one on `blur` event. In this example, form control value can only contain `0` , `0.05` , `0.1` , `0.15` ... `0.9` , `0.95` , `1` .

**Template:**
```html
<tui-input-range [max]="1" [min]="0" [quantum]="quantum" [step]="step" [(ngModel)]="value" />
<p>
<strong>Control value:</strong>
<output>
<code>{{ value | json }}</code>
</output>
</p>
```

**TypeScript:**
```ts
import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiInputRange} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, JsonPipe, TuiInputRange],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = [0.25, 0.75];
    // Form control can only contain decimal number which is multiple of this constant
    protected quantum = 0.05;

    // But granularity of each discrete slider step is equal to this constant
    protected readonly step = 0.25;
}
```

#### Example 7

**Template:**
```html
<tui-input-range [content]="[value[0] ? '' : 'Today', value[1] ? '' : 'Today']" [max]="0" [min]="-30" [postfix]="[value[0] | i18nPlural: pluralize, value[1] | i18nPlural: pluralize]" [(ngModel)]="value" > How far back to look </tui-input-range>
<p>
<strong>Control value:</strong>
<output>
<code>{{ value | json }}</code>
</output>
</p>
```

**TypeScript:**
```ts
import {I18nPluralPipe, JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {CHAR_ZERO_WIDTH_SPACE} from '@taiga-ui/cdk';
import {tuiInputNumberOptionsProvider, TuiInputRange} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, I18nPluralPipe, JsonPipe, TuiInputRange],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputNumberOptionsProvider({
            minusSign: CHAR_ZERO_WIDTH_SPACE,
            prefix: CHAR_ZERO_WIDTH_SPACE, // Make minus non-erasable
        }),
    ],
})
export default class Example {
    protected value = [-30, 0];

    // See https://angular.dev/api/common/I18nPluralPipe#example
    protected readonly pluralize = {
        '=-1': ' day ago',
        other: ' days ago',
    };
}
```
