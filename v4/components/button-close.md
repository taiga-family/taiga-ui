# ButtonClose

- **Package**: `KIT`
- **Type**: components

### How to Use (Import)

```ts
import {Component} from '@angular/core';
import {TuiButton} from '@taiga-ui/core';
import {TuiButtonClose} from '@taiga-ui/kit';
// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiButton,
    TuiButtonClose,
  ],
})
export class Example {}
```

### How to Use (Template)

```html
<button
  tuiIconButton
  tuiButtonClose
>
  Close
</button>
```

### Usage Examples

#### Basic

**Template:**
```html
<button tuiButtonClose tuiIconButton type="button" > Close </button>
<button appearance="glass" tuiButtonClose tuiIconButton type="button" > Close </button>
<button size="xs" tuiButtonClose tuiIconButton type="button" > Close </button>
<button appearance="glass" size="xs" tuiButtonClose tuiIconButton type="button" > Close </button>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiButtonClose} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiButton, TuiButtonClose],
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
    gap: 1rem;
}
```
