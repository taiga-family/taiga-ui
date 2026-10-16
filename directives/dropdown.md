# Dropdown

- **Package**: `CORE`
- **Type**: directives

`tuiDropdown` shows a dropdown with custom template. Use ActiveZone directive to hide dropdown. See also DropdownOpen

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
| [tuiDropdownManual] | `boolean` | show dropdown (basic manual implementation, see related pages for other options) |
| [tuiDropdown] | `PolymorpheusContent` | content of the dropdown |

### Usage Examples

#### Basic

**Template:**
```html
<button tuiButton tuiChevron type="button" [attr.aria-expanded]="open()" [tuiDropdown]="dropdownContent" [tuiDropdownManual]="open()" [tuiObscuredEnabled]="open()" (click)="onClick()" (tuiActiveZoneChange)="onActiveZone($event)" (tuiObscured)="onObscured($event)" > {{ buttonLabel() }} <ng-template #dropdownContent>
<tui-data-list> @for (action of actions; track action.title) { <button tuiOption type="button" (click)="onSelect(action)" >
<span tuiTitle> {{ action.title }} <span tuiSubtitle>{{ action.description }}</span>
</span>
</button> } </tui-data-list>
</ng-template>
</button>
```

**TypeScript:**
```ts
import {Component, computed, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiActiveZone, TuiObscured} from '@taiga-ui/cdk';
import {TuiButton, TuiDataList, TuiDropdown, TuiTitle} from '@taiga-ui/core';
import {TuiChevron} from '@taiga-ui/kit';

interface ExampleAction {
    readonly description: string;
    readonly title: string;
}

@Component({
    imports: [
        TuiActiveZone,
        TuiButton,
        TuiChevron,
        TuiDataList,
        TuiDropdown,
        TuiObscured,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly actions: readonly ExampleAction[] = [
        {
            title: 'Create task',
            description: 'Draft a follow-up item for the team',
        },
        {
            title: 'Schedule sync',
            description: 'Find a 30-minute window for everyone',
        },
        {
            title: 'Share update',
            description: 'Post the latest progress to the channel',
        },
    ];

    protected readonly open = signal(false);
    protected readonly selected = signal<ExampleAction | null>(null);
    protected readonly buttonLabel = computed(() => this.selected()?.title ?? 'Choose');

    protected onClick(): void {
        this.open.update((open) => !open);
    }

    protected onObscured(obscured: boolean): void {
        if (obscured) {
            this.open.set(false);
        }
    }

    protected onActiveZone(active: boolean): void {
        if (!active) {
            this.open.set(false);
        }
    }

    protected onSelect(action: ExampleAction): void {
        this.selected.set(action);
        this.open.set(false);
    }
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

tui-data-list {
    gap: 0.25rem;
    padding: 0.5rem;
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
<div size="l" tuiAvatar="@tui.user" >
<img alt="" src="assets/images/avatar.jpg" />
</div>
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
import {TuiDropdown, TuiLink} from '@taiga-ui/core';
import {TuiAvatar, TuiSwitch} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiAvatar, TuiDropdown, TuiLink, TuiSwitch],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

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
    font: var(--tui-typography-body-m);
    color: var(--tui-text-tertiary);
}

.name {
    font: var(--tui-typography-heading-h6);
}

.account {
    font: var(--tui-typography-body-s);
    margin-block-start: 0.25rem;
    color: var(--tui-text-secondary);
}
```

#### Change detection

**Template:**
```html
<tui-textfield>
<label tuiLabel>Changes propagate both ways</label>
<input tuiInput [(ngModel)]="value" />
</tui-textfield>
<label class="flex" [tuiDropdown]="dropdownContent" [tuiDropdownManual]="open" >
<input size="s" tuiSwitch type="checkbox" [showIcons]="false" [(ngModel)]="open" /> Open dropdown </label>
<ng-template #dropdownContent="polymorpheus" polymorpheus >
<div class="dropdown">
<tui-textfield>
<input tuiInput [(ngModel)]="value" />
<label tuiLabel>Changes propagate both ways</label>
</tui-textfield>
<p> Use <code>polymorpheus</code> directive on the template to make changes propagate both ways </p> @if (showBigText$ | async) { <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda at corporis ea hic illo ipsa laboriosam laudantium nemo neque officiis pariatur quidem quos rerum sunt, temporibus tenetur ullam vitae? </p> } </div>
</ng-template>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDropdown, TuiInput} from '@taiga-ui/core';
import {TuiSwitch} from '@taiga-ui/kit';
import {PolymorpheusTemplate} from '@taiga-ui/polymorpheus';
import {interval, map} from 'rxjs';

@Component({
    imports: [
        AsyncPipe,
        FormsModule,
        PolymorpheusTemplate,
        TuiDropdown,
        TuiInput,
        TuiSwitch,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
@import '@taiga-ui/styles/utils';

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
    imports: [FormsModule, TuiDropdown, TuiLabel, TuiSwitch],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
<tui-textfield tuiChevron tuiDropdownMobile >
<input placeholder="Country" tuiComboBox [(ngModel)]="country" />
<tui-data-list-wrapper *tuiDropdown [items]="countries | tuiFilterByInput" />
</tui-textfield>
<tui-textfield tuiChevron tuiDropdownSheet="Select user" class="tui-space_vertical-4" [content]="template" >
<input placeholder="Select user" tuiSelect [(ngModel)]="user" />
<tui-data-list-wrapper *tuiDropdown [itemContent]="template" [items]="users" />
</tui-textfield>
<tui-textfield multi tuiChevron tuiDropdownMobile class="tui-space_vertical-4" [open]="open()" [stringify]="stringify" (openChange)="open.set($event)" >
<input placeholder="Pick more users" tuiInputChip [(ngModel)]="selected" />
<tui-input-chip *tuiItem />
<ng-container *tuiDropdown>
<tui-data-list-wrapper tuiMultiSelectGroup [itemContent]="template" [items]="users | tuiFilterByInput" />
<button appearance="accent" size="m" tuiButton tuiDropdownButton type="button" (click)="open.set(false)" > Done </button>
</ng-container>
</tui-textfield>
<tui-textfield class="tui-space_vertical-4">
<label tuiLabel>Sum</label>
<input prefix="$" tuiInputNumber [(ngModel)]="sum" />
</tui-textfield>
<ng-template #template let-user >
<div [tuiAvatar]="user.name | tuiInitials"> @if (user.url) { <img alt="" [src]="user.url" /> } </div>
<span tuiTitle>
<span tuiFade>{{ user.name }}</span>
<span tuiSubtitle> {{ user.balance | tuiAmount: '$' : 'start' }} </span>
</span>
</ng-template>
```

**TypeScript:**
```ts
import {Component, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {assets} from '@demo/utils';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiDropdownMobile, TuiDropdownSheet} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiDropdown, TuiFilterByInputPipe, TuiTitle} from '@taiga-ui/core';
import {
    TUI_COUNTRIES,
    TuiAvatar,
    TuiChevron,
    TuiComboBox,
    TuiDataListWrapper,
    TuiFade,
    TuiInitialsPipe,
    TuiInputChip,
    TuiInputNumber,
    TuiMultiSelect,
    TuiSelect,
} from '@taiga-ui/kit';

interface User {
    readonly url?: string;
    readonly name: string;
    readonly balance: number;
}

@Component({
    imports: [
        FormsModule,
        TuiAmountPipe,
        TuiAvatar,
        TuiButton,
        TuiChevron,
        TuiComboBox,
        TuiDataListWrapper,
        TuiDropdown,
        TuiDropdownMobile,
        TuiDropdownSheet,
        TuiFade,
        TuiFilterByInputPipe,
        TuiInitialsPipe,
        TuiInputChip,
        TuiInputNumber,
        TuiMultiSelect,
        TuiSelect,
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
    protected readonly countries = Object.values(inject(TUI_COUNTRIES)());

    protected readonly users: readonly User[] = [
        {name: 'Alex Inkin', balance: 1323525, url: assets`/images/avatar.jpg`},
        {name: 'Roman Sedov', balance: 523242},
        {name: 'Vladimir Potekhin', balance: 645465},
        {name: 'Nikita Barsukov', balance: 468468},
        {name: 'Maxim Ivanov', balance: 498654},
    ];

    protected readonly stringify = ({name}: User): string => name;
}
```
