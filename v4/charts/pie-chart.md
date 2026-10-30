# PieChart

- **Package**: `ADDON-CHARTS`
- **Type**: components

### How to Use (Import)

```ts
import {TuiPieChart} from '@taiga-ui/addon-charts';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiPieChart,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<tui-pie-chart [value]="value"></tui-pie-chart>
```

### Example

```html
<tui-pie-chart class="chart" [size]="size" [value]="value" [(activeItemIndex)]="activeItemIndex" />
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [(activeItemIndex)] | `number` | Active fragment |
| [size] | `TuiSizeS | TuiSizeXL` | Size |
| [value] | `readonly number[]` | Value |

### Usage Examples

#### sizes

**Template:**
```html
<div class="wrapper">
<tui-pie-chart size="xs" class="tui-space_right-4" [value]="value" />
<tui-pie-chart size="s" class="tui-space_right-4" [value]="value" />
<tui-pie-chart size="m" class="tui-space_right-4" [value]="value" />
<tui-pie-chart size="l" class="tui-space_right-4" [value]="value" />
<tui-pie-chart size="xl" class="tui-space_right-4" [value]="value" />
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPieChart} from '@taiga-ui/addon-charts';

@Component({
    standalone: true,
    imports: [TuiPieChart],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly value = [40, 30, 20, 10];
}
```

**LESS:**
```less
.wrapper {
    display: flex;
    align-items: center;
}
```

#### With labels

**Template:**
```html
<tui-pie-chart [tuiHintContent]="content" [value]="value" />
<ng-template #content let-index >
<span>{{ value[index] || 0 | tuiAmount: 'RUB' | async }}</span>
<div>{{ labels[index] }}</div>
</ng-template>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPieChart} from '@taiga-ui/addon-charts';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiHint} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [AsyncPipe, TuiAmountPipe, TuiHint, TuiPieChart],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly value = [13769, 12367, 10172, 3018, 2592];
    protected readonly labels = ['Food', 'Cafe', 'Open Source', 'Taxi', 'Other'];
}
```

**LESS:**
```less
:host {
    --tui-chart-categorical-00: #c779d0;
    --tui-chart-categorical-01: #feac5e;
    --tui-chart-categorical-02: #ff5f6d;
    --tui-chart-categorical-03: #4bc0c8;
    --tui-chart-categorical-04: #9795cd;
}
```
