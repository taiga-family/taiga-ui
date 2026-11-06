# Miscellaneous

- **Package**: `CDK`
- **Type**: components/utils

Some utils to simplify the development process

```ts
import {getPaymentSystem} from '@taiga-ui/kit';

//...
paymentSystem = getPaymentSystem(cardNumber);
// ...
```

### Usage Examples

#### assert

Logs assert into console in dev mode

**Template:**
```html
<p [innerHTML]="assertResult"></p>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected get assertResult(): string {
        const dayOfWeek = new Date().getDay();
        const isFriday = dayOfWeek === 5;

        ngDevMode && console.assert(isFriday, 'Today is not a friday');

        return isFriday
            ? 'Nothing in console'
            : 'There is a console assert: <br> "Today is not a friday"';
    }
}
```

#### getPaymentSystem

Card number to its payment system

**Template:**
```html
'{{ paymentSystem }}' = getPaymentSystem(cardNumber); <form [formGroup]="parametersForm">
<tui-textfield tuiChevron class="parameters" [tuiTextfieldCleaner]="false" >
<input formControlName="cardNumber" placeholder="Choose card number" tuiSelect />
<tui-data-list-wrapper *tuiDropdown [items]="items" />
</tui-textfield>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiGetPaymentSystem} from '@taiga-ui/addon-commerce';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiChevron, TuiDataListWrapper, TuiSelect} from '@taiga-ui/kit';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiChevron,
        TuiDataListWrapper,
        TuiSelect,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = [
        '6734567890123456',
        '5536567890123456',
        '2202567890123456',
        '4405567890123456',
        '4000567890123456',
    ];

    protected parametersForm = new FormGroup({cardNumber: new FormControl('')});

    protected get paymentSystem(): string | null {
        const {cardNumber} = this.parametersForm.value;

        return tuiGetPaymentSystem(cardNumber ?? '');
    }
}
```

**LESS:**
```less
.parameters {
    margin-block-start: 0.75rem;
    inline-size: 14rem;
}
```

#### isPresent

Checks value not to be null or undefined

**Template:**
```html
{{ isPresent }} = isPresent(value); <tui-textfield tuiChevron class="parameters" >
<label tuiLabel>value</label>
<input tuiSelect [(ngModel)]="value" />
<tui-data-list-wrapper *tuiDropdown [items]="items" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiIsPresent} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiChevron, TuiDataListWrapper, TuiSelect} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiChevron, TuiDataListWrapper, TuiSelect, TuiTextfield],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = ['String', 'null', 'undefined'];
    protected value: 'null' | 'String' | 'undefined' | null = null;

    protected get isPresent(): boolean {
        return tuiIsPresent(this.objectifyValue(this.value ?? 'null'));
    }

    private objectifyValue(value: string): string | null | undefined {
        switch (value) {
            case 'null':
                return null;
            case 'undefined':
                return undefined;
            default:
                return value;
        }
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

#### markControlAsTouchedAndValidate

Recursively marks form control as touched and triggers validation

**Template:**
```html
<form [formGroup]="userDetailsForm">
<p>
<tui-textfield>
<input formControlName="name" tuiInput />
<label tuiLabel>Name</label>
</tui-textfield>
<tui-error formControlName="name" />
</p>
<div formGroupName="address">
<p>
<tui-textfield>
<input formControlName="street" tuiInput />
<label tuiLabel>Street</label>
</tui-textfield>
<tui-error formControlName="street" />
</p>
<p>
<tui-textfield>
<input formControlName="zipCode" tuiInput />
<label tuiLabel>Zip code</label>
</tui-textfield>
<tui-error formControlName="zipCode" />
</p>
<p>
<tui-textfield>
<input formControlName="city" tuiInput />
<label tuiLabel>City</label>
</tui-textfield>
<tui-error formControlName="city" />
</p>
</div>
</form>
```

**TypeScript:**
```ts
import {Component, type OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiMarkControlAsTouchedAndValidate} from '@taiga-ui/cdk';
import {TuiError, TuiInput} from '@taiga-ui/core';

@Component({
    imports: [ReactiveFormsModule, TuiError, TuiInput],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example implements OnInit {
    protected userDetailsForm = new FormGroup({
        name: new FormControl('', Validators.required),
        address: new FormGroup({
            street: new FormControl('', Validators.required),
            city: new FormControl('', Validators.required),
            zipCode: new FormControl('', Validators.required),
        }),
    });

    public ngOnInit(): void {
        tuiMarkControlAsTouchedAndValidate(this.userDetailsForm);
    }
}
```

- Import into component and use:
