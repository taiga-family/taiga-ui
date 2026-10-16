# Select

- **Package**: `KIT`
- **Type**: components

`Select` is a form control for selecting a single value from a set of options, similar to the native <select> element.

### Example

```html
<ng-template> @let showPlaceholder = textfieldDoc.size === 's' || !control.value; <tui-textfield tuiChevron [content]="control.value && textfieldDoc.content" [disabledItemHandler]="itemsHandlers.disabledItemHandler()" [identityMatcher]="itemsHandlers.identityMatcher()" [invalid]="controlDoc.invalid" [stringify]="itemsHandlers.stringify()" [tuiAppearanceFocus]="appearance.focus" [tuiAppearanceState]="appearance.state" [tuiDropdownAlign]="dropdown.align" [tuiDropdownAppearance]="dropdown.appearance" [tuiDropdownDirection]="dropdown.direction" [tuiDropdownLimitWidth]="dropdown.limitWidth" [tuiDropdownMaxHeight]="dropdown.maxHeight" [tuiDropdownMinHeight]="dropdown.minHeight" [tuiDropdownOffset]="dropdown.offset" [tuiTextfieldCleaner]="textfieldDoc.cleaner" [tuiTextfieldSize]="textfieldDoc.size" [(open)]="dropdown.open" > @if (!showPlaceholder) { <label tuiLabel>Choose country</label> } <input tuiSelect [formControl]="control" [placeholder]="showPlaceholder ? 'Choose country' : ''" [readonly]="controlDoc.readonly" [tuiDisabled]="controlDoc.disabled" />
<tui-data-list-wrapper *tuiDropdown [items]="countries()" />
</tui-textfield>
</ng-template>
```

### Usage Examples

#### Textfield customization

Use all powers of `Textfield` : put any number of Icons and Tooltips inside (and control their order and color), modify the size of the textbox and etc. Explore Input documentation page for more customization options.

**Template:**
```html
<label tuiLabel> I am a label <tui-textfield iconStart="@tui.user-round" tuiChevron tuiTextfieldSize="m" [tuiTextfieldCleaner]="false" >
<input placeholder="I am placeholder" tuiSelect [(ngModel)]="value" />
<tui-data-list-wrapper *tuiDropdown [items]="users" /> @if (value) { <tui-icon icon="@tui.badge-check" style="color: var(--tui-status-info); pointer-events: none" /> } <tui-icon tuiTooltip="I am a hint" />
</tui-textfield>
</label>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon} from '@taiga-ui/core';
import {TuiChevron, TuiDataListWrapper, TuiSelect, TuiTooltip} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiChevron,
        TuiDataListWrapper,
        TuiIcon,
        TuiSelect,
        TuiTooltip,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly users = [
        'Dmitriy Demenskiy',
        'Alex Inkin',
        'Vladimir Potekhin',
        'Nikita Barsukov',
        'Maxim Ivanov',
        'German Panov',
    ];

    protected value: string | null = null;
}
```

#### Items handlers

Use `tuiItemsHandlersProvider` to override default behavior of all `Select` -s below the current DI scope. Use input properties `[identityMatcher]` / `[stringify]` / `disabledItemHandler` (from `Textfield` ) to do the same for the specific `Select` only.

**Template:**
```html
<tui-textfield tuiChevron>
<input tuiSelect [(ngModel)]="value" />
<tui-data-list-wrapper *tuiDropdown [items]="users" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiItemsHandlersProvider} from '@taiga-ui/core';
import {TuiChevron, TuiDataListWrapper, TuiSelect} from '@taiga-ui/kit';

interface Character {
    readonly id: number;
    readonly name: string;
}

@Component({
    imports: [FormsModule, TuiChevron, TuiDataListWrapper, TuiSelect],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        /**
         * You can also use input props of `Textfield`
         * (they will have more priority):
         * ```html
         * <tui-textfield
         *     [identityMatcher]="..."
         *     [stringify]="..."
         *     [disabledItemHandler]="..."
         * />
         * ```
         */
        tuiItemsHandlersProvider({
            stringify: signal((x: Character) => x.name),
            identityMatcher: signal((a: Character, b: Character) => a.id === b.id),
            disabledItemHandler: signal((x: Character) => x.name.includes('Trevor')),
        }),
    ],
})
export default class Example {
    protected readonly users: Character[] = [
        {id: 42, name: 'Tommy Vercetti'},
        {id: 237, name: 'Carl Johnson'},
        {id: 666, name: 'Niko Bellic'},
        {id: 999, name: 'Trevor Philips'},
        {id: 123, name: 'Michael De Santa'},
        {id: 777, name: 'Franklin Clinton'},
    ];

    protected value: Character | null = {id: 42, name: 'Tommy Vercetti'}; // !== this.users[0]
}
```

#### Customize content

DataListWrapper provides an opportunity to customize appearance of options inside dropdown by `[itemContent]` -property. Also, `Textfield` has `[content]` -property to customize appearance of selected option inside textbox. Both properties accept `PolymorpheusContent` – it empowers you with extremely large possibilities for customization.

**Template:**
```html
<tui-textfield tuiChevron [content]="value && content" [stringify]="stringify" >
<input placeholder="Choose a card" tuiSelect [(ngModel)]="value" />
<tui-data-list-wrapper *tuiDropdown [itemContent]="content" [items]="cards" />
</tui-textfield>
<ng-template #content let-card >
<div class="card">
<span tuiThumbnailCard [paymentSystem]="card.paymentSystem" > {{ card.number.slice(-4) }} </span> {{ card.name }} </div>
</ng-template>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiPaymentSystem, TuiThumbnailCard} from '@taiga-ui/addon-commerce';
import {type TuiStringHandler} from '@taiga-ui/cdk';
import {TuiChevron, TuiDataListWrapper, TuiSelect} from '@taiga-ui/kit';

interface Card {
    name: string;
    number: string;
    paymentSystem: TuiPaymentSystem;
}

@Component({
    imports: [FormsModule, TuiChevron, TuiDataListWrapper, TuiSelect, TuiThumbnailCard],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected cards: Card[] = [
        {name: 'Bitcoin', number: '5555555555554444', paymentSystem: 'mastercard'},
        {name: 'Salary', number: '4242424242424242', paymentSystem: 'visa'},
        {name: 'Charity', number: '2201382000000013', paymentSystem: 'mir'},
        {name: 'Subscriptions', number: '6200000000000005', paymentSystem: 'unionpay'},
    ];

    protected value: Card | null = null;
    protected stringify: TuiStringHandler<Card> = (x) => x.name;
}
```

**LESS:**
```less
.card {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}
```

#### With DataList

`DataListWrapper` is just a helper to solve most popular use cases. Use `DataList` for more complex cases when great flexibility is required. DataList documentation page for more customization options.

**Template:**
```html
<tui-textfield tuiChevron>
<input placeholder="Install library" tuiSelect [(ngModel)]="value" />
<tui-data-list *tuiDropdown tuiDataListDropdownManager > @for (group of taigaFamilyLibs; track group) { <button iconEnd="@tui.chevron-right" tuiDropdownAlign="end" tuiDropdownLimitWidth="auto" tuiDropdownManual tuiDropdownSided tuiOption type="button" [tuiDropdown]="options" > {{ group.name }} <ng-template #options>
<tui-data-list> @for (lib of group.libraries; track lib) { <button tuiOption type="button" [value]="lib" > {{ lib }} </button> } </tui-data-list>
</ng-template>
</button> } </tui-data-list>
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataList, TuiDropdown} from '@taiga-ui/core';
import {TuiChevron, TuiDataListDropdownManager, TuiSelect} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiChevron,
        TuiDataList,
        TuiDataListDropdownManager,
        TuiDropdown,
        TuiSelect,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected taigaFamilyLibs = [
        {
            name: 'Taiga UI',
            libraries: [
                '@taiga-ui/cdk',
                '@taiga-ui/core',
                '@taiga-ui/kit',
                '@taiga-ui/addon-doc',
                '@taiga-ui/addon-charts',
                '@taiga-ui/addon-commerce',
                '@taiga-ui/addon-table',
                '@taiga-ui/addon-mobile',
            ],
        },
        {
            name: 'Maskito',
            libraries: [
                '@maskito/core',
                '@maskito/kit',
                '@maskito/phone',
                '@maskito/react',
                '@maskito/angular',
                '@maskito/vue',
            ],
        },
        {
            name: 'Web APIs for Angular',
            libraries: [
                '@ng-web-apis/common',
                '@ng-web-apis/platform',
                '@ng-web-apis/intersection-observer',
                '@ng-web-apis/resize-observer',
                '@ng-web-apis/mutation-observer',
                '@ng-web-apis/view-transition',
                '@ng-web-apis/universal',
                '@ng-web-apis/storage',
                '@ng-web-apis/geolocation',
            ],
        },
    ];

    protected value: string | null = null;
}
```

#### Choose form control output

`DataList` exposes `Option` -directives – it provides you with an opportunity to decide which data type put inside its `[value]` . This example demonstrates how every option can be a complex object with any structure but form control contains a single id-property as `number` -type.

**Template:**
```html
<tui-textfield tuiChevron [stringify]="stringify" >
<input tuiSelect [formControl]="control" />
<tui-data-list *tuiDropdown> @for (item of items; track item) { <button tuiOption type="button" [value]="item.id" > {{ item.name }} </button> } </tui-data-list>
</tui-textfield>
<p>
<strong>Form control:</strong>
<code>{{ control.value | json }}</code>
</p>
```

**TypeScript:**
```ts
import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiStringHandler} from '@taiga-ui/cdk';
import {TuiDataList} from '@taiga-ui/core';
import {TuiChevron, TuiSelect} from '@taiga-ui/kit';

interface Python {
    readonly id: number;
    readonly name: string;
}

@Component({
    imports: [JsonPipe, ReactiveFormsModule, TuiChevron, TuiDataList, TuiSelect],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl<number | null>(777);

    protected readonly items: readonly Python[] = [
        {id: 42, name: 'John Cleese'},
        {id: 237, name: 'Eric Idle'},
        {id: 666, name: 'Michael Palin'},
        {id: 123, name: 'Terry Gilliam'},
        {id: 777, name: 'Terry Jones'},
        {id: 999, name: 'Graham Chapman'},
    ];

    protected readonly stringify: TuiStringHandler<number> = (id) =>
        this.items.find((item) => item.id === id)?.name ?? '';
}
```

#### Virtual scroll

You can use `Select` with virtual scrolling from @angular/cdk/scrolling .

**Template:**
```html
<tui-textfield tuiChevron>
<input placeholder="Country" tuiSelect [(ngModel)]="value" />
<cdk-virtual-scroll-viewport *tuiDropdown appendOnly tuiScrollRef [itemSize]="42" [style.block-size.rem]="12.5" >
<tui-scroll-controls />
<tui-data-list>
<button *cdkVirtualFor="let item of countries" tuiOption type="button" [value]="item" > {{ item }} </button>
</tui-data-list>
</cdk-virtual-scroll-viewport>
</tui-textfield>
```

**TypeScript:**
```ts
import {ScrollingModule} from '@angular/cdk/scrolling';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataList, TuiScrollControls, TuiScrollRef} from '@taiga-ui/core';
import {TUI_COUNTRIES, TuiChevron, TuiSelect} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        ScrollingModule,
        TuiChevron,
        TuiDataList,
        TuiScrollControls,
        TuiScrollRef,
        TuiSelect,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly countries = Object.values(inject(TUI_COUNTRIES)());
    protected value = null;
}
```

#### Mobile

Use real mobile device or enable mobile emulation in DevTools to explore this example! Put `tuiDropdownSheet="Label"` on `<tui-textfield />` to enable sheet dialog (instead of default dropdown) with special appearance of options (similar to native controls) for mobile devices . This example demonstrates different appearances of options for different platforms (using `TuiPlatform` directive). By default, it detects `ios` / `android` / `web` platforms automatically (by parsing user agent) – it is not required to specify it explicitly.

**Template:**
```html
<tui-textfield tuiChevron tuiDropdownSheet="Select platform" [disabledItemHandler]="disabledItemHandler" >
<label tuiLabel>Platform</label>
<input tuiSelect [(ngModel)]="value" />
<tui-data-list-wrapper *tuiDropdown [items]="platforms" [tuiPlatform]="value ?? 'ios'" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDropdownSheet} from '@taiga-ui/addon-mobile';
import {type TuiBooleanHandler, TuiPlatform} from '@taiga-ui/cdk';
import {TuiChevron, TuiDataListWrapper, TuiSelect} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiChevron,
        TuiDataListWrapper,
        TuiDropdownSheet,
        TuiPlatform,
        TuiSelect,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly platforms = ['web', 'ios', 'android'] as const;
    protected value: 'android' | 'ios' | 'web' | null = 'ios';

    protected readonly disabledItemHandler: TuiBooleanHandler<string> = (x) =>
        x === 'web';
}
```

#### Native picker with disabled option

Put `<select tuiSelect/>` (instead of `<input tuiSelect/>` ) to enable native browser picker. This example demonstrates how enable this feature for mobile devices only.

**Template:**
```html
<tui-textfield tuiChevron [disabledItemHandler]="disabledItemHandler" [stringify]="stringify" > @if (isMobile) { <select aria-label="Choose your side" placeholder="Choose your side" tuiSelect [formControl]="control" [items]="items" ></select> } @if (!isMobile) { <input placeholder="Choose your side" tuiSelect [formControl]="control" /> } @if (!isMobile) { <tui-data-list-wrapper *tuiDropdown [items]="items" /> } </tui-textfield>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {type TuiBooleanHandler, type TuiStringHandler} from '@taiga-ui/cdk';
import {TuiChevron, TuiDataListWrapper, TuiSelect} from '@taiga-ui/kit';

interface Character {
    id: number;
    name: string;
}

@Component({
    imports: [ReactiveFormsModule, TuiChevron, TuiDataListWrapper, TuiSelect],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly isMobile = inject(WA_IS_MOBILE);
    protected readonly control = new FormControl(null, Validators.required);

    protected items: readonly Character[] = [
        {name: 'Luke Skywalker', id: 1},
        {name: 'Leia Organa Solo', id: 2},
        {name: 'Darth Vader', id: 3},
        {name: 'Han Solo', id: 4},
        {name: 'Obi-Wan Kenobi', id: 5},
        {name: 'Yoda', id: 6},
    ];

    protected stringify: TuiStringHandler<Character> = (item) => item.name;

    protected readonly disabledItemHandler: TuiBooleanHandler<Character> = (item) =>
        item.name === 'Darth Vader';
}
```

#### Native picker with grouping options

**Template:**
```html
<tui-textfield tuiChevron>
<select aria-label="Select food" placeholder="Select food" tuiSelect [formControl]="control" [items]="groupItems" [labels]="labels" ></select>
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiChevron, TuiSelect} from '@taiga-ui/kit';

@Component({
    imports: [ReactiveFormsModule, TuiChevron, TuiSelect],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected groupItems: ReadonlyArray<readonly string[]> = [
        ['Caesar', 'Greek', 'Apple and Chicken'],
        ['Broccoli Cheddar', 'Chicken and Rice', 'Chicken Noodle'],
    ];

    protected readonly labels = ['Salad', 'Soup'];
    protected readonly control = new FormControl<string | null>(null);
}
```

#### Override option component

You can override default behavior and appearance of all options inside dropdown. Just provide your custom component by `tuiAsOptionContent` -utility. Double check if you really need this feature! For the most cases `<tui-data-list-wrapper [itemContent]="..." />` can be enough for your task. Explore this example for more details.

**Template:**
```html
<tui-textfield tuiChevron>
<input placeholder="Select something" tuiSelect [formControl]="control" />
<tui-data-list-wrapper *tuiDropdown [items]="items" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiAsOptionContent} from '@taiga-ui/core';
import {TuiChevron, TuiDataListWrapper, TuiSelect} from '@taiga-ui/kit';

import {Option} from './option';

@Component({
    imports: [ReactiveFormsModule, TuiChevron, TuiDataListWrapper, TuiSelect],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiAsOptionContent(Option)],
})
export default class Example {
    protected readonly items = [
        'Option 1',
        'Option 2',
        'Option 3',
        'Option 4',
        'Option 5',
    ] as const;

    protected readonly control = new FormControl<string | null>(this.items[2]);
}
```
