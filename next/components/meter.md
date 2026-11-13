# Meter

- **Package**: `KIT`
- **Type**: components

Native styled Meter tag, using the same attributes as native version.

### Example

```html
<meter tuiMeter [high]="high()" [low]="low()" [max]="max()" [min]="min()" [optimum]="optimum()" [value]="value()" ></meter>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [min] | `number` | minimal value, lower bound |
| [max] | `number` | maximal value, upper bound |
| [low] | `number` | first color point (yellow if optimum is at a lower end, red if it is at the higher end) |
| [high] | `number` | second color point (red if optimum is at a lower end, yellow if it is at the higher end) |
| [optimum] | `number` | third color point (green, representing preferred value) |
| [value] | `number` | current value |

### Usage Examples

#### Increasing

**Template:**
```html
<label tuiTitle="m"> Credit Score <div aria-hidden="true" class="labels" >
<span>300</span>
<span appearance="floating" tuiBadge [style.inset-inline-start.%]="(100 * (666 - 300)) / (850 - 300)" > 666 </span>
<span>850</span>
</div>
<meter high="580" low="300" max="850" min="300" optimum="800" tuiMeter value="666" ></meter>
</label>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTitle} from '@taiga-ui/core';
import {TuiBadge, TuiMeter} from '@taiga-ui/kit';

@Component({
    imports: [TuiBadge, TuiMeter, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.css',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**CSS:**
```css
.labels {
    position: relative;
    display: flex;
    justify-content: space-between;
    font: var(--tui-typography-body-s);
    color: var(--tui-text-secondary);
    margin: 0.25rem 0;

    [tuiBadge] {
        position: absolute;
        inset-block-end: 0.25rem;
        font: var(--tui-typography-body-l);
        font-weight: bold;
        transform: translateX(calc(-50% * var(--tui-inline)));
    }
}
```

#### Decreasing

**Template:**
```html
<label tuiHeader>
<div tuiTitle> Resting Heart Rate <div tuiSubtitle> The number of times your heart beats per minute when you are completely relaxed, still, and awake </div>
<meter high="100" low="80" max="100" min="40" optimum="60" tuiMeter value="60" ></meter>
<div aria-hidden="true" class="labels" >
<span>40</span>
<span appearance="floating" tuiBadge [style.inset-inline-start.%]="(100 * (60 - 40)) / (100 - 40)" > 60 </span>
<span>100</span>
</div>
</div>
</label>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTitle} from '@taiga-ui/core';
import {TuiBadge, TuiMeter} from '@taiga-ui/kit';
import {TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [TuiBadge, TuiHeader, TuiMeter, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.css',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**CSS:**
```css
[tuiMeter] {
    margin-block-start: 1rem;
}

.labels {
    position: relative;
    display: flex;
    justify-content: space-between;
    font: var(--tui-typography-body-s);
    color: var(--tui-text-secondary);
    margin: 0.25rem 0;

    [tuiBadge] {
        position: absolute;
        font: var(--tui-typography-body-l);
        font-weight: bold;
        transform: translateX(calc(-50% * var(--tui-inline)));
    }
}
```
