# Navigation

- **Package**: `LAYOUT`
- **Type**: components

A set of basic layout components for global navigation

### How to Use (Import)

```ts
import {TuiNavigation} from '@taiga-ui/layout';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiNavigation,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<header tuiNavigationHeader>Header content</header>
<aside [tuiNavigationAside]="expanded">Sidebar content</aside>
<main tuiNavigationMain>
  <nav tuiNavigationNav>Breadcrumbs, tabs, buttons</nav>
  Main content
</main>
```

### Usage Examples

#### Full

**Template:**
```html
<!-- Ignore this part, it is only here to position drawer inside the example block -->
<div class="custom-portal">
<ng-container #viewContainer />
</div>
<header tuiNavigationHeader>
<button title="Menu" tuiIconButton tuiNavigationDrawer type="button" [(open)]="open" >
<tui-data-list>
<tui-opt-group *ngFor="let group of drawer | keyvalue" [label]="group.key" >
<button *ngFor="let item of group.value" tuiOption type="button" (click)="open = false" >
<img alt="icon" [src]="item.icon" /> {{ item.name }} </button>
</tui-opt-group>
<tui-opt-group>
<label tuiOption>
<input size="s" tuiSwitch type="checkbox" [(ngModel)]="switch" /> Dark mode </label>
</tui-opt-group>
</tui-data-list>
</button>
<span tuiNavigationLogo>
<tui-icon icon="@tui.home" />
<span tuiFade>A very very long product name</span>
<tui-badge>Test</tui-badge>
</span>
<span tuiNavigationSegments>
<button appearance="secondary-grayscale" tuiButton type="button" > Link 1 </button>
<button appearance="secondary-grayscale" tuiButton type="button" > Link 2 </button>
<button appearance="secondary-grayscale" tuiButton tuiChevron tuiDropdownOpen type="button" [tuiDropdown]="products" >
<span [style.overflow]="'hidden'" [style.text-overflow]="'ellipsis'" > A very very long project </span>
<ng-template #products>
<tui-data-list size="s">
<button tuiOption type="button" > A very very long project <tui-icon icon="@tui.check" [style.font-size.em]="1" [style.margin-left.rem]="0.5" />
</button>
<button tuiOption type="button" > Something else </button>
</tui-data-list>
</ng-template>
</button>
</span>
<hr />
<button appearance="secondary-grayscale" iconStart="@tui.plus" tuiButton type="button" > Create </button>
<button iconStart="@tui.bell" tuiIconButton type="button" > Notifications <tui-badge-notification />
</button>
<button iconStart="@tui.ellipsis" tuiIconButton type="button" > More </button>
<tui-avatar src="AI" />
</header>
<div [style.display]="'flex'">
<aside [style.height.rem]="27" [tuiNavigationAside]="expanded()" >
<header>
<button iconStart="@tui.home" type="button" [tuiAsideItem]="hint" >
<ng-container [ngTemplateOutlet]="hint" />
<ng-template #hint>
<span tuiFade>A very very long product name</span>
<tui-badge appearance="accent">Alpha</tui-badge>
</ng-template>
</button>
</header>
<button iconStart="@tui.search" tuiAsideItem type="button" > Search <ng-container *ngIf="expanded()">
<tui-badge appearance="accent">12</tui-badge>
</ng-container>
</button>
<a iconStart="@tui.users" tuiAsideItem [routerLink]="routes.Navigation" > Groups </a>
<tui-aside-group>
<button automation-id="setting" iconStart="@tui.settings" tuiAsideItem tuiChevron type="button" > Settings <ng-template>
<button tuiAsideItem type="button" > Account </button>
<button tuiAsideItem type="button" > Notifications </button>
<button tuiAsideItem type="button" > Privacy </button>
</ng-template>
</button>
</tui-aside-group>
<button automation-id="hint" iconStart="@tui.heart" tuiAsideItem type="button" >
<span tuiFade>By default ellipsis is used but you can use fade too</span>
</button>
<button iconEnd="@tui.chevron-right" iconStart="@tui.ellipsis" tuiAsideItem tuiDropdownHover tuiDropdownOpen type="button" [tuiDropdown]="more" > More <ng-template #more let-close >
<tui-data-list tuiDataListDropdownManager>
<button iconStart="@tui.pencil" tuiAsideItem type="button" > Write </button>
<button iconStart="@tui.pie-chart" tuiAsideItem type="button" [tuiDropdown]="submenu" > Categories <ng-template #submenu>
<tui-data-list>
<button tuiAsideItem type="button" (click)="close()" > Fiction (will close menu) </button>
<button tuiAsideItem type="button" > Non-Fiction </button>
<button tuiAsideItem type="button" > Children </button>
</tui-data-list>
</ng-template>
</button>
</tui-data-list>
</ng-template>
</button>
<hr />
<button iconStart="@tui.plus" tuiAsideItem type="button" > Add </button>
<footer>
<button iconStart="@tui.star" tuiAsideItem type="button" > Favorites </button>
<button tuiAsideItem type="button" [iconStart]="expanded() ? '@tui.chevron-left' : '@tui.chevron-right'" (click)="handleToggle()" > {{ expanded() ? 'Collapse' : 'Expand' }} </button>
</footer>
</aside>
<main tuiNavigationMain>
<nav compact tuiSubheader [style.position]="'sticky'" >
<tui-breadcrumbs [itemsLimit]="10">
<ng-container *ngFor="let item of breadcrumbs; let last = last">
<ng-container *ngIf="last">
<strong *tuiItem tuiFade > {{ item }} </strong>
</ng-container>
<ng-container *ngIf="!last">
<button *tuiItem tuiLink type="button" > {{ item }} </button>
</ng-container>
</ng-container>
</tui-breadcrumbs>
<tui-tabs tuiFade>
<button tuiTab type="button" > Default view </button>
<button tuiTab type="button" > Details </button>
<button tuiTab type="button" > Followers </button>
</tui-tabs>
<button appearance="secondary" tuiButton type="button" > Secondary </button>
<button tuiButton type="button" > Primary </button>
</nav>
<ng-container *tuiRepeatTimes="let index of 10">
<form tuiAppearance="floating" tuiCardLarge tuiForm="m" [style.grid-column]="'2 / span 7'" [style.margin-top.rem]="1" >
<header tuiHeader>
<h2 tuiTitle> Registration form <span tuiSubtitle>Tell us about yourself</span>
</h2>
</header>
<tui-textfield>
<label tuiLabel>Name</label>
<input placeholder="John Wick" tuiTextfield />
</tui-textfield>
<footer>
<button appearance="secondary" tuiButton type="button" > Cancel </button>
<button tuiButton type="submit" > Ok </button>
</footer>
</form>
<div tuiAppearance="outline-grayscale" tuiCardLarge [style.grid-column]="'span 3'" [style.margin-top.rem]="1" >
<h2 tuiTitle> Sidebar content <span tuiSubtitle>Use CSS grid to position</span>
</h2>
</div>
</ng-container>
</main>
</div>
```

**TypeScript:**
```ts
import {KeyValuePipe, NgForOf, NgIf, NgTemplateOutlet} from '@angular/common';
import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {DemoRoute} from '@demo/routes';
import {tuiAsPortal, TuiPortals, TuiRepeatTimes} from '@taiga-ui/cdk';
import {
    TuiAppearance,
    TuiButton,
    TuiDataList,
    TuiDropdown,
    TuiDropdownService,
    TuiIcon,
    TuiLink,
    TuiTextfield,
    TuiTitle,
} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiBadge,
    TuiBadgeNotification,
    TuiBreadcrumbs,
    TuiChevron,
    TuiDataListDropdownManager,
    TuiFade,
    TuiSwitch,
    TuiTabs,
} from '@taiga-ui/kit';
import {TuiCardLarge, TuiForm, TuiHeader, TuiNavigation} from '@taiga-ui/layout';

const ICON =
    "data:image/svg+xml,%0A%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='32' height='32' rx='8' fill='url(%23paint0_linear_2036_35276)'/%3E%3Cmask id='mask0_2036_35276' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='6' y='5' width='20' height='21'%3E%3Cpath d='M18.2399 9.36607C21.1347 10.1198 24.1992 9.8808 26 7.4922C26 7.4922 21.5645 5 16.4267 5C11.2888 5 5.36726 8.69838 6.05472 16.6053C6.38707 20.4279 6.65839 23.7948 6.65839 23.7948C8.53323 22.1406 9.03427 19.4433 8.97983 16.9435C8.93228 14.7598 9.55448 12.1668 12.1847 10.4112C14.376 8.94865 16.4651 8.90397 18.2399 9.36607Z' fill='url(%23paint1_linear_2036_35276)'/%3E%3Cpath d='M11.3171 20.2647C9.8683 17.1579 10.7756 11.0789 16.4267 11.0789C20.4829 11.0789 23.1891 12.8651 22.9447 18.9072C22.9177 19.575 22.9904 20.2455 23.2203 20.873C23.7584 22.3414 24.7159 24.8946 24.7159 24.8946C23.6673 24.5452 22.8325 23.7408 22.4445 22.7058L21.4002 19.921L21.2662 19.3848C21.0202 18.4008 20.136 17.7104 19.1217 17.7104H17.5319L17.6659 18.2466C17.9119 19.2306 18.7961 19.921 19.8104 19.921L22.0258 26H10.4754C10.7774 24.7006 12.0788 23.2368 11.3171 20.2647Z' fill='url(%23paint2_linear_2036_35276)'/%3E%3C/mask%3E%3Cg mask='url(%23mask0_2036_35276)'%3E%3Crect x='4' y='4' width='24' height='24' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_2036_35276' x1='0' y1='0' x2='32' y2='32' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23A681D4'/%3E%3Cstop offset='1' stop-color='%237D31D4'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint1_linear_2036_35276' x1='6.0545' y1='24.3421' x2='28.8119' y2='3.82775' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0.0001' stop-opacity='0.996458'/%3E%3Cstop offset='0.317708'/%3E%3Cstop offset='1' stop-opacity='0.32'/%3E%3C/linearGradient%3E%3ClinearGradient id='paint2_linear_2036_35276' x1='6.0545' y1='24.3421' x2='28.8119' y2='3.82775' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0.0001' stop-opacity='0.996458'/%3E%3Cstop offset='0.317708'/%3E%3Cstop offset='1' stop-opacity='0.32'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E%0A";

@Component({
    standalone: true,
    imports: [
        FormsModule,
        KeyValuePipe,
        NgForOf,
        NgIf,
        NgTemplateOutlet,
        RouterLink,
        TuiAppearance,
        TuiAvatar,
        TuiBadge,
        TuiBadgeNotification,
        TuiBreadcrumbs,
        TuiButton,
        TuiCardLarge,
        TuiChevron,
        TuiDataList,
        TuiDataListDropdownManager,
        TuiDropdown,
        TuiFade,
        TuiForm,
        TuiHeader,
        TuiIcon,
        TuiLink,
        TuiNavigation,
        TuiRepeatTimes,
        TuiSwitch,
        TuiTabs,
        TuiTextfield,
        TuiTitle,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    // Ignore portal related code, it is only here to position drawer inside the example block
    providers: [TuiDropdownService, tuiAsPortal(TuiDropdownService)],
})
export default class Example extends TuiPortals {
    protected expanded = signal(false);
    protected open = false;
    protected switch = false;
    protected readonly routes = DemoRoute;
    protected readonly breadcrumbs = ['Home', 'Angular', 'Repositories', 'Taiga UI'];

    protected readonly drawer = {
        Components: [
            {name: 'Button', icon: ICON},
            {name: 'Input', icon: ICON},
            {name: 'Tooltip', icon: ICON},
        ],
        Essentials: [
            {name: 'Getting started', icon: ICON},
            {name: 'Showcase', icon: ICON},
            {name: 'Typography', icon: ICON},
        ],
    };

    protected handleToggle(): void {
        this.expanded.update((e) => !e);
    }
}
```

#### Subheader compact

**Template:**
```html
<header tuiNavigationHeader>
<span tuiNavigationLogo> Custom color <input tuiSwitch type="checkbox" [ngModel]="color" (ngModelChange)="onColor($event)" />
</span>
<button tuiButton tuiChevron tuiDropdown="Use TuiThemeColorService to control color" tuiDropdownOpen type="button" > How to? </button>
</header>
<main tuiNavigationMain>
<nav compact tuiSubheader >
<a iconStart="@tui.chevron-left" tuiLink [textContent]="'Repositories'" ></a> / <strong tuiFade>Very long repository name</strong>
<tui-avatar size="xs" src="@tui.lock" />
<tui-tabs>
<a tuiTab>Default view</a>
<a tuiTab>Contributors</a>
<a tuiTab>Code</a>
</tui-tabs>
<button appearance="secondary" tuiButton type="button" > Button </button>
<button tuiButton type="button" > Button </button>
<button appearance="secondary" iconStart="@tui.ellipsis" tuiDropdownOpen tuiIconButton type="button" [tuiDropdown]="menu" > More <ng-template #menu>
<tui-data-list>
<button tuiOption type="button" > Button </button>
<button tuiOption type="button" > Button </button>
<button tuiOption type="button" > Button </button>
</tui-data-list>
</ng-template>
</button>
</nav>
<div *tuiRepeatTimes="let index of 10" tuiAppearance="floating" tuiCardLarge tuiHeader [style.grid-column]="'span 6'" >
<h2 tuiTitle> Some random content <span tuiSubtitle>A subtitle</span>
</h2>
</div>
</main>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimes, TuiThemeColorService} from '@taiga-ui/cdk';
import {
    TuiAppearance,
    TuiButton,
    TuiDataList,
    TuiDropdown,
    TuiLink,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiAvatar, TuiChevron, TuiFade, TuiSwitch, TuiTabs} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader, TuiNavigation} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiAppearance,
        TuiAvatar,
        TuiButton,
        TuiCardLarge,
        TuiChevron,
        TuiDataList,
        TuiDropdown,
        TuiFade,
        TuiHeader,
        TuiLink,
        TuiNavigation,
        TuiRepeatTimes,
        TuiSwitch,
        TuiTabs,
        TuiTitle,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly theme = inject(TuiThemeColorService);

    protected color = false;

    protected onColor(color: boolean): void {
        this.theme.color = color ? 'purple' : 'black';
    }
}
```

#### Subheader object

**Template:**
```html
<header tuiNavigationHeader>
<div tuiGroup [collapsed]="true" [style.margin]="'auto'" >
<label appearance="" tuiBlock="s" >
<input tuiBlock="s" type="radio" value="basic" [(ngModel)]="current" /> Basic </label>
<label appearance="" tuiBlock="s" >
<input tuiBlock="s" type="radio" value="input" [(ngModel)]="current" /> Input </label>
<label appearance="" tuiBlock="s" >
<input tuiBlock="s" type="radio" value="card" [(ngModel)]="current" /> Card </label>
</div>
</header>
<main tuiNavigationMain>
<header tuiSubheader>
<ng-container *ngIf="current === 'basic'">
<a iconStart="@tui.chevron-left" tuiLink [textContent]="'Repositories'" ></a>
<h2 tuiHeader>
<div tuiTitle>
<div tuiNavigationLogo>
<tui-icon icon="@tui.gitlab" />
<span tuiFade>Research and Development Platform</span>
<tui-icon icon="@tui.heart" tuiBadge />
</div>
<div tuiSubtitle> Here you can initiate and participate in the review of package objects. Each object have up to 3 groups of reviewers, with one response required from each type, and any other participant can change both positive. </div>
<div tuiSubtitle [style.display]="'flex'" [style.gap.rem]="1" >
<span>
<tui-icon icon="@tui.user" /> Alex Inkin </span> Edited 6 minutes ago <span>
<tui-icon icon="@tui.lock" /> Private </span>
</div>
</div>
<div tuiAccessories>
<button tuiButton type="button" > Button </button>
<button appearance="primary" tuiButton type="button" > Button </button>
<button iconStart="@tui.ellipsis" tuiIconButton type="button" > More </button>
</div>
</h2>
</ng-container>
<ng-container *ngIf="current === 'input'">
<h2 tuiHeader>
<div tuiTitle>Projects</div>
<div tuiAccessories>
<button appearance="primary" tuiButton type="button" > Create </button>
</div>
</h2>
<tui-textfield iconStart="@tui.search">
<input placeholder="Search" tuiTextfield />
</tui-textfield>
</ng-container>
<ng-container *ngIf="current === 'card'">
<tui-breadcrumbs>
<a *tuiItem tuiLink > Code </a>
<a *tuiItem tuiLink > Repositories </a>
<span *tuiItem>Taiga UI</span>
</tui-breadcrumbs>
<div tuiAppearance="floating" tuiCardLarge="compact" tuiHeader >
<h2 tuiTitle> Personal and Development Plan <span tuiSubtitle> Here you can initiate and participate in the review of package objects. Each object have up to 3 groups of reviewers, with one response required from each type, and any other participant can change both positive </span>
</h2>
</div>
</ng-container>
<nav tuiTabs>
<button tuiTab type="button" > First tab </button>
<button tuiTab type="button" > Second tab </button>
<button tuiTab type="button" > Third tab </button>
<button tuiButton type="button" > Button </button>
<button tuiButton type="button" > Button </button>
</nav>
</header>
<div *tuiRepeatTimes="let index of 10" tuiAppearance="floating" tuiCardLarge="compact" tuiHeader [style.grid-column]="'span 6'" >
<h2 tuiTitle> Some random content <span tuiSubtitle>A subtitle</span>
</h2>
</div>
</main>
```

**TypeScript:**
```ts
import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {
    TuiAppearance,
    TuiButton,
    TuiGroup,
    TuiIcon,
    TuiLink,
    TuiTextfield,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiBadge, TuiBlock, TuiBreadcrumbs, TuiFade, TuiTabs} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader, TuiNavigation} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgIf,
        TuiAppearance,
        TuiBadge,
        TuiBlock,
        TuiBreadcrumbs,
        TuiButton,
        TuiCardLarge,
        TuiFade,
        TuiGroup,
        TuiHeader,
        TuiIcon,
        TuiLink,
        TuiNavigation,
        TuiRepeatTimes,
        TuiTabs,
        TuiTextfield,
        TuiTitle,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected current = 'basic';
}
```

#### Customization

**Template:**
```html
<!-- Ignore this part, it is only here to position drawer inside the example block -->
<div class="custom-portal">
<ng-container #viewContainer />
</div>
<header tuiNavigationHeader tuiTheme="light" >
<button title="Menu" tuiIconButton tuiNavigationDrawer type="button" >
<div tuiTheme="light" class="drawer" [style.padding.rem]="0.5" >
<span tuiTitle> Drawer content <span tuiSubtitle>Arbitrary content</span>
</span>
</div>
</button>
</header>
<div [style.display]="'flex'">
<aside tuiTheme="light" [style.height.rem]="27" [tuiNavigationAside]="true" >
<header>
<button iconStart="@tui.home" tuiAsideItem type="button" >
<span tuiFade>A very very long product name</span>
</button>
</header>
<button iconStart="@tui.search" tuiAsideItem type="button" > Search </button>
<a iconStart="@tui.users" tuiAsideItem > Groups </a>
<tui-aside-group [(open)]="open">
<button iconStart="@tui.settings" tuiAsideItem tuiChevron type="button" > Settings <ng-template>
<button tuiAsideItem type="button" (click)="open = false" > Account </button>
<button tuiAsideItem type="button" (click)="open = false" > Notifications </button>
<button tuiAsideItem type="button" (click)="open = false" > Privacy </button>
</ng-template>
</button>
</tui-aside-group>
<button iconStart="@tui.heart" tuiAsideItem type="button" >
<span tuiFade>By default ellipsis is used but you can use fade too</span>
</button>
<hr />
<button appearance="accent" iconStart="@tui.plus" tuiAsideItem type="button" > Add </button>
<footer>
<button iconStart="@tui.star" tuiAsideItem type="button" > Favorites </button>
</footer>
</aside>
<main tuiNavigationMain>
<div *tuiRepeatTimes="let index of 10" tuiCardLarge tuiHeader tuiSurface="floating" >
<h2 tuiTitle> Some random content <span tuiSubtitle>A subtitle</span>
</h2>
</div>
</main>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiAsPortal, TuiPortals, TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiButton, TuiDropdownService, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiChevron, TuiFade} from '@taiga-ui/kit';
import {
    TuiCardLarge,
    TuiHeader,
    tuiLayoutIconsProvider,
    TuiNavigation,
} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiButton,
        TuiCardLarge,
        TuiChevron,
        TuiFade,
        TuiHeader,
        TuiNavigation,
        TuiRepeatTimes,
        TuiSurface,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [
        tuiLayoutIconsProvider({grid: '@tui.align-justify'}),
        // Ignore portal related code, it is only here to position drawer inside the example block
        TuiDropdownService,
        tuiAsPortal(TuiDropdownService),
    ],
})
export default class Example extends TuiPortals {
    protected open = true;
}
```

**LESS:**
```less
:host {
    // Use TuiThemeColorService instead, this is just for demo purposes
    --tui-theme-color: #87ceeb;
}

.drawer {
    // Unnecessary when TuiThemeColorService is instead
    background: rgb(135, 206, 235);
    color: var(--tui-text-primary);
}

aside::before {
    display: none;
}

header::after {
    display: none;
}
```
