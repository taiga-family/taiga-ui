# BarSet

- **Package**: `ADDON-CHARTS`
- **Type**: components

A group of bars for bar chart

### Example

```html
<tui-bar-set class="bars" [collapsed]="collapsed" [size]="size" [value]="value" />
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [collapsed] | `boolean` | shows data set in a single bar |
| [size] | `TuiSizeS \| TuiSizeL \| null` | for autosize) |
| [value] | `readonly number[]` | array of segments |

### Usage Examples

#### Dynamic size

**Template:**
```html
<tui-bar-set class="bars" [size]="null" [value]="value" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBarSet} from '@taiga-ui/addon-charts';

@Component({
    imports: [TuiBarSet],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly value = [30, 15, 10];
}
```

**LESS:**
```less
.bars {
    block-size: 6.25rem;
    inline-size: 10rem;
    box-shadow: 0 1px var(--tui-border-normal);
}
```

#### Fixed size

**Template:**
```html
<tui-bar-set size="m" class="bars" [value]="value" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBarSet} from '@taiga-ui/addon-charts';

@Component({
    imports: [TuiBarSet],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly value = [30, 15, 10];
}
```

**LESS:**
```less
.bars {
    block-size: 6.25rem;
    inline-size: 10rem;
    box-shadow: 0 1px var(--tui-border-normal);
}
```

#### With negative values

**Template:**
```html
<tui-bar-set class="bars" [collapsed]="true" [value]="value" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBarSet} from '@taiga-ui/addon-charts';

@Component({
    imports: [TuiBarSet],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly value = [30, -15];
}
```

**LESS:**
```less
.bars {
    block-size: 6.25rem;
    inline-size: 3.75rem;
    background: linear-gradient(var(--tui-border-normal) 0 0) 0 66.6667% / 100% 1px no-repeat;

    --tui-chart-categorical-00: var(--tui-background-accent-1);
    --tui-chart-categorical-01: var(--tui-background-accent-1);
}
```

#### Horizontal

**Template:**
```html
<div class="wrapper">
<tui-bar-set class="bars" [value]="value" />
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBarSet} from '@taiga-ui/addon-charts';

@Component({
    imports: [TuiBarSet],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly value = [30, 45, 12, 6, 20];
}
```

**LESS:**
```less
.wrapper {
    block-size: 6.25rem;
}

.bars {
    block-size: 12.5rem;
    inline-size: 6.25rem;
    margin-block-end: 3.125rem;
    box-shadow: 0 1px var(--tui-border-normal);
    transform-origin: bottom left;
    transform: rotate(90deg) translate(-12.5rem, 0);

    --tui-chart-categorical-00: linear-gradient(#ffc500, #c21500);
    --tui-chart-categorical-01: linear-gradient(#26a0da, #314755);
    --tui-chart-categorical-02: linear-gradient(#f64f59, #c471ed, #12c2e9);
    --tui-chart-categorical-03: linear-gradient(#c94b4b, #4b134f);
    --tui-chart-categorical-04: linear-gradient(#114357, #f29492);
}
```

#### With value label

**Template:**
```html
<tui-bar-set class="bars" [collapsed]="true" [value]="value" > {{ sum | tuiFormatNumber }} </tui-bar-set>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBarSet} from '@taiga-ui/addon-charts';
import {TuiFormatNumberPipe} from '@taiga-ui/kit';

@Component({
    imports: [TuiBarSet, TuiFormatNumberPipe],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly value = [451, 302, 203, 124, 65];
    protected readonly sum = this.value.reduce((a, b) => a + b, 0);
}
```

**LESS:**
```less
.bars {
    block-size: 7.5rem;
    inline-size: 5rem;
    margin-block-start: 2rem;
    box-shadow: 0 1px var(--tui-border-normal);
}
```
