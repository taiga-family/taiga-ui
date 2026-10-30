# InputCardGroup

- **Package**: `ADDON-COMMERCE`
- **Type**: components

`InputCardGroup` is used to input a card as a separated control

### Example

```html
<ng-template>
<tui-input-card-group [codeLength]="codeLength" [compact]="compact" [formControl]="formControl" [icon]="icon" [id]="id" [inputs]="inputs" [invalid]="control.invalid" [placeholder]="placeholder" [readonly]="control.readonly" [tuiDisabled]="control.disabled" />
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [cardValidator] | `TuiBooleanHandler<string>` | custom card validator for moving focus to the next field |
| [codeLength] | `3 \| 4` | code length |
| [compact] | `boolean` | manually set compact mode (forced on mobile resolution) |
| [icon] | `PolymorpheusContent` | custom card icon |
| [id] | `string` | accordingly). Auto-generated when not provided. |
| [inputs] | `TuiCardInputs` | toggle availability of inputs |
| [placeholder] | `string` | — |

### API - Outputs

| Event | Type | Description |
|-------|------|-------------|
| (binChange) | `string \| null` | BIN value (card first 6 symbols) |

### Usage Examples

#### With validation

**Template:**
```html
<tui-input-card-group [formControl]="control" [icon]="card" />
<tui-error [formControl]="control" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    type TuiCard,
    tuiCardExpireValidator,
    tuiCardNumberValidator,
    TuiInputCardGroup,
} from '@taiga-ui/addon-commerce';
import {TuiError} from '@taiga-ui/core';

@Component({
    imports: [ReactiveFormsModule, TuiError, TuiInputCardGroup],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl<TuiCard | null>(null, [
        tuiCardNumberValidator,
        tuiCardExpireValidator,
    ]);

    protected get card(): string | null {
        const value = this.control.value?.card || '';

        if (value.length < 7) {
            return null;
        }

        switch (value.charAt(0)) {
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
}
```

#### With saved cards

**Template:**
```html
<button size="m" tuiButton type="button" class="tui-space_bottom-4" (click)="open = !open" > Toggle dropdown </button>
<form [formGroup]="card">
<tui-input-card-group formControlName="meta" tuiTextfieldSize="m" [(open)]="open" >
<tui-data-list *tuiDropdown size="l" >
<button tuiOption type="button" [value]="null" >
<tui-icon icon="@tui.plus" class="new" />
<span class="label">New card</span>
</button> @for (item of items; track item) { <button tuiOption type="button" [value]="item" >
<span size="s" tuiThumbnailCard class="card" > {{ item.card.slice(-4) }} </span>
<span tuiTitle class="label" > {{ item.bank }} <span tuiSubtitle>{{ item.name }}</span>
</span>
<span>{{ item.card.slice(-5) }}</span>
</button> } </tui-data-list>
</tui-input-card-group>
</form>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiInputCardGroup, TuiThumbnailCard} from '@taiga-ui/addon-commerce';
import {TuiButton, TuiDataList, TuiIcon, TuiTextfield, TuiTitle} from '@taiga-ui/core';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiButton,
        TuiDataList,
        TuiIcon,
        TuiInputCardGroup,
        TuiTextfield,
        TuiThumbnailCard,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Example {
    protected readonly items = [
        {card: '4321***1234', expire: '12/21', name: 'Salary', bank: 'Wachovia Bank'},
        {
            card: '8765***5678',
            expire: '03/42',
            cvc: '***',
            name: 'Tips',
            bank: 'Bank of America',
        },
        {card: '4200***9000', name: 'Dogecoins', bank: 'Crypto'},
    ];

    protected readonly card = new FormGroup({meta: new FormControl(this.items[0])});
    protected open = false;
}
```

**LESS:**
```less
.new {
    inline-size: 2.5rem;
    block-size: 1.625rem;
    border-radius: 0.25rem;
    background: var(--tui-background-neutral-1);
    color: var(--tui-text-action);
}

.card {
    background: var(--tui-chart-categorical-01);

    button:nth-child(4) & {
        background: var(--tui-chart-categorical-05);
    }
}

.label {
    margin: 0 auto 0 0.75rem;
}
```

#### With custom card template

**Template:**
```html
<tui-input-card-group [formControl]="control" [icon]="template" />
<ng-template #template="polymorpheus" polymorpheus >
<img alt="custom-icon" height="32" src="https://ng-web-apis.github.io/dist/assets/images/web-api.svg" width="32" />
</ng-template>
<tui-error [formControl]="control" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    type TuiCard,
    tuiCardExpireValidator,
    tuiCardNumberValidator,
    TuiInputCardGroup,
} from '@taiga-ui/addon-commerce';
import {TuiError} from '@taiga-ui/core';
import {PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

@Component({
    imports: [PolymorpheusTemplate, ReactiveFormsModule, TuiError, TuiInputCardGroup],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl<TuiCard | null>(null, [
        tuiCardNumberValidator,
        tuiCardExpireValidator,
    ]);
}
```

#### Custom form state

**Template:**
```html
<tui-input-card-group [formControl]="control" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiCard, TuiInputCardGroup} from '@taiga-ui/addon-commerce';

@Component({
    imports: [ReactiveFormsModule, TuiInputCardGroup],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected control = new FormControl<TuiCard | null>({
        card: '',
        expire: '',
        cvc: '***',
    });
}
```

#### Custom labels

**Template:**
```html
<tui-input-card-group [formControl]="control"> @if (!control.value) { Enter card number } </tui-input-card-group>
```

**TypeScript:**
```ts
import {Component, signal} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    TUI_INPUT_CARD_GROUP_TEXTS,
    type TuiCard,
    TuiInputCardGroup,
} from '@taiga-ui/addon-commerce';

@Component({
    imports: [ReactiveFormsModule, TuiInputCardGroup],
    templateUrl: './index.html',
    changeDetection,
    providers: [
        {
            provide: TUI_INPUT_CARD_GROUP_TEXTS,
            useValue: signal({
                cardNumberText: 'Number',
                expiryText: 'MM/YY',
                cvcText: 'Code',
            }),
        },
    ],
})
export default class Example {
    protected readonly control = new FormControl<Partial<TuiCard>>({
        card: '558620******2158',
        expire: '12/25',
    });
}
```

#### Empty labels

**Template:**
```html
<label tuiLabel class="tui-space_bottom-4" >
<input tuiSwitch type="checkbox" [ngModel]="showLabels()" (ngModelChange)="showLabels.set($event)" /> {{ showLabels() ? 'Hide labels' : 'Show labels' }} </label>
<tui-input-card-group [formControl]="control" />
```

**TypeScript:**
```ts
import {Component, computed, signal} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    TUI_INPUT_CARD_GROUP_TEXTS,
    type TuiCard,
    TuiInputCardGroup,
} from '@taiga-ui/addon-commerce';
import {TuiLabel} from '@taiga-ui/core';
import {TuiSwitch} from '@taiga-ui/kit';

const showLabels = signal(true);

const texts = computed(() =>
    showLabels()
        ? {cardNumberText: 'Card number', expiryText: 'MM/YY', cvcText: 'CVV'}
        : {cardNumberText: '', expiryText: '', cvcText: ''},
);

@Component({
    imports: [FormsModule, ReactiveFormsModule, TuiInputCardGroup, TuiLabel, TuiSwitch],
    templateUrl: './index.html',
    changeDetection,
    providers: [
        {
            provide: TUI_INPUT_CARD_GROUP_TEXTS,
            useValue: texts,
        },
    ],
})
export default class Example {
    protected readonly showLabels = showLabels;

    protected readonly control = new FormControl<Partial<TuiCard>>({
        card: '558620******2158',
        expire: '12/25',
    });
}
```

Add
`tuiCreateLuhnValidator(customMessage?)`
to control validators to validate it with Luhn algorithm
