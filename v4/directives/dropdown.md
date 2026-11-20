# Dropdown

- **Package**: `CORE`
- **Type**: directives

`tuiDropdown` shows a dropdown with custom template. Use ActiveZone directive to hide dropdown. See also DropdownOpen

### How to Use (Import)

```ts
import {TuiDropdown} from '@taiga-ui/core';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiDropdown,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<div
  [tuiDropdown]="dropdownContent"
  [tuiDropdownManual]="open"
>
  Host element
</div>

<ng-template #dropdownContent>Dropdown content</ng-template>
```

### Example

```html
<span (tuiActiveZoneChange)="onActiveZone($event)">
<button tuiButton type="button" [tuiDropdown]="dropdownContent" [tuiDropdownAlign]="dropdown.align" [tuiDropdownDirection]="dropdown.direction" [tuiDropdownLimitWidth]="dropdown.limitWidth" [tuiDropdownManual]="open" [tuiDropdownMaxHeight]="dropdown.maxHeight" [tuiDropdownMinHeight]="dropdown.minHeight" [tuiDropdownOffset]="dropdown.offset" [tuiDropdownSided]="dropdown.dropdownSided" [tuiDropdownSidedOffset]="dropdown.dropdownSidedOffset" (click)="onClick()" (tuiObscured)="onObscured($event)" > PRESS! <i>* There is also a pretty long text to check its width limitations</i>
</button>
<ng-template #dropdownContent>
<div [style.padding.rem]="1"> Here can be any content <p>You can even insert other components:</p>
<button tuiButton type="button" > Do not touch! </button>
<p>Everything you want... *</p>
<sub>* except cases of human rights violation</sub>
</div>
</ng-template>
</span>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [tuiDropdownManual] | `boolean` | Show dropdown (basic manual implementation, see related pages for other options) |
| [tuiDropdown] | `PolymorpheusContent` | Content |

### Usage Examples

#### Basic

**Template:**
```html
<button tuiButton tuiChevron type="button" [tuiDropdown]="dropdownContent" [tuiDropdownManual]="open" [tuiObscuredEnabled]="open" (click)="onClick()" (tuiActiveZoneChange)="onActiveZone($event)" (tuiObscured)="onObscured($event)" > Choose <ng-template #dropdownContent>
<div class="dropdown">But there is nothing to choose...</div>
</ng-template>
</button>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiActiveZone, TuiObscured} from '@taiga-ui/cdk';
import {TuiButton, TuiDropdown} from '@taiga-ui/core';
import {TuiChevron} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiActiveZone, TuiButton, TuiChevron, TuiDropdown, TuiObscured],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;

    protected onClick(): void {
        this.open = !this.open;
    }

    protected onObscured(obscured: boolean): void {
        if (obscured) {
            this.open = false;
        }
    }

    protected onActiveZone(active: boolean): void {
        this.open = active && this.open;
    }
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.dropdown {
    font-size: 0.8125rem;
    line-height: 1.25rem;
    text-transform: uppercase;
    letter-spacing: 0.075em;
    padding: 0.25rem 0.75rem;
}
```

#### Interesting

**Template:**
```html
<p>
<label class="toggle">
<input tuiSwitch type="checkbox" [(ngModel)]="open" /> Show help </label>
</p> You can ask any questions about <code tuiDropdown="A directive to show content in a dropdown" tuiDropdownDirection="bottom" [textContent]="'tuiDropdown'" [tuiDropdownManual]="open" ></code> and <button tuiDropdownDirection="top" tuiLink type="button" [tuiDropdown]="dropdownContent" [tuiDropdownManual]="open" > Alex </button> will gladly answer! <ng-template #dropdownContent>
<div class="dropdown">
<tui-avatar size="l" [src]="avatarUrl" />
<div class="text">
<div class="label">Taiga UI developer</div>
<div class="name">Alex Inkin</div>
<div class="account">a.inkin</div>
</div>
</div>
</ng-template>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {assets} from '@demo/utils';
import {TuiDropdown, TuiLink} from '@taiga-ui/core';
import {TuiAvatar, TuiSwitch} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiAvatar, TuiDropdown, TuiLink, TuiSwitch],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;
    protected avatarUrl = assets`/images/avatar.jpg`;
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.dropdown {
    display: flex;
    inline-size: 14rem;
    padding: 0.375rem 0.75rem;
}

.toggle {
    display: flex;
    gap: 0.5rem;
    align-items: center;
}

.text {
    padding: 0 0.75rem;
}

.label {
    font: var(--tui-font-text-m);
    color: var(--tui-text-tertiary);
}

.name {
    font: var(--tui-font-heading-6);
}

.account {
    font: var(--tui-font-text-s);
    margin-block-start: 0.25rem;
    color: var(--tui-text-secondary);
}
```

#### Change detection

**Template:**
```html
<tui-input [(ngModel)]="value">Changes propagate both ways</tui-input>
<label class="flex" [tuiDropdown]="dropdownContent" [tuiDropdownManual]="open" >
<input size="s" tuiSwitch type="checkbox" [showIcons]="false" [(ngModel)]="open" /> Open dropdown </label>
<ng-template #dropdownContent="polymorpheus" polymorpheus >
<div class="dropdown">
<tui-input [(ngModel)]="value">Changes propagate both ways</tui-input>
<p> Use <code>polymorpheus</code> directive on the template to make changes propagate both ways </p>
<p *ngIf="showBigText$ | async"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda at corporis ea hic illo ipsa laboriosam laudantium nemo neque officiis pariatur quidem quos rerum sunt, temporibus tenetur ullam vitae? </p>
</div>
</ng-template>
```

**TypeScript:**
```ts
import {AsyncPipe, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDropdown} from '@taiga-ui/core';
import {TuiSwitch} from '@taiga-ui/kit';
import {TuiInputModule} from '@taiga-ui/legacy';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';
import {interval, map} from 'rxjs';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        FormsModule,
        NgIf,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiDropdown,
        TuiInputModule,
        TuiSwitch,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;

    protected value = 'some data';

    protected showBigText$ = interval(3000).pipe(map((i) => !(i % 2)));
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.flex {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-block-start: 1rem;
}

.dropdown {
    max-inline-size: 20rem;
    padding: 1rem;
}
```

#### Appearance

**Template:**
```html
<label tuiDropdownAlign="center" tuiDropdownAppearance="round" tuiDropdownDirection="top" tuiLabel [tuiDropdown]="content" [tuiDropdownManual]="open" >
<input tuiSwitch type="checkbox" class="tui-space_right-2" [showIcons]="false" [(ngModel)]="open" /> Show dropdown <ng-template #content>
<blockquote>I'm a customized dropdown!</blockquote>
</ng-template>
</label>
```

**TypeScript:**
```ts
import {Component, ViewEncapsulation} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDropdown, TuiLabel} from '@taiga-ui/core';
import {TuiSwitch} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiDropdown, TuiLabel, TuiSwitch],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export default class Example {
    protected open = false;
}
```

**LESS:**
```less
tui-dropdown[data-appearance='round'] {
    border-radius: 10rem;
}
```

#### Mobile

**Template:**
```html
<tui-combo-box tuiDropdownMobile [tuiTextfieldCleaner]="true" [(ngModel)]="country" > Country <tui-data-list-wrapper *tuiDataList [items]="countries$ | async | tuiFilterByInput" />
</tui-combo-box>
<tui-textfield tuiChevron tuiDropdownMobile="Select user" class="tui-space_vertical-4" [content]="template" >
<input placeholder="Select user" tuiSelect [(ngModel)]="user" />
<tui-data-list-wrapper *tuiTextfieldDropdown new [itemContent]="template" [items]="users" />
</tui-textfield>
<tui-multi-select tuiDropdownMobile class="tui-space_vertical-4" [stringify]="stringify" [tuiDropdownOpen]="open()" [tuiTextfieldCleaner]="true" [tuiTextfieldLabelOutside]="true" [(ngModel)]="selected" (tuiDropdownOpenChange)="open.set($event)" > Pick more users <ng-container *tuiDataList>
<tui-data-list-wrapper tuiMultiSelectGroup [itemContent]="template" [items]="users | tuiFilterByInput" />
<button appearance="accent" size="m" tuiButton tuiDropdownButton type="button" (click)="open.set(false)" > Done </button>
</ng-container>
</tui-multi-select>
<tui-textfield class="tui-space_vertical-4">
<label tuiLabel>Sum</label>
<input prefix="$" tuiInputNumber [(ngModel)]="sum" />
</tui-textfield>
<ng-template #template let-user >
<span tuiCell>
<tui-avatar [src]="user.url" />
<span tuiTitle>
<span tuiFade>{{ user.name }}</span>
<span tuiSubtitle> {{ user.balance | tuiAmount: '$' : 'left' | async }} </span>
</span>
</span>
</ng-template>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {assets} from '@demo/utils';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiDropdownMobile} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiDropdown, TuiTextfield, TuiTitle} from '@taiga-ui/core';
import {
    TUI_COUNTRIES,
    TuiAvatar,
    TuiChevron,
    TuiDataListWrapper,
    TuiFade,
    TuiFilterByInputPipe,
    TuiInputNumber,
    TuiSelect,
} from '@taiga-ui/kit';
import {TuiCell} from '@taiga-ui/layout';
import {
    TuiComboBoxModule,
    TuiMultiSelectModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';
import {map} from 'rxjs';

interface User {
    readonly url: string;
    readonly name: string;
    readonly balance: number;
}

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        FormsModule,
        TuiAmountPipe,
        TuiAvatar,
        TuiButton,
        TuiCell,
        TuiChevron,
        TuiComboBoxModule,
        TuiDataListWrapper,
        TuiDropdown,
        TuiDropdownMobile,
        TuiFade,
        TuiFilterByInputPipe,
        TuiInputNumber,
        TuiMultiSelectModule,
        TuiSelect,
        TuiTextfield,
        TuiTextfieldControllerModule,
        TuiTitle,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected country = null;
    protected selected: readonly User[] = [];
    protected sum = null;
    protected user: User | null = null;

    protected readonly open = signal(false);

    protected readonly countries$ = inject(TUI_COUNTRIES).pipe(map(Object.values));

    protected readonly users: readonly User[] = [
        {name: 'Alex Inkin', balance: 1323525, url: assets`/images/avatar.jpg`},
        {name: 'Roman Sedov', balance: 523242, url: 'RS'},
        {name: 'Vladimir Potekhin', balance: 645465, url: 'VP'},
        {name: 'Nikita Barsukov', balance: 468468, url: 'NB'},
        {name: 'Maxim Ivanov', balance: 498654, url: 'MI'},
    ];

    protected readonly stringify = ({name}: User): string => name;
}
```
