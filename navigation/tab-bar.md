# TabBar

- **Package**: `ADDON-MOBILE`
- **Type**: components

Component for creating mobile navigation.

### Usage Examples

#### Buttons

Fixed

**Template:**
```html
<nav tuiTabBar class="tabs" [(activeItemIndex)]="activeItemIndex" > @for (item of items; track item) { <button tuiTabBarItem type="button" [badge]="item.badge" [icon]="item.icon" (click)="onClick(item)" > {{ item.text }} </button> } </nav>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTabBar} from '@taiga-ui/addon-mobile';
import {TuiNotificationService} from '@taiga-ui/core';

interface Item {
    badge?: number;
    icon: string;
    text: string;
}

@Component({
    selector: 'tui-tab-bar-example',
    imports: [TuiTabBar],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiNotificationService);

    protected activeItemIndex = 1;

    protected readonly items = [
        {
            text: 'Favorites',
            icon: '@tui.heart',
            badge: 3,
        },
        {
            text: 'Calls',
            icon: '@tui.phone',
            badge: 1234,
        },
        {
            text: 'Profile',
            icon: '@tui.user',
        },
        {
            text: 'Settings and configuration',
            icon: '@tui.settings',
            badge: 100,
        },
        {
            text: 'More',
            icon: '@tui.ellipsis',
        },
    ];

    protected onClick(item: Item): void {
        item.badge = 0;
        this.alerts.open(this.activeItemIndex, {label: item.text}).subscribe();
    }
}
```

**LESS:**
```less
.tabs {
    min-inline-size: 25rem;
    padding-block-end: env(safe-area-inset-bottom);
}
```

#### Links

If you use `routerLink` you must also add `routerLinkActive` directive.

**Template:**
```html
<nav tuiTabBar>
<a icon="@tui.ellipsis" routerLinkActive tuiTabBarItem [routerLink]="routes.Breadcrumbs" > Breadcrumbs </a>
<a icon="@tui.code" routerLinkActive tuiTabBarItem [routerLink]="routes.Pagination" > Pagination </a>
<a icon="@tui.terminal" routerLinkActive tuiTabBarItem [routerLink]="routes.Stepper" > Stepper </a>
<a icon="@tui.minus" routerLinkActive tuiTabBarItem [routerLink]="routes.TabBar" > TabBar </a>
<a icon="@tui.menu" routerLinkActive tuiTabBarItem [routerLink]="routes.Tabs" > Tabs </a>
</nav>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {DemoRoute} from '@demo/routes';
import {TuiTabBar} from '@taiga-ui/addon-mobile';

@Component({
    imports: [RouterLink, RouterLinkActive, TuiTabBar],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly routes = DemoRoute;
}
```

#### Customization

**Template:**
```html
<nav tuiTabBar class="tabs" > @for (item of items; track item) { <button tuiTabBarItem type="button" [icon]="item.icon" > {{ item.text }} </button> } </nav>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTabBar} from '@taiga-ui/addon-mobile';

@Component({
    imports: [TuiTabBar],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = [
        {
            text: 'Home',
            icon: '@tui.home',
        },
        {
            text: 'Photos',
            icon: '@tui.image',
        },
        {
            text: 'Navigation',
            icon: '@tui.map-pin',
        },
    ];
}
```

**LESS:**
```less
.tabs {
    min-inline-size: 25rem;
    color: var(--tui-text-action);

    --tui-active-color: var(--tui-background-accent-2);
}
```

#### Skeleton

When there are no `TabBarItem` children, the component shows skeleton for 4 items

**Template:**
```html
<p>
<button size="m" tuiButton type="button" (click)="load$.next()" > Reload </button>
</p>
<nav tuiTabBar> @for (item of items$ | async; track item) { <button tuiTabBarItem type="button" [icon]="item.icon" > {{ item.text }} </button> } </nav>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTabBar} from '@taiga-ui/addon-mobile';
import {TuiButton} from '@taiga-ui/core';
import {map, startWith, Subject, switchMap, timer} from 'rxjs';

@Component({
    imports: [AsyncPipe, TuiButton, TuiTabBar],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly load$ = new Subject<void>();

    protected readonly items$ = this.load$.pipe(
        startWith(null),
        switchMap(() =>
            timer(3000).pipe(
                map(() => [
                    {
                        text: 'Favorites',
                        icon: '@tui.heart',
                    },
                    {
                        text: 'Calls',
                        icon: '@tui.phone',
                    },
                    {
                        text: 'Profile',
                        icon: '@tui.user',
                    },
                    {
                        text: 'Settings and configuration',
                        icon: '@tui.settings',
                    },
                ]),
                startWith([]),
            ),
        ),
    );
}
```

#### iOS Liquid glass

To enable the liquid-glass mode on iOS devices, specify the option in `provideTaiga({apis: {liquidGlass: true}})` Fixed

**Template:**
```html
<nav tuiTabBar [(activeItemIndex)]="activeItemIndex" > @for (item of items; track item) { <button tuiTabBarItem type="button" [badge]="item.badge" [icon]="item.icon" (click)="onClick(item)" > {{ item.text }} </button> } </nav>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTabBar} from '@taiga-ui/addon-mobile';
import {TUI_PLATFORM} from '@taiga-ui/cdk';
import {TUI_LIQUID_GLASS, TuiNotificationService} from '@taiga-ui/core';

interface Item {
    badge?: number;
    icon: string;
    text: string;
}

@Component({
    selector: 'tui-tab-bar-example-liquid',
    imports: [TuiTabBar],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [
        // Not required if `provideTaiga({apis: {liquidGlass: true}})` is already set up
        {provide: TUI_LIQUID_GLASS, useValue: true},
        {provide: TUI_PLATFORM, useValue: 'ios'},
    ],
    host: {
        '[attr.data-platform]': '"ios"',
        '[class.tui-liquid-glass]': 'true',
    },
})
export default class Example {
    private readonly alerts = inject(TuiNotificationService);

    protected activeItemIndex = 1;

    protected readonly items = [
        {
            text: 'Favorites',
            icon: '@tui.heart',
            badge: 3,
        },
        {
            text: 'Calls',
            icon: '@tui.phone',
            badge: 1234,
        },
        {
            text: 'Profile',
            icon: '@tui.user',
        },
    ];

    protected onClick(item: Item): void {
        item.badge = 0;
        this.alerts.open(this.activeItemIndex, {label: item.text}).subscribe();
    }
}
```

**LESS:**
```less
:host {
    inline-size: 100%;
}
```

#### iOS Liquid glass fullwidth

With more than three items the tab bar stretches to the full width of the screen; with fewer it stays a compact, centered pill. Fixed

**Template:**
```html
<nav tuiTabBar [(activeItemIndex)]="activeItemIndex" > @for (item of items; track item) { <button tuiTabBarItem type="button" [icon]="item.icon" > {{ item.text }} </button> } </nav>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTabBar} from '@taiga-ui/addon-mobile';
import {TUI_PLATFORM} from '@taiga-ui/cdk';
import {TUI_LIQUID_GLASS} from '@taiga-ui/core';

@Component({
    selector: 'tui-tab-bar-example-liquid-full',
    imports: [TuiTabBar],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [
        // Not required if `provideTaiga({apis: {liquidGlass: true}})` is already set up
        {provide: TUI_LIQUID_GLASS, useValue: true},
        {provide: TUI_PLATFORM, useValue: 'ios'},
    ],
    host: {
        '[attr.data-platform]': '"ios"',
        '[class.tui-liquid-glass]': 'true',
    },
})
export default class Example {
    protected activeItemIndex = 2;

    protected readonly items = [
        {
            text: 'Home',
            icon: '@tui.house',
        },
        {
            text: 'Search',
            icon: '@tui.search',
        },
        {
            text: 'Favorites',
            icon: '@tui.heart',
        },
        {
            text: 'Notifications',
            icon: '@tui.bell',
        },
        {
            text: 'Profile',
            icon: '@tui.user',
        },
    ];
}
```

**LESS:**
```less
:host {
    inline-size: 100%;
}
```

#### Android

On Android devices the tab bar takes on its updated appearance once the liquid-glass option is enabled in `provideTaiga({apis: {liquidGlass: true}})` Fixed

**Template:**
```html
<nav tuiTabBar [(activeItemIndex)]="activeItemIndex" > @for (item of items; track item) { <button tuiTabBarItem type="button" [badge]="item.badge" [icon]="item.icon" (click)="onClick(item)" > {{ item.text }} </button> } </nav>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTabBar} from '@taiga-ui/addon-mobile';
import {TuiNotificationService} from '@taiga-ui/core';

interface Item {
    badge?: number;
    icon: string;
    text: string;
}

@Component({
    selector: 'tui-tab-bar-example-liquid-android',
    imports: [TuiTabBar],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    host: {
        '[attr.data-platform]': '"android"',
        // Not required if `provideTaiga({apis: {liquidGlass: true}})` is already set up
        '[class.tui-liquid-glass]': 'true',
    },
})
export default class Example {
    private readonly alerts = inject(TuiNotificationService);

    protected activeItemIndex = 1;

    protected readonly items = [
        {
            text: 'Favorites',
            icon: '@tui.heart',
            badge: 3,
        },
        {
            text: 'Calls',
            icon: '@tui.phone',
            badge: 1234,
        },
        {
            text: 'Profile',
            icon: '@tui.user',
        },
    ];

    protected onClick(item: Item): void {
        item.badge = 0;
        this.alerts.open(this.activeItemIndex, {label: item.text}).subscribe();
    }
}
```

**LESS:**
```less
:host {
    inline-size: 100%;
}
```

To enable the liquid-glass mode on iOS devices, specify the option in
`provideTaiga(&#123;apis: &#123;liquidGlass: true&#125;&#125;)`

On Android devices the tab bar takes on its updated appearance once the liquid-glass option
is enabled in
`provideTaiga(&#123;apis: &#123;liquidGlass: true&#125;&#125;)`
