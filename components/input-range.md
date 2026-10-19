# InputRange

- **Package**: `KIT`
- **Type**: components

`InputRange` = `Textfield` + `InputNumber` × 2 + `Range` + ❤️ 2

### How to Use (Import)

```ts
import {FormsModule} from '@angular/forms';
import {TuiInputRange} from '@taiga-ui/kit';

@Component({
  imports: [
    // ...
    FormsModule,
    TuiInputRange,
  ],
  // ...
})
export class Example {
  value = [0, 0];
}
```

### How to Use (Template)

```html
<tui-input-range [(ngModel)]="value">
  <label tuiLabel>Text above numbers</label>
</tui-input-range>
```

### Example

```html
<ng-template>
<tui-input-range [content]="content" [formControl]="control" [invalid]="controlDoc.invalid" [keySteps]="keySteps" [max]="max" [min]="min" [postfix]="postfix" [prefix]="prefix" [quantum]="quantum" [readOnly]="controlDoc.readonly" [segments]="segments" [step]="step" [tuiDisabled]="controlDoc.disabled" [tuiNumberFormat]="{ decimalMode: numberFormatDoc.decimalMode(), rounding: numberFormatDoc.rounding(), thousandSeparator: numberFormatDoc.thousandSeparator(), decimalSeparator: numberFormatDoc.decimalSeparator(), precision: numberFormatDoc.precision(), }" [tuiTextfieldSize]="textfieldDoc.size" />
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [min] | `number` | value in the range of permitted values |
| [max] | `number` | value in the range of permitted values |
| [prefix] | `readonly [string, string] | null` | number |
| [postfix] | `readonly [string, string] | null` | number |
| [content] | `[PolymorpheusContent, PolymorpheusContent]` | A template for custom view of the selected value. |
| [quantum] | `number` |  |
| [segments] | `number` | for no ticks) |
| [step] | `number` |  |
| [keySteps] | `TuiKeySteps` | Anchor points of non-uniform format between value and position |

### Usage Examples

#### Override number format

TuiNumberFormat allows to customize separators specific for your locale.

**Template:**
```html
<tui-input-range [max]="max" [min]="min" [tuiNumberFormat]="numberFormat" [(ngModel)]="value" >
<label tuiLabel>Type number like a German</label>
</tui-input-range>
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
    standalone: true,
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

#### Affixes

Use `prefix` / `postfix` parameters to set non-removable text before / after the number. To get currency symbol use Currency pipe.

**Template:**
```html
<tui-input-range *tuiLet="'USD' | tuiCurrency as currency" [max]="999" [min]="0" [postfix]="[' per day', ' per day']" [prefix]="[currency, currency]" [(ngModel)]="value" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCurrencyPipe} from '@taiga-ui/addon-commerce';
import {TuiLet} from '@taiga-ui/cdk';
import {TuiInputRange} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiCurrencyPipe, TuiInputRange, TuiLet],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = [42, 777];
}
```

#### Visual segments + labels for ticks

Use mixin `tui-slider-ticks-labels` to arrange ticks' labels (it places them strictly below ticks).

**Template:**
```html
<tui-input-range [formControl]="control" [max]="100" [min]="0" [postfix]="['%', '%']" [segments]="5" [step]="20" >
<label tuiLabel>Select volume range</label>
</tui-input-range>
<div class="ticks-labels">
<span>
<tui-icon icon="@tui.volume-x" />
</span>
<span>20%</span>
<span>40%</span>
<span>60%</span>
<span>80%</span>
<span>
<tui-icon icon="@tui.volume-2" />
</span>
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
    standalone: true,
    imports: [ReactiveFormsModule, TuiIcon, TuiInputRange],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl([20, 40]);
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.ticks-labels {
    .tui-slider-ticks-labels(l);

    color: var(--tui-text-secondary);
    align-items: center;
    margin-block-start: 0.25rem;
}

tui-icon {
    border-block-width: 0.25rem;
}
```

#### Custom value content

**Template:**
```html
<tui-input-range [content]="[content, content]" [max]="10" [min]="0" [postfix]="[value[0] | i18nPlural: pluralize, value[1] | i18nPlural: pluralize]" [(ngModel)]="value" >
<label tuiLabel>Desired departure day</label>
</tui-input-range>
<ng-template #content let-value >
<ng-container [ngSwitch]="value">
<span *ngSwitchCase="0">Today</span>
<span *ngSwitchCase="1">Tomorrow</span>
<span *ngSwitchCase="7">In a week</span>
<span *ngSwitchDefault>{{ value }}{{ value | i18nPlural: pluralize }}</span>
</ng-container>
</ng-template>
```

**TypeScript:**
```ts
import {I18nPluralPipe, NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiInputRange} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        I18nPluralPipe,
        NgSwitch,
        NgSwitchCase,
        NgSwitchDefault,
        TuiInputRange,
    ],
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

#### KeySteps

Key steps – anchor points of non-uniform format between control's value and slider's position. When `[keySteps]` property is enabled, `[step]` means percentage of total track length.

**Template:**
```html
<tui-input-range [keySteps]="keySteps" [max]="max" [min]="min" [segments]="segments" [step]="step" [(ngModel)]="value" >
<label tuiLabel>Not linear growing sliders</label>
</tui-input-range>
<div class="ticks-labels">
<span *ngFor="let label of ticksLabels">{{ label }}</span>
</div>
<p>
<strong>Control value:</strong>
<output>
<code>{{ value | json }}</code>
</output>
</p>
```

**TypeScript:**
```ts
import {JsonPipe, NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiInputRange, type TuiKeySteps} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, JsonPipe, NgForOf, TuiInputRange],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
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
@import '@taiga-ui/core/styles/taiga-ui-local';

.ticks-labels {
    .tui-slider-ticks-labels(l);

    color: var(--tui-text-secondary);
    margin-block-start: 0.25rem;
}
```

#### Quantum

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
    standalone: true,
    imports: [FormsModule, JsonPipe, TuiInputRange],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = [0.25, 0.75];
    // Form control can only contain decimal number which is multiple of this constant
    protected quantum = 0.05;

    // But granularity of each discrete slider step equals to this constant
    protected readonly step = 0.25;
}
```

#### Using negative values without minus sign

**Template:**
```html
<tui-input-range [content]="[value[0] ? '' : 'Today', value[1] ? '' : 'Today']" [max]="0" [min]="-30" [postfix]="[value[0] | i18nPlural: pluralize, value[1] | i18nPlural: pluralize]" [(ngModel)]="value" >
<label tuiLabel>How far back to look</label>
</tui-input-range>
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
import {tuiInputNumberOptionsProvider, TuiInputRange} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, I18nPluralPipe, JsonPipe, TuiInputRange],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiInputNumberOptionsProvider({
            valueTransformer: {
                fromControlValue(value: number | null): number | null {
                    return value && Math.abs(value);
                },
                toControlValue(value: number | null): number | null {
                    return value && -1 * Math.abs(value);
                },
            },
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
