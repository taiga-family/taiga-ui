# DataList

- **Package**: `CORE`
- **Type**: components

`DataList` allows to make lists or menus

### How to Use (Import)

```ts
import {TuiDataList} from '@taiga-ui/core';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiDataList,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<tui-data-list role="menu">
  <tui-opt-group
    *ngFor="let group of groups"
    [label]="group.label"
  >
    <a
      *ngFor="let item of group.items"
      tuiOption
      role="menuitem"
      [routerLink]="item.routerLink"
    >
      {{item.label}}
    </a>
  </tui-opt-group>
</tui-data-list>
```

### Example

```html
<tui-data-list [emptyContent]="emptyContent" [size]="size" >
<button *ngFor="let item of items$ | async" tuiOption type="button" [value]="[item]" > {{ item }} </button>
</tui-data-list>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| emptyContent | `PolymorpheusContent` | Content to display when there are no options inside |
| size | `TuiSizeS | TuiSizeL` | Size of items |

### Usage Examples

#### Links

**Template:**
```html
<button tuiButton tuiChevron tuiDropdownOpen tuiDropdownRole="menu" type="button" [tuiDropdown]="content" > Menu </button>
<ng-template #content>
<tui-data-list>
<tui-opt-group *ngFor="let group of groups" [label]="group.label" >
<a *ngFor="let item of group.items" #rla="routerLinkActive" role="menuitemradio" routerLinkActive tuiOption [attr.aria-checked]="rla.isActive" [routerLink]="item.routerLink" > {{ item.label }} <tui-icon *ngIf="rla.isActive" icon="@tui.check" />
</a>
</tui-opt-group>
</tui-data-list>
</ng-template>
```

**TypeScript:**
```ts
import {NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiDataList, TuiDropdown, TuiIcon} from '@taiga-ui/core';
import {TuiChevron} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        NgForOf,
        NgIf,
        RouterLink,
        RouterLinkActive,
        TuiButton,
        TuiChevron,
        TuiDataList,
        TuiDropdown,
        TuiIcon,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly groups = [
        {
            label: 'Components',
            items: [
                {
                    label: 'Input',
                    routerLink: '/components/input',
                },
                {
                    label: 'Select',
                    routerLink: '/components/select',
                },
                {
                    label: 'DataList',
                    routerLink: '/components/data-list',
                },
            ],
        },
        {
            label: 'Styles',
            items: [
                {
                    label: 'Icons',
                    routerLink: '/icons',
                },
                {
                    label: 'Typography',
                    routerLink: '/typography',
                },
            ],
        },
        {
            label: '',
            items: [
                {
                    label: 'Changelog',
                    routerLink: '/changelog',
                },
            ],
        },
    ];
}
```

**LESS:**
```less
tui-icon {
    block-size: 1.5rem;
    inline-size: 1.5rem;
    border-width: 0.25rem;
}
```

#### Submenu

**Template:**
```html
<button appearance="flat" iconStart="@tui.ellipsis-vertical" tuiIconButton type="button" [tuiAppearanceState]="open ? 'hover' : null" [tuiDropdown]="content" [(tuiDropdownOpen)]="open" > Open </button>
<ng-template #content>
<tui-data-list tuiDataListDropdownManager [size]="size" >
<button *tuiLet="'French Fries' as item" tuiOption type="button" (click)="selectOption(item)" > {{ item }} </button>
<button iconEnd="@tui.chevron-right" tuiDropdownAlign="right" tuiDropdownManual tuiDropdownSided tuiOption type="button" [tuiDropdown]="burgersTmp" > Burgers </button>
<button iconEnd="@tui.chevron-right" tuiDropdownAlign="right" tuiDropdownManual tuiDropdownSided tuiOption type="button" [tuiDropdown]="drinksTmp" > Drinks </button>
<button *tuiLet="'Ice Cream' as item" tuiOption type="button" (click)="selectOption(item)" > {{ item }} </button>
</tui-data-list>
<ng-template #burgersTmp>
<tui-data-list tuiDataListDropdownManager>
<button *ngFor="let burger of burgers" tuiOption type="button" (click)="selectOption(burger)" > {{ burger }} </button>
<button iconEnd="@tui.chevron-right" iconStart="@tui.menu" tuiDropdownAlign="right" tuiDropdownManual tuiDropdownSided tuiOption type="button" [tuiDropdown]="drinksTmp" > Nested menu </button>
</tui-data-list>
</ng-template>
<ng-template #drinksTmp>
<tui-data-list [size]="size">
<button *ngFor="let drink of drinks" tuiOption type="button" (click)="selectOption(drink)" > {{ drink }} </button>
</tui-data-list>
</ng-template>
</ng-template>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLet} from '@taiga-ui/cdk';
import {
    TuiButton,
    TuiDataList,
    TuiDialogService,
    TuiDropdown,
    type TuiSizeL,
    type TuiSizeS,
} from '@taiga-ui/core';
import {TuiDataListDropdownManager} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        NgForOf,
        TuiButton,
        TuiDataList,
        TuiDataListDropdownManager,
        TuiDropdown,
        TuiLet,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly dialogs = inject(TuiDialogService);

    protected dropdownOpen = false;
    protected size: TuiSizeL | TuiSizeS = 's';

    protected readonly burgers = [
        'Classic',
        'Cheeseburger',
        'Royal Cheeseburger Quarterpounder',
    ];

    protected readonly drinks = ['Cola', 'Tea', 'Coffee', 'Slurm'];

    protected open = false;

    protected selectOption(item: string): void {
        this.dropdownOpen = false;
        this.dialogs.open(`You selected ${item}`).subscribe();
    }
}
```

#### Form control

**Template:**
```html
<h3>Multi select control</h3>
<button appearance="flat" tuiChevron tuiIconButton type="button" [tuiAppearanceState]="control ? 'hover' : null" [tuiDropdown]="content" [tuiDropdownMaxHeight]="500" [(tuiDropdownOpen)]="control" > Open </button>
<ng-template #content>
<tui-data-list [style.width.rem]="12">
<tui-opt-group tuiMultiSelectGroup [(ngModel)]="value" >
<tui-opt-group label="Main dishes menu with long label">
<button *ngFor="let burger of burgers" tuiOption type="button" [value]="burger" > {{ burger }} </button>
</tui-opt-group>
<tui-opt-group label="Drinks">
<button *ngFor="let drink of drinks" tuiOption type="button" [value]="drink" > {{ drink }} </button>
</tui-opt-group>
</tui-opt-group>
</tui-data-list>
</ng-template>
<p>{{ value }}</p>
<h3>Separate toggles</h3>
<button appearance="flat" tuiChevron tuiIconButton type="button" [tuiAppearanceState]="label ? 'hover' : null" [tuiDropdown]="separate" [tuiDropdownMaxHeight]="500" [(tuiDropdownOpen)]="label" > Open </button>
<ng-template #separate>
<tui-data-list [style.width.rem]="10">
<label tuiOption> First <input tuiCheckbox type="checkbox" [(ngModel)]="first" />
</label>
<label tuiOption> Second <input tuiSwitch type="checkbox" [(ngModel)]="second" />
</label>
</tui-data-list>
</ng-template>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiDataList, TuiDropdown} from '@taiga-ui/core';
import {TuiCheckbox, TuiChevron, TuiSwitch} from '@taiga-ui/kit';
import {TuiMultiSelectModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        TuiButton,
        TuiCheckbox,
        TuiChevron,
        TuiDataList,
        TuiDropdown,
        TuiMultiSelectModule,
        TuiSwitch,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected first = false;
    protected second = true;
    protected control = false;
    protected label = false;

    protected value = [];

    protected readonly burgers = ['Hamburger', 'Cheeseburger'];

    protected readonly drinks = ['Cola', 'Tea', 'Coffee', 'Slurm'];
}
```

#### Custom list

**Template:**
```html
<tui-select class="control" [identityMatcher]="identityMatcher" [valueContent]="valueContent" [(ngModel)]="value" > Open-source budget <custom-list *tuiDataList [items]="items" />
</tui-select>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    type TuiContext,
    type TuiIdentityMatcher,
    type TuiStringHandler,
} from '@taiga-ui/cdk';
import {TuiDataList} from '@taiga-ui/core';
import {TuiSelectModule} from '@taiga-ui/legacy';

import {CustomListComponent} from './custom-list';

const INCOME = {
    name: 'Income',
    items: [
        'Donations',
        'Product placement',
        'Sponsorship',
        'Found on the street',
        'Unexpected inheritance',
        'Investments',
        'Color copier',
    ],
};

const EXPENSES = {
    name: 'Expenses',
    items: [
        'Energy drinks',
        'Coffee',
        'Ramen',
        'Bills',
        'Back medicine',
        'Warhammer 40000 figurines',
    ],
};

@Component({
    standalone: true,
    imports: [CustomListComponent, FormsModule, TuiDataList, TuiSelectModule],
    templateUrl: './index.html',
    styles: [
        `
            .control {
                width: 320px;
            }
        `,
    ],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = [];

    protected readonly items = [INCOME, EXPENSES];

    protected readonly identityMatcher: TuiIdentityMatcher<readonly string[]> = (
        items1,
        items2,
    ) => items1.length === items2.length && items1.every((item) => items2.includes(item));

    protected readonly valueContent: TuiStringHandler<TuiContext<readonly string[]>> = ({
        $implicit,
    }) => {
        if (!$implicit.length) {
            return 'All';
        }

        const selected = this.items.find(({items}) =>
            this.identityMatcher($implicit, items),
        );

        return selected ? `${selected.name} only` : `Selected: ${$implicit.length}`;
    };
}
```

#### Complex

**Template:**
```html
<button appearance="outline" iconStart="@tui.ellipsis-vertical" size="m" tuiButton tuiDropdownLimitWidth="fixed" type="button" class="example" [tuiDropdown]="content" [(tuiDropdownOpen)]="dropdownOpen" > List of components </button>
<ng-template #content>
<tui-data-list tuiDataListDropdownManager>
<button iconEnd="@tui.chevron-right" tuiDropdownAlign="right" tuiDropdownDirection="top" tuiDropdownSided tuiOption type="button" [tuiDropdown]="money" [tuiDropdownManual]="true" > 💰 Money: </button>
<button automation-id="tui-data-list-calendar-option" iconEnd="@tui.chevron-right" tuiDropdownAlign="right" tuiDropdownLimitWidth="auto" tuiDropdownManual tuiDropdownSided tuiOption type="button" [tuiDropdown]="calendar" > 📅 Calendar: {{ dateValue }} </button>
<button automation-id="tui-data-list-email-option" iconEnd="@tui.chevron-right" tuiDropdownAlign="right" tuiDropdownManual tuiDropdownSided tuiOption type="button" [tuiDropdown]="input" > 📧 Email: {{ emailValue }} </button>
<button automation-id="tui-data-list-range-option" iconEnd="@tui.chevron-right" tuiDropdownAlign="right" tuiDropdownDirection="top" tuiDropdownLimitWidth="auto" tuiDropdownManual tuiDropdownSided tuiOption type="button" [tuiDropdown]="range" > ⌛ Range: {{ rangeValue }} </button>
</tui-data-list>
<ng-template #money>
<tui-input automation-id="tui-data-money-input" [(ngModel)]="moneyValue" > RUB <input name="moneyValue" tuiTextfieldLegacy />
</tui-input>
<tui-data-list tuiDataListDropdownManager>
<button iconEnd="@tui.chevron-right" tuiDropdownAlign="right" tuiDropdownDirection="bottom" tuiDropdownLimitWidth="auto" tuiDropdownSided tuiOption type="button" [tuiDropdown]="currency" [tuiDropdownManual]="true" > Exchange Rates: </button>
</tui-data-list>
</ng-template>
<ng-template #calendar>
<tui-calendar [value]="dateValue" (dayClick)="onDayClick($event)" (mousedown.zoneless.prevent)="(0)" />
</ng-template>
<ng-template #input>
<tui-input automation-id="tui-data-list-email-field" [(ngModel)]="emailValue" > Email <input name="emailValue" tuiTextfieldLegacy />
</tui-input>
</ng-template>
<ng-template #currency>
<div class="example">
<div tuiGroup class="group" >
<tui-input [(ngModel)]="dollar">1 Rub = (X) Dollars</tui-input>
<tui-input [(ngModel)]="euro">1 Rub = (Y) Euros</tui-input>
</div>
<ul class="exchange tui-list tui-list_large">
<li class="tui-list__item">
<span>{{ moneyValue / dollar | tuiAmount: 'USD' | async }}</span>
</li>
<li class="tui-list__item">
<span>{{ moneyValue / euro | tuiAmount: 'EUR' | async }}</span>
</li>
</ul>
</div>
</ng-template>
<ng-template #range>
<tui-input-date-range automation-id="tui-data-list-range-field" class="form" [(ngModel)]="rangeValue" > Range </tui-input-date-range>
</ng-template>
</ng-template>
<div class="example">
<p>Email: {{ emailValue }}</p>
<p>Chosen date: {{ dateValue }}</p>
<p>Range date: {{ rangeValue }}</p>
<p>Dol - {{ dollar }}, Eur - {{ euro }}</p>
</div>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {TuiButton, TuiCalendar, TuiDataList, TuiDropdown, TuiGroup} from '@taiga-ui/core';
import {TuiDataListDropdownManager} from '@taiga-ui/kit';
import {TuiInputDateRangeModule, TuiInputModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        FormsModule,
        TuiAmountPipe,
        TuiButton,
        TuiCalendar,
        TuiDataList,
        TuiDataListDropdownManager,
        TuiDropdown,
        TuiGroup,
        TuiInputDateRangeModule,
        TuiInputModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected dropdownOpen = false;
    protected dateValue: TuiDay = new TuiDay(2020, 0, 1);
    protected euro = 87; // 1 euro = 87 rub
    protected dollar = 75; // 1 dollar = 75 rub

    protected emailValue = 'mail@mail.ru';
    protected moneyValue = 1000;

    protected rangeValue = new TuiDayRange(
        TuiDay.currentLocal(),
        TuiDay.currentLocal().append({year: 1}),
    );

    protected onDayClick(day: TuiDay): void {
        this.dateValue = day;
    }
}
```

**LESS:**
```less
.example {
    margin-block-end: 0.5rem;
    min-inline-size: 20.25rem;
}

.form {
    min-inline-size: 18.75rem;
    overflow: hidden;
}

.exchange {
    margin: 1.5625rem;
}

.group {
    max-inline-size: 30.25rem;
}
```

#### Options with long text

**Template:**
```html
<button appearance="flat" tuiButton tuiChevron type="button" [tuiDropdown]="content" [tuiDropdownLimitWidth]="isMobile ? 'fixed' : 'min'" [tuiDropdownMaxHeight]="700" [(tuiDropdownOpen)]="open" > Why Taiga UI? </button>
<ng-template #content>
<tui-data-list>
<tui-opt-group *ngFor="let group of groups" [label]="group.label" >
<button *ngFor="let item of group.items" tuiOption type="button" class="option" (click)="open = false" > {{ item }} </button>
</tui-opt-group>
</tui-data-list>
</ng-template>
<tui-input [formControl]="control" [tuiDropdownOpen]="((control.valueChanges | async)?.length ?? 0) > 2" > Enter 3 characters <tui-data-list *tuiDataList />
</tui-input>
```

**TypeScript:**
```ts
import {AsyncPipe, NgForOf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {TuiButton, TuiDataList, TuiDropdown} from '@taiga-ui/core';
import {TuiChevron} from '@taiga-ui/kit';
import {TuiInputModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        NgForOf,
        ReactiveFormsModule,
        TuiButton,
        TuiChevron,
        TuiDataList,
        TuiDropdown,
        TuiInputModule,
    ],
    templateUrl: './index.html',
    styles: [
        `
            .option {
                white-space: normal;
            }
        `,
    ],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;

    protected readonly groups = [
        {
            label: 'Advantages of Taiga UI',
            items: [
                '🧩 Modular and fully-treeshakable. We harnessed the power of Secondary Entry Points mechanism. You can import even just one entity from our library and be sure that there is no redundant code in your bundle.',
                '🧙 Agnostic. Our components are very flexible and are ready for any use case. But we take care of basic UX aspects to let you focus on your project features.',
                '🦋 Customizable. We use CSS custom properties for all our styling and provide easy methods to customize all UI components.',
                '🛠 Well engineered. We are not afraid to use DI to the max. All our components use OnPush, and the whole project is developed with strict TypeScript mode.',
                '📦 It is big! We have 130+ components, 100+ directives, dozens of tokens, utils and tools. And it is not over yet.',
                '🏗 Maintained! The library started as an internal product in our company. It is used by 50+ projects in production now and it is here to stay.',
            ],
        },
        {
            label: 'Well-engineered Taiga UI components',
            items: ['Calendar', 'Dialog', 'ComboBox', 'Select'],
        },
    ];

    protected readonly isMobile = inject(TUI_IS_MOBILE);

    public control = new FormControl('');
}
```
