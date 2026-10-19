# ThumbnailCard

- **Package**: `ADDON-COMMERCE`
- **Type**: components

Customizable credit card thumbnail

### How to Use (Import)

```ts
import {TuiThumbnailCard} from '@taiga-ui/addon-commerce';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiThumbnailCard,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<tui-thumbnail-card
  class="logo"
  paymentSystem="visa"
>
  {{ 1234 }}
</tui-thumbnail-card>
```

### Example

```html
<tui-thumbnail-card [iconEnd]="controlIcons.iconEnd" [iconStart]="controlIcons.iconStart" [monoHandler]="monoHandler" [paymentSystem]="paymentSystem" [size]="size" [style.background]="background" > {{ contentProjection }} </tui-thumbnail-card>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [monoHandler] | `TuiBooleanHandler<TuiPaymentSystem>` | Whether to use colored icon for particular payment system |
| [paymentSystem] | `TuiPaymentSystem | null` | Payment system |
| [size] | `TuiSizeXS | TuiSizeL` | Size |

```html
<tui-thumbnail-card>{{ contentProjection }}</tui-thumbnail-card>
```

### Usage Examples

#### Sizes

**Template:**
```html
<tui-thumbnail-card *ngFor="let size of sizes" iconEnd="@tui.cloud" iconStart="@tui.lock" paymentSystem="mastercard" [size]="size" > 4572 </tui-thumbnail-card>
```

**TypeScript:**
```ts
import {NgFor} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiThumbnailCard} from '@taiga-ui/addon-commerce';

@Component({
    standalone: true,
    imports: [NgFor, TuiThumbnailCard],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly sizes = ['xs', 's', 'm', 'l'] as const;
}
```

**LESS:**
```less
:host {
    display: flex;
    gap: 1rem;
}
```

#### A cool one

**Template:**
```html
<tui-thumbnail-card paymentSystem="mir" class="logo" > 7777 </tui-thumbnail-card>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiThumbnailCard} from '@taiga-ui/addon-commerce';

@Component({
    standalone: true,
    imports: [TuiThumbnailCard],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
@keyframes spinCard {
    0% {
        transform: rotateY(0);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.3);
    }

    12% {
        transform: rotateY(90deg) rotateZ(6deg) scale(1.7);
        box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.3);
    }

    25% {
        transform: rotateY(180deg);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.3);
    }

    50% {
        transform: rotateY(180deg);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.3);
    }

    62% {
        transform: rotateY(270deg) rotateZ(-8deg) scale(1.7);
        box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.3);
    }

    80% {
        transform: rotateY(720deg);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.3);
    }

    100% {
        transform: rotateY(720deg);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.3);
    }
}

:host {
    perspective: 50rem;
}

.logo {
    background-color: #7c48c3;
    background-image: linear-gradient(45deg, #c86dd7 0%, #3023ae 100%);
    overflow: visible;
    animation: spinCard calc(var(--tui-duration) * 20) infinite;
}
```

#### Backgrounds

**Template:**
```html
<tui-thumbnail-card iconEnd="@tui.user" paymentSystem="visa" size="l" class="star" > 1234 </tui-thumbnail-card>
<tui-thumbnail-card iconEnd="@tui.user" paymentSystem="mastercard" size="l" class="gradient" > 5678 </tui-thumbnail-card>
<tui-thumbnail-card paymentSystem="maestro" size="l" class="retrowave" > 9000 </tui-thumbnail-card>
<tui-thumbnail-card paymentSystem="unionpay" size="l" class="radial" > 7777 </tui-thumbnail-card>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiThumbnailCard} from '@taiga-ui/addon-commerce';

@Component({
    standalone: true,
    imports: [TuiThumbnailCard],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
:host {
    display: flex;
    gap: 1rem;
}

.star {
    color: #000;
    background: linear-gradient(45deg, rgba(255, 170, 0, 0.82), #fa0), url('/assets/taiga-ui/icons/star.svg');
    background-color: #fff;
}

.gradient {
    color: #fff;
    background: #2b9aff linear-gradient(110deg, transparent 70%, #0780ff 71%, #db028b 100%);
}

.retrowave {
    color: #ecb5ff;
    background: url('/assets/images/avatar.jpg') no-repeat center/cover;

    &::before {
        background-color: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(0.25rem);
    }
}

.radial {
    color: #fff;
    background: radial-gradient(#c900ff, #0079be);
}
```

#### External colored icon

**Template:**
```html
<tui-thumbnail-card iconEnd="@tui.user" paymentSystem="visa" >
<img alt="external" src="https://github.com/waterplea.png?size=200" /> 1234 </tui-thumbnail-card>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiThumbnailCard} from '@taiga-ui/addon-commerce';

@Component({
    standalone: true,
    imports: [TuiThumbnailCard],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
:host {
    display: flex;
    gap: 1rem;
}
```

#### Textfield

**Template:**
```html
<tui-segmented>
<button *ngFor="let state of statuses" type="button" (click)="status = state" > {{ state }} </button>
</tui-segmented>
<tui-textfield>
<label tuiLabel>Card number</label>
<input icon="" tuiInputCard [disabled]="status === 'disabled'" [invalid]="status === 'invalid'" [readOnly]="status === 'readOnly'" [(ngModel)]="card" />
<tui-thumbnail-card *ngIf="card.startsWith('1234')" iconStart="@tui.dollar-sign" paymentSystem="visa" size="s" [style.background]="background" />
</tui-textfield>
```

**TypeScript:**
```ts
import {NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiInputCard, TuiThumbnailCard} from '@taiga-ui/addon-commerce';
import {TuiButton, TuiTextfield} from '@taiga-ui/core';
import {TuiSegmented} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        NgIf,
        TuiButton,
        TuiInputCard,
        TuiSegmented,
        TuiTextfield,
        TuiThumbnailCard,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected statuses = ['normal', 'disabled', 'readOnly', 'invalid'] as const;
    protected status: string = this.statuses[0];
    protected card = '1234123412341234';
    protected background =
        '#2b9aff linear-gradient(110deg, transparent 70%, #0780ff 71%, #db028b 100%)';
}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
```
