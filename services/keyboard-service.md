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
<tui-textfield>
<input tuiInput [(ngModel)]="value" />
<label tuiLabel>Type something</label>
</tui-textfield>
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
import {TuiButton, TuiInput} from '@taiga-ui/core';

@Component({
    imports: [FormsModule, TuiButton, TuiInput],
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
