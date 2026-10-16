# RingChart

- **Package**: `ADDON-CHARTS`
- **Type**: components

### Example

```html
<tui-ring-chart class="chart" [size]="size" [value]="value" [(activeItemIndex)]="activeItemIndex" />
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [(activeItemIndex)] | `number` | selected fragment index |
| [size] | `TuiSizeXS \| TuiSizeXL` | — |
| [value] | `readonly number[]` | — |

### Usage Examples

#### Sizes

**Template:**
```html
<div class="wrapper">
<tui-ring-chart size="s" class="tui-space_right-4" [value]="value" />
<tui-ring-chart size="m" class="tui-space_right-4" [value]="value" />
<tui-ring-chart size="l" class="tui-space_right-4" [value]="value" />
<tui-ring-chart size="xl" class="tui-space_right-4" [value]="value" />
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRingChart} from '@taiga-ui/addon-charts';

@Component({
    imports: [TuiRingChart],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
<tui-ring-chart [value]="value" [(activeItemIndex)]="index" >
<span>{{ sum | tuiAmount: 'RUB' }}</span>
<div>{{ label }}</div>
</tui-ring-chart>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRingChart} from '@taiga-ui/addon-charts';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {tuiSum} from '@taiga-ui/cdk';

@Component({
    imports: [TuiAmountPipe, TuiRingChart],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly labels = ['Food', 'Cafe', 'Open Source', 'Taxi', 'other'];

    protected readonly value = [13769, 12367, 10172, 3018, 2592];
    protected readonly total = tuiSum(...this.value);
    protected index = Number.NaN;

    protected get sum(): number {
        return (Number.isNaN(this.index) ? this.total : this.value[this.index]) ?? 0;
    }

    protected get label(): string {
        return (Number.isNaN(this.index) ? 'Total' : this.labels[this.index]) ?? '';
    }
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
