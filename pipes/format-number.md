# FormatNumber

- **Package**: `CORE`
- **Type**: pipes

Pipe to format number values to separate thousands Number formatting can be customized by using TUI_NUMBER_FORMAT

### How to Use (Import)

```ts
import {TuiFormatNumberPipe} from '@taiga-ui/core';

//...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiFormatNumberPipe,
  ],
  //  ...
})
export class Example {}
```

### How to Use (Template)

```html
Formatted number: {{index | tuiFormatNumber | async}}
```

### Usage Examples

#### Basic

**Template:**
```html
<p>Formatted number by default: {{ 10500.33 | tuiFormatNumber | async }}</p>
<p> Formatted number with custom params: {{ 10500.33 | tuiFormatNumber: {precision: 4, decimalSeparator: '.'} | async }} </p>
<p> Formatted number with rounding: {{ 10500.334 | tuiFormatNumber: {precision: 2, decimalSeparator: '.', rounding: 'ceil'} | async }} </p>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFormatNumberPipe} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [AsyncPipe, TuiFormatNumberPipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```
