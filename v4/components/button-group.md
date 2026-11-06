# ButtonGroup

- **Package**: `KIT`
- **Type**: components

### How to Use (Import)

```ts
import {Component} from '@angular/core';
import {TuiButton} from '@taiga-ui/core';
import {TuiButtonGroup} from '@taiga-ui/kit';
// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiButton,
    TuiButtonGroup,
  ],
})
export class Example {}
```

### How to Use (Template)

```html
<div
  tuiButtonGroup
  tuiSurface="elevated"
>
  <button>
    <tui-icon icon="@tui.circle-plus"></tui-icon>
    Create a payment
  </button>
</div>
```

### Usage Examples

#### Elevated

**Template:**
```html
<div tuiAppearance="floating" tuiButtonGroup >
<button type="button">
<tui-icon icon="@tui.circle-plus" /> Create a payment </button>
<button type="button">
<tui-icon badge="" icon="@tui.circle-plus" /> Pay the bill </button>
<button type="button">
<tui-icon badge="@tui.lock" icon="@tui.circle-plus" class="custom" /> Remove from favorites </button>
</div>
<div tuiAppearance="floating" tuiButtonGroup >
<button type="button">
<tui-icon icon="@tui.circle-plus" /> Top up </button>
<button type="button">
<tui-icon icon="@tui.circle-arrow-right" /> Take out </button>
</div>
<div tuiAppearance="floating" tuiButtonGroup >
<button type="button">
<tui-icon icon="@tui.circle-plus" /> To repay </button>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAppearance, TuiIcon} from '@taiga-ui/core';
import {TuiButtonGroup, TuiIconBadge} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiAppearance, TuiButtonGroup, TuiIcon, TuiIconBadge],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

:host {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    inline-size: 21.5625rem;

    @media @tui-mobile {
        inline-size: 100%;
    }
}

.custom {
    color: var(--tui-status-warning);

    &::before {
        color: var(--tui-text-action);
    }
}
```

#### Flat

**Template:**
```html
<div tuiAppearance="secondary" tuiButtonGroup >
<button type="button">
<tui-icon icon="@tui.circle-plus" /> Create a payment </button>
<button type="button">
<tui-icon icon="@tui.circle-plus" /> Pay the bill </button>
<button type="button">
<tui-icon icon="@tui.circle-plus" /> Remove from favorites </button>
</div>
<div tuiAppearance="secondary" tuiButtonGroup >
<button type="button">
<tui-icon icon="@tui.circle-plus" /> Top up </button>
<button type="button">
<tui-icon icon="@tui.circle-arrow-right" /> Take out </button>
</div>
<div tuiAppearance="secondary" tuiButtonGroup >
<button type="button">
<tui-icon icon="@tui.circle-plus" /> To repay </button>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAppearance, TuiIcon} from '@taiga-ui/core';
import {TuiButtonGroup} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiAppearance, TuiButtonGroup, TuiIcon],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

:host {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    inline-size: 21.5625rem;

    @media @tui-mobile {
        inline-size: 100%;
    }
}
```

#### Dark

**Template:**
```html
<div tuiButtonGroup tuiTheme="dark" >
<button type="button">
<tui-icon icon="@tui.circle-plus" /> Create a payment </button>
<button type="button">
<tui-icon icon="@tui.circle-plus" /> Pay the bill </button>
<button type="button">
<tui-icon icon="@tui.circle-plus" /> Remove from favorites </button>
</div>
<div tuiButtonGroup tuiTheme="dark" >
<button type="button">
<tui-icon icon="@tui.circle-plus" /> Top up </button>
<button type="button">
<tui-icon icon="@tui.circle-arrow-right" /> Take out </button>
</div>
<div tuiButtonGroup tuiTheme="dark" >
<button type="button">
<tui-icon icon="@tui.circle-plus" /> To repay </button>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon} from '@taiga-ui/core';
import {TuiButtonGroup} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiButtonGroup, TuiIcon],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

:host {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    inline-size: 21.5625rem;

    @media @tui-mobile {
        inline-size: 100%;
    }
}

[tuiButtonGroup] {
    background: linear-gradient(334.83deg, #7d8ca0 0%, #647382 100%);

    button {
        color: #fff;
    }
}
```

#### Swiped animation

**Template:**
```html
<tui-carousel [draggable]="true" [itemsCount]="1" [(index)]="index" (shift)="opacity = $event" >
<ng-container *ngFor="let item of items; let i = index">
<div *tuiItem tuiCardMedium class="card" [style.background]="item.gradient" >
<h2 tuiTitle> BANK <span tuiSubtitle>{{ item.title }}</span>
</h2>
<tui-badge class="money">
<tui-icon icon="@tui.wallet" /> {{ item.content }} </tui-badge>
</div>
</ng-container>
</tui-carousel>
<tui-pagination size="s" [length]="items.length" [(index)]="index" />
<div tuiButtonGroup [style.background-color]="items[index]?.color" >
<tui-elastic-container [style.opacity]="opacity * 2">
<ng-container *ngIf="index === 0">
<button type="button">
<tui-icon icon="@tui.circle-plus" /> Create a payment </button>
<button type="button">
<tui-icon icon="@tui.circle-plus" /> Pay the bill </button>
<button type="button">
<tui-icon icon="@tui.circle-plus" /> Remove from favorites </button>
</ng-container>
<ng-container *ngIf="index === 1">
<button type="button">
<tui-icon icon="@tui.circle-plus" /> Remove from favorites </button>
</ng-container>
<ng-container *ngIf="index === 2">
<button type="button">
<tui-icon icon="@tui.circle-plus" /> Create a payment </button>
<button type="button">
<tui-icon icon="@tui.circle-plus" /> Remove from favorites </button>
</ng-container>
</tui-elastic-container>
</div>
```

**TypeScript:**
```ts
import {NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiTitle} from '@taiga-ui/core';
import {
    TuiBadge,
    TuiButtonGroup,
    TuiCarousel,
    TuiElasticContainer,
    TuiPagination,
} from '@taiga-ui/kit';
import {TuiCardMedium} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        NgForOf,
        NgIf,
        TuiBadge,
        TuiButtonGroup,
        TuiCardMedium,
        TuiCarousel,
        TuiElasticContainer,
        TuiIcon,
        TuiPagination,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected index = 0;
    protected opacity = 1;

    protected readonly items = [
        {
            title: 'RUB Account',
            content: '10 000 ₽',
            gradient: 'linear-gradient(334.83deg, #7d8ca0 0%, #647382 100%)',
            color: '#7d8ca0',
        },
        {
            title: 'USD Account',
            content: '2 000 000 $',
            gradient: 'linear-gradient(-90deg, #cf77f3 0%, #009bff 47%, #2ac9db 100%)',
            color: 'rgb(0, 155, 255)',
        },
        {
            title: 'EUR Account',
            content: '30 000 €',
            gradient: 'linear-gradient(135deg, #1AC07E, #DEA683)',
            color: 'rgb(158 178 129)',
        },
    ];
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

:host {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    inline-size: 21rem;
    block-size: 21rem;

    @media @tui-mobile {
        inline-size: 100%;
    }
}

[tuiButtonGroup] {
    button {
        color: #fff;
    }
}

.card {
    inline-size: 100%;
    padding: 0.75rem;
    color: #fff;
    block-size: 8rem;
}

.money {
    background: #ffdd2d;
    color: #333;
}
```
