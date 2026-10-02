# ItemsWithMore

- **Package**: `KIT`
- **Type**: components

Component to hide overflown items behind custom content. Resize the screen to see extra items disappear

### Example

```html
<tui-items-with-more [itemsLimit]="itemsLimit" [linesLimit]="linesLimit" [required]="required" [side]="side" > @for (item of items; track item) { <span *tuiItem tuiChip class="tui-space_right-2 tui-space_vertical-1" > {{ item }} </span> } <span *tuiMore class="tui-space_right-2 tui-space_vertical-1" >
<span appearance="secondary" tuiChip > and now! </span>
</span>
</tui-items-with-more>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [itemsLimit] | `number` | artificial limit on visible items |
| [linesLimit] | `number` | limit on visible lines |
| [required] | `number` | index of an item that must remain visible |
| [side] | `number` | side of the "See more" content (for one-line mode only) |

### Usage Examples

#### Basic

Hiding excessive items and showing text.

**Template:**
```html
<tui-items-with-more [required]="required"> @for (item of items; track item) { <span *tuiItem appearance="neutral" size="s" tuiChip class="tui-space_right-1" > {{ item }} </span> } <ng-template let-index tuiMore > and {{ getRemaining(index) }} more </ng-template>
</tui-items-with-more>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiItem} from '@taiga-ui/cdk';
import {TuiChip, TuiItemsWithMore} from '@taiga-ui/kit';

@Component({
    imports: [TuiChip, TuiItem, TuiItemsWithMore],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = inject<readonly string[]>('Pythons' as any);
    protected readonly required = 3;

    protected getRemaining(index: number): number {
        const offset = index < this.required ? index + 2 : index + 1;

        return this.items.length - offset;
    }
}
```

#### Dropdown

Putting extra items in a dropdown.

**Template:**
```html
<tui-items-with-more size="m" tuiGroup [collapsed]="true" > @for (item of items; track item) { <label *tuiItem appearance="" tuiBlock="m" [style.border-radius]="'inherit'" > {{ item }} <input tuiBlock type="checkbox" [(ngModel)]="value[$index]" />
</label> } <ng-template let-lastIndex tuiMore >
<button appearance="outline-grayscale" size="m" tuiButton tuiDropdownAlign="end" tuiDropdownAuto type="button" class="item" [tuiDropdown]="dropdown" > More <div tuiBadge>{{ items.length - lastIndex - 1 }}</div>
</button>
<ng-template #dropdown>
<tui-data-list size="l"> @for (item of items; track item) { @if ($index > lastIndex) { <button tuiOption type="button" (click)="value[$index] = !value[$index]" > {{ item }} <tui-icon icon="@tui.check" class="tui-space_left-2" [class._hidden]="!value[$index]" />
</button> } } </tui-data-list>
</ng-template>
</ng-template>
</tui-items-with-more>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_FALSE_HANDLER, TuiItem} from '@taiga-ui/cdk';
import {TuiButton, TuiDataList, TuiDropdown, TuiGroup, TuiIcon} from '@taiga-ui/core';
import {TuiBadge, TuiBlock, TuiItemsWithMore} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiBadge,
        TuiBlock,
        TuiButton,
        TuiDataList,
        TuiDropdown,
        TuiGroup,
        TuiIcon,
        TuiItem,
        TuiItemsWithMore,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = inject<readonly string[]>('Pythons' as any);
    protected value = this.items.map(TUI_FALSE_HANDLER) as boolean[];
}
```

**LESS:**
```less
.item {
    border-radius: inherit;
    font-weight: normal;
}

._hidden {
    visibility: hidden;
}

tui-icon {
    inline-size: 1rem;
    block-size: 1rem;
}
```

#### Side

Handling excessive items at the beginning of the list.

**Template:**
```html
<tui-items-with-more side="start" [itemsLimit]="3" > @for (item of items; track item) { <ng-container *tuiItem> @if (!$first) { <tui-icon icon="@tui.chevron-right" [style.font-size.rem]="1" [style.opacity]="0.25" [style.width.rem]="1.5" /> } <button appearance="flat" size="xs" tuiButton type="button" > {{ item }} </button>
</ng-container> } <ng-template let-index tuiMore >
<button appearance="flat" iconStart="@tui.ellipsis" size="xs" tuiDropdownAuto tuiIconButton type="button" [tuiDropdown]="dropdown" > More </button>
<ng-template #dropdown>
<tui-data-list size="s"> @for (item of items; track item) { @if ($index < index) { <button tuiOption type="button" > {{ item }} </button> } } </tui-data-list>
</ng-template>
</ng-template>
</tui-items-with-more>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiDataList, TuiDropdown, TuiIcon} from '@taiga-ui/core';
import {TuiItemsWithMore} from '@taiga-ui/kit';

@Component({
    imports: [TuiButton, TuiDataList, TuiDropdown, TuiIcon, TuiItemsWithMore],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = inject<readonly string[]>('Pythons' as any);
}
```

#### Multiline

Hiding extra items in a multi line container.

**Template:**
```html
<tui-items-with-more class="container" [class.container_expanded]="linesLimit === 100" [linesLimit]="linesLimit" (lastIndexChange)="lastIndex = $event" > @for (item of items; track item) { <span *tuiItem appearance="neutral" size="s" tuiChip class="item" [class.item_visible]="$index <= lastIndex" > {{ item }} item </span> } <ng-template let-index tuiMore >
<button appearance="neutral" iconEnd="@tui.chevron-down" size="s" tuiChip type="button" class="more" (click)="linesLimit = 100" > More {{ getRemaining(index) }} </button>
</ng-template>
</tui-items-with-more>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiItem} from '@taiga-ui/cdk';
import {TuiChip, TuiItemsWithMore} from '@taiga-ui/kit';

@Component({
    imports: [TuiChip, TuiItem, TuiItemsWithMore],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = [
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
    ];

    protected linesLimit = 2;
    protected lastIndex = Infinity;

    protected getRemaining(index: number): number {
        const offset = index + 1;

        return this.items.length - offset;
    }
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

:host {
    display: block;
    max-inline-size: 30rem;
}

.container {
    max-block-size: 4.5rem;
    overflow: hidden;

    &_expanded {
        max-block-size: 100%;
    }
}

.item {
    .transition(~'transform, opacity');

    opacity: 0;
    transform: scale(0.9);
    margin: 0 0.25rem 0.25rem 0;

    &_visible {
        opacity: 1;
        transform: scale(1);
    }
}

.more {
    margin: 0 0.25rem 0.25rem 0;
}
```

#### Cell

Showing compact version of text in a Cell in limited space.

**Template:**
```html
<tui-textfield tuiChevron [content]="content" [tuiTextfieldCleaner]="false" >
<input tuiSelect [(ngModel)]="value" />
<tui-data-list-wrapper *tuiDropdown [itemContent]="content" [items]="items" />
<ng-template #content let-item >
<span tuiAvatar="@tui.star"></span>
<span tuiTitle>
<tui-items-with-more tuiSubtitle>
<span *tuiItem>{{ item.name }}</span>
<span *tuiItem>&nbsp;• {{ item.number }}</span>
<div *tuiMore="let index"> @if (index < 0) { <span>{{ item.name }}</span> } <span>&nbsp;*{{ item.number.slice(-4) }}</span>
</div>
</tui-items-with-more> ${{ item.value | tuiFormatNumber }} </span>
</ng-template>
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfield, TuiTitle} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiChevron,
    TuiDataListWrapper,
    TuiFormatNumberPipe,
    TuiItemsWithMore,
    TuiSelect,
} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiAvatar,
        TuiChevron,
        TuiDataListWrapper,
        TuiFormatNumberPipe,
        TuiItemsWithMore,
        TuiSelect,
        TuiTextfield,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = [
        {
            name: 'Very very long account name',
            number: '1234 5678 9101 2345',
            value: 12345678,
        },
        {
            name: 'Short title',
            number: '8888 8888 8888 8888',
            value: 237,
        },
        {
            name: 'Taiga UI is a super awesome library',
            number: '4444 3333 2222 1111',
            value: 76543,
        },
    ];

    protected value = this.items[0];
}
```

**LESS:**
```less
[tuiCell],
[tuiTitle] {
    flex: 1;
}

div {
    display: flex;
}

span:first-child {
    overflow: hidden;
    text-overflow: ellipsis;
}
```

Use
`Item`
directive for each item

Use
`More`
directive for "See more" content
