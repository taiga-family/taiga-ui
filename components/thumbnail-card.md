# ThumbnailCard

- **Package**: `ADDON-COMMERCE`
- **Type**: components

Customizable credit card thumbnail

### Example

```html
<span tuiThumbnailCard [iconEnd]="controlIcons.iconEnd" [iconStart]="controlIcons.iconStart" [paymentSystem]="paymentSystem" [size]="size" [style.background]="background" > {{ contentProjection }} </span>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [paymentSystem] | `TuiPaymentSystem \| null` | — |
| [size] | `TuiSizeXS \| TuiSizeL` | — |
| [style.background] | `string` | — |

### Content projection - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [ng-content] | `string` | content inside |

```html
<span tuiThumbnailCard></span>
```

### Usage Examples

#### Sizes

**Template:**
```html
@for (size of sizes; track size) { <span iconEnd="@tui.cloud" iconStart="@tui.lock" paymentSystem="mastercard" tuiThumbnailCard [size]="size" > 4572 </span> }
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiThumbnailCard} from '@taiga-ui/addon-commerce';

@Component({
    imports: [TuiThumbnailCard],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
<span paymentSystem="mir" tuiThumbnailCard class="logo" > 7777 </span>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiThumbnailCard} from '@taiga-ui/addon-commerce';

@Component({
    imports: [TuiThumbnailCard],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
<span iconEnd="@tui.user" paymentSystem="visa" size="l" tuiThumbnailCard class="star" > 1234 </span>
<span iconEnd="@tui.user" paymentSystem="mastercard" size="l" tuiThumbnailCard class="gradient" > 5678 </span>
<span paymentSystem="maestro" size="l" tuiThumbnailCard class="retrowave" > 9000 </span>
<span paymentSystem="unionpay" size="l" tuiThumbnailCard class="radial" > 7777 </span>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiThumbnailCard} from '@taiga-ui/addon-commerce';

@Component({
    imports: [TuiThumbnailCard],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
    background:
        linear-gradient(45deg, rgba(255, 170, 0, 0.82), #fa0), url('/assets/taiga-ui/icons/star.svg'),
        url('/assets/taiga-ui/icons/star.svg');
    background-size:
        100%,
        3rem 1.5rem,
        3rem 1.5rem;
    background-position:
        0 0,
        -0.75rem 0,
        0.75rem;
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
<button iconEnd="@tui.user" paymentSystem="visa" tuiThumbnailCard type="button" >
<img alt="external" src="https://github.com/waterplea.png?size=200" /> 1234 </button>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiThumbnailCard} from '@taiga-ui/addon-commerce';

@Component({
    imports: [TuiThumbnailCard],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
<tui-segmented> @for (state of statuses; track state) { <button type="button" (click)="status = state" > {{ state }} </button> } </tui-segmented>
<tui-textfield [invalid]="status === 'invalid'">
<label tuiLabel>Card number</label>
<input icon="" tuiInputCard [disabled]="status === 'disabled'" [readonly]="status === 'readonly'" [(ngModel)]="card" /> @if (card.startsWith('1234')) { <span iconStart="@tui.dollar-sign" paymentSystem="visa" size="s" tuiThumbnailCard [style.background]="background" ></span> } </tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiInputCard, TuiThumbnailCard} from '@taiga-ui/addon-commerce';
import {TuiSegmented} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiInputCard, TuiSegmented, TuiThumbnailCard],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected statuses = ['normal', 'disabled', 'readonly', 'invalid'] as const;
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

#### Options

**Template:**
```html
<span paymentSystem="visa" tuiThumbnailCard class="star" > 1234 </span>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TUI_PAYMENT_SYSTEM_ICONS,
    TUI_THUMBNAIL_CARD_OPTIONS,
    TuiThumbnailCard,
    type TuiThumbnailCardOptions,
} from '@taiga-ui/addon-commerce';

@Component({
    imports: [TuiThumbnailCard],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_THUMBNAIL_CARD_OPTIONS,
            useFactory: (): TuiThumbnailCardOptions => ({
                size: 'l',
                // Swap the default monochrome `@tui.visa` for the colored `@img.visa`
                icons: {...inject(TUI_PAYMENT_SYSTEM_ICONS), visa: '@img.visa'},
            }),
        },
    ],
})
export default class Example {}
```

**LESS:**
```less
.star {
    color: #000;
    background:
        linear-gradient(45deg, rgba(255, 170, 0, 0.82), #fa0), url('/assets/taiga-ui/icons/star.svg'),
        url('/assets/taiga-ui/icons/star.svg');
    background-size:
        100%,
        3rem 1.5rem,
        3rem 1.5rem;
    background-position:
        0 0,
        -0.75rem 0,
        0.75rem;
    background-color: #fff;
}
```
