# Status

- **Package**: `KIT`
- **Type**: components

### Usage Examples

#### Basic

**Template:**
```html
<span tuiStatus="var(--tui-status-positive)">Success</span>
<p>Status is automatically colored within some badge appearances</p>
<span appearance="positive" tuiBadge tuiStatus > Success </span>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBadge, TuiStatus} from '@taiga-ui/kit';

@Component({
    imports: [TuiBadge, TuiStatus],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```
