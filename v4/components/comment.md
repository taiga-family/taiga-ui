# Comment

- **Package**: `KIT`
- **Type**: directives

### How to Use (Import)

```ts
import {Component} from '@angular/core';
import {TuiComment} from '@taiga-ui/kit';
// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiComment,
  ],
})
export class Example {}
```

### How to Use (Template)

```html
<div tuiComment="bottom">comment</div>
```

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
    standalone: true,
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
<div tuiComment="left" class="primary" > Extra payment </div>
<div tuiComment="right">Check it out</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiComment} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiComment],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
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
