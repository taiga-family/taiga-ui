# InputCard

- **Package**: `ADDON-COMMERCE`
- **Type**: components

`InputCard` can be used with `InputExpire` and `InputCVC` to input a card. Use `tuiCreateLuhnValidator(message)` to create a `Validator` that uses Luhn algorithm

### How to Use (Import)

```ts
import {TuiInputCard, TuiInputCVC, TuiInputExpire} from '@taiga-ui/addon-commerce';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiInputCard,
    TuiInputCVC,
    TuiInputExpire,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<form [formGroup]="form">
  <tui-textfield>
    <label tuiLabel>Card number</label>
    <input
      formControlName="card"
      tuiInputCard
    />
  </tui-textfield>
  <tui-textfield>
    <label tuiLabel>Expire date</label>
    <input
      formControlName="expire"
      tuiInputExpire
    />
  </tui-textfield>
  <tui-textfield>
    <label tuiLabel>CVC/CVV</label>
    <input
      formControlName="cvc"
      tuiInputCVC
    />
  </tui-textfield>
</form>
```

### Example

```html
<tui-textfield [iconEnd]="icons.iconEnd" [iconStart]="icons.iconStart" [tuiTextfieldCleaner]="textfield.cleaner" [tuiTextfieldSize]="textfield.size" >
<label *ngIf="textfield.size !== 's'" tuiLabel > Card number </label>
<input tuiInputCard [disabled]="control.disabled" [icon]="icon" [invalid]="control.invalid" [placeholder]="textfield.size === 's' ? 'Card number' : ''" [readOnly]="control.readonly" [(ngModel)]="card" (binChange)="binChange.emitEvent($event)" />
</tui-textfield>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [(ngModel)] | `string` | Card number (also works with a reactive control) |
| [icon] | `string | null` | Card icon |

### API - Outputs

| Event | Type | Description |
|-------|------|-------------|
| (binChange) | `string | null` | BIN value (card first 6 symbols) |

### Usage Examples

#### Form

**Template:**
```html
<form [formGroup]="form">
<tui-textfield>
<label tuiLabel>Card number</label>
<input formControlName="card" tuiInputCard [icon]="card" (binChange)="onBinChange($event)" />
</tui-textfield>
<section>
<tui-textfield>
<label tuiLabel>Expires</label>
<input formControlName="expire" tuiInputExpire />
</tui-textfield>
<tui-textfield>
<label tuiLabel>CVC/CVV</label>
<input formControlName="cvc" tuiInputCVC />
</tui-textfield>
</section>
<tui-error formControlName="card" [error]="[] | tuiFieldError | async" />
</form>
<p>{{ form.value | json }}</p>
```

**TypeScript:**
```ts
import {AsyncPipe, JsonPipe} from '@angular/common';
import {Component, inject, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    tuiCreateLuhnValidator,
    TuiInputCard,
    TuiInputCVC,
    TuiInputExpire,
} from '@taiga-ui/addon-commerce';
import {
    TuiAlertService,
    TuiError,
    TuiTextfield,
    tuiTextfieldOptionsProvider,
} from '@taiga-ui/core';
import {TuiFieldErrorPipe} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        JsonPipe,
        ReactiveFormsModule,
        TuiError,
        TuiFieldErrorPipe,
        TuiInputCard,
        TuiInputCVC,
        TuiInputExpire,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [tuiTextfieldOptionsProvider({cleaner: signal(true)})],
})
export default class Example {
    private readonly alerts = inject(TuiAlertService);

    protected readonly form = new FormGroup({
        card: new FormControl('', tuiCreateLuhnValidator('Card number is invalid')),
        expire: new FormControl(''),
        cvc: new FormControl(''),
    });

    protected get card(): string | null {
        const value: string | null | undefined = this.form.get('card')?.value;

        if ((value?.length ?? 0) < 7) {
            return null;
        }

        switch (value?.charAt(0)) {
            case '0':
            case '1':
            case '2':
                return 'https://ng-web-apis.github.io/dist/assets/images/common.svg';
            case '3':
            case '4':
            case '5':
                return 'https://ng-web-apis.github.io/dist/assets/images/geolocation.svg';
            case '6':
            case '7':
                return 'https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg';
            case '8':
            case '9':
            default:
                return 'https://ng-web-apis.github.io/dist/assets/images/payment-request.svg';
        }
    }

    protected onBinChange(bin: string | null): void {
        this.alerts.open(String(bin), {label: '(binChange)'}).subscribe();
    }
}
```

**LESS:**
```less
form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

section {
    display: flex;
    gap: inherit;

    tui-textfield {
        flex: 1;
    }
}
```

#### Card

**Template:**
```html
<tui-textfield>
<label tuiLabel>Card number</label>
<input icon="" tuiInputCard [(ngModel)]="card" />
<tui-thumbnail-card *ngIf="card === '1234123412341234'" iconStart="@tui.dollar-sign" paymentSystem="mastercard" size="s" [style.background]="'#2b9aff linear-gradient(110deg, transparent 70%, #0780ff 71%, #db028b 100%)'" />
</tui-textfield>
```

**TypeScript:**
```ts
import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiInputCard, TuiThumbnailCard} from '@taiga-ui/addon-commerce';
import {TuiTextfield} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [FormsModule, NgIf, TuiInputCard, TuiTextfield, TuiThumbnailCard],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected card = '1234123412341234';
}
```
