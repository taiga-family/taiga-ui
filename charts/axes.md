# Axes

- **Package**: `ADDON-CHARTS`
- **Type**: components

Just axes for charts

### Example

```html
<tui-axes class="axes" [axisXLabels]="axisXLabels || []" [axisYInset]="axisYInset" [axisYLabels]="axisYLabels || []" [axisYName]="axisYName" [axisYSecondaryInset]="axisYSecondaryInset" [axisYSecondaryLabels]="axisYSecondaryLabels" [axisYSecondaryName]="axisYSecondaryName" [centeredXLabels]="centeredXLabels" [horizontalLines]="horizontalLines" [horizontalLinesHandler]="horizontalLinesHandler" [verticalLines]="verticalLines" [verticalLinesHandler]="verticalLinesHandler" />
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [centeredXLabels] | `boolean` | center X axis labels |
| [axisXLabels] | `ReadonlyArray<string | null>` | — no stroke |
| [axisYInset] | `boolean` | inset of labels on Y axis |
| [axisYLabels] | `readonly string[]` | labels for Y axis |
| [axisYName] | `string` | name of Y axis |
| [axisYSecondaryInset] | `boolean` | inset labels for Y axis |
| [axisYSecondaryLabels] | `readonly string[]` | secondary Y axis labels |
| [axisYSecondaryName] | `string` | secondary Y axis name |
| [horizontalLines] | `number` | horizontal lines number |
| [horizontalLinesHandler] | `TuiLineHandler` | horizontal lines type handler |
| [verticalLines] | `number` | number of vertical lines |
| [verticalLinesHandle] | `TuiLineHandler` | vertical lines type handler |

### Usage Examples

#### Cool one

**Template:**
```html
<tui-axes axisYName="Target" axisYSecondaryName="Sum" class="axes" [axisXLabels]="axisXLabels" [axisYInset]="true" [axisYLabels]="axisYLabels" [axisYSecondaryLabels]="axisYSecondaryLabels" [horizontalLines]="3" [verticalLines]="4" [verticalLinesHandler]="verticalLinesHandler" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAxes, type TuiLineHandler} from '@taiga-ui/addon-charts';

@Component({
    imports: [TuiAxes],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly axisXLabels = ['Jan 2019', 'Feb', 'Mar', ''];
    protected readonly axisYLabels = ['', '25%', '50%', '75%', '100%'];
    protected readonly axisYSecondaryLabels = ['80 k', '100 k', '120 k'];

    protected readonly verticalLinesHandler: TuiLineHandler = (index, total) =>
        (index && (index === total - 1 ? 'none' : 'dashed')) || 'solid';
}
```

**LESS:**
```less
.axes {
    block-size: 18.75rem;
    inline-size: 37.5rem;
}
```

#### With bars

**Template:**
```html
<tui-axes axisY="none" class="axes" [axisXLabels]="axisXLabels" [axisYSecondaryLabels]="axisYSecondaryLabels" [centeredXLabels]="true" [horizontalLines]="3" [horizontalLinesHandler]="horizontalLinesHandler" [verticalLines]="5" [verticalLinesHandler]="verticalLinesHandler" >
<tui-bar-chart class="chart" [max]="maxValue" [tuiHintContent]="hint" [value]="value" />
</tui-axes>
<ng-template #hint let-setIndex > @for (item of value; track item) { <p class="hint">
<span class="dot" [style.background]="`var(--tui-chart-categorical-${$index.toString().padStart(2, '0')})`" ></span>
<span class="name">{{ getSetName($index) }}</span>
<span>{{ (item[setIndex] || 0) * 1000 | tuiAmount: 'RUB' }}</span>
</p> } </ng-template>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TUI_ALWAYS_DASHED,
    TUI_ALWAYS_NONE,
    TuiAxes,
    TuiBarChart,
    TuiChartHint,
} from '@taiga-ui/addon-charts';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {tuiCeil} from '@taiga-ui/cdk';

@Component({
    imports: [TuiAmountPipe, TuiAxes, TuiBarChart, TuiChartHint],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly setNames = ['cdk', 'core', 'kit', 'charts'];

    protected readonly value: ReadonlyArray<[number, number, number, number]> = [
        [10, 20, 3, 7],
        [15, 18, 24, 1],
        [34, 23, 12, 9],
        [30, 14, 18, 14],
    ];

    protected readonly maxValue = 40;

    protected readonly axisYSecondaryLabels = [
        '',
        `${getMax(this.value) / 2} k`,
        `${getMax(this.value)} k`,
    ];

    protected readonly axisXLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
    protected readonly horizontalLinesHandler = TUI_ALWAYS_DASHED;
    protected readonly verticalLinesHandler = TUI_ALWAYS_NONE;

    protected getSetName(index: number): string {
        return this.setNames[index] ?? '';
    }
}

function getMax(value: ReadonlyArray<[number, number, number, number]>): number {
    return tuiCeil(
        value.reduce((max, value) => Math.max(...value, max), 0),
        -1,
    );
}
```

**LESS:**
```less
:host,
.hint {
    --tui-chart-categorical-00: #c779d0;
    --tui-chart-categorical-01: #feac5e;
    --tui-chart-categorical-02: #ff5f6d;
    --tui-chart-categorical-03: #4bc0c8;
}

.axes {
    block-size: 18.75rem;
    inline-size: 37.5rem;
}

.chart {
    block-size: 100%;
}

.wrapper {
    position: relative;
    display: flex;
    flex: 1;
    align-items: flex-end;
    justify-content: center;
    block-size: 100%;
    margin-block-end: -0.0625rem;
    cursor: pointer;

    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
}

.hint {
    display: flex;
    align-items: center;
}

.dot {
    border-radius: 100%;
    inline-size: 0.75rem;
    block-size: 0.75rem;
    margin-inline-end: 0.5rem;
}

.name {
    margin-inline-end: 0.5rem;
}
```

#### With horizontal bars

**Template:**
```html
<tui-axes class="axes" [axisXLabels]="axisXLabels" [verticalLines]="5" >
<div class="t-horizontal-bars"> @for (bar of value; track bar) { <tui-bar size="m" [style.background-color]="`var(--tui-chart-categorical-${$index.toString().padStart(2, '0')})`" [style.height.%]="getHeight(bar)" /> } </div>
</tui-axes>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAxes, TuiBar} from '@taiga-ui/addon-charts';

@Component({
    imports: [TuiAxes, TuiBar],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly axisXLabels = ['0', '25', '50', '75', '100'];
    protected readonly value = [50, 24, 36, 95];
    protected readonly largest = 100;

    protected getHeight(value: number): number {
        return Math.abs((value * 100) / this.largest);
    }
}
```

**LESS:**
```less
.axes {
    block-size: 18.75rem;
    inline-size: 37.5rem;
}

.t-horizontal-bars {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    inline-size: 16.75rem;
    block-size: 37.5rem;
    transform-origin: bottom left;
    transform: rotate(90deg) translate(-16.75rem, 0);
}
```
