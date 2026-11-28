# InputSliderLegacy

- **Package**: `LEGACY`
- **Type**: components

This version of the component is deprecated and will be removed in the next major version. Use new version of InputSlider instead! Component to input a limited range Number formatting can be customized by using TUI_NUMBER_FORMAT

### How to Use (Import)

```ts
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiInputSliderModule} from '@taiga-ui/legacy';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    ReactiveFormsModule,
    TuiInputSliderModule,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<form [formGroup]="testForm">
  <tui-input-slider
    formControlName="testValue"
    max="1000"
    quantum="10"
  ></tui-input-slider>
</form>
```

### Example

```html
<ng-template>
<tui-input-slider [focusable]="focusable" [formControl]="control" [keySteps]="keySteps" [max]="max" [min]="min" [pseudoActive]="pseudoPressed" [pseudoFocus]="pseudoFocused" [pseudoHover]="pseudoHovered" [pseudoInvalid]="pseudoInvalid" [quantum]="quantum" [readOnly]="readOnly" [segments]="segments" [steps]="steps" [tuiHintAppearance]="hintAppearance" [tuiHintContent]="hintContent" [tuiHintDirection]="hintDirection" [tuiNumberFormat]="{ decimalMode: numberFormatDoc.decimalMode(), rounding: numberFormatDoc.rounding(), thousandSeparator: numberFormatDoc.thousandSeparator(), decimalSeparator: numberFormatDoc.decimalSeparator(), }" [tuiTextfieldCleaner]="cleaner" [tuiTextfieldCustomContent]="customContentSelected" [tuiTextfieldIconLeft]="iconStart" [tuiTextfieldLabelOutside]="labelOutside" [tuiTextfieldPostfix]="postfix" [tuiTextfieldPrefix]="prefix" [tuiTextfieldSize]="size" [valueContent]="valueContent" > Range </tui-input-slider>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| disabled | `boolean` | ) |
| [min] | `number` | The lowest value in the range of permitted values |
| [max] | `number` | The greatest value in the range of permitted values |
| [quantum] | `number` | Minimum indivisible value |
| [steps] | `number` |  |
| [segments] | `number[] | number` | for no ticks) |
| [keySteps] | `TuiKeySteps` | Anchor points of non-uniform format between value and position |
| [valueContent] | `PolymorpheusContent` | A template for custom view of selected value. |

### Usage Examples

#### Basic

Look into this example to understand difference between input-props `[steps]` and `[quantum]` .

**Template:**
```html
<tui-input-slider [formControl]="control" [max]="max" [min]="min" [quantum]="quantum" [steps]="steps" [tuiHintContent]="hint" > Select interest rate </tui-input-slider>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHint} from '@taiga-ui/core';
import {TuiInputSliderModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiHint, TuiInputSliderModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly min = 5;
    protected readonly max = 20;
    protected readonly sliderStep = 1;
    protected readonly steps = (this.max - this.min) / this.sliderStep;
    protected readonly quantum = 0.01;

    protected readonly hint = `Dragging slider change input by ${this.sliderStep}.\nBut you can type decimal number which is multiple of ${this.quantum}.`;

    protected readonly control = new FormControl(6.5);
}
```

#### With slider segments + ticks labels

**Template:**
```html
<tui-input-slider [formControl]="control" [max]="max" [min]="min" [segments]="5" > Rate your mind </tui-input-slider>
<div class="slider-ticks-labels">
<span>
<button appearance="icon" iconStart="@tui.thumbs-down" size="xs" tuiIconButton type="button" (click)="decrease()" > Decrease </button>
</span>
<span>20%</span>
<span>40%</span>
<span>60%</span>
<span>80%</span>
<span>
<button appearance="icon" iconStart="@tui.thumbs-up" size="xs" tuiIconButton type="button" (click)="increase()" > Increase </button>
</span>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiInputSliderModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiButton, TuiInputSliderModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl(40);
    protected readonly segments = 5;
    protected readonly max = 100;
    protected readonly min = 0;

    protected increase(): void {
        this.control.patchValue(Math.min((this.control.value ?? 0) + 20, this.max));
    }

    protected decrease(): void {
        this.control.patchValue(Math.max((this.control.value ?? 0) - 20, this.min));
    }
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.slider-ticks-labels {
    .tui-slider-ticks-labels();

    color: var(--tui-text-secondary);
    margin-block-start: 0.5rem;
}
```

#### KeySteps

**Template:**
```html
<tui-input-slider [formControl]="control" [keySteps]="keySteps" [max]="max" [min]="min" [segments]="ticksLabels.length - 1" [steps]="totalSteps" > Not linear growing slider </tui-input-slider>
<div class="slider-ticks-labels">
<span *ngFor="let label of ticksLabels">{{ label }}</span>
</div>
<p> Control value: <code>{{ control.value }}</code>
</p>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiKeySteps} from '@taiga-ui/kit';
import {TuiInputSliderModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [NgForOf, ReactiveFormsModule, TuiInputSliderModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl(10_000);
    protected readonly max = 1_000_000;
    protected readonly min = 0;
    protected readonly totalSteps = 100;
    protected readonly ticksLabels = ['0', '10K', '100K', '500k', '1000K'];

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

.slider-ticks-labels {
    .tui-slider-ticks-labels();

    color: var(--tui-text-secondary);
    margin-block-start: 0.5rem;
}
```

#### With right label

**Template:**
```html
<tui-input-slider tuiHintContent="Select the answer to see how the right custom content changes" [max]="10" [min]="0" [tuiTextfieldCustomContent]="userAnswer === 4 ? right : wrong" [(ngModel)]="userAnswer" > 2+2=? </tui-input-slider>
<ng-template #right>
<tui-icon icon="@tui.circle-check" class="success" />
</ng-template>
<ng-template #wrong>
<tui-icon icon="@tui.circle-x" class="error" />
</ng-template>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHint, TuiIcon} from '@taiga-ui/core';
import {TuiInputSliderModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiHint,
        TuiIcon,
        TuiInputSliderModule,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected userAnswer = 2;
}
```

**LESS:**
```less
tui-icon {
    inline-size: 1rem;
    block-size: 1rem;
}

.success {
    color: var(--tui-text-positive);
}

.error {
    color: var(--tui-text-negative);
}
```

#### With min and max labels

Pass PolymorpheusContent into property `[valueContent]` to create custom label for selected value.

**Template:**
```html
<section class="control">
<tui-input-slider tuiTextfieldSize="m" [formControl]="smallControl" [max]="max" [min]="min" [segments]="2" [tuiTextfieldLabelOutside]="true" [valueContent]="customLabel" />
<div class="slider-ticks-labels">
<span></span>
<span>Custom label</span>
<span></span>
</div>
</section>
<tui-input-slider class="control" [formControl]="bigControl" [max]="max" [min]="min" [valueContent]="customLabel" > How much do you love Taiga UI? </tui-input-slider>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiContext} from '@taiga-ui/cdk';
import {TuiInputSliderModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputSliderModule, TuiTextfieldControllerModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly max = 100;
    protected readonly min = 0;

    protected readonly smallControl = new FormControl(this.min);
    protected readonly bigControl = new FormControl(this.max);

    protected readonly customLabel = ({
        $implicit,
    }: TuiContext<number>): number | string => {
        switch ($implicit) {
            case (this.max - this.min) / 2:
                return 'Middle';
            case this.max:
                return "Digits can't describe my love!";
            case this.min:
                return 'Just a label for min value';
            default:
                return $implicit;
        }
    };
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

:host {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem 3rem;
}

.control {
    flex: 1;
    min-inline-size: 17rem;
}

.slider-ticks-labels {
    .tui-slider-ticks-labels();

    margin-block-start: 0.25rem;
}
```
