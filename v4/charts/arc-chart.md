# ArcChart

- **Package**: `ADDON-CHARTS`
- **Type**: components

### How to Use (Import)

```ts
import {TuiArcChart} from '@taiga-ui/addon-charts';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiArcChart,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<tui-arc-chart [value]="value"></tui-arc-chart>
```

### Example

```html
<tui-arc-chart class="chart" [max]="max" [maxLabel]="maxLabel" [minLabel]="minLabel" [size]="size" [value]="value" [(activeItemIndex)]="activeItemIndex" />
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [max] | `number` | Maximum value |
| [maxLabel] | `string` | Label for maximum value |
| [minLabel] | `string` | Label for minimum value |
| [size] | `TuiSizeXL` | Size |
| [value] | `readonly number[]` | Value |
| [(activeItemIndex)] | `number` | Index of selected arc |

### Usage Examples

#### Sizes

**Template:**
```html
<tui-textfield class="index-controller" [tuiTextfieldCleaner]="false" >
<label tuiLabel>activeItemIndex</label>
<input tuiInputNumber [max]="value.length - 1" [min]="0" [ngModel]="activeItemIndex" [step]="1" [tuiNumberFormat]="{precision: 0}" (ngModelChange)="onTextfieldChange($event)" />
</tui-textfield>
<div class="wrapper">
<tui-arc-chart size="m" class="tui-space_right-4" [value]="value" [(activeItemIndex)]="activeItemIndex" > Total value </tui-arc-chart>
<tui-arc-chart size="l" class="tui-space_right-4" [value]="value" [(activeItemIndex)]="activeItemIndex" > Total value <div>Label</div>
</tui-arc-chart>
<tui-arc-chart size="xl" class="tui-space_right-4" [value]="value" [(activeItemIndex)]="activeItemIndex" >
<span>{{ 123456 | tuiAmount: 'RUB' | async }}</span>
<div>Not bad!</div>
</tui-arc-chart>
</div>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiArcChart} from '@taiga-ui/addon-charts';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiNumberFormat, TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        FormsModule,
        TuiAmountPipe,
        TuiArcChart,
        TuiInputNumber,
        TuiNumberFormat,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly value = [40, 30, 20, 10];

    protected activeItemIndex = NaN;

    public onTextfieldChange(value: number | null): void {
        this.activeItemIndex = value ?? NaN;
    }
}
```

**LESS:**
```less
.wrapper {
    display: flex;
    align-items: center;
    margin-block-start: 1rem;

    --tui-chart-categorical-00: var(--tui-chart-categorical-12);
    --tui-chart-categorical-01: var(--tui-chart-categorical-01);
    --tui-chart-categorical-02: var(--tui-chart-categorical-03);
    --tui-chart-categorical-03: var(--tui-chart-categorical-09);
}

.index-controller {
    max-inline-size: 20rem;
}
```

#### Stacked

**Template:**
```html
<div class="wrapper">
<tui-arc-chart size="l" [value]="[40]" />
<tui-arc-chart maxLabel="" minLabel="" size="l" class="stacked" [value]="[20]" > +20% <div>For filling in last name</div>
</tui-arc-chart>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiArcChart} from '@taiga-ui/addon-charts';
import {tuiSum} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    imports: [TuiArcChart],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly value = [13769, 12367, 10172, 3018, 2592];
    protected readonly sum = tuiSum(...this.value);
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.wrapper {
    position: relative;

    --tui-chart-0: var(--tui-chart-categorical-03);
}

.stacked {
    .fullsize();

    --tui-background-neutral-1: transparent;
    --tui-chart-0: var(--tui-chart-categorical-04);
}
```
