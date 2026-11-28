# Error

- **Package**: `CORE`
- **Type**: components

`Error` allows to show an error. If you work with a form, see `tuiFieldError` . The idea of `tui-error` is to show arbitrary messages styled as errors, with height or fade transition.

### How to Use (Import)

```ts
import {TuiError} from '@taiga-ui/core';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiError,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<tui-error [error]="error"></tui-error>
```

### Example

```html
<tui-error [error]="error" />
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| error | `TuiValidationError | string | null` | Active state for routerLinkActive , for example |

### Usage Examples

#### Basic

**Template:**
```html
<label tuiLabel>
<input tuiSwitch type="checkbox" [(ngModel)]="enabled" /> Show </label>
<tui-error [error]="computedError" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiValidationError} from '@taiga-ui/cdk';
import {TuiError, TuiLabel} from '@taiga-ui/core';
import {TuiSwitch} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiError, TuiLabel, TuiSwitch],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected enabled = false;

    protected error = new TuiValidationError('An error');

    protected get computedError(): TuiValidationError | null {
        return this.enabled ? this.error : null;
    }
}
```
