# Amount

- **Package**: `ADDON-COMMERCE`
- **Type**: pipes

Pipe to format number values to show money sums Number formatting can be customized by using TUI_NUMBER_FORMAT

### Usage Examples

#### base

**Template:**
```html
<ol>
<li>{{ 10728.9 | tuiAmount }}</li>
<li>{{ 10728.9 | tuiAmount: 'RUB' }}</li>
<li>{{ 10728.9 | tuiAmount: 'EUR' }}</li>
<li>{{ 10728.9 | tuiAmount: 'USD' }}</li>
<li>{{ 10728.9 | tuiAmount: 'GBP' }}</li>
<li>{{ -12345.1 | tuiAmount: 'USD' : 'start' }}</li>
<li>{{ 100 | tuiAmount: '£' : 'start' : 'force-negative' }}</li>
<li>{{ 200 | tuiAmount: 'AED' : 'start' }}</li>
</ol>
<hr class="tui-space_top-1 tui-space_bottom-1" />
<span>Remaining {{ 10728.9 | tuiAmount }} of {{ 11000 | tuiAmount }}</span>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';

@Component({
    imports: [TuiAmountPipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### format

**Template:**
```html
<div [tuiNumberFormat]="{rounding: 'round', thousandSeparator: ',', decimalSeparator: '.'}"> {{ -10000000.536 | tuiAmount: 'USD' : 'start' }} </div>
<div>{{ 200.536 | tuiAmount: 'EUR' }}</div>
<div [tuiNumberFormat]="{rounding: 'ceil', precision: 1}"> {{ 54000.643 | tuiAmount: 'USD' : 'start' }} </div>
<div [tuiNumberFormat]="{decimalMode: 'always'}"> {{ 800 | tuiAmount: 'USD' : 'start' }} </div>
<div [tuiNumberFormat]="{precision: 0}"> {{ -0.83 | tuiAmount: 'RUB' : 'end' }} </div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiNumberFormat} from '@taiga-ui/core';

@Component({
    imports: [TuiAmountPipe, TuiNumberFormat],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### options

**Template:**
```html
<div>{{ -12.3 | tuiAmount }}</div>
<div>{{ 3000 | tuiAmount }}</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiAmountOptionsProvider, TuiAmountPipe} from '@taiga-ui/addon-commerce';

@Component({
    imports: [TuiAmountPipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiAmountOptionsProvider({
            sign: 'always',
            currency: 'USD',
            currencyAlign: 'start',
        }),
    ],
})
export default class Example {}
```

#### separate decimal part

**Template:**
```html
<div>
<span [tuiNumberFormat]="{precision: 0}">{{ 120.59 | tuiAmount }}</span>
<span [style.color]="'var(--tui-text-secondary)'">{{ 120.59 | tuiDecimal }}</span>
</div>
<div>
<span [tuiNumberFormat]="{precision: 0}">{{ 120.59 | tuiAmount: 'EUR' }}</span>
<span [style.color]="'var(--tui-text-secondary)'">{{ 120.59 | tuiDecimal }}</span>
</div>
<div>
<span [tuiNumberFormat]="{precision: 0}">{{ 120.59 | tuiAmount: 'USD' }}</span>
<span [style.color]="'var(--tui-text-secondary)'">{{ 120.59 | tuiDecimal }}</span>
</div>
```

**TypeScript:**
```ts
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
    imports: [TuiAmountPipe, TuiDecimalPipe, TuiNumberFormat],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [tuiAmountOptionsProvider({currencyAlign: 'start'})],
})
export default class Example {}
```

**LESS:**
```less
:host {
    font: var(--tui-typography-body-l);
}
```
