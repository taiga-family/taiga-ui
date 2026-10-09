# Navigation

- **Package**: `LAYOUT`
- **Type**: components

Taiga UI is a low level component library with many atomic components that provide great flexibility when combined together. An exception to the general rule is the Navigation component – an opinionated global wrapping navigation that exposes less customization options developed specifically to target data-heavy dashboards with minimal space lost and compact controls.

### Usage Examples

#### Full

Full fledged example showcasing every section of the navigation filled with content, links, menus etc.

**Template:**
```html
<!-- Ignore this part, it is only here to position drawer inside the example block -->
<div class="custom-portal">
<ng-container tuiVCR />
</div>
<header tuiNavigationHeader>
<button portal title="Menu" tuiIconButton tuiNavigationDrawer type="button" [(open)]="open" >
<tui-data-list> @for (group of drawer | keyvalue; track group) { <tui-opt-group [label]="group.key"> @for (item of group.value; track item) { <button tuiOption type="button" (click)="open = false" >
<img alt="icon" [src]="item.icon" /> {{ item.name }} </button> } </tui-opt-group> } <hr />
<tui-opt-group>
<label tuiOption>
<input size="s" tuiSwitch type="checkbox" [(ngModel)]="switch" /> Dark mode </label>
</tui-opt-group>
</tui-data-list>
</button>
<span tuiNavigationLogo>
<tui-icon icon="@tui.home" />
<span tuiFade>A very very long product name</span>
<div tuiBadge>Test</div>
</span>
<span tuiNavigationSegments>
<button appearance="secondary-grayscale" tuiButton type="button" > Link 1 </button>
<button appearance="secondary-grayscale" tuiButton type="button" > Link 2 </button>
<button appearance="secondary-grayscale" tuiButton tuiChevron tuiDropdownAuto type="button" [tuiDropdown]="products" >
<span [style.overflow]="'hidden'" [style.text-overflow]="'ellipsis'" > A very very long project </span>
<ng-template #products>
<tui-data-list size="s">
<button tuiOption type="button" > A very very long project <tui-icon icon="@tui.check" [style.font-size.em]="1" [style.margin-inline-start.rem]="0.5" />
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
<div tuiAvatar="AI"></div>
</header>
<div [style.display]="'flex'">
<aside [style.height.rem]="27" [tuiNavigationAside]="expanded()" >
<header>
<button iconStart="@tui.home" type="button" [tuiAsideItem]="hint" >
<ng-container [ngTemplateOutlet]="hint" />
<ng-template #hint>
<span tuiFade>A very very long product name</span>
<div appearance="accent" tuiBadge > Alpha </div>
</ng-template>
</button>
</header>
<button iconStart="@tui.search" tuiAsideItem type="button" > Search @if (expanded()) { <div appearance="accent" tuiBadge > 12 </div> } </button>
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
<button iconEnd="@tui.chevron-right" iconStart="@tui.ellipsis" tuiAsideItem tuiDropdownAuto tuiDropdownHover type="button" [tuiDropdown]="more" > More <ng-template #more let-close >
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
<tui-breadcrumbs [itemsLimit]="10"> @for (item of breadcrumbs; track item) { @if ($last) { <strong *tuiItem tuiFade > {{ item }} </strong> } @if (!$last) { <button *tuiItem tuiLink type="button" > {{ item }} </button> } } </tui-breadcrumbs>
<tui-tabs tuiFade>
<button tuiTab type="button" > Default view </button>
<button tuiTab type="button" > Details </button>
<button tuiTab type="button" > Followers </button>
</tui-tabs>
<button appearance="secondary" tuiButton type="button" > Secondary </button>
<button tuiButton type="button" > Primary </button>
</nav>
<ng-container> @for (_ of '-'.repeat(10); track $index) { <form appearance="floating" tuiCardLarge tuiForm="m" [style.grid-column]="'2 / span 7'" >
<header tuiHeader>
<h2 tuiTitle> Registration form <span tuiSubtitle>Tell us about yourself</span>
</h2>
</header>
<tui-textfield>
<label tuiLabel>Name</label>
<input placeholder="John Wick" tuiInput />
</tui-textfield>
<footer>
<button appearance="secondary" tuiButton type="button" > Cancel </button>
<button tuiButton type="submit" > Ok </button>
</footer>
</form>
<div appearance="outline-grayscale" tuiCardLarge [style.grid-column]="'span 3'" >
<h2 tuiTitle> Sidebar content <span tuiSubtitle>Use CSS grid to position</span>
</h2>
</div> } </ng-container>
</main>
</div>
```

**TypeScript:**
```ts
import {KeyValuePipe, NgTemplateOutlet} from '@angular/common';
import {Component, Directive, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {DemoRoute} from '@demo/routes';
import {TuiPortals, TuiPortalService, tuiProvide, TuiVCR} from '@taiga-ui/cdk';
import {
    TuiButton,
    TuiDataList,
    TuiDropdown,
    TuiIcon,
    TuiInput,
    TuiLink,
    TuiPopupService,
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

// Ignore portal related code, it is only here to position drawer inside the example block
@Directive({
    selector: '[portal]',
    providers: [tuiProvide(TuiPopupService, TuiPortalService)],
})
class Portal {}

@Component({
    imports: [
        FormsModule,
        KeyValuePipe,
        NgTemplateOutlet,
        Portal,
        RouterLink,
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
        TuiInput,
        TuiLink,
        TuiNavigation,
        TuiSwitch,
        TuiTabs,
        TuiTitle,
        TuiVCR,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [{provide: TuiPortalService, useClass: TuiPopupService}],
})
export default class Example extends TuiPortals {
    protected readonly expanded = signal(false);
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

Navigation with page header in a compact mode.

**Template:**
```html
<header tuiNavigationHeader>
<label tuiNavigationLogo> Custom color <input tuiSwitch type="checkbox" [ngModel]="color" (ngModelChange)="onColor($event)" />
</label>
<button tuiButton tuiChevron tuiDropdown="Use TuiThemeColorService to control color" tuiDropdownAuto type="button" > How to? </button>
<div tuiDropdown tuiDropdownAppearance="" tuiDropdownAuto [attr.tuiTheme]="dark() ? 'dark' : 'light'" >
<button tuiButton tuiChevron tuiTheme="dark" type="button" > Keep dropdowns color? </button>
<ol *tuiDropdown tuiList="s" [style.padding-inline.rem]="1" >
<li>Wrap your button in another tag</li>
<li>Move dropdown directives to that tag</li>
<li> Reset navigation appearance by <code>tuiDropdownAppearance=""</code>
</li>
<li> Set <code>tuiTheme="dark"</code> on the button so it fits the header </li>
<li> Get app theme: <code>readonly dark = inject(TUI_DARK_MODE)</code>
</li>
<li> Use it to set theme on the wrapping tag: <p>
<code>[attr.tuiTheme]="dark() ? 'dark' : 'light'"</code>
</p>
</li>
</ol>
</div>
</header>
<main tuiNavigationMain>
<nav compact tuiSubheader >
<a iconStart="@tui.chevron-left" tuiLink [textContent]="'Repositories'" ></a> / <strong tuiFade>Very long repository name</strong>
<div size="xs" tuiAvatar="@tui.lock" ></div>
<tui-tabs>
<a tuiTab>Default view</a>
<a tuiTab>Contributors</a>
<a tuiTab>Code</a>
</tui-tabs>
<button appearance="secondary" tuiButton type="button" > Button </button>
<button tuiButton type="button" > Button </button>
<button appearance="secondary" iconStart="@tui.ellipsis" tuiDropdownAuto tuiIconButton type="button" [tuiDropdown]="menu" > More <ng-template #menu>
<tui-data-list>
<button tuiOption type="button" > Button </button>
<button tuiOption type="button" > Button </button>
<button tuiOption type="button" > Button </button>
</tui-data-list>
</ng-template>
</button>
</nav> @for (_ of '-'.repeat(10); track $index) { <div appearance="floating" tuiCardLarge tuiHeader [style.grid-column]="'span 6'" >
<h2 tuiTitle> Some random content <span tuiSubtitle>A subtitle</span>
</h2>
</div> } </main>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiThemeColorService} from '@taiga-ui/addon-mobile';
import {
    TUI_DARK_MODE,
    TuiButton,
    TuiDataList,
    TuiDropdown,
    TuiLink,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiAvatar, TuiChevron, TuiFade, TuiSwitch, TuiTabs} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader, TuiList, TuiNavigation} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
        TuiAvatar,
        TuiButton,
        TuiCardLarge,
        TuiChevron,
        TuiDataList,
        TuiDropdown,
        TuiFade,
        TuiHeader,
        TuiLink,
        TuiList,
        TuiNavigation,
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

    protected readonly dark = inject(TUI_DARK_MODE);
    protected color = false;

    protected onColor(color: boolean): void {
        this.theme.color = color ? 'purple' : 'black';
    }
}
```

#### Subheader object

Navigation with expanded page header including description and other page details.

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
<header tuiSubheader> @if (current === 'basic') { <ng-container>
<a iconStart="@tui.chevron-left" tuiLink [textContent]="'Repositories'" ></a>
<h2 tuiHeader>
<div tuiTitle>
<div tuiNavigationLogo>
<tui-icon icon="@tui.github" />
<span tuiFade>Research and Development Platform</span>
<tui-icon iconStart="@tui.heart" tuiBadge />
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
</ng-container> } @if (current === 'input') { <ng-container>
<h2 tuiHeader>
<div tuiTitle>Projects</div>
<div tuiAccessories>
<button appearance="primary" tuiButton type="button" > Create </button>
</div>
</h2>
<tui-textfield iconStart="@tui.search">
<input placeholder="Search" tuiInput />
</tui-textfield>
</ng-container> } @if (current === 'card') { <ng-container>
<tui-breadcrumbs>
<a *tuiItem tuiLink > Code </a>
<a *tuiItem tuiLink > Repositories </a>
<span *tuiItem>Taiga UI</span>
</tui-breadcrumbs>
<div appearance="floating" tuiCardLarge="compact" tuiHeader >
<h2 tuiTitle> Personal and Development Plan <span tuiSubtitle> Here you can initiate and participate in the review of package objects. Each object have up to 3 groups of reviewers, with one response required from each type, and any other participant can change both positive </span>
</h2>
</div>
</ng-container> } <tui-tabs>
<button tuiTab type="button" > First tab </button>
<button tuiTab type="button" > Second tab </button>
<button tuiTab type="button" > Third tab </button>
<button tuiButton type="button" > Button </button>
<button tuiButton type="button" > Button </button>
</tui-tabs>
</header> @for (_ of '-'.repeat(10); track $index) { <div appearance="floating" tuiCardLarge="compact" tuiHeader [style.grid-column]="'span 6'" >
<h2 tuiTitle> Some random content <span tuiSubtitle>A subtitle</span>
</h2>
</div> } </main>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiGroup, TuiIcon, TuiInput, TuiLink, TuiTitle} from '@taiga-ui/core';
import {TuiBadge, TuiBlock, TuiBreadcrumbs, TuiFade, TuiTabs} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader, TuiNavigation} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
        TuiBadge,
        TuiBlock,
        TuiBreadcrumbs,
        TuiButton,
        TuiCardLarge,
        TuiFade,
        TuiGroup,
        TuiHeader,
        TuiIcon,
        TuiInput,
        TuiLink,
        TuiNavigation,
        TuiTabs,
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

Changing colors and mode.

**Template:**
```html
<!-- Ignore this part, it is only here to position drawer inside the example block -->
<div class="custom-portal">
<ng-container tuiVCR />
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
<button iconStart="@tui.users" tuiAsideItem type="button" > Groups </button>
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
<button appearance="primary" iconStart="@tui.plus" tuiAsideItem type="button" > Add </button>
<footer>
<button iconStart="@tui.star" tuiAsideItem type="button" > Favorites </button>
</footer>
</aside>
<main tuiNavigationMain> @for (_ of '-'.repeat(10); track $index) { <div appearance="floating" tuiCardLarge tuiHeader >
<h2 tuiTitle> Some random content <span tuiSubtitle>A subtitle</span>
</h2>
</div> } </main>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPortals, TuiPortalService, tuiProvide, TuiVCR} from '@taiga-ui/cdk';
import {TuiButton, TuiPopupService, TuiTitle} from '@taiga-ui/core';
import {TuiChevron, TuiFade} from '@taiga-ui/kit';
import {
    TuiCardLarge,
    TuiHeader,
    tuiLayoutIconsProvider,
    TuiNavigation,
} from '@taiga-ui/layout';

@Component({
    imports: [
        TuiButton,
        TuiCardLarge,
        TuiChevron,
        TuiFade,
        TuiHeader,
        TuiNavigation,
        TuiTitle,
        TuiVCR,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [
        tuiLayoutIconsProvider({grid: '@tui.align-justify'}),
        // Ignore portal related code, it is only here to position drawer inside the example block
        TuiPopupService,
        tuiProvide(TuiPortalService, TuiPopupService),
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

main::before {
    content: '';
}

header::after {
    display: none;
}
```

#### InputSearch

Using dedicated search component in a header for a spotlight global portal search pattern.

**Template:**
```html
<header tuiNavigationHeader>
<strong>Taiga UI</strong>
<hr />
<tui-textfield (pointerdown.capture.stop)="(0)">
<input tuiSearchHotkey [formControl]="control" [tuiInputSearch]="search" [(tuiInputSearchOpen)]="open" />
<ng-template #search>
<tui-search-results [results]="results$ | async">
<tui-search-history [popular]="popular" />
<ng-template let-item>
<a tuiCell [href]="item.href" >
<span [tuiAvatar]="item.icon || '@tui.file'"></span>
<span tuiTitle> {{ item.title }} <span tuiSubtitle>{{ item.subtitle }}</span>
</span>
</a>
</ng-template>
</tui-search-results>
</ng-template>
</tui-textfield> Alex Inkin <div tuiAvatar="@tui.user">
<img alt="" src="https://avatars.githubusercontent.com/u/11832552" />
</div>
</header>
<main tuiNavigationMain>
<p>
<button size="m" tuiButton type="button" (click)="open = !open" > Toggle open: {{ open }} </button>
</p>
</main>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_DEFAULT_MATCHER} from '@taiga-ui/cdk';
import {TuiButton, TuiCell, TuiTextfield, TuiTitle} from '@taiga-ui/core';
import {TuiSearchResults} from '@taiga-ui/experimental';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiInputSearch, TuiNavigation} from '@taiga-ui/layout';
import {filter, map, startWith, switchMap, timer} from 'rxjs';

interface Result {
    href: string;
    title: string;
    subtitle?: string;
    icon?: string;
}

const DATA: Record<string, readonly Result[]> = {
    Documents: [
        {
            title: 'Monty Python',
            href: 'https://en.wikipedia.org/wiki/Monty_Python',
        },
    ],
    Code: [
        {
            title: 'Taiga UI',
            href: 'https://github.com/taiga-family/taiga-ui',
            icon: '@tui.github',
        },
        {
            title: 'Maskito',
            href: 'https://github.com/taiga-family/maskito',
            icon: '@tui.github',
        },
        {
            title: 'Web APIs with Angular',
            href: 'https://github.com/taiga-family/ng-web-apis',
            icon: '@tui.github',
        },
    ],
    Links: [
        {
            title: 'Taiga UI',
            subtitle: 'Super awesome library',
            href: 'https://taiga-ui.dev',
            icon: '/assets/images/taiga.svg',
        },
        {
            title: 'Maskito',
            href: 'https://maskito.dev',
            icon: '@tui.external-link',
        },
    ],
};

@Component({
    imports: [
        AsyncPipe,
        ReactiveFormsModule,
        TuiAvatar,
        TuiButton,
        TuiCell,
        TuiInputSearch,
        TuiNavigation,
        TuiSearchResults,
        TuiTextfield,
        TuiTitle,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly popular = ['Taiga UI', 'Maskito', 'Web APIs for Angular'];
    protected readonly control = new FormControl('');

    protected readonly results$ = this.control.valueChanges.pipe(
        filter(Boolean),
        switchMap((value: string) =>
            timer(2000).pipe(
                map(() => this.filter(value)),
                startWith(null),
            ),
        ),
    );

    protected open = false;

    private filter(query: string): Record<string, readonly Result[]> {
        return Object.entries(DATA).reduce(
            (result, [key, value]) => ({
                ...result,
                [key]: value.filter(({title, href, subtitle = ''}) =>
                    TUI_DEFAULT_MATCHER(`${title}${href}${subtitle}`, query),
                ),
            }),
            {},
        );
    }
}
```
