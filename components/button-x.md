# ButtonX

- **Package**: `Core`
- **Type**: components

A simple preset directive to configure a cleaner/close button, used in textfields, dialogs etc.

### Usage Examples

#### Basic

**Template:**
```html
<button tuiButtonX>Close</button>
<button appearance="action" tuiButtonX > Close </button>
<button size="xs" tuiButtonX > Close </button>
<button appearance="icon" size="xs" tuiButtonX > Close </button>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButtonX} from '@taiga-ui/core';

@Component({
    imports: [TuiButtonX],
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
    gap: 1rem;
}
```
