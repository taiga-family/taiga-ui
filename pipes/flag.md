# Flag

- **Package**: `KIT`
- **Type**: pipes

Pipe for getting source path to image with flag

### Example

```html
<img alt="" [src]="countryIsoCode | tuiFlag" />
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| Country code | `TuiCountryIsoCode` | ISO code of the country |

### Usage Examples

#### Basic

**Template:**
```html
<img [alt]="countriesNames()[countryIsoCode]" [src]="countryIsoCode | tuiFlag" [style.border-radius.%]="50" />
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiCountryIsoCode} from '@taiga-ui/i18n';
import {TUI_COUNTRIES, TuiFlagPipe} from '@taiga-ui/kit';

@Component({
    imports: [TuiFlagPipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly countryIsoCode: TuiCountryIsoCode = 'AE';
    protected readonly countriesNames = inject(TUI_COUNTRIES);
}
```
