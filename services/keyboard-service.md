# KeyboardService

- **Package**: `ADDON-MOBILE`
- **Type**: components/services

A service that allows hiding and showing virtual keyboard programmatically on both Android and iOS devices Does nothing on devices with no virtual keyboard or when input is not focused

```ts
import {inject} from '@angular/core';
import {TuiKeyboardService} from '@taiga-ui/cdk';

// ...
export class Example {
  private readonly keyboard = inject(TuiKeyboardService);

  toggle(): void {
    this.keyboard.toggle();
  }
}
```

### Usage Examples

#### Basic

**Template:**
```html
<tui-input [(ngModel)]="value">Type something</tui-input>
<p>
<button tuiButton type="button" (mousedown.prevent.zoneless)="keyboard.toggle()" > Toggle </button>
</p>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiKeyboardService} from '@taiga-ui/addon-mobile';
import {TuiButton} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [FormsModule, TuiButton, TuiInputModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly keyboard = inject(TuiKeyboardService);
    protected value = '';
}
```

- Inject service and call its methods:
