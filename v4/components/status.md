# Status

- **Package**: `KIT`
- **Type**: components

### How to Use (Import)

```ts
import {Component} from '@angular/core';
import {TuiStatus} from '@taiga-ui/kit';
// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiStatus,
  ],
})
export class Example {}
```

### How to Use (Template)

```html
<span tuiStatus="var(--tui-status-positive)">Success</span>
```

### Usage Examples

#### Basic

**Template:**
```html
<span tuiStatus="var(--tui-status-positive)">Success</span>
<p>Status is automatically colored within some badge appearances</p>
<tui-badge appearance="positive" tuiStatus > Success </tui-badge>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBadge, TuiStatus} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiBadge, TuiStatus],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```
