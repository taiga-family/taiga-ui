# FormatNumber

- **Package**: `KIT`
- **Type**: pipes

Pipe to format number values to separate thousands Number formatting can be customized by using TUI_NUMBER_FORMAT

### Usage Examples

#### Basic

**Template:**
```html
<p>Formatted number by default: {{ 10500.33 | tuiFormatNumber }}</p>
<p> Formatted number with custom params: {{ 10500.33 | tuiFormatNumber: {maximumFractionDigits: 4, decimalSeparator: '.'} }} </p>
<p> Formatted number with rounding: {{ 10500.334 | tuiFormatNumber: {maximumFractionDigits: 2, decimalSeparator: '.', rounding: 'ceil'} }} </p>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFormatNumberPipe} from '@taiga-ui/kit';

@Component({
    imports: [TuiFormatNumberPipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```
