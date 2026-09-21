# ComboBox

- **Package**: `KIT`
- **Type**: components

`ComboBox` is a form control for selecting a single value from a set of options. It is similar to Select but with a major difference – possibility to enter value manually .

### Example

```html
<ng-template>
<tui-textfield #textfield tuiChevron [content]="!textfield.focused() && control.value ? textfieldDoc.content : ''" [disabledItemHandler]="itemsHandlers.disabledItemHandler()" [iconStart]="icons.iconStart" [identityMatcher]="itemsHandlers.identityMatcher()" [invalid]="controlDoc.invalid" [stringify]="itemsHandlers.stringify()" [tuiAppearanceFocus]="appearance.focus" [tuiAppearanceState]="appearance.state" [tuiDropdownAlign]="dropdown.align" [tuiDropdownAppearance]="dropdown.appearance" [tuiDropdownDirection]="dropdown.direction" [tuiDropdownLimitWidth]="dropdown.limitWidth" [tuiDropdownMaxHeight]="dropdown.maxHeight" [tuiDropdownMinHeight]="dropdown.minHeight" [tuiDropdownOffset]="dropdown.offset" [tuiTextfieldCleaner]="textfieldDoc.cleaner" [tuiTextfieldSize]="textfieldDoc.size" [(open)]="dropdown.open" >
<input placeholder="Search country" tuiComboBox [formControl]="control" [matcher]="matcher" [readonly]="controlDoc.readonly" [strict]="strict" [tuiDisabled]="controlDoc.disabled" />
<tui-data-list-wrapper *tuiDropdown [items]="countries() | tuiFilterByInput" />
</tui-textfield>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [strict] | `boolean` |  |
| [matcher] | `TuiStringMatcher | null` | function that compares search text and datalist's items to define a match between them. Lowercase string
                comparison function by default. |

### Usage Examples

#### Basic

The main helper you’ll use with almost every `ComboBox` is the `tuiFilterByInput` pipe. It enables item filtering based on the user’s input as they type.

**Template:**
```html
<tui-textfield tuiChevron>
<input tuiComboBox [(ngModel)]="value" />
<tui-data-list-wrapper *tuiDropdown [items]="items | tuiFilterByInput" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFilterByInputPipe} from '@taiga-ui/core';
import {TuiChevron, TuiComboBox, TuiDataListWrapper} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiChevron,
        TuiComboBox,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
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
<tui-data-list-wrapper *tuiDropdown [items]="items" />
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
import {TuiChevron, TuiComboBox, TuiDataListWrapper} from '@taiga-ui/kit';

@Component({
    imports: [JsonPipe, ReactiveFormsModule, TuiChevron, TuiComboBox, TuiDataListWrapper],
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
<tui-data-list-wrapper *tuiDropdown [items]="items | tuiFilterByInput: filter" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_DEFAULT_MATCHER, TUI_STRICT_MATCHER} from '@taiga-ui/cdk';
import {type TuiFilterByInputOptions, TuiFilterByInputPipe} from '@taiga-ui/core';
import {TuiChevron, TuiComboBox, TuiDataListWrapper} from '@taiga-ui/kit';

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
    imports: [
        FormsModule,
        TuiChevron,
        TuiComboBox,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
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

    protected readonly filter: TuiFilterByInputOptions<string>['filter'] = (
        items,
        query,
    ) => {
        const filtered = items.filter((item) => {
            const itemList = item.split(' ');
            const romanNumeral = itemList[itemList.length - 1]!;

            return (
                query === ROMAN_TO_LATIN[romanNumeral] || TUI_DEFAULT_MATCHER(item, query)
            );
        });

        /**
         * Query "George V" EXACTLY matches one option,
         * but it also PARTIALLY matches another option "George VI"
         * We should continue filtering for such ambiguous cases
         */
        return filtered.length === 1 && TUI_STRICT_MATCHER(filtered[0], query)
            ? items // Reset filtering
            : filtered;
    };
}
```

#### Textfield customization

Take full advantage of `Textfield` : add any number of Icons and Tooltips (with control over their order and color), adjust the size of the textbox, and more. Explore Input documentation page for more customization options.

**Template:**
```html
<tui-textfield iconStart="@tui.search" tuiChevron tuiTextfieldSize="m" [tuiTextfieldCleaner]="false" >
<label tuiLabel>I am a label</label>
<input placeholder="I am placeholder" tuiComboBox [(ngModel)]="value" />
<tui-data-list-wrapper *tuiDropdown [items]="cities | tuiFilterByInput" /> @if (value) { <tui-icon icon="@tui.check" style="color: var(--tui-status-positive); pointer-events: none" /> } <tui-icon tuiTooltip="I am a hint" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFilterByInputPipe, TuiIcon} from '@taiga-ui/core';
import {TuiChevron, TuiComboBox, TuiDataListWrapper, TuiTooltip} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiChevron,
        TuiComboBox,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
        TuiIcon,
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
@let items = items$ | async; <tui-textfield tuiChevron>
<input #inputRef placeholder="Search country" tuiComboBox [(ngModel)]="value" (input)="search$.next($any($event.target).value)" />
<tui-data-list-wrapper *tuiDropdown [emptyContent]="inputRef.value.length < 2 ? 'Enter at least 2 characters' : 'Nothing found!'" [items]="inputRef.value.length < 2 ? [] : items" /> @if (items && showLoader()) { <tui-loader /> } </tui-textfield>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLoader} from '@taiga-ui/core';
import {TuiChevron, TuiComboBox, TuiDataListWrapper} from '@taiga-ui/kit';
import {debounceTime, filter, of, Subject, switchMap, tap} from 'rxjs';

import {DatabaseServer} from './database';

@Component({
    imports: [
        AsyncPipe,
        FormsModule,
        TuiChevron,
        TuiComboBox,
        TuiDataListWrapper,
        TuiLoader,
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
<tui-data-list-wrapper *tuiDropdown [items]="users | tuiFilterByInput" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFilterByInputPipe, tuiItemsHandlersProvider} from '@taiga-ui/core';
import {TuiChevron, TuiComboBox, TuiDataListWrapper} from '@taiga-ui/kit';

interface Character {
    readonly id: number;
    readonly name: string;
}

@Component({
    selector: 'example-6',
    imports: [
        FormsModule,
        TuiChevron,
        TuiComboBox,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
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

DataListWrapper lets you customize the appearance of options inside the dropdown by `[itemContent]` property. Also, `Textfield` has `[content]` property to customize appearance of selected option inside textbox. Both properties accept `PolymorpheusContent` – it empowers you with extremely large possibilities for customization.

**Template:**
```html
<tui-textfield #textfield tuiChevron [content]="value && !textfield.focused() ? content : ''" [stringify]="stringify" >
<input placeholder="Choose a card" tuiComboBox [(ngModel)]="value" />
<tui-data-list-wrapper *tuiDropdown [itemContent]="content" [items]="cards | tuiFilterByInput: filter" />
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
import {type TuiFilterByInputOptions, TuiFilterByInputPipe} from '@taiga-ui/core';
import {TuiChevron, TuiComboBox, TuiDataListWrapper} from '@taiga-ui/kit';

interface Card {
    name: string;
    number: string;
    paymentSystem: TuiPaymentSystem;
}

@Component({
    imports: [
        FormsModule,
        TuiChevron,
        TuiComboBox,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
        TuiThumbnailCard,
    ],
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

    protected readonly filter: TuiFilterByInputOptions<Card>['filter'] = (items, value) =>
        items.filter(
            (item) =>
                item.name.toLowerCase().includes(value.toLowerCase()) ||
                item.number.includes(value),
        );

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
<tui-data-list *tuiDropdown size="s" >
<section class="filters"> @for (category of categories; track category) { <label tuiChip [appearance]="filters[category] ? 'accent' : 'neutral'" (pointerdown.prevent)="(0)" > {{ category }} <input hidden type="checkbox" [(ngModel)]="filters[category]" />
</label> } </section> @for (group of filmDatabase | keyvalue; track group) { @if (filters[group.key]) { <tui-opt-group [label]="group.key"> @for (film of group.value | tuiFilterByInput; track film) { <button tuiOption type="button" [value]="film" > {{ film }} </button> } </tui-opt-group> } } </tui-data-list>
</tui-textfield>
```

**TypeScript:**
```ts
import {KeyValuePipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataList, TuiFilterByInputPipe} from '@taiga-ui/core';
import {TuiChevron, TuiChip, TuiComboBox} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        KeyValuePipe,
        TuiChevron,
        TuiChip,
        TuiComboBox,
        TuiDataList,
        TuiFilterByInputPipe,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
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

    protected categories = Object.keys(this.filmDatabase);

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
@import '@taiga-ui/styles/utils';

.filters {
    .scrollbar-hidden();

    position: sticky;
    z-index: 1;
    display: flex;
    inset-block-start: 0;
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
<tui-data-list *tuiDropdown> @for (item of items | tuiFilterByInput; track item) { <button tuiOption type="button" [value]="item.id" > {{ item.name }} </button> } </tui-data-list>
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
import {type TuiStringHandler, type TuiStringMatcher} from '@taiga-ui/cdk';
import {TuiDataList, TuiFilterByInputPipe} from '@taiga-ui/core';
import {TuiChevron, TuiComboBox} from '@taiga-ui/kit';

interface Python {
    readonly id: number;
    readonly name: string;
}

@Component({
    imports: [
        JsonPipe,
        ReactiveFormsModule,
        TuiChevron,
        TuiComboBox,
        TuiDataList,
        TuiFilterByInputPipe,
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

    protected readonly stringify: TuiStringHandler<Python | number> = (item) =>
        typeof item === 'number'
            ? // Number-type form control value => human-readable text inside textfield
              (this.items.find(({id}) => id === item)?.name ?? '')
            : // for `tuiFilterByInput` pipe
              item.name;

    protected readonly matcher: TuiStringMatcher<number> = (id, query) => {
        const {name} = this.items.find((item) => item.id === id)!;

        return String(id) === query || name.toLowerCase() === query.toLowerCase();
    };
}
```

#### Virtual scroll

You can use `ComboBox` with virtual scrolling from @angular/cdk/scrolling . Virtual scroll renders only a small subset of options in the DOM at a time — the rest don't exist until scrolled into view. The custom `WithVirtualScroll` directive gives `ComboBox` access to the full list so it can match values typed manually into the textfield, even when the matching option is off-screen.

**Template:**
```html
<tui-textfield tuiChevron>
<input placeholder="Country" tuiComboBox [(ngModel)]="value" />
<ng-container *tuiDropdown>
<!-- 42 = option height -->
<!-- 8 = data list padding --> @let items = countries | tuiFilterByInput; <cdk-virtual-scroll-viewport tuiScrollable class="scroll" [itemSize]="42" [maxBufferPx]="42 * 10" [minBufferPx]="42 * 5" [style.height.px]="(items?.length || 1) * 42 + 8" >
<tui-data-list withVirtualScroll>
<button *cdkVirtualFor="let item of items" tuiOption type="button" [value]="item" > {{ item }} </button>
</tui-data-list>
</cdk-virtual-scroll-viewport>
</ng-container>
</tui-textfield>
```

**TypeScript:**
```ts
import {ScrollingModule} from '@angular/cdk/scrolling';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataList, TuiFilterByInputPipe, TuiScrollable} from '@taiga-ui/core';
import {TUI_COUNTRIES, TuiChevron, TuiComboBox} from '@taiga-ui/kit';

import {WithVirtualScroll} from './with-virtual-scroll';

@Component({
    imports: [
        FormsModule,
        ScrollingModule,
        TuiChevron,
        TuiComboBox,
        TuiDataList,
        TuiFilterByInputPipe,
        TuiScrollable,
        WithVirtualScroll,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly countries = Object.values(inject(TUI_COUNTRIES)());
    protected value = null;
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils.less';

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
<tui-data-list-wrapper *tuiDropdown [items]="countries | tuiFilterByInput" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component, inject, ViewEncapsulation} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDropdownMobile} from '@taiga-ui/addon-mobile';
import {TuiFilterByInputPipe} from '@taiga-ui/core';
import {TUI_COUNTRIES, TuiChevron, TuiComboBox, TuiDataListWrapper} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiChevron,
        TuiComboBox,
        TuiDataListWrapper,
        TuiDropdownMobile,
        TuiFilterByInputPipe,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export default class Example {
    protected readonly countries = Object.values(inject(TUI_COUNTRIES)());
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
<tui-data-list-wrapper *tuiDropdown [items]="items | tuiFilterByInput" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiAsOptionContent, TuiFilterByInputPipe} from '@taiga-ui/core';
import {TuiChevron, TuiComboBox, TuiDataListWrapper} from '@taiga-ui/kit';

import {Option} from './option';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiChevron,
        TuiComboBox,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiAsOptionContent(Option)],
})
export default class Example {
    protected readonly items = Array.from(
        {length: 5},
        (_, index) => `Option ${index + 1}`,
    );

    protected readonly control = new FormControl<string | null>(this.items[2]!);
}
```

#### Override option handling

Provide your custom directive as a proxy value handler using `tuiAsTextfieldAccessor` if you need some custom logic upon picking an item.

**Template:**
```html
<tui-textfield tuiChevron>
<input customComboBox [(ngModel)]="value" (pick)="alerts.open($event).subscribe()" />
<tui-data-list-wrapper *tuiDropdown [items]="items | tuiFilterByInput" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFilterByInputPipe, TuiNotificationService} from '@taiga-ui/core';
import {TuiChevron, TuiComboBox, TuiDataListWrapper} from '@taiga-ui/kit';

import {CustomComboBox} from './custom';

@Component({
    imports: [
        CustomComboBox,
        FormsModule,
        TuiChevron,
        TuiComboBox,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly alerts = inject(TuiNotificationService);
    protected readonly items = inject<string[]>('Pythons' as any);
    protected value: string | null = null;
}
```
