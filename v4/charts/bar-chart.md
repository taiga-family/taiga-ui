# BarChart

- **Package**: `ADDON-CHARTS`
- **Type**: components

Bar chart that can be used as a content to axes .

### How to Use (Import)

```ts
import {TuiBarChart} from '@taiga-ui/addon-charts';

//...

@Component({
  standalone: true,
  imports: [
    //  ...
    TuiBarChart,
  ],
  //...
})
export class Example {}
```

### How to Use (Template)

```html
<tui-bar-chart [value]="value"></tui-bar-chart>
```

### Example

```html
<tui-bar-chart class="chart" [collapsed]="collapsed" [max]="max" [size]="size" [value]="value" (tapColumn)="documentationPropertyTapColumn.emitEvent($event)" />
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [collapsed] | `boolean` | Shows data set in a single bar |
| [max] | `number` | Sets chart max manually |
| [size] | `TuiSizeS | TuiSizeL | null` | for autosize) |
| [value] | `ReadonlyArray<readonly number[]>` | Array of segments |

### API - Outputs

| Event | Type | Description |
|-------|------|-------------|
| (tapColumn) | `number` | Bar column click/enter event |

### Usage Examples

#### With axes

**Template:**
```html
<tui-axes class="axes" [axisXLabels]="labelsX" [axisYLabels]="labelsY" >
<tui-bar-chart [max]="10000" [value]="value" />
</tui-axes>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAxes, TuiBarChart} from '@taiga-ui/addon-charts';
import {tuiCeil} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    imports: [TuiAxes, TuiBarChart],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly value = [
        [3660, 8281, 1069, 9034, 5797, 6918, 8495, 3234, 6204, 1392, 2088, 8637, 8779],
        [3952, 3671, 3781, 5323, 3537, 4107, 2962, 3320, 8632, 4755, 9130, 1195, 3574],
    ];

    protected readonly labelsX = ['Jan 2019', 'Feb', 'Mar', ''];
    protected readonly labelsY = ['0', '10 000'];

    protected getHeight(max: number): number {
        return (max / tuiCeil(max, -3)) * 100;
    }
}
```

**LESS:**
```less
.axes {
    block-size: 18.75rem;
    inline-size: 37.5rem;
}
```

#### Same values with collapsed mode

**Template:**
```html
<div class="flex">
<tui-axes class="axes" [axisXLabels]="labelsX" [axisYLabels]="labelsY" >
<tui-bar-chart [max]="10000" [tuiHintAppearance]="appearance" [tuiHintContent]="hint" [value]="value" />
</tui-axes>
<tui-axes class="axes" [axisXLabels]="labelsX" [axisYLabels]="labelsY" >
<tui-bar-chart [collapsed]="true" [max]="10000" [tuiHintAppearance]="appearance" [tuiHintContent]="hint" [value]="value" />
</tui-axes>
</div>
<tui-textfield tuiChevron class="select" >
<label tuiLabel>Hint appearance</label>
<input tuiSelect [(ngModel)]="appearance" />
<tui-data-list-wrapper *tuiTextfieldDropdown new [items]="appearances" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAxes, TuiBarChart} from '@taiga-ui/addon-charts';
import {type TuiContext} from '@taiga-ui/cdk';
import {tuiFormatNumber, TuiHint, TuiTextfield} from '@taiga-ui/core';
import {TuiChevron, TuiDataListWrapper, TuiSelect} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiAxes,
        TuiBarChart,
        TuiChevron,
        TuiDataListWrapper,
        TuiHint,
        TuiSelect,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly value = [
        [1000, 8000, 4000, 3000, 4000],
        [6000, 2000, 4500, 7000, 5000],
    ];

    protected readonly labelsX = ['Jan 2021', 'Feb', 'Mar', ''];
    protected readonly labelsY = ['0', '10 000'];
    protected readonly appearances = ['dark', 'error'];

    protected appearance = this.appearances[0]!;

    protected readonly hint = ({$implicit}: TuiContext<number>): string =>
        this.value
            .reduce(
                (result, set) => `${result}$${tuiFormatNumber(set[$implicit] ?? 0)}\n`,
                '',
            )
            .trim();
}
```

**LESS:**
```less
.axes {
    block-size: 18.75rem;
    inline-size: 37.5rem;

    &:first-child {
        --tui-chart-categorical-00: #ffd700;
        --tui-chart-categorical-01: #800080;
    }

    &:last-child {
        --tui-chart-categorical-00: #87ceeb;
        --tui-chart-categorical-01: #ee82ee;
    }
}

.flex {
    display: flex;
    min-inline-size: 31.25rem;
}

.select {
    max-inline-size: 20rem;
}
```
