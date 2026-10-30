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
    standalone: true,
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

#### flatLength

**Template:**
```html
<p>{{ flatted }} = flatLength([[1, 2], [3, 4], [5, 6]]);</p>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiFlatLength} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected get flatted(): number {
        return tuiFlatLength([
            [1, 2],
            [3, 4],
            [5, 6],
        ]);
    }
}
```

#### getPaymentSystem

**Template:**
```html
'{{ paymentSystem }}' = getPaymentSystem(cardNumber); <form [formGroup]="parametersForm">
<tui-textfield tuiChevron class="parameters" [tuiTextfieldCleaner]="false" >
<input formControlName="cardNumber" placeholder="Choose card number" tuiSelect />
<tui-data-list-wrapper *tuiTextfieldDropdown new [items]="items" />
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
        '6734567890123456',
        '5536567890123456',
        '2202567890123456',
        '4405567890123456',
        '4000567890123456',
    ];

    protected parametersForm = new FormGroup({
        cardNumber: new FormControl(''),
    });

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

**Template:**
```html
{{ isPresent }} = isPresent(value); <tui-textfield tuiChevron class="parameters" >
<label tuiLabel>value</label>
<input tuiSelect [(ngModel)]="value" />
<tui-data-list-wrapper *tuiTextfieldDropdown new [items]="items" />
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
    standalone: true,
    imports: [FormsModule, TuiChevron, TuiDataListWrapper, TuiSelect, TuiTextfield],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
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

**Template:**
```html
<form [formGroup]="userDetailsForm">
<p>
<tui-input formControlName="name">Name</tui-input>
<tui-error formControlName="name" [error]="[] | tuiFieldError | async" />
</p>
<div formGroupName="address">
<p>
<tui-input formControlName="street">Street</tui-input>
<tui-error formControlName="street" [error]="[] | tuiFieldError | async" />
</p>
<p>
<tui-input formControlName="zipCode">Zip code</tui-input>
<tui-error formControlName="zipCode" [error]="[] | tuiFieldError | async" />
</p>
<p>
<tui-input formControlName="city">City</tui-input>
<tui-error formControlName="city" [error]="[] | tuiFieldError | async" />
</p>
</div>
</form>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component, type OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiMarkControlAsTouchedAndValidate} from '@taiga-ui/cdk';
import {TuiError} from '@taiga-ui/core';
import {TuiFieldErrorPipe} from '@taiga-ui/kit';
import {TuiInputModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        ReactiveFormsModule,
        TuiError,
        TuiFieldErrorPipe,
        TuiInputModule,
    ],
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
