# Tabs

- **Package**: `KIT`
- **Type**: components

Component for creating tabs. If you use `routerLink` you must also add `routerLinkActive` directive.

### How to Use (Import)

```ts
import {TuiTabs} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiTabs,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
Router links:
<tui-tabs>
  <a
    tuiTab
    routerLink="/page-1"
    routerLinkActive
  >
    Page 1
  </a>
  <a
    tuiTab
    routerLink="/page-2"
    routerLinkActive
  >
    Page 2
  </a>
</tui-tabs>

Buttons:
<tui-tabs [(activeItemIndex)]="activeItemIndex">
  <button
    tuiTab
    (click)="onTabClick(1)"
  >
    Page 1
  </button>
  <button
    tuiTab
    (click)="onTabClick(2)"
  >
    Page 2
  </button>
</tui-tabs>
```

### Example

```html
<tui-tabs-with-more [itemsLimit]="itemsLimit" [moreContent]="moreContent" [size]="size" [underline]="underline" [(activeItemIndex)]="activeItemIndex" >
<ng-container *ngFor="let button of buttons">
<button *tuiItem tuiTab type="button" > {{ button }} </button>
</ng-container>
</tui-tabs-with-more>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [(activeItemIndex)] | `number` | Active index item |
| [size] | `TuiSizeM | TuiSizeL` | Size |
| [itemsLimit] | `number` |  |
| [moreContent] | `PolymorpheusContent` |  |
| [dropdownContent] | `PolymorpheusContent` |  |

### Usage Examples

#### Basic

**Template:**
```html
<tui-tabs [(activeItemIndex)]="activeItemIndex">
<button iconStart="@tui.credit-card" tuiTab type="button" (click)="onClick('Maps')" > Maps </button>
<button disabled iconStart="@tui.phone" tuiTab type="button" (click)="onClick('Calls')" > Calls </button>
<button iconStart="@tui.settings" tuiTab type="button" (click)="onClick('Settings')" > Settings </button>
</tui-tabs>
<tui-textfield class="tui-space_top-4">
<label tuiLabel>activeItemIndex</label>
<input tuiInputNumber [max]="2" [min]="0" [step]="1" [(ngModel)]="activeItemIndex" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService, TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber, TuiTabs} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputNumber, TuiTabs, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiAlertService);

    protected activeItemIndex = 0;

    protected onClick(item: string): void {
        this.alerts.open(item).subscribe();
    }
}
```

#### TabsWithMore

**Template:**
```html
<tui-tabs-with-more [itemsLimit]="3" [(activeItemIndex)]="activeItemIndex" >
<button *tuiItem iconStart="@tui.credit-card" tuiTab type="button" (click)="onClick('Maps')" > Maps </button>
<button *tuiItem disabled iconStart="@tui.phone" tuiTab type="button" (click)="onClick('Calls')" > Calls </button>
<button *tuiItem iconStart="@tui.settings" tuiTab type="button" (click)="onClick('Settings')" > Settings </button>
<button *tuiItem iconStart="@tui.heart" tuiTab type="button" (click)="onClick('Favorite')" > Favorite </button>
<button *tuiItem iconStart="@tui.trash" tuiTab type="button" (click)="onClick('Trash')" > Trash </button>
</tui-tabs-with-more>
<tui-textfield class="tui-space_top-4">
<label tuiLabel>activeItemIndex</label>
<input tuiInputNumber [max]="4" [min]="0" [step]="1" [(ngModel)]="activeItemIndex" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService, TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber, TuiTabs} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiInputNumber, TuiTabs, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiAlertService);

    protected activeItemIndex = 0;

    protected onClick(item: string): void {
        this.alerts.open(item).subscribe();
    }
}
```

#### Complex

**Template:**
```html
<div tuiTheme="dark" class="wrapper" >
<h1 class="tui-text_h3 title">Monty Python</h1>
<tui-tabs-with-more underline="#fff" class="tabs" [activeItemIndex]="activeItemIndex" [moreContent]="more" >
<ng-container *ngFor="let tab of tabs">
<ng-container *ngIf="isString(tab); else submenu">
<button *tuiItem tuiTab type="button" (click)="onClick(tab)" > {{ tab }} </button>
</ng-container>
<ng-template #submenu>
<button *tuiItem tuiChevron tuiDropdownOpen tuiTab type="button" [tuiDropdown]="dropdown" (tui-tab-activate)="stop($event)" > Collaborators </button>
</ng-template>
</ng-container>
</tui-tabs-with-more>
</div>
<section class="content">Currently active: {{ activeElement }}</section>
<ng-template #dropdown let-close >
<tui-data-list tuiDataListDropdownManager>
<button *ngFor="let collaborator of collaborators" tuiOption type="button" (click)="onClick(collaborator); close()" > {{ collaborator }} </button>
</tui-data-list>
</ng-template>
<ng-template #more>
<tui-icon aria-label="More" icon="@tui.ellipsis" />
</ng-template>
```

**TypeScript:**
```ts
import {NgForOf, NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiIsString} from '@taiga-ui/cdk';
import {TuiButton, TuiDataList, TuiDropdown, TuiIcon} from '@taiga-ui/core';
import {TuiChevron, TuiDataListDropdownManager, TuiTabs} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        NgForOf,
        NgIf,
        TuiButton,
        TuiChevron,
        TuiDataList,
        TuiDataListDropdownManager,
        TuiDropdown,
        TuiIcon,
        TuiTabs,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly collaborators = ['Carol Cleveland', 'Neil Innes'];

    protected readonly tabs = [
        this.collaborators,
        ...inject<readonly string[]>('Pythons' as any),
    ];

    protected activeElement = String(this.collaborators[0]);

    protected get activeItemIndex(): number {
        if (this.collaborators.includes(this.activeElement)) {
            return this.tabs.indexOf(this.collaborators);
        }

        return this.tabs.indexOf(this.activeElement);
    }

    protected stop(event: Event): void {
        // We need to stop tab custom event so parent component does not think its active
        event.stopPropagation();
    }

    protected onClick(activeElement: string): void {
        this.activeElement = activeElement;
    }

    protected isString(tab: unknown): tab is string {
        return tuiIsString(tab);
    }
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

:host {
    display: block;
    margin: -2rem;
    background: #454e58;
    color: #fff;

    :host-context(tui-root._mobile) {
        margin: -1rem;
    }
}

.wrapper {
    display: flex;
    align-items: center;
    padding: 2rem 2rem 0;
    box-shadow: inset 0 -1px rgba(255, 255, 255, 0.24);
}

.content {
    padding: 2rem 2rem 4rem;
}

.title {
    min-inline-size: 15.625rem;
    margin: 0;
}

.tabs {
    inline-size: ~'calc(100% - 15.625rem)';
    justify-content: flex-end;
    box-shadow: none;
}

.icon {
    .transition(transform);

    margin-inline-start: 0.25rem;

    &_rotated {
        transform: rotate(180deg);
    }
}
```

#### Stepper

**Template:**
```html
<tui-tabs [(activeItemIndex)]="activeItemIndex">
<ng-container *ngFor="let step of steps; let last = last">
<button tuiTab type="button" class="step" [disabled]="last" (click)="onClick(step)" > {{ step }} </button>
<tui-icon *ngIf="!last" icon="@tui.chevron-right" class="separator" />
</ng-container>
</tui-tabs>
<tui-textfield class="tui-space_top-4">
<label tuiLabel>activeItemIndex</label>
<input tuiInputNumber [max]="2" [min]="0" [step]="1" [tuiNumberFormat]="{precision: 0}" [(ngModel)]="activeItemIndex" />
</tui-textfield>
```

**TypeScript:**
```ts
import {NgForOf, NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService, TuiIcon, TuiNumberFormat, TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber, TuiTabs} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        NgIf,
        TuiIcon,
        TuiInputNumber,
        TuiNumberFormat,
        TuiTabs,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiAlertService);

    protected activeItemIndex = 0;

    protected readonly steps = ['Sales', 'Settings', 'News'];

    protected onClick(item: string): void {
        this.alerts.open(item).subscribe();
    }
}
```

**LESS:**
```less
.step {
    margin: 0;
    color: var(--tui-text-action);

    &._active {
        color: var(--tui-text-primary);
    }

    &:hover {
        color: var(--tui-text-action-hover);
    }
}

.separator {
    align-self: center;
    color: var(--tui-text-tertiary);
    margin: 0 1rem;
    font-size: 1rem;
}
```

#### Closing

**Template:**
```html
<tui-tabs-with-more size="m" [itemsLimit]="3" [(activeItemIndex)]="activeItemIndex" >
<ng-container *ngFor="let item of items">
<button *tuiItem tuiTab type="button" (keydown.delete)="remove(item)" > {{ item }} <tui-icon icon="@tui.x" class="tui-space_left-2" [style.font-size.rem]="1" (click.stop)="remove(item)" />
</button>
</ng-container>
</tui-tabs-with-more>
<p>{{ items[activeItemIndex] }}</p>
<button tuiButton type="button" (click)="add()" > Add one more </button>
<tui-textfield class="tui-space_top-4">
<label tuiLabel>activeItemIndex</label>
<input tuiInputNumber [max]="4" [min]="0" [step]="1" [tuiNumberFormat]="{precision: 0}" [(ngModel)]="activeItemIndex" />
</tui-textfield>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiIcon, TuiNumberFormat, TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber, TuiTabs} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        TuiButton,
        TuiIcon,
        TuiInputNumber,
        TuiNumberFormat,
        TuiTabs,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;
    protected activeItemIndex = 0;

    protected items = Array.from({length: 5}, (_, i) => `Item #${i}`);

    protected add(): void {
        this.items = this.items.concat(`Item #${Date.now()}`);
    }

    protected remove(removed: string): void {
        const index = this.items.indexOf(removed);

        this.items = this.items.filter((item) => item !== removed);

        if (index <= this.activeItemIndex) {
            this.activeItemIndex = Math.max(this.activeItemIndex - 1, 0);
        }
    }
}
```

#### Vertical

**Template:**
```html
<section class="content">
<nav tuiTabs vertical="left" class="left" >
<button tuiTab type="button" > Item 1 </button>
<button tuiTab type="button" > Item 2 </button>
<button tuiTab type="button" > Item 3 with name so long it spans multiple lines </button>
</nav>
<div>
<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ultricies enim, vel molestie orci. In finibus diam ac nulla accumsan, vel condimentum lorem ultricies. In feugiat mauris sem, ac ultricies metus aliquet nec. Ut a iaculis metus, id vestibulum justo. Nulla id ante semper, aliquam augue vitae, sollicitudin massa. Sed congue nisi sed ullamcorper mollis. Vivamus volutpat non est a vestibulum. Sed in elementum odio. Proin a lectus ac quam vulputate ornare nec id mi. Maecenas pharetra ultricies efficitur. Etiam sit amet vulputate elit. Donec ut dapibus nunc. Nullam vestibulum diam eros, ac euismod velit porta ac. Ut ut auctor velit. Nulla ac lobortis erat, ut tempor neque. </p>
<p> Donec quis lacus leo. Mauris quis vestibulum mauris. Sed hendrerit odio id blandit iaculis. Nulla ac gravida ligula, tristique tempus eros. Mauris efficitur risus quis arcu pharetra, eu semper ex rutrum. Aenean justo felis, imperdiet non justo vel, fringilla maximus nibh. Vestibulum ut imperdiet ex, vel varius odio. Nunc nec lorem non odio mollis porta. In gravida accumsan lacus, vitae egestas lectus aliquet sed. Morbi justo orci, fringilla sit amet consectetur vel, consectetur a nibh. Sed eu porttitor ante. Morbi imperdiet ligula id velit dignissim malesuada. Vestibulum blandit posuere sem. </p>
</div>
</section>
<section class="content">
<div>
<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ultricies enim, vel molestie orci. In finibus diam ac nulla accumsan, vel condimentum lorem ultricies. In feugiat mauris sem, ac ultricies metus aliquet nec. Ut a iaculis metus, id vestibulum justo. Nulla id ante semper, aliquam augue vitae, sollicitudin massa. Sed congue nisi sed ullamcorper mollis. Vivamus volutpat non est a vestibulum. Sed in elementum odio. Proin a lectus ac quam vulputate ornare nec id mi. Maecenas pharetra ultricies efficitur. Etiam sit amet vulputate elit. Donec ut dapibus nunc. Nullam vestibulum diam eros, ac euismod velit porta ac. Ut ut auctor velit. Nulla ac lobortis erat, ut tempor neque. </p>
<p> Donec quis lacus leo. Mauris quis vestibulum mauris. Sed hendrerit odio id blandit iaculis. Nulla ac gravida ligula, tristique tempus eros. Mauris efficitur risus quis arcu pharetra, eu semper ex rutrum. Aenean justo felis, imperdiet non justo vel, fringilla maximus nibh. Vestibulum ut imperdiet ex, vel varius odio. Nunc nec lorem non odio mollis porta. In gravida accumsan lacus, vitae egestas lectus aliquet sed. Morbi justo orci, fringilla sit amet consectetur vel, consectetur a nibh. Sed eu porttitor ante. Morbi imperdiet ligula id velit dignissim malesuada. Vestibulum blandit posuere sem. </p>
</div>
<tui-tabs size="m" vertical="right" class="right" >
<a routerLinkActive tuiTab [routerLink]="routes.Button" > Button </a>
<a routerLinkActive tuiTab [routerLink]="routes.Tabs" > Tabs </a>
<a routerLinkActive tuiTab [routerLink]="routes.Input" > Input </a>
</tui-tabs>
</section>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {DemoRoute} from '@demo/routes';
import {TuiTabs} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [RouterLink, RouterLinkActive, TuiTabs],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly routes = DemoRoute;
}
```

**LESS:**
```less
.content {
    display: flex;
    margin: 2rem 0;
}

.left {
    margin-inline-end: 2rem;
    min-inline-size: 10rem;
    inline-size: 10rem;
}

.right {
    margin-inline-start: 2rem;
    min-inline-size: 10rem;
    inline-size: 10rem;
}
```

#### Styles

**Template:**
```html
<tui-tabs-with-more class="custom" [itemsLimit]="3" [underline]="false" [(activeItemIndex)]="activeItemIndex" >
<button *tuiItem tuiTab type="button" > Maps </button>
<button *tuiItem tuiTab type="button" > Calls </button>
<button *tuiItem tuiTab type="button" > Settings </button>
<button *tuiItem tuiTab type="button" > Favorite </button>
<button *tuiItem tuiTab type="button" > Trash </button>
</tui-tabs-with-more>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTabs} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiTabs],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected activeItemIndex = 0;
}
```

**LESS:**
```less
.custom {
    font: var(--tui-font-heading-5);
    box-shadow: none;
}
```

#### Tabs with routing

**Template:**
```html
<tui-tabs-with-more>
<ng-container *ngFor="let url of urls; let index = index">
<a *tuiItem routerLinkActive="active" tuiTab [routerLink]="url" > Example {{ index + 1 }} </a>
</ng-container>
</tui-tabs-with-more>
<router-outlet />
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet, type Routes} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTabs} from '@taiga-ui/kit';

@Component({
    standalone: true,
    selector: 'example-1',
    template: 'example-1',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class Nav1 {}

@Component({
    standalone: true,
    selector: 'example-2',
    template: 'example-2',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class Nav2 {}

@Component({
    standalone: true,
    selector: 'example-3',
    template: 'example-3',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class Nav3 {}

@Component({
    standalone: true,
    selector: 'example-4',
    template: 'example-4',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class Nav4 {}

@Component({
    standalone: true,
    selector: 'example-5',
    template: 'example-5',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class Nav5 {}

export const routes: Routes = [
    {
        path: '',
        component: Nav1,
    },
    {
        path: 'nav-1',
        component: Nav1,
    },
    {
        path: 'nav-2',
        component: Nav2,
    },
    {
        path: 'nav-3',
        component: Nav3,
    },
    {
        path: 'nav-4',
        component: Nav4,
    },
    {
        path: 'nav-5',
        component: Nav5,
    },
];

@Component({
    standalone: true,
    imports: [NgForOf, RouterLink, RouterLinkActive, RouterOutlet, TuiTabs],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly urls = ['nav-1', 'nav-2', 'nav-3', 'nav-4', 'nav-5'];
}
```
