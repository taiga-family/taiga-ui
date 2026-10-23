# Bar

- **Package**: `ADDON-CHARTS`
- **Type**: components

A bar for bar chart

### How to Use (Import)

```ts
import {TuiBar} from '@taiga-ui/addon-charts';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiBar,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<tui-bar [value]="value"></tui-bar>
```

### Example

```html
<tui-bar class="bar" [size]="size" [value]="value" />
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [size] | `TuiSizeS | TuiSizeL` | Size |
| [value] | `readonly number[]` | An array of segments |

### Usage Examples

#### Basic

**Template:**
```html
<tui-bar class="bar" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBar} from '@taiga-ui/addon-charts';

@Component({
    standalone: true,
    imports: [TuiBar],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
.bar {
    block-size: 6.25rem;
    background: var(--tui-background-accent-1);
}
```

#### Segments

**Template:**
```html
<tui-bar size="s" class="bar" [value]="value" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBar} from '@taiga-ui/addon-charts';

@Component({
    standalone: true,
    imports: [TuiBar],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly value = [30, 15, 10];
}
```

**LESS:**
```less
.bar {
    block-size: 6.25rem;

    --tui-chart-categorical-00: #ffd700;
    --tui-chart-categorical-01: #87ceeb;
    --tui-chart-categorical-02: #ffc0cb;
}
```
