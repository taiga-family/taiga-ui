# Flag

- **Package**: `CORE`
- **Type**: pipes

Pipe for getting source path to image with flag

### How to Use (Import)

```ts
import {TuiFlagPipe} from '@taiga-ui/core';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiFlagPipe,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<img
  alt="United Arab Emirates"
  [src]="'AE' | tuiFlag"
/>
```

### Example

```html
<img alt="" [src]="countryIsoCode | tuiFlag" />
```

### Usage Examples

#### Basic

**Template:**
```html
<img [alt]="(countriesNames$ | async)?.[countryIsoCode]" [src]="countryIsoCode | tuiFlag" [style.border-radius.%]="50" />
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFlagPipe} from '@taiga-ui/core';
import {type TuiCountryIsoCode} from '@taiga-ui/i18n';
import {TUI_COUNTRIES} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [AsyncPipe, TuiFlagPipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly countryIsoCode: TuiCountryIsoCode = 'AE';
    protected readonly countriesNames$ = inject(TUI_COUNTRIES);
}
```
