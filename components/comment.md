# Comment

- **Package**: `KIT`
- **Type**: components

### Example

```html
<span [tuiComment]="direction">Birthday gift</span>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [tuiComment] | `TuiHorizontalDirection | TuiVerticalDirection | ''` | direction of the comment mark |

### Usage Examples

#### Basic

**Template:**
```html
<span tuiComment>Birthday gift</span>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiComment} from '@taiga-ui/kit';

@Component({
    imports: [TuiComment],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### Customization

**Template:**
```html
<div tuiComment="top">Good job</div>
<div tuiComment="bottom" class="success" > Cashback </div>
<div tuiComment="start" class="primary" > Extra payment </div>
<div tuiComment="end">Check it out</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiComment} from '@taiga-ui/kit';

@Component({
    imports: [TuiComment],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
:host {
    display: flex;
    gap: 1.25rem;
    flex-wrap: wrap;
}

.success {
    background: var(--tui-status-positive);
}

.primary {
    background: var(--tui-background-accent-1);
}
```
