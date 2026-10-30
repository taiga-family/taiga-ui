# LineChart

- **Package**: `ADDON-CHARTS`
- **Type**: components

### How to Use (Import)

```ts
import {TuiLineChart} from '@taiga-ui/addon-charts';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiLineChart,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<tui-line-chart
  [x]="0"
  [y]="0"
  [width]="200"
  [height]="100"
  [value]="value"
></tui-line-chart>
```

### Example

```html
<tui-axes class="axes" [horizontalLines]="2" [verticalLines]="4" >
<tui-line-chart [dots]="dots" [filled]="filled" [height]="height" [smoothingFactor]="smoothingFactor" [value]="value" [width]="width" [x]="x" [xStringify]="xStringify" [y]="y" [yStringify]="yStringify" />
</tui-axes>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [dots] | `boolean` | Show dots on chart |
| [filled] | `boolean` | Filled with gradient |
| [height] | `number` | Axis Y range, pixel scale is 1:1 |
| [y] | `number` | Start of Y axis |
| [width] | `number` | Axis X range, pixel scale is 1:1 |
| [x] | `number` | Start of X axis |
| [smoothingFactor] | `number` | Smoothing factor from 0 to 99 |
| [value] | `TuiPoint[]` | Array of data |
| [xStringify] | `TuiStringHandler<number> | null` | Function to stringify a value number to a string in axis X hint |
| [yStringify] | `TuiStringHandler<number> | null` | Function to stringify a value number to a string in axis Y hint |

### Usage Examples

#### Line

**Template:**
```html
<tui-axes class="axes" [horizontalLines]="2" [tuiLineChartHint]="hintContent" [verticalLines]="4" >
<tui-line-chart [dots]="true" [height]="200" [value]="value" [width]="400" [x]="0" [xStringify]="stringify" [y]="0" [yStringify]="stringify" />
</tui-axes>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAxes, TuiLineChart, TuiLineChartHint} from '@taiga-ui/addon-charts';
import {type TuiContext} from '@taiga-ui/cdk';
import {type TuiPoint} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiAxes, TuiLineChart, TuiLineChartHint],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly value: readonly TuiPoint[] = [
        [50, 50],
        [100, 75],
        [150, 50],
        [200, 150],
        [250, 155],
        [300, 190],
        [350, 90],
    ];

    protected readonly stringify = String;

    protected readonly hintContent = ({
        $implicit,
    }: TuiContext<readonly TuiPoint[]>): number => $implicit[0]?.[1] ?? 0;
}
```

**LESS:**
```less
.axes {
    block-size: 12.5rem;
    inline-size: 25rem;
    color: #bc71c9;
}
```

#### Smooth

**Template:**
```html
<tui-axes class="axes" [horizontalLines]="2" [verticalLines]="4" >
<tui-line-chart [filled]="true" [height]="200" [smoothingFactor]="50" [value]="value" [width]="400" [x]="0" [y]="0" />
</tui-axes>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAxes, TuiLineChart} from '@taiga-ui/addon-charts';
import {type TuiPoint} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiAxes, TuiLineChart],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly value: readonly TuiPoint[] = [
        [50, 50],
        [100, 75],
        [150, 50],
        [200, 150],
        [250, 155],
        [300, 190],
        [350, 90],
    ];
}
```

**LESS:**
```less
.axes {
    block-size: 12.5rem;
    inline-size: 25rem;
    color: #bc71c9;
}
```

#### Dotted

**Template:**
```html
<tui-axes class="axes" [horizontalLines]="2" [verticalLines]="4" >
<tui-line-chart class="chart chart_dotted" [dots]="true" [height]="200" [value]="dotted" [width]="400" [x]="0" [y]="0" />
<tui-line-chart class="chart" [dots]="true" [height]="200" [value]="solid" [width]="400" [x]="0" [y]="0" />
<tui-line-chart class="chart chart_dashed" [dots]="true" [height]="200" [value]="dashed" [width]="400" [x]="0" [y]="0" />
</tui-axes>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAxes, TuiLineChart} from '@taiga-ui/addon-charts';
import {type TuiPoint} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiAxes, TuiLineChart],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly dotted: readonly TuiPoint[] = [
        [50, 50],
        [100, 75],
        [150, 50],
    ];

    protected readonly solid: readonly TuiPoint[] = [
        [150, 50],
        [200, 150],
        [250, 155],
    ];

    protected readonly dashed: readonly TuiPoint[] = [
        [250, 155],
        [300, 190],
        [350, 90],
    ];
}
```

**LESS:**
```less
.axes {
    block-size: 12.5rem;
    inline-size: 25rem;
    color: #bc71c9;
}

.chart {
    position: absolute;
    top: 0;
    left: 0;

    &_dotted {
        stroke-dasharray: 2;
    }

    &_dashed {
        stroke-dasharray: 4;
    }
}
```

#### Hint

**Template:**
```html
<tui-axes class="axes" [horizontalLines]="2" [verticalLines]="4" >
<tui-line-chart [height]="200" [tuiHintContent]="hint" [value]="value" [width]="400" [x]="0" [y]="0" />
</tui-axes>
<tui-axes class="axes tui-space_top-10" [horizontalLines]="2" [verticalLines]="4" >
<tui-line-chart tuiHintAppearance="error" [dots]="true" [height]="200" [tuiHintContent]="hintContent" [value]="singleValue" [width]="400" [x]="0" [y]="0" />
</tui-axes>
<ng-template #hintContent let-index="index" let-value >
<div>Vertical: {{ value[0] }}</div>
<div>Horizontal: {{ value[1] }}</div>
<div>index: {{ index }}</div>
</ng-template>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAxes, TuiLineChart} from '@taiga-ui/addon-charts';
import {type TuiContext, type TuiStringHandler} from '@taiga-ui/cdk';
import {TuiHint, type TuiPoint} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiAxes, TuiHint, TuiLineChart],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly value: TuiPoint[] = [
        [50, 50],
        [100, 75],
        [150, 50],
        [200, 150],
        [250, 155],
        [300, 190],
        [350, 90],
    ];

    protected readonly singleValue: TuiPoint[] = [[200, 150]];

    protected readonly hint: TuiStringHandler<TuiContext<TuiPoint>> = ({$implicit}) =>
        `Vertical: ${$implicit[1]}\nHorizontal: ${$implicit[0]}`;
}
```

**LESS:**
```less
.axes {
    block-size: 12.5rem;
    inline-size: 25rem;
    color: #bc71c9;
}
```

#### Several lines with hints

**Template:**
```html
<tui-axes class="axes" [horizontalLines]="2" [tuiLineChartHint]="hint" [verticalLines]="4" >
<tui-line-chart *ngFor="let value of values" class="chart" [height]="200" [value]="value" [width]="400" [x]="0" [y]="0" />
</tui-axes>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAxes, TuiLineChart, TuiLineChartHint} from '@taiga-ui/addon-charts';
import {type TuiContext, type TuiStringHandler} from '@taiga-ui/cdk';
import {type TuiPoint} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [NgForOf, TuiAxes, TuiLineChart, TuiLineChartHint],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly values: TuiPoint[][] = [
        [
            [50, 50],
            [100, 75],
            [150, 50],
            [200, 150],
            [250, 155],
            [300, 190],
            [350, 90],
        ],
        [
            [50, 40],
            [100, 60],
            [150, 90],
            [200, 120],
            [250, 150],
            [300, 110],
            [350, 130],
        ],
        [
            [50, 0],
            [100, 0],
            [150, 80],
            [200, 50],
            [250, 130],
            [300, 200],
            [350, 200],
        ],
    ];

    protected readonly hint: TuiStringHandler<TuiContext<readonly TuiPoint[]>> = ({
        $implicit,
    }) => `${$implicit[0]?.[0]} items:\n\n${$implicit.map(([_, y]) => y).join('$\n')}$`;
}
```

**LESS:**
```less
.axes {
    block-size: 12.5rem;
    inline-size: 25rem;
}

.chart {
    position: absolute;
    color: #ffb74c;

    &:first-child {
        color: #bc71c9;
    }

    &:last-child {
        color: #4dc3f7;
    }
}
```
