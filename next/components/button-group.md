# ButtonGroup

- **Package**: `KIT`
- **Type**: components

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
import {TuiButtonGroup} from '@taiga-ui/kit';

@Component({
    imports: [TuiAppearance, TuiButtonGroup, TuiIcon],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

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

    &::after {
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
    imports: [TuiAppearance, TuiButtonGroup, TuiIcon],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

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
    imports: [TuiButtonGroup, TuiIcon],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

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
<tui-carousel [max]="2" [min]="0" [(index)]="index" (scroll)="onScroll($any($event.target))" >
<div *tuiItem="let index" tuiCardMedium tuiTheme="dark" [style.background]="items[index]?.gradient" >
<h2 tuiTitle> BANK <span tuiSubtitle>{{ items[index]?.title }}</span>
</h2>
<div tuiBadge>
<tui-icon icon="@tui.wallet" /> {{ items[index]?.content }} </div>
</div>
</tui-carousel>
<tui-pager [count]="items.length" [index]="effective()" />
<div tuiButtonGroup tuiTheme="dark" [style.background-color]="items[effective()]?.color" >
<tui-elastic-container [style.opacity]="opacity() * 2"> @switch (effective()) { @case (0) { <button type="button">
<tui-icon icon="@tui.circle-plus" /> Create a payment </button>
<button type="button">
<tui-icon icon="@tui.circle-plus" /> Pay the bill </button>
<button type="button">
<tui-icon icon="@tui.circle-plus" /> Remove from favorites </button> } @case (1) { <button type="button">
<tui-icon icon="@tui.circle-plus" /> Remove from favorites </button> } @case (2) { <button type="button">
<tui-icon icon="@tui.circle-plus" /> Create a payment </button>
<button type="button">
<tui-icon icon="@tui.circle-plus" /> Remove from favorites </button> } } </tui-elastic-container>
</div>
```

**TypeScript:**
```ts
import {Component, linkedSignal, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCarousel, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiBadge, TuiButtonGroup, TuiPager} from '@taiga-ui/kit';
import {TuiCardMedium, TuiElasticContainer} from '@taiga-ui/layout';

@Component({
    imports: [
        TuiBadge,
        TuiButtonGroup,
        TuiCardMedium,
        TuiCarousel,
        TuiElasticContainer,
        TuiIcon,
        TuiPager,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly index = signal(1);
    protected readonly opacity = signal(1);
    protected readonly effective = linkedSignal(this.index);

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

    protected onScroll({scrollLeft, clientWidth}: HTMLElement): void {
        const scrolled = ((Math.abs(scrollLeft) - clientWidth) / clientWidth) % 1;
        const progress = this.index() || !scrolled ? scrolled : 1 + scrolled;

        if (progress) {
            this.opacity.set(4 * Math.abs(Math.abs(progress) - 0.5));
            this.effective.set(this.index() + Math.round(progress));
        }
    }
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

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

[tuiButtonGroup] button {
    color: var(--tui-text-primary);
}

[tuiCardMedium] {
    inline-size: calc(100% - 3rem);
    padding: 0.75rem;
    block-size: 8rem;
    color: var(--tui-text-primary);
}

tui-pager {
    margin-inline: auto;
}

[tuiBadge] {
    background: #ffdd2d;
    color: #333;
}
```
