# Amount

- **Package**: `ADDON-COMMERCE`
- **Type**: pipes

Pipe to format number values to show money sums Number formatting can be customized by using TUI_NUMBER_FORMAT

### How to Use (Import)

```ts
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiAmountPipe,
  ],
})
export class Example {}
```

### How to Use (Template)

```html
<!-- {{ 100000 | tuiAmount : currency : align | async }} -->
<p>{{ 100000 | tuiAmount : '978' : 'left' | async }}</p>
<p>{{ 100000 | tuiAmount : 'EUR' : 'right' | async }}</p>
```

### Usage Examples

#### base

**Template:**
```html
<ol>
<li>{{ 10728.9 | tuiAmount | async }}</li>
<li>{{ 10728.9 | tuiAmount: 'RUB' | async }}</li>
<li>{{ 10728.9 | tuiAmount: 'EUR' | async }}</li>
<li>{{ 10728.9 | tuiAmount: 'USD' | async }}</li>
<li>{{ 10728.9 | tuiAmount: 'GBP' | async }}</li>
<li>{{ -12345.1 | tuiAmount: 'USD' : 'left' | async }}</li>
<li>{{ 100 | tuiAmount: '£' : 'left' | async }}</li>
<li>{{ 200 | tuiAmount: 'AED' : 'left' | async }}</li>
</ol>
<hr class="tui-space_top-1 tui-space_bottom-1" />
<span>Remaining {{ 10728.9 | tuiAmount | async }} of {{ 11000 | tuiAmount | async }}</span>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';

@Component({
    standalone: true,
    imports: [AsyncPipe, TuiAmountPipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### format

**Template:**
```html
<div [tuiNumberFormat]="{rounding: 'round', thousandSeparator: ',', decimalSeparator: '.'}"> {{ -10000000.536 | tuiAmount: 'USD' : 'left' | async }} </div>
<div>{{ 200.536 | tuiAmount: 'EUR' | async }}</div>
<div [tuiNumberFormat]="{rounding: 'ceil', precision: 1}"> {{ 54000.643 | tuiAmount: 'USD' : 'left' | async }} </div>
<div [tuiNumberFormat]="{decimalMode: 'always'}"> {{ 800 | tuiAmount: 'USD' : 'left' | async }} </div>
<div [tuiNumberFormat]="{precision: 0}"> {{ -0.83 | tuiAmount: 'RUB' : 'right' | async }} </div>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiNumberFormat} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [AsyncPipe, TuiAmountPipe, TuiNumberFormat],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### options

**Template:**
```html
<div>{{ -12.3 | tuiAmount | async }}</div>
<div>{{ 3000 | tuiAmount | async }}</div>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiAmountOptionsProvider, TuiAmountPipe} from '@taiga-ui/addon-commerce';

@Component({
    standalone: true,
    imports: [AsyncPipe, TuiAmountPipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiAmountOptionsProvider({
            sign: 'always',
            currency: 'USD',
            currencyAlign: 'left',
        }),
    ],
})
export default class Example {}
```

#### separate decimal part

**Template:**
```html
<div>
<span [tuiNumberFormat]="{precision: 0}">{{ 120.59 | tuiAmount | async }}</span>
<span [style.color]="'var(--tui-text-secondary)'">{{ 120.59 | tuiDecimal | async }}</span>
</div>
<div>
<span [tuiNumberFormat]="{precision: 0}">{{ 120.59 | tuiAmount: 'EUR' | async }}</span>
<span [style.color]="'var(--tui-text-secondary)'">{{ 120.59 | tuiDecimal | async }}</span>
</div>
<div>
<span [tuiNumberFormat]="{precision: 0}">{{ 120.59 | tuiAmount: 'USD' | async }}</span>
<span [style.color]="'var(--tui-text-secondary)'">{{ 120.59 | tuiDecimal | async }}</span>
</div>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    tuiAmountOptionsProvider,
    TuiAmountPipe,
    TuiDecimalPipe,
} from '@taiga-ui/addon-commerce';
import {TuiNumberFormat} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [AsyncPipe, TuiAmountPipe, TuiDecimalPipe, TuiNumberFormat],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [tuiAmountOptionsProvider({currencyAlign: 'left'})],
})
export default class Example {}
```

**LESS:**
```less
:host {
    font: var(--tui-font-text-l);
}
```
