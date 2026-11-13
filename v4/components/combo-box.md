# ComboBox

- **Package**: `KIT`
- **Type**: components

`ComboBox` is a form control for selecting a single value from a set of options. It is similar to Select but with a major difference – possibility to enter value manually .

### How to Use (Import)

```ts
import {FormsModule} from '@angular/forms';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiChevron, TuiComboBox} from '@taiga-ui/kit';

@Component({
  imports: [
    // ...
    FormsModule,
    TuiTextfield,
    TuiChevron,
    TuiComboBox,
  ],
})
export class Example {
  items = ['Option 1', 'Option 2', 'Option 3'];
  value: string | null = null;
}
```

### How to Use (Template)

```html
<tui-textfield tuiChevron>
  <input
    tuiComboBox
    [(ngModel)]="value"
  />

  <tui-data-list-wrapper
    *tuiTextfieldDropdown
    new
    [items]="items"
  />
</tui-textfield>
```

### Example

```html
<ng-template>
<tui-textfield #textfield tuiChevron [content]="!textfield.focused() && control.value ? textfieldContent : ''" [disabledItemHandler]="itemsHandlers.disabledItemHandler()" [iconStart]="icons.iconStart" [identityMatcher]="itemsHandlers.identityMatcher()" [stringify]="itemsHandlers.stringify()" [tuiDropdownAlign]="dropdown.align" [tuiDropdownAppearance]="dropdown.appearance" [tuiDropdownDirection]="dropdown.direction" [tuiDropdownLimitWidth]="dropdown.limitWidth" [tuiDropdownMaxHeight]="dropdown.maxHeight" [tuiDropdownMinHeight]="dropdown.minHeight" [tuiDropdownOffset]="dropdown.offset" [tuiTextfieldCleaner]="textfieldDoc.cleaner" [tuiTextfieldSize]="textfieldDoc.size" [(open)]="dropdown.open" >
<input placeholder="Search country" tuiComboBox [formControl]="control" [invalid]="controlDoc.invalid" [matcher]="matcher" [readOnly]="controlDoc.readonly" [strict]="strict" [tuiDisabled]="controlDoc.disabled" />
<tui-data-list-wrapper *tuiTextfieldDropdown new [items]="countries$ | async | tuiFilterByInput" />
</tui-textfield>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [strict] | `boolean` |  |
| [matcher] | `TuiStringMatcher | null` | function that compares search text and datalist's items to define a match between them. Lowercase string
                comparison function by default. |
| [content] | `PolymorpheusContent` |  |

### Usage Examples

#### Basic

The main helper you’ll use with almost every `ComboBox` is the `tuiFilterByInput` pipe. It enables item filtering based on the user’s input as they type.

**Template:**
```html
<tui-textfield tuiChevron>
<input tuiComboBox [(ngModel)]="value" />
<tui-data-list-wrapper *tuiTextfieldDropdown new [items]="items | tuiFilterByInput" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiComboBox,
    TuiDataListWrapper,
    TuiFilterByInputPipe,
} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiChevron,
        TuiComboBox,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = [
        'Darth Vader',
        'Luke Skywalker',
        'Princess Leia',
        'Han Solo',
        'Obi-Wan Kenobi',
        'Yoda',
    ] as const;

    protected value: string | null = this.items[0];
}
```

#### Non-strict mode

By default, `strict` mode is enabled. This means the input value must match one of the options from the data list. If the value doesn't match, the form control is not updated and the input is cleared on blur. In non-strict mode, the form control can contain any value — even if it doesn’t match any item in the data list.

**Template:**
```html
<tui-textfield tuiChevron>
<input placeholder="Purpose loan" tuiComboBox [formControl]="control" [strict]="false" />
<tui-data-list-wrapper *tuiTextfieldDropdown new [items]="items" />
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
import {TuiTextfield} from '@taiga-ui/core';
import {TuiChevron, TuiComboBox, TuiDataListWrapper} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        JsonPipe,
        ReactiveFormsModule,
        TuiChevron,
        TuiComboBox,
        TuiDataListWrapper,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = [
        'Medical Expenses',
        'Education',
        'Travel',
        'Home Repair',
        'Car',
    ];

    protected control = new FormControl<string | null>(null);
}
```

#### Client-side filtering

You can configure any filtering logic by passing a custom matcher function as an argument to the `tuiFilterByInput` pipe.

**Template:**
```html
<tui-textfield tuiChevron>
<input placeholder="British monarchs" tuiComboBox [(ngModel)]="value" />
<tui-data-list-wrapper *tuiTextfieldDropdown new [items]="items | tuiFilterByInput: matcher" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiStringMatcher} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiComboBox,
    TuiDataListWrapper,
    TuiFilterByInputPipe,
} from '@taiga-ui/kit';

const ROMAN_TO_LATIN: Record<string, string> = {
    I: '1',
    II: '2',
    III: '3',
    IV: '4',
    V: '5',
    VI: '6',
    VII: '7',
    VIII: '8',
};

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiChevron,
        TuiComboBox,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = [
        'Charles III',
        'Elizabeth II',
        'George VI',
        'Edward VIII',
        'George V',
        'William IV',
        'George IV',
        'George III',
    ];

    protected value: string | null = null;

    protected readonly matcher: TuiStringMatcher<string> = (item, query) => {
        const romanNumeral = item.split(' ').at(-1)!;

        return (
            query === ROMAN_TO_LATIN[romanNumeral] ||
            item.toLowerCase().includes(query.toLowerCase())
        );
    };
}
```

#### Textfield customization

Take full advantage of `Textfield` : add any number of Icons and Tooltips (with control over their order and color), adjust the size of the textbox, and more. Explore Textfield documentation page for more customization options.

**Template:**
```html
<tui-textfield iconStart="@tui.search" tuiChevron tuiTextfieldSize="m" [tuiTextfieldCleaner]="false" >
<label tuiLabel>I am a label</label>
<input placeholder="I am placeholder" tuiComboBox [(ngModel)]="value" />
<tui-data-list-wrapper *tuiTextfieldDropdown new [items]="cities | tuiFilterByInput" />
<tui-icon *ngIf="value" icon="@tui.check" style="color: var(--tui-status-positive); pointer-events: none" />
<tui-icon tuiTooltip="I am a hint" />
</tui-textfield>
```

**TypeScript:**
```ts
import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiTextfield} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiComboBox,
    TuiDataListWrapper,
    TuiFilterByInputPipe,
    TuiTooltip,
} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgIf,
        TuiChevron,
        TuiComboBox,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
        TuiIcon,
        TuiTextfield,
        TuiTooltip,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly cities = [
        'Night City',
        'Raccoon City',
        'City 17',
        'Springfield',
        'Bikini Bottom',
        'Gotham',
    ];

    protected value: string | null = null;
}
```

#### Server-side filtering

Pass `null` as argument to `tui-data-list-wrapper[items]` to show loader inside the dropdown. Additionally, you can put Loader inside textfield's box. Pass empty array to `tui-data-list-wrapper[items]` to show `tui-data-list-wrapper[emptyContent]` (it accepts `PolymorpheusContent` ).

**Template:**
```html
<tui-textfield *tuiLet="items$ | async as items" tuiChevron >
<input #inputRef placeholder="Search country" tuiComboBox [(ngModel)]="value" (input)="search$.next($any($event.target).value)" />
<tui-data-list-wrapper *tuiTextfieldDropdown new [emptyContent]="inputRef.value.length < 2 ? 'Enter at least 2 characters' : 'Nothing found!'" [items]="inputRef.value.length < 2 ? [] : items" />
<tui-loader *ngIf="items && showLoader()" />
</tui-textfield>
```

**TypeScript:**
```ts
import {AsyncPipe, NgIf} from '@angular/common';
import {Component, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLet} from '@taiga-ui/cdk';
import {TuiLoader, TuiTextfield} from '@taiga-ui/core';
import {TuiChevron, TuiComboBox, TuiDataListWrapper} from '@taiga-ui/kit';
import {debounceTime, filter, of, Subject, switchMap, tap} from 'rxjs';

import {DatabaseServer} from './database';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        FormsModule,
        NgIf,
        TuiChevron,
        TuiComboBox,
        TuiDataListWrapper,
        TuiLet,
        TuiLoader,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly api = inject(DatabaseServer);

    protected readonly showLoader = signal(false);
    // Click on cleaner / datalist item triggers (input) events too
    protected readonly search$ = new Subject<string>();
    protected readonly items$ = this.search$.pipe(
        debounceTime(0), // ensure form control is updated after last input
        filter(() => !this.value), // click on datalist item should not trigger new api request
        tap(() => this.showLoader.set(true)),
        debounceTime(300),
        switchMap((query) => (query.length >= 2 ? this.api.request$(query) : of(null))),
        tap(() => this.showLoader.set(false)),
    );

    protected value: string | null = null;
}
```

#### Items handlers

Use `tuiItemsHandlersProvider` to override the default behavior of all `ComboBox` -s below the current DI scope. To customize a specific `ComboBox` , use the input properties `[identityMatcher]` / `[stringify]` / `disabledItemHandler` (inherited from `Textfield` ).

**Template:**
```html
<tui-textfield tuiChevron>
<input tuiComboBox [(ngModel)]="value" />
<tui-data-list-wrapper *tuiTextfieldDropdown new [items]="users | tuiFilterByInput" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiItemsHandlersProvider, TuiTextfield} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiComboBox,
    TuiDataListWrapper,
    TuiFilterByInputPipe,
} from '@taiga-ui/kit';

interface Character {
    readonly id: number;
    readonly name: string;
}

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiChevron,
        TuiComboBox,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
        TuiTextfield,
    ],
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

DataListWrapper lets you customize the appearance of options inside the dropdown by `[itemContent]` property. Also, Textfield has `[content]` property to customize appearance of selected option inside textbox. Both properties accept `PolymorpheusContent` – it empowers you with extremely large possibilities for customization.

**Template:**
```html
<tui-textfield #textfield tuiChevron [content]="value && !textfield.focused() ? content : ''" [stringify]="stringify" >
<input placeholder="Choose a card" tuiComboBox [(ngModel)]="value" />
<tui-data-list-wrapper *tuiTextfieldDropdown new [itemContent]="content" [items]="cards | tuiFilterByInput: matcher" />
</tui-textfield>
<ng-template #content let-card >
<div class="card">
<tui-thumbnail-card [paymentSystem]="card.paymentSystem"> {{ card.number.slice(-4) }} </tui-thumbnail-card> {{ card.name }} </div>
</ng-template>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiPaymentSystem, TuiThumbnailCard} from '@taiga-ui/addon-commerce';
import {type TuiStringHandler, type TuiStringMatcher} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiComboBox,
    TuiDataListWrapper,
    TuiFilterByInputPipe,
} from '@taiga-ui/kit';

interface Card {
    name: string;
    number: string;
    paymentSystem: TuiPaymentSystem;
}

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiChevron,
        TuiComboBox,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
        TuiTextfield,
        TuiThumbnailCard,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
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

    protected readonly matcher: TuiStringMatcher<Card> = (item, value) => {
        return (
            item.name.toLowerCase().includes(value.toLowerCase()) ||
            item.number.includes(value)
        );
    };

    protected readonly stringify: TuiStringHandler<Card> = (x) => x.number;
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
<input placeholder="Select film" tuiComboBox [(ngModel)]="value" />
<tui-data-list *tuiTextfieldDropdown size="s" >
<section class="filters">
<label *ngFor="let category of categories" tuiChip [appearance]="filters[category] ? 'accent' : 'neutral'" (pointerdown.prevent)="(0)" > {{ category }} <input hidden type="checkbox" [(ngModel)]="filters[category]" />
</label>
</section>
<ng-container *ngFor="let group of filmDatabase | keyvalue">
<tui-opt-group *ngIf="filters[group.key]" [label]="group.key" >
<button *ngFor="let film of group.value | tuiFilterByInput" new tuiOption type="button" [value]="film" > {{ film }} </button>
</tui-opt-group>
</ng-container>
</tui-data-list>
</tui-textfield>
```

**TypeScript:**
```ts
import {KeyValuePipe, NgFor, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataList, TuiTextfield} from '@taiga-ui/core';
import {TuiChevron, TuiChip, TuiComboBox, TuiFilterByInputPipe} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        KeyValuePipe,
        NgFor,
        NgIf,
        TuiChevron,
        TuiChip,
        TuiComboBox,
        TuiDataList,
        TuiFilterByInputPipe,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected filmDatabase = {
        Action: [
            'The Dark Knight',
            'Inception',
            'The Matrix',
            'The Dark Knight Rises',
            'Gladiator',
        ],
        Comedy: [
            'The Wolf of Wall Street',
            'Back to the Future',
            'Guardians of the Galaxy',
            'The Truman Show',
            'Deadpool',
        ],
        Drama: [
            'The Shawshank Redemption',
            'The Godfather',
            "Schindler's List",
            '12 Angry Men',
        ],
        Horror: ['The Silence of the Lambs', 'Alien', 'Psycho', 'The Shining'],
        Romance: [
            'Forrest Gump',
            'Titanic',
            'Good Will Hunting',
            'Eternal Sunshine of the Spotless Mind',
            'Slumdog Millionaire',
        ],
    };

    protected categories: string[] = Object.keys(this.filmDatabase);
    protected filters: Record<string, boolean> = this.categories.reduce(
        (acc, category, i) => ({...acc, [category]: i % 2 === 0}),
        {},
    );

    protected selectedCategory = true;

    protected value: string | null = null;
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.filters {
    .scrollbar-hidden();

    position: sticky;
    top: 0;
    z-index: 1;
    display: flex;
    overflow: scroll;
    gap: 0.5rem;
    padding: 0.5rem;
    margin-block-end: 1rem;
    border-block-end: 1px solid var(--tui-border-normal);
    background: var(--tui-background-elevation-1);
}
```

#### Choose form control output

`DataList` exposes `Option` -directives – it provides you with an opportunity to decide which data type put inside its `[value]` . This example demonstrates how every option can be a complex object with any structure but form control contains a single id-property as `number` -type.

**Template:**
```html
<tui-textfield tuiChevron [stringify]="stringify" >
<input tuiComboBox [formControl]="control" [matcher]="matcher" />
<tui-data-list *tuiTextfieldDropdown>
<button *ngFor="let item of items" new tuiOption type="button" [value]="item.id" > {{ item.name }} </button>
</tui-data-list>
</tui-textfield>
<p>
<strong>Form control:</strong>
<code>{{ control.value | json }}</code>
</p>
```

**TypeScript:**
```ts
import {JsonPipe, NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiStringHandler, type TuiStringMatcher} from '@taiga-ui/cdk';
import {TuiDataList, TuiTextfield} from '@taiga-ui/core';
import {TuiChevron, TuiComboBox} from '@taiga-ui/kit';

interface Python {
    readonly id: number;
    readonly name: string;
}

@Component({
    standalone: true,
    imports: [
        JsonPipe,
        NgForOf,
        ReactiveFormsModule,
        TuiChevron,
        TuiComboBox,
        TuiDataList,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly control = new FormControl<number | null>(777);

    protected readonly items: readonly Python[] = [
        {id: 42, name: 'John Cleese'},
        {id: 0, name: 'Eric Idle'},
        {id: 666, name: 'Michael Palin'},
        {id: 123, name: 'Terry Gilliam'},
        {id: 777, name: 'Terry Jones'},
        {id: 999, name: 'Graham Chapman'},
    ];

    protected readonly stringify: TuiStringHandler<number> = (id) =>
        this.items.find((item) => item.id === id)?.name ?? '';

    protected readonly matcher: TuiStringMatcher<number> = (id, query) => {
        const {name} = this.items.find((item) => item.id === id)!;

        return String(id) === query || name.toLowerCase() === query.toLowerCase();
    };
}
```

#### Virtual scroll

You can use `ComboBox` with virtual scrolling from @angular/cdk/scrolling .

**Template:**
```html
<tui-textfield tuiChevron>
<input placeholder="Country" tuiComboBox [(ngModel)]="value" />
<ng-container *tuiTextfieldDropdown>
<!-- 44 = option height -->
<!-- 4 = margin between options -->
<!-- 8 = data list padding -->
<cdk-virtual-scroll-viewport *tuiLet="countries$ | async | tuiFilterByInput as items" tuiScrollable class="scroll" [itemSize]="44" [maxBufferPx]="44 * 10" [minBufferPx]="44 * 5" [style.height.px]="(items?.length || 1) * (44 + 4) + 8" >
<tui-data-list>
<button *cdkVirtualFor="let item of items" new tuiOption type="button" [value]="item" > {{ item }} </button>
</tui-data-list>
</cdk-virtual-scroll-viewport>
</ng-container>
</tui-textfield>
```

**TypeScript:**
```ts
import {ScrollingModule} from '@angular/cdk/scrolling';
import {AsyncPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLet} from '@taiga-ui/cdk';
import {TuiDataList, TuiScrollable, TuiTextfield} from '@taiga-ui/core';
import {
    TUI_COUNTRIES,
    TuiChevron,
    TuiComboBox,
    TuiFilterByInputPipe,
} from '@taiga-ui/kit';
import {map, type Observable} from 'rxjs';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        FormsModule,
        ScrollingModule,
        TuiChevron,
        TuiComboBox,
        TuiDataList,
        TuiFilterByInputPipe,
        TuiLet,
        TuiScrollable,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly countries$: Observable<string[]> = inject(TUI_COUNTRIES).pipe(
        map(Object.values),
    );

    protected value = null;
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local.less';

.scroll {
    .scrollbar-hidden();

    max-block-size: 100%;
}
```

#### With DropdownMobile

Use real mobile device or enable mobile emulation in DevTools to explore this example! Put `tuiDropdownMobile` on `<tui-textfield />` to enable a full-screen dialog instead of the default dropdown on mobile devices. By default, the full-screen dialog hides all other content using `visibility: hidden` and shifts the textfield to the top of the page. Use `--tui-dropdown-mobile-offset` css-variable option to control how far the textfield is shifted. If needed, manually set `visibility: visible` on any hidden elements (e.g., a sticky header) to make them visible again.

**Template:**
```html
<tui-textfield tuiChevron tuiDropdownMobile >
<input placeholder="Select destination" tuiComboBox [(ngModel)]="value" />
<tui-data-list-wrapper *tuiTextfieldDropdown new [items]="countries$ | async | tuiFilterByInput" />
</tui-textfield>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component, inject, ViewEncapsulation} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDropdownMobile} from '@taiga-ui/addon-mobile';
import {TuiTextfield} from '@taiga-ui/core';
import {
    TUI_COUNTRIES,
    TuiChevron,
    TuiComboBox,
    TuiDataListWrapper,
    TuiFilterByInputPipe,
} from '@taiga-ui/kit';
import {map, type Observable} from 'rxjs';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        FormsModule,
        TuiChevron,
        TuiComboBox,
        TuiDataListWrapper,
        TuiDropdownMobile,
        TuiFilterByInputPipe,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export default class Example {
    protected readonly countries$: Observable<string[]> = inject(TUI_COUNTRIES).pipe(
        map(Object.values),
    );

    protected value: string | null = null;
}
```

**LESS:**
```less
@sticky-header-height: 4.1875rem;

:root {
    --tui-dropdown-mobile-offset: @sticky-header-height + 1rem;
}

header[tuiDocHeader] {
    visibility: visible;
}
```

#### Override option component

You can override default behavior and appearance of all options inside dropdown. Just provide your custom component by `tuiAsOptionContent` -utility. Double check if you really need this feature! For the most cases `<tui-data-list-wrapper [itemContent]="..." />` can be enough for your task. Explore this example for more details.

**Template:**
```html
<tui-textfield tuiChevron>
<input placeholder="Select something" tuiComboBox [formControl]="control" />
<tui-data-list-wrapper *tuiTextfieldDropdown new [items]="items | tuiFilterByInput" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiAsOptionContent, TuiTextfield} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiComboBox,
    TuiDataListWrapper,
    TuiFilterByInputPipe,
} from '@taiga-ui/kit';

import {Option} from './option';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiChevron,
        TuiComboBox,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiAsOptionContent(Option)],
})
export default class Example {
    protected readonly items = new Array(5)
        .fill(null)
        .map((_, index) => `Option ${index + 1}`);

    protected readonly control = new FormControl<string | null>(this.items[2]!);
}
```
