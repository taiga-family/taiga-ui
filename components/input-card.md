# InputCard

- **Package**: `ADDON-COMMERCE`
- **Type**: components

`InputCard` can be used with `InputExpire` and `InputCVC` to input a card. Use `tuiCreateLuhnValidator(message)` to create a `Validator` that uses Luhn algorithm

### Example

```html
<tui-textfield [iconEnd]="icons.iconEnd" [iconStart]="icons.iconStart" [invalid]="control.invalid" [tuiAppearanceFocus]="appearance.focus" [tuiAppearanceState]="appearance.state" [tuiTextfieldCleaner]="textfield.cleaner" [tuiTextfieldSize]="textfield.size" > @if (textfield.size !== 's') { <label tuiLabel>Card number</label> } <input tuiInputCard [disabled]="control.disabled" [placeholder]="textfield.size === 's' ? 'Card number' : ''" [readonly]="control.readonly" [(ngModel)]="card" (binChange)="binChange.emitEvent($event)" />
</tui-textfield>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [(ngModel)] | `string` | card number (also works with a reactive control) |

### API - Outputs

| Event | Type | Description |
|-------|------|-------------|
| (binChange) | `string | null` | BIN value (card first 6 symbols) |

### Usage Examples

#### Form

`form` tag is used for better autocomplete support

**Template:**
```html
<form [formGroup]="form">
<tui-textfield>
<label tuiLabel>Card number</label>
<input formControlName="card" tuiInputCard (binChange)="onBinChange($event)" />
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
<tui-error formControlName="card" />
</form>
<p>{{ form.value | json }}</p>
```

**TypeScript:**
```ts
import {JsonPipe} from '@angular/common';
import {Component, inject, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiCreateLuhnValidator, TuiInputCard} from '@taiga-ui/addon-commerce';
import {
    TuiError,
    TuiNotificationService,
    tuiTextfieldOptionsProvider,
} from '@taiga-ui/core';

@Component({
    imports: [JsonPipe, ReactiveFormsModule, TuiError, TuiInputCard],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [tuiTextfieldOptionsProvider({cleaner: signal(true)})],
})
export default class Example {
    private readonly alerts = inject(TuiNotificationService);

    protected readonly form = new FormGroup({
        card: new FormControl('', tuiCreateLuhnValidator('Card number is invalid')),
        expire: new FormControl(''),
        cvc: new FormControl(''),
    });

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
<input tuiInputCard [(ngModel)]="card" /> @if (card === '1234123412341234') { <span iconStart="@tui.dollar-sign" paymentSystem="mastercard" size="s" tuiThumbnailCard [style.background]="'#2b9aff linear-gradient(110deg, transparent 70%, #0780ff 71%, #db028b 100%)'" ></span> } </tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiInputCard, TuiThumbnailCard} from '@taiga-ui/addon-commerce';

@Component({
    imports: [FormsModule, TuiInputCard, TuiThumbnailCard],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected card = '1234123412341234';
}
```
