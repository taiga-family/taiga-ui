# format

- **Package**: `CDK / CORE`
- **Type**: components/utils

A set of format utils

### Usage Examples

#### px

**Template:**
```html
'{{ px }}' = px(value); <form [formGroup]="parametersForm">
<div class="parameters">
<tui-textfield class="tui-space_top-2">
<label tuiLabel>value</label>
<input formControlName="value" tuiInputNumber />
</tui-textfield>
</div>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiPx} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputNumber, TuiTextfield],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected parametersForm = new FormGroup({
        value: new FormControl(11),
    });

    protected get px(): string {
        const {value} = this.parametersForm.value;

        return tuiPx(value ?? 0);
    }
}
```

**LESS:**
```less
.parameters {
    margin-block-start: 0.75rem;
    inline-size: 13.75rem;
}
```

#### getCurrencySymbol

**Template:**
```html
{{ currency }} = getCurrencySymbol(currency); <form [formGroup]="parametersForm">
<div class="parameters">
<tui-textfield tuiChevron class="tui-space_top-2" >
<label tuiLabel>currency</label>
<input formControlName="currency" tuiSelect />
<tui-data-list-wrapper *tuiTextfieldDropdown new [items]="items" />
</tui-textfield>
</div>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiCurrencyVariants, tuiGetCurrencySymbol} from '@taiga-ui/addon-commerce';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiChevron, TuiDataListWrapper, TuiSelect} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiChevron,
        TuiDataListWrapper,
        TuiSelect,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = [
        'USD',
        'RUB',
        '643',
        'KZT',
        '051',
        'KRW',
        'CHF',
        'EUR',
        'GBP',
    ];

    protected parametersForm = new FormGroup({
        currency: new FormControl<TuiCurrencyVariants>(null),
    });

    protected get currency(): string | null {
        const {currency} = this.parametersForm.value;

        return currency ? tuiGetCurrencySymbol(currency) : null;
    }
}
```

**LESS:**
```less
.parameters {
    margin-block-start: 0.75rem;
    inline-size: 13.75rem;
}
```

#### formatNumber

**Template:**
```html
'{{ formattedNumber }}' = tuiFormatNumber(value, precision, decimalSeparator, thousandSeparator); <form [formGroup]="parametersForm">
<div class="parameters">
<tui-input formControlName="value" class="tui-space_top-2" > value </tui-input>
<tui-input formControlName="precision" class="tui-space_top-2" > precision </tui-input>
<tui-input formControlName="decimalSeparator" class="tui-space_top-2" > decimalSeparator </tui-input>
<tui-input formControlName="thousandSeparator" class="tui-space_top-2" > thousandSeparator </tui-input>
</div>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiDecimalSymbol, tuiFormatNumber} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected parametersForm = new FormGroup({
        value: new FormControl(123456.789),
        precision: new FormControl(2),
        decimalSeparator: new FormControl<TuiDecimalSymbol>('.'),
        thousandSeparator: new FormControl(' '),
    });

    protected get formattedNumber(): string {
        const {value, precision, decimalSeparator, thousandSeparator} =
            this.parametersForm.value;

        return tuiFormatNumber(value ?? 123456.789, {
            precision: precision ?? 2,
            decimalSeparator: decimalSeparator ?? '.',
            thousandSeparator: thousandSeparator ?? ' ',
        });
    }
}
```

**LESS:**
```less
.parameters {
    margin-block-start: 0.75rem;
    inline-size: 13.75rem;
}
```
