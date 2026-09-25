# Segmented

- **Package**: `KIT`
- **Type**: components

Segmented is used for links and buttons to navigate within the application. It can also work as a radio button to toggle between different states.

### Usage Examples

#### Sizes

**Template:**
```html
@for (size of sizes; track size) { <tui-segmented [size]="size">
<button type="button">
<tui-icon icon="@tui.sun" /> All <tui-badge-notification [size]="size">3</tui-badge-notification>
<tui-icon icon="@tui.moon" />
</button>
<button type="button">Incoming</button>
<button type="button">Outgoing</button>
</tui-segmented> }
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon} from '@taiga-ui/core';
import {TuiBadgeNotification, TuiSegmented} from '@taiga-ui/kit';

@Component({
    imports: [TuiBadgeNotification, TuiIcon, TuiSegmented],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly sizes = ['s', 'm', 'l'] as const;
}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
}
```

#### Width

**Template:**
```html
<tui-segmented>
<button type="button">Dynamic width</button>
<button type="button">Items</button>
</tui-segmented>
<tui-segmented class="full">
<button type="button">Fixed width</button>
<button type="button">
<span tuiFade>With fadeout overflow effect</span>
</button>
</tui-segmented>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFade, TuiSegmented} from '@taiga-ui/kit';

@Component({
    imports: [TuiFade, TuiSegmented],
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
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
}

.full {
    inline-size: 100%;

    & > * {
        flex: 1;
        min-inline-size: 0;
    }
}
```

#### Customization

**Template:**
```html
<header>
<tui-segmented class="colors" [(activeItemIndex)]="active" > @for (button of buttons; track button) { <button type="button" [class.active]="$index === active" > {{ button }} </button> } </tui-segmented>
</header>
<tui-segmented [style.border-radius.rem]="10">
<button type="button">Border radius</button>
<button type="button">Can be</button>
<button type="button">Customized</button>
</tui-segmented>
<tui-segmented [style.flex-direction]="'column'" [style.font-weight]="'bold'" >
<button type="button">Fonts</button>
<button type="button">Can also be</button>
<button type="button">Overridden</button>
</tui-segmented>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSegmented} from '@taiga-ui/kit';

@Component({
    imports: [TuiSegmented],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly buttons = ['Track active index', 'To color tabs', 'Differently'];
    protected active = 0;
}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
}

header {
    background: var(--tui-background-base-alt);
    box-shadow: 0 -10rem 0 10.5rem var(--tui-background-base-alt);
}

.colors {
    background: var(--tui-background-base);

    &::before {
        color: var(--tui-text-action);
        box-shadow: none;
    }

    .active {
        color: #fff;
    }
}
```

#### Content

**Template:**
```html
<strong>Buttons</strong>
<tui-segmented>
<button type="button">Buttons</button>
<button type="button">Can be</button>
<button type="button">Used</button>
</tui-segmented>
<hr />
<strong>Links</strong>
<tui-segmented>
<a routerLinkActive [routerLink]="routes.Link" > Use routerLink </a>
<a routerLinkActive [routerLink]="routes.Segmented" [routerLinkActiveOptions]="options" > And routerLinkActive </a>
<a fragment="content" routerLinkActive [routerLink]="routes.Segmented" [routerLinkActiveOptions]="options" > To work with links </a>
</tui-segmented>
<hr />
<strong>Icons</strong>
<tui-segmented>
<button title="light" type="button" >
<tui-icon icon="@tui.sun" />
</button>
<button title="dark" type="button" >
<tui-icon icon="@tui.moon" />
</button>
</tui-segmented>
<hr />
<strong>Control</strong>
<tui-segmented>
<label>
<input name="radio" type="radio" value="a" [(ngModel)]="selected" /> Use radio inside </label>
<label>
<input name="radio" type="radio" value="b" [(ngModel)]="selected" /> It would be hidden </label>
<label>
<input name="radio" type="radio" value="c" [(ngModel)]="selected" /> Automatically </label>
</tui-segmented>
<button appearance="floating" size="s" tuiButton type="button" (click)="selected = 'b'" > Select second option </button>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {type IsActiveMatchOptions, RouterLink, RouterLinkActive} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {DemoRoute} from '@demo/routes';
import {TuiButton, TuiIcon} from '@taiga-ui/core';
import {TuiSegmented} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        RouterLink,
        RouterLinkActive,
        TuiButton,
        TuiIcon,
        TuiSegmented,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected selected = 'a';

    protected readonly options: IsActiveMatchOptions = {
        matrixParams: 'exact',
        queryParams: 'exact',
        paths: 'exact',
        fragment: 'exact',
    };

    protected readonly routes = DemoRoute;
}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
}

hr {
    inline-size: 100%;
    block-size: 1px;
    background: var(--tui-border-normal);
    border: 0;
}
```

#### Disabled

**Template:**
```html
<tui-segmented [disabled]="true">
<button type="button">Label</button>
<button type="button">Label</button>
<button type="button">Label</button>
<button type="button">Label</button>
</tui-segmented>
<tui-segmented>
<button type="button">Label</button>
<button type="button">Label</button>
<button type="button" [disabled]="true" > Label </button>
<button type="button">Label</button>
</tui-segmented>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSegmented} from '@taiga-ui/kit';

@Component({
    imports: [TuiSegmented],
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
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
}
```
