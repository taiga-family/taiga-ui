# TabBar

- **Package**: `ADDON-MOBILE`
- **Type**: components

Component for creating mobile navigation.

### How to Use (Import)

```ts
import {TuiTabBar} from '@taiga-ui/addon-mobile';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiTabBar,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<!--
    Add to the template inside your root component
    at the required layer and position with CSS:
-->
<tui-root>
  Your app
  <nav
    tuiTabBar
    ngProjectAs="tuiOverContent"
  >
    <a
      *ngFor="let item of items"
      tuiTabBarItem
      routerLinkActive
      [routerLink]="item.path"
      [icon]="item.icon"
    >
      {{ item.text}}
    </a>
  </nav>
</tui-root>
```

### Usage Examples

#### Buttons

**Template:**
```html
<nav tuiTabBar class="tabs" [activeItemIndex]="activeItemIndex" (activeItemIndexChange)="onIndexChange($event)" >
<button *ngFor="let item of items" tuiTabBarItem type="button" [badge]="item.badge" [icon]="item.icon" > {{ item.text }} </button>
</nav>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTabBar} from '@taiga-ui/addon-mobile';
import {TuiAlertService, TuiButton} from '@taiga-ui/core';

interface Item {
    badge?: number;
    icon: string;
    text: string;
}

@Component({
    standalone: true,
    selector: 'tui-tab-bar-example',
    imports: [NgForOf, TuiButton, TuiTabBar],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiAlertService);

    protected activeItemIndex = 1;

    protected readonly items: Item[] = [
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

    protected onIndexChange(index: number): void {
        const item = this.items[index];

        this.activeItemIndex = index;

        if (item) {
            item.badge = 0;
            this.alerts.open(index, {label: item.text}).subscribe();
        }
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
    standalone: true,
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
<nav tuiTabBar class="tabs" >
<button *ngFor="let item of items" tuiTabBarItem type="button" [icon]="item.icon" > {{ item.text }} </button>
</nav>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTabBar} from '@taiga-ui/addon-mobile';
import {TuiButton} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [NgForOf, TuiButton, TuiTabBar],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
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

**Template:**
```html
<p>
<button size="m" tuiButton type="button" (click)="load$.next()" > Reload </button>
</p>
<nav tuiTabBar>
<button *ngFor="let item of items$ | async" tuiTabBarItem type="button" [icon]="item.icon" > {{ item.text }} </button>
</nav>
```

**TypeScript:**
```ts
import {AsyncPipe, NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTabBar} from '@taiga-ui/addon-mobile';
import {TuiButton} from '@taiga-ui/core';
import {map, startWith, Subject, switchMap, timer} from 'rxjs';

@Component({
    standalone: true,
    imports: [AsyncPipe, NgForOf, TuiButton, TuiTabBar],
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

**Template:**
```html
<nav tuiTabBar [activeItemIndex]="activeItemIndex" (activeItemIndexChange)="onIndexChange($event)" >
<button *ngFor="let item of items" tuiTabBarItem type="button" [badge]="item.badge" [icon]="item.icon" > {{ item.text }} </button>
</nav>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTabBar} from '@taiga-ui/addon-mobile';
import {TUI_PLATFORM} from '@taiga-ui/cdk';
import {TUI_LIQUID_GLASS, TuiAlertService} from '@taiga-ui/core';

interface Item {
    badge?: number;
    icon: string;
    text: string;
}

@Component({
    standalone: true,
    selector: 'tui-tab-bar-example-liquid',
    imports: [NgForOf, TuiTabBar],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [
        {provide: TUI_LIQUID_GLASS, useValue: true},
        {provide: TUI_PLATFORM, useValue: 'ios'},
    ],
    host: {
        '[attr.data-platform]': '"ios"',
        '[class.tui-liquid-glass]': 'true',
    },
})
export default class Example {
    private readonly alerts = inject(TuiAlertService);

    protected activeItemIndex = 1;

    protected readonly items: Item[] = [
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

    protected onIndexChange(index: number): void {
        const item = this.items[index];

        this.activeItemIndex = index;

        if (item) {
            item.badge = 0;
            this.alerts.open(index, {label: item.text}).subscribe();
        }
    }
}
```

**LESS:**
```less
:host {
    display: block;
    inline-size: 100%;
}
```

#### iOS Liquid glass fullwidth

**Template:**
```html
<nav tuiTabBar [(activeItemIndex)]="activeItemIndex" >
<button *ngFor="let item of items" tuiTabBarItem type="button" [icon]="item.icon" > {{ item.text }} </button>
</nav>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTabBar} from '@taiga-ui/addon-mobile';
import {TUI_PLATFORM} from '@taiga-ui/cdk';
import {TUI_LIQUID_GLASS} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'tui-tab-bar-example-liquid-full',
    imports: [NgForOf, TuiTabBar],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [
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
            icon: '@tui.home',
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
    display: block;
    inline-size: 100%;
}
```

#### Android

**Template:**
```html
<nav tuiTabBar [activeItemIndex]="activeItemIndex" (activeItemIndexChange)="onIndexChange($event)" >
<button *ngFor="let item of items" tuiTabBarItem type="button" [badge]="item.badge" [icon]="item.icon" > {{ item.text }} </button>
</nav>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTabBar} from '@taiga-ui/addon-mobile';
import {TuiAlertService} from '@taiga-ui/core';

interface Item {
    badge?: number;
    icon: string;
    text: string;
}

@Component({
    standalone: true,
    selector: 'tui-tab-bar-example-liquid-android',
    imports: [NgForOf, TuiTabBar],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    host: {
        '[attr.data-platform]': '"android"',
        '[class.tui-liquid-glass]': 'true',
    },
})
export default class Example {
    private readonly alerts = inject(TuiAlertService);

    protected activeItemIndex = 1;

    protected readonly items: Item[] = [
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

    protected onIndexChange(index: number): void {
        const item = this.items[index];

        this.activeItemIndex = index;

        if (item) {
            item.badge = 0;
            this.alerts.open(index, {label: item.text}).subscribe();
        }
    }
}
```

**LESS:**
```less
:host {
    display: block;
    inline-size: 100%;
}
```
