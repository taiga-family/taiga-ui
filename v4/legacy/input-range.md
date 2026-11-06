# InputRangeLegacy

- **Package**: `LEGACY`
- **Type**: components

This version of the component is deprecated and will be removed in the next major version. Use new version of InputRange instead! Component to input a range of values Number formatting can be customized by using `tuiNumberFormat` directive

### How to Use (Import)

```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiInputRangeModule} from '@taiga-ui/legacy';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    ReactiveFormsModule,
    TuiInputRangeModule,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<ng-container [formGroup]="testForm">
  <tui-input-range
    class="input-wrapper"
    formControlName="testValue"
  >
    placeholder
  </tui-input-range>
</ng-container>
```

### Example

```html
<ng-template>
<tui-input-range [formControl]="control" [keySteps]="keySteps" [leftValueContent]="leftValueContent" [max]="max" [min]="min" [pluralize]="pluralize" [quantum]="quantum" [readOnly]="readOnly" [rightValueContent]="rightValueContent" [segments]="segments" [steps]="steps" [tuiNumberFormat]="{ decimalMode: numberFormatDoc.decimalMode(), rounding: numberFormatDoc.rounding(), thousandSeparator: numberFormatDoc.thousandSeparator(), decimalSeparator: numberFormatDoc.decimalSeparator(), }" [tuiTextfieldLabelOutside]="labelOutside" [tuiTextfieldSize]="size" > Just a very long label. Don't afraid it does not overflow the wrapper, the label is just cut off with ellipsis when it does not fit the wrapper. </tui-input-range>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| disabled | `boolean` | ) |
| [min] | `number | null` | The lowest value in the range of permitted values |
| [max] | `number | null` | The greatest value in the range of permitted values |
| [quantum] | `number` | Minimum indivisible value |
| [steps] | `number` | Number of actual discrete slider steps |
| [segments] | `number` | for no ticks) |
| [keySteps] | `TuiKeySteps` | Anchor points of non-uniform format between value and position |
| [leftValueContent] | `PolymorpheusContent` | selected value. |
| [rightValueContent] | `PolymorpheusContent` | selected value. |
| [pluralize] | `Record<string, string>` |  |
| [readOnly] | `boolean` | Component is read only |
| [tuiTextfieldLabelOutside] | `boolean` |  |
| [tuiTextfieldSize] | `TuiSizeL` | Size |

### Usage Examples

#### Basic

Look into this example to understand difference between input-props `[steps]` and `[quantum]` .

**Template:**
```html
<tui-input-range [formControl]="control" [max]="max" [min]="min" [quantum]="quantum" [steps]="steps" [tuiTextfieldLabelOutside]="true" [tuiTextfieldSize]="'m'" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiInputRangeModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputRangeModule, TuiTextfieldControllerModule],
    templateUrl: './index.html',
    styles: [
        `
            tui-input-range {
                max-width: 30rem;
            }
        `,
    ],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly min = 0;
    protected readonly max = 20;
    protected readonly sliderStep = 1;
    protected readonly steps = (this.max - this.min) / this.sliderStep;
    protected readonly quantum = 0.00001;

    protected readonly control = new FormControl([3.14159, 15]);
}
```

#### Override number format

Number formatting can be customized by using TUI_NUMBER_FORMAT .

**Template:**
```html
<tui-input-range [formControl]="control" [max]="max" [min]="min" [tuiTextfieldLabelOutside]="true" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiNumberFormatProvider} from '@taiga-ui/core';
import {TuiInputRangeModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputRangeModule, TuiTextfieldControllerModule],
    templateUrl: './index.html',
    styles: [
        `
            tui-input-range {
                max-width: 30rem;
            }
        `,
    ],
    encapsulation,
    changeDetection,
    providers: [
        tuiNumberFormatProvider({
            decimalSeparator: '.',
            thousandSeparator: ',',
            decimalMode: 'always',
        }),
    ],
})
export default class Example {
    protected readonly max = 50_000_001;
    protected readonly min = 5_001;

    protected readonly control = new FormControl([this.min, this.max / 2]);
}
```

#### Custom value content

**Template:**
```html
<tui-input-range [formControl]="control" [leftValueContent]="valueContent" [max]="10" [min]="0" [pluralize]="pluralize" [rightValueContent]="valueContent" > Desired departure day </tui-input-range>
<ng-template #valueContent let-value >
<ng-container [ngSwitch]="value">
<span *ngSwitchCase="0">Today</span>
<span *ngSwitchCase="1">Tomorrow</span>
<span *ngSwitchCase="7">In a week</span>
<span *ngSwitchDefault>{{ value }}&nbsp;{{ value | i18nPlural: pluralize }}</span>
</ng-container>
</ng-template>
```

**TypeScript:**
```ts
import {I18nPluralPipe, NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiInputRangeModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        I18nPluralPipe,
        NgSwitch,
        NgSwitchCase,
        NgSwitchDefault,
        ReactiveFormsModule,
        TuiInputRangeModule,
    ],
    templateUrl: './index.html',
    styles: [
        `
            tui-input-range {
                max-width: 30rem;
            }
        `,
    ],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl([0, 7]);

    // See https://angular.io/api/common/I18nPluralPipe
    protected readonly pluralize = {
        '=0': 'days later',
        '=1': 'day later',
        other: 'days later',
    };
}
```

#### Visual segments + labels for ticks

**Template:**
```html
<div class="wrapper">
<tui-input-range [formControl]="control" [max]="100" [min]="0" [pluralize]="pluralize" [segments]="5" [steps]="5" > Select volume range </tui-input-range>
<div class="ticks-labels">
<span>
<tui-icon icon="@tui.volume-x" />
</span>
<span>20%</span>
<span>40%</span>
<span>60%</span>
<span>80%</span>
<span>
<tui-icon icon="@tui.volume" />
</span>
</div>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon} from '@taiga-ui/core';
import {TuiInputRangeModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiIcon, TuiInputRangeModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl([20, 40]);

    // See https://angular.io/api/common/I18nPluralPipe
    protected readonly pluralize = {
        other: '%',
    };
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.wrapper {
    max-inline-size: 30rem;
}

.ticks-labels {
    .tui-slider-ticks-labels();

    color: var(--tui-text-secondary);
    align-items: center;
    margin-block-start: 0.25rem;
}

tui-icon {
    border-width: 0.25rem;
}
```

#### KeySteps

**Template:**
```html
<div class="wrapper">
<tui-input-range id="input-range-with-key-steps" [formControl]="control" [keySteps]="keySteps" [max]="max" [min]="min" [segments]="segments" [steps]="totalSteps" > Not linear growing sliders </tui-input-range>
<div class="ticks-labels">
<span *ngFor="let label of ticksLabels">{{ label }}</span>
</div>
</div>
<p class="tui-space_top-12 tui-space_bottom-0"> Control value: <output for="input-range-with-key-steps">
<code>{{ control.value | json }}</code>
</output>
</p>
```

**TypeScript:**
```ts
import {JsonPipe, NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiKeySteps} from '@taiga-ui/kit';
import {TuiInputRangeModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [JsonPipe, NgForOf, ReactiveFormsModule, TuiInputRangeModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl([100_000, 500_000]);
    protected readonly max = 1_000_000;
    protected readonly min = 0;
    protected readonly totalSteps = 100;
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

.wrapper {
    max-inline-size: 30rem;
}

.ticks-labels {
    .tui-slider-ticks-labels();

    color: var(--tui-text-secondary);
    margin-block-start: 0.25rem;
}
```

#### Using negative values without minus sign

**Template:**
```html
<tui-input-range absTransformer class="tui-space_bottom-8" [formControl]="control" [leftValueContent]="control.value?.[0] ? '' : 'Today'" [max]="0" [min]="-30" [pluralize]="pluralize" [rightValueContent]="control.value?.[1] ? '' : 'Today'" > How far back to look </tui-input-range> Control value: <code>{{ control.value | json }}</code>
```

**TypeScript:**
```ts
import {JsonPipe} from '@angular/common';
import {Component, Directive} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiProvide, TuiValueTransformer} from '@taiga-ui/cdk';
import {TUI_NUMBER_VALUE_TRANSFORMER, TuiInputRangeModule} from '@taiga-ui/legacy';

@Directive({
    standalone: true,
    selector: '[absTransformer]',
    providers: [tuiProvide(TUI_NUMBER_VALUE_TRANSFORMER, AbsTransformer)],
})
class AbsTransformer extends TuiValueTransformer<number | null, number | null> {
    public override fromControlValue(value: number | null): number | null {
        return value && Math.abs(value);
    }

    public override toControlValue(value: number | null): number | null {
        return value && -1 * Math.abs(value);
    }
}

@Component({
    standalone: true,
    imports: [AbsTransformer, JsonPipe, ReactiveFormsModule, TuiInputRangeModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl([-30, 0]);

    // See https://angular.io/api/common/I18nPluralPipe
    protected readonly pluralize = {
        '=-1': 'day ago',
        other: 'days ago',
    };
}
```
