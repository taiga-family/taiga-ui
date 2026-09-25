# DataList

- **Package**: `CORE`
- **Type**: components

`DataList` allows to make lists or menus

### Example

```html
<tui-data-list [emptyContent]="emptyContent" [size]="size" > @for (item of items$ | async; track item) { <button tuiOption type="button" [value]="[item]" > {{ item }} </button> } </tui-data-list>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [emptyContent] | `PolymorpheusContent` | content to display when there are no options inside |
| [size] | `TuiSizeS | TuiSizeL` | size of items |

### Usage Examples

#### Links

**Template:**
```html
<button tuiButton tuiChevron tuiDropdownAuto tuiDropdownRole="menu" type="button" [tuiDropdown]="content" > Menu </button>
<ng-template #content>
<tui-data-list> @for (group of groups; track group) { @if (!group.label) { <hr /> } <tui-opt-group [label]="group.label"> @for (item of group.items; track item) { <a #rla="routerLinkActive" role="menuitemradio" routerLinkActive tuiOption [attr.aria-checked]="rla.isActive" [iconEnd]="rla.isActive ? '@tui.check' : ''" [routerLink]="item.routerLink" > {{ item.label }} </a> } </tui-opt-group> } </tui-data-list>
</ng-template>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiDataList, TuiDropdown} from '@taiga-ui/core';
import {TuiChevron} from '@taiga-ui/kit';

@Component({
    imports: [
        RouterLink,
        RouterLinkActive,
        TuiButton,
        TuiChevron,
        TuiDataList,
        TuiDropdown,
    ],
    templateUrl: './index.html',
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

#### Submenu

**Template:**
```html
<button appearance="flat" iconStart="@tui.ellipsis-vertical" tuiIconButton type="button" [tuiAppearanceState]="open ? 'hover' : null" [tuiDropdown]="content" [(tuiDropdownOpen)]="open" > Open </button>
<ng-template #content>
<tui-data-list tuiDataListDropdownManager [size]="size" > @let frenchFries = 'French Fries'; <button tuiOption type="button" (click)="selectOption(frenchFries)" > {{ frenchFries }} </button>
<button iconEnd="@tui.chevron-right" tuiDropdownAlign="end" tuiDropdownManual tuiDropdownSided tuiOption type="button" [tuiDropdown]="burgersTmp" > Burgers </button>
<button iconEnd="@tui.chevron-right" tuiDropdownAlign="end" tuiDropdownManual tuiDropdownSided tuiOption type="button" [tuiDropdown]="drinksTmp" > Drinks </button> @let item = 'Ice Cream'; <button tuiOption type="button" (click)="selectOption(item)" > {{ item }} </button>
</tui-data-list>
<ng-template #burgersTmp>
<tui-data-list tuiDataListDropdownManager> @for (burger of burgers; track burger) { <button tuiOption type="button" (click)="selectOption(burger)" > {{ burger }} </button> } <button iconEnd="@tui.chevron-right" iconStart="@tui.menu" tuiDropdownAlign="end" tuiDropdownManual tuiDropdownSided tuiOption type="button" [tuiDropdown]="drinksTmp" > Nested menu </button>
</tui-data-list>
</ng-template>
<ng-template #drinksTmp>
<tui-data-list [size]="size"> @for (drink of drinks; track drink) { <button tuiOption type="button" (click)="selectOption(drink)" > {{ drink }} </button> } </tui-data-list>
</ng-template>
</ng-template>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
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
    imports: [TuiButton, TuiDataList, TuiDataListDropdownManager, TuiDropdown],
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
<button appearance="flat" tuiButtonSelect tuiChevron tuiIconButton [tuiAppearanceState]="open ? 'hover' : null" [(ngModel)]="value" [(open)]="open" > Open <tui-data-list *tuiDropdown size="l" [style.width.rem]="12" >
<tui-opt-group tuiMultiSelectGroup>
<tui-opt-group label="Main dishes menu with long label"> @for (burger of burgers; track burger) { <button tuiOption type="button" [value]="burger" > {{ burger }} </button> } </tui-opt-group>
<tui-opt-group label="Drinks"> @for (drink of drinks; track drink) { <button tuiOption type="button" [value]="drink" > {{ drink }} </button> } </tui-opt-group>
</tui-opt-group>
</tui-data-list>
</button>
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
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiCheckbox, TuiDataList, TuiDropdown} from '@taiga-ui/core';
import {TuiButtonSelect, TuiChevron, TuiMultiSelect, TuiSwitch} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiButton,
        TuiButtonSelect,
        TuiCheckbox,
        TuiChevron,
        TuiDataList,
        TuiDropdown,
        TuiMultiSelect,
        TuiSwitch,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected first = false;
    protected second = true;
    protected open = false;
    protected label = false;
    protected value = [];
    protected readonly burgers = ['Hamburger', 'Cheeseburger'];
    protected readonly drinks = ['Cola', 'Tea', 'Coffee', 'Slurm'];
}
```

#### Custom list

**Template:**
```html
<tui-textfield multi tuiChevron class="control" [content]="valueContent" [tuiTextfieldCleaner]="false" >
<input tuiInputChip tuiSelectLike [(ngModel)]="value" />
<ng-template tuiItem />
<custom-list *tuiDropdown [items]="items" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiContext, type TuiStringHandler} from '@taiga-ui/cdk';
import {TuiSelectLike, TuiTextfield} from '@taiga-ui/core';
import {TuiChevron, TuiInputChip} from '@taiga-ui/kit';

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
    imports: [
        CustomListComponent,
        FormsModule,
        TuiChevron,
        TuiInputChip,
        TuiSelectLike,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styles: `
        .control {
            inline-size: 20rem;
        }
    `,
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value: string[] = [];
    protected readonly items = [INCOME, EXPENSES];

    protected readonly valueContent: TuiStringHandler<TuiContext<readonly string[]>> = ({
        $implicit,
    }) => {
        if (!$implicit.length) {
            return 'All';
        }

        const selected = this.items.find(
            ({items}) =>
                this.value.length === items.length &&
                items.every((item) => this.value.includes(item)),
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
<button iconEnd="@tui.chevron-right" tuiDropdownAlign="end" tuiDropdownDirection="top" tuiDropdownSided tuiOption type="button" [tuiDropdown]="money" [tuiDropdownManual]="true" > 💰 Money: </button>
<button automation-id="tui-data-list-calendar-option" iconEnd="@tui.chevron-right" tuiDropdownAlign="end" tuiDropdownLimitWidth="auto" tuiDropdownManual tuiDropdownSided tuiOption type="button" [tuiDropdown]="calendar" > 📅 Calendar: {{ dateValue }} </button>
<button automation-id="tui-data-list-email-option" iconEnd="@tui.chevron-right" tuiDropdownAlign="end" tuiDropdownManual tuiDropdownSided tuiOption type="button" [tuiDropdown]="input" > 📧 Email: {{ emailValue }} </button>
<button automation-id="tui-data-list-range-option" iconEnd="@tui.chevron-right" tuiDropdownAlign="end" tuiDropdownDirection="top" tuiDropdownLimitWidth="auto" tuiDropdownManual tuiDropdownSided tuiOption type="button" [tuiDropdown]="range" > ⌛ Range: {{ rangeValue }} </button>
</tui-data-list>
<ng-template #money>
<tui-textfield automation-id="tui-data-money-input">
<input name="moneyValue" tuiInput [(ngModel)]="moneyValue" />
<label tuiLabel>RUB</label>
</tui-textfield>
<tui-data-list tuiDataListDropdownManager>
<button iconEnd="@tui.chevron-right" tuiDropdownAlign="end" tuiDropdownDirection="bottom" tuiDropdownLimitWidth="auto" tuiDropdownSided tuiOption type="button" [tuiDropdown]="currency" [tuiDropdownManual]="true" > Exchange Rates: </button>
</tui-data-list>
</ng-template>
<ng-template #calendar>
<tui-calendar [value]="dateValue" (dayClick)="onDayClick($event)" (mousedown.zoneless.prevent)="(0)" />
</ng-template>
<ng-template #input>
<tui-textfield automation-id="tui-data-list-email-field">
<input name="emailValue" tuiInput [(ngModel)]="emailValue" />
<label tuiLabel>Email</label>
</tui-textfield>
</ng-template>
<ng-template #currency>
<div class="example">
<div tuiGroup class="group" >
<tui-textfield>
<input tuiInput [(ngModel)]="dollar" />
<label tuiLabel>1 Rub = (X) Dollars</label>
</tui-textfield>
<tui-textfield>
<input tuiInput [(ngModel)]="euro" />
<label tuiLabel>1 Rub = (Y) Euros</label>
</tui-textfield>
</div>
<ul class="exchange tui-list tui-list_large">
<li class="tui-list__item">
<span>{{ moneyValue / dollar | tuiAmount: 'USD' }}</span>
</li>
<li class="tui-list__item">
<span>{{ moneyValue / euro | tuiAmount: 'EUR' }}</span>
</li>
</ul>
</div>
</ng-template>
<ng-template #range>
<tui-textfield class="form" [tuiTextfieldCleaner]="false" >
<label tuiLabel>Range</label>
<input tuiInputDateRange [(ngModel)]="rangeValue" />
<tui-calendar-range *tuiDropdown />
</tui-textfield>
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
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {
    TuiButton,
    TuiCalendar,
    TuiDataList,
    TuiDropdown,
    TuiGroup,
    TuiInput,
} from '@taiga-ui/core';
import {TuiDataListDropdownManager, TuiInputDateRange} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiAmountPipe,
        TuiButton,
        TuiCalendar,
        TuiDataList,
        TuiDataListDropdownManager,
        TuiDropdown,
        TuiGroup,
        TuiInput,
        TuiInputDateRange,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected dropdownOpen = false;
    protected dateValue = new TuiDay(2020, 0, 1);
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
<button appearance="flat" tuiButton tuiChevron tuiDropdownLimitWidth="min" type="button" [tuiDropdown]="content" [(tuiDropdownOpen)]="open" > Why Taiga UI? </button>
<ng-template #content>
<tui-data-list [style.max-inline-size.rem]="35"> @for (group of groups; track group) { <tui-opt-group [label]="group.label"> @for (item of group.items; track item) { <button tuiOption type="button" (click)="open = false" > {{ item }} </button> } </tui-opt-group> } </tui-data-list>
</ng-template>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiDataList, TuiDropdown} from '@taiga-ui/core';
import {TuiChevron} from '@taiga-ui/kit';

@Component({
    imports: [TuiButton, TuiChevron, TuiDataList, TuiDropdown],
    templateUrl: './index.html',
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
}
```
