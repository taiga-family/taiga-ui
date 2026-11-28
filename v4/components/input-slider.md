# InputSlider

- **Package**: `KIT`
- **Type**: components

`InputSlider` = `Textfield` + `InputNumber` + `Slider` + ❤️

### How to Use (Import)

```ts
import {FormsModule} from '@angular/forms';
import {TuiNumberFormat, TuiTextfield} from '@taiga-ui/core';
import {TuiInputSlider} from '@taiga-ui/kit';

@Component({
  standalone: true,
  imports: [
    // ...
    FormsModule,
    TuiTextfield,
    TuiInputSlider,
    TuiNumberFormat,
  ],
  // ...
})
export class Example {
  value = 0;
}
```

### How to Use (Template)

```html
<tui-textfield>
  <input
    tuiInputSlider
    prefix="$"
    postfix="%"
    [min]="0"
    [max]="100"
    [tuiNumberFormat]="{precision: 3}"
    [(ngModel)]="value"
  />

  <input
    tuiSlider
    type="range"
    [keySteps]="keySteps"
    [segments]="segments"
    [step]="step"
  />
</tui-textfield>
```

### Example

```html
<ng-template>
<tui-textfield #textfield [content]="textfield.focused() ? '' : textfieldContent" [iconEnd]="icons.iconEnd" [iconStart]="icons.iconStart" [tuiTextfieldCleaner]="textfieldDoc.cleaner" [tuiTextfieldSize]="textfieldDoc.size" >
<input tuiInputSlider [attr.placeholder]="'Form control value is still ' + control.value" [formControl]="control" [invalid]="controlDoc.invalid" [max]="max()" [min]="min()" [postfix]="postfix" [prefix]="prefix" [quantum]="quantum" [readOnly]="controlDoc.readonly" [tuiDisabled]="controlDoc.disabled" [tuiNumberFormat]="{ thousandSeparator: numberFormatDoc.thousandSeparator(), decimalSeparator: numberFormatDoc.decimalSeparator(), precision: numberFormatDoc.precision(), decimalMode: numberFormatDoc.decimalMode(), rounding: numberFormatDoc.rounding(), }" />
<input tuiSlider type="range" [keySteps]="keySteps" [segments]="segments" [step]="step" />
</tui-textfield>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [min] | `number` | value in the range of permitted values |
| [max] | `number` | value in the range of permitted values |
| [prefix] | `string` | number |
| [postfix] | `string` | number |
| [quantum] | `number` |  |
| [step] | `number` |  |
| [segments] | `number[] | number` | for no ticks) |
| [keySteps] | `TuiKeySteps | null` | Anchor points of non-uniform format between value and position |
| [content] | `PolymorpheusContent` | A template for custom view of textfield value. |

### Usage Examples

#### Textfield customization

Use all powers of Textfield : put any number of Icons and Tooltips inside (and control their order and color), modify the size of the textbox and etc. Explore `Textfield` 's documentation page for more customization options.

**Template:**
```html
<tui-textfield iconStart="@tui.euro" tuiTextfieldSize="m" >
<input placeholder="I am placeholder" tuiInputSlider [max]="100" [min]="0" [(ngModel)]="value" />
<input tuiSlider type="range" />
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
import {TuiInputSlider, TuiTooltip} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiIcon, TuiInputSlider, TuiTextfield, TuiTooltip],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = 42;
}
```

#### InputNumber customization

`InputSlider` is just a slight extension of InputNumber – it has completely the same customization: add `[prefix]` / `[postfix]` , configure separators specific for your locale via NumberFormat directive or etc.

**Template:**
```html
<tui-textfield>
<input prefix="$" tuiInputSlider [max]="10000" [min]="0" [tuiNumberFormat]="{ decimalSeparator: ',', thousandSeparator: '.', precision: 1, }" [(ngModel)]="value" />
<input tuiSlider type="range" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiNumberFormat, TuiTextfield} from '@taiga-ui/core';
import {TuiInputSlider} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputSlider, TuiNumberFormat, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = 9_999.9;
}
```

#### Slider customization

Slider automatically inherits `[min]` / `[max]` properties from `[tuiInputSlider]` (don't set them for `Slider` to avoid any possible conflicts!). However, feel free to configure `Slider` 's-specific properties: `[step]` , `[keySteps]` and `[segments]` . Also, you can use mixin-helper `tui-slider-ticks-labels` to arrange ticks' labels (it places them strictly below ticks).

**Template:**
```html
<tui-textfield>
<label tuiLabel>Rate your mind</label>
<input tuiInputSlider [max]="max" [min]="min" [(ngModel)]="value" />
<input tuiSlider type="range" [segments]="5" [step]="step" />
</tui-textfield>
<div class="slider-ticks-labels">
<button appearance="icon" iconStart="@tui.thumbs-down" size="xs" tuiIconButton type="button" (click)="decrease()" > Decrease </button>
<span>20%</span>
<span>40%</span>
<span>60%</span>
<span>80%</span>
<button appearance="icon" iconStart="@tui.thumbs-up" size="xs" tuiIconButton type="button" (click)="increase()" > Increase </button>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiTextfield} from '@taiga-ui/core';
import {TuiInputSlider} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiButton, TuiInputSlider, TuiTextfield],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly max = 100;
    protected readonly min = 0;
    protected readonly step = 20;
    protected value = 20;

    protected increase(): void {
        this.value = Math.min(this.value + this.step, this.max);
    }

    protected decrease(): void {
        this.value = Math.max(this.value - this.step, this.min);
    }
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.slider-ticks-labels {
    .tui-slider-ticks-labels(l);

    color: var(--tui-text-secondary);
    align-items: center;
    margin-block-start: 0.25rem;

    & > [tuiIconButton]:first-child {
        justify-content: start;
    }

    & > [tuiIconButton]:last-child {
        justify-content: end;
    }

    & > [tuiIconButton]::before {
        margin: 0;
    }
}
```

#### KeySteps

Key steps – anchor points of non-uniform format between control's value and slider's position. When `[keySteps]` property is enabled, `[step]` means percentage of total track length.

**Template:**
```html
<tui-textfield>
<label tuiLabel>Not linear growing slider</label>
<input tuiInputSlider [max]="max" [min]="min" [(ngModel)]="value" />
<input tuiSlider type="range" [keySteps]="keySteps" [segments]="ticksLabels.length - 1" [step]="step" />
</tui-textfield>
<div class="slider-ticks-labels">
<span *ngFor="let label of ticksLabels">{{ label }}</span>
</div>
<p> Control value: <code>{{ value }}</code>
</p>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputSlider, type TuiKeySteps} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, NgForOf, TuiInputSlider, TuiTextfield],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = 10;
    protected readonly min = 0;
    protected readonly max = 1_000;
    protected readonly step = 5; // 100% / 5% = 20 total steps
    protected readonly ticksLabels = ['0', '10', '100', '500', '1000'];

    protected readonly keySteps: TuiKeySteps = [
        // [percent, value]
        [0, this.min],
        [25, 10],
        [50, 100],
        [75, 500],
        [100, this.max],
    ];
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.slider-ticks-labels {
    .tui-slider-ticks-labels(l);

    color: var(--tui-text-secondary);
    margin-block-start: 0.5rem;
}
```

#### Quantum

Property `[quantum]` allows to set minimum indivisible value. Form control value never contains a number that is not divisible by value of this property. Even if user enters any invalid number, it will be rounded to the nearest valid one on `blur` event. In this example, form control value can only contain `0` , `0.05` , `0.1` , `0.15` ... `0.9` , `0.95` , `1` .

**Template:**
```html
<tui-textfield>
<input tuiInputSlider [max]="1" [min]="0" [quantum]="quantum" [(ngModel)]="value" />
<input tuiSlider type="range" [step]="step" />
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
import {TuiInputSlider} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, JsonPipe, TuiInputSlider, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = 0.5;
    // Form control can only contain decimal number which is multiple of this constant
    protected quantum = 0.05;

    // But granularity of each discrete slider step equals to this constant
    protected readonly step = 0.25;
}
```
