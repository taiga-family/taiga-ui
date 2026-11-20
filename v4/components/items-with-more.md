# ItemsWithMore

- **Package**: `KIT`
- **Type**: components

Component to hide overflown items behind custom content. Resize the screen to see extra items disappear

### How to Use (Import)

```ts
import {TuiItemsWithMore} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiItemsWithMore,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<tui-items-with-more>
  <ng-container *ngFor="let item of items">
    <span *tuiItem>{{ item }}</span>
  </ng-container>
  <ng-template
    tuiMore
    let-index
  >
    and {{ items.length - index - 1 }} more
  </ng-template>
</tui-items-with-more>
```

### Example

```html
<tui-items-with-more [itemsLimit]="itemsLimit" [linesLimit]="linesLimit" [required]="required" [side]="side" >
<ng-container *ngFor="let item of items">
<tui-chip *tuiItem class="tui-space_right-2 tui-space_vertical-1" > {{ item }} </tui-chip>
</ng-container>
<span *tuiMore class="tui-space_right-2 tui-space_vertical-1" >
<tui-chip appearance="secondary">and now!</tui-chip>
</span>
</tui-items-with-more>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [itemsLimit] | `number` | Artificial limit on visible items |
| [linesLimit] | `number` | Limit on visible lines |
| [required] | `number` | Index of an item that must remain visible |
| [side] | `number` | Side of the "See more" content (for one-line mode only) |

### Usage Examples

#### Basic

**Template:**
```html
<tui-items-with-more [required]="required">
<ng-container *ngFor="let item of items">
<tui-chip *tuiItem appearance="neutral" size="s" class="tui-space_right-1" > {{ item }} </tui-chip>
</ng-container>
<ng-template let-index tuiMore > and {{ getRemaining(index) }} more </ng-template>
</tui-items-with-more>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiItem} from '@taiga-ui/cdk';
import {TuiChip, TuiItemsWithMore} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [NgForOf, TuiChip, TuiItem, TuiItemsWithMore],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Page {
    protected readonly items = inject<readonly string[]>('Pythons' as any);
    protected readonly required = 3;

    protected getRemaining(index: number): number {
        const offset = index < this.required ? index + 2 : index + 1;

        return this.items.length - offset;
    }
}
```

#### Dropdown

**Template:**
```html
<tui-items-with-more size="m" tuiGroup [collapsed]="true" >
<ng-container *ngFor="let item of items; let index = index">
<label *tuiItem appearance="" tuiBlock="m" [style.border-radius]="'inherit'" > {{ item }} <input tuiBlock type="checkbox" [(ngModel)]="value[index]" />
</label>
</ng-container>
<ng-template let-lastIndex tuiMore >
<button appearance="outline-grayscale" size="m" tuiButton tuiDropdownAlign="right" tuiDropdownOpen type="button" class="item" [tuiDropdown]="dropdown" > More <tui-badge>{{ items.length - lastIndex - 1 }}</tui-badge>
</button>
<ng-template #dropdown>
<tui-data-list size="l">
<ng-container *ngFor="let item of items; let index = index">
<button *ngIf="index > lastIndex" tuiOption type="button" (click)="value[index] = !value[index]" > {{ item }} <tui-icon icon="@tui.check" class="tui-space_left-2" [class._hidden]="!value[index]" />
</button>
</ng-container>
</tui-data-list>
</ng-template>
</ng-template>
</tui-items-with-more>
```

**TypeScript:**
```ts
import {NgForOf, NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_FALSE_HANDLER, TuiItem} from '@taiga-ui/cdk';
import {TuiButton, TuiDataList, TuiDropdown, TuiGroup, TuiIcon} from '@taiga-ui/core';
import {TuiBadge, TuiBlock, TuiItemsWithMore} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        NgIf,
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
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Page {
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

**Template:**
```html
<tui-items-with-more side="start" [itemsLimit]="3" >
<ng-container *ngFor="let item of items; let first = first">
<ng-container *tuiItem>
<tui-icon *ngIf="!first" icon="@tui.chevron-right" [style.border-width.rem]="0.25" [style.opacity]="0.25" />
<button appearance="flat" size="xs" tuiButton type="button" > {{ item }} </button>
</ng-container>
</ng-container>
<ng-template let-index tuiMore >
<button appearance="flat" iconStart="@tui.ellipsis" size="xs" tuiDropdownOpen tuiIconButton type="button" [tuiDropdown]="dropdown" > More </button>
<ng-template #dropdown>
<tui-data-list size="s">
<ng-container *ngFor="let item of items; let i = index">
<button *ngIf="i < index" tuiOption type="button" > {{ item }} </button>
</ng-container>
</tui-data-list>
</ng-template>
</ng-template>
</tui-items-with-more>
```

**TypeScript:**
```ts
import {NgForOf, NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiDataList, TuiDropdown, TuiIcon} from '@taiga-ui/core';
import {TuiItemsWithMore} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        NgForOf,
        NgIf,
        TuiButton,
        TuiDataList,
        TuiDropdown,
        TuiIcon,
        TuiItemsWithMore,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Page {
    protected readonly items = inject<readonly string[]>('Pythons' as any);
}
```

#### Multiline

**Template:**
```html
<tui-items-with-more class="container" [class.container_expanded]="linesLimit === 100" [linesLimit]="linesLimit" (lastIndexChange)="lastIndex = $event" >
<ng-container *ngFor="let item of items; let i = index">
<tui-chip *tuiItem appearance="neutral" size="s" class="item" [class.item_visible]="i <= lastIndex" > {{ item }} item </tui-chip>
</ng-container>
<ng-template let-index tuiMore >
<button appearance="neutral" iconEnd="@tui.chevron-down" size="s" tuiChip type="button" class="more" (click)="linesLimit = 100" > More {{ getRemaining(index) }} </button>
</ng-template>
</tui-items-with-more>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiItem} from '@taiga-ui/cdk';
import {TuiChip, TuiItemsWithMore} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [NgForOf, TuiChip, TuiItem, TuiItemsWithMore],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Page {
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
@import '@taiga-ui/core/styles/taiga-ui-local';

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

**Template:**
```html
<tui-textfield tuiChevron [content]="content" [tuiTextfieldCleaner]="false" >
<input tuiSelect [(ngModel)]="value" />
<tui-data-list-wrapper *tuiTextfieldDropdown new [itemContent]="content" [items]="items" />
<ng-template #content let-item >
<span tuiCell>
<tui-avatar src="@tui.star" />
<span tuiTitle>
<tui-items-with-more tuiSubtitle>
<span *tuiItem>{{ item.name }}</span>
<span *tuiItem>&nbsp;• {{ item.number }}</span>
<div *tuiMore="let index">
<span *ngIf="index < 0">{{ item.name }}</span>
<span>&nbsp;*{{ item.number.slice(-4) }}</span>
</div>
</tui-items-with-more> ${{ item.value | tuiFormatNumber | async }} </span>
</span>
</ng-template>
</tui-textfield>
```

**TypeScript:**
```ts
import {AsyncPipe, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFormatNumberPipe, TuiTextfield, TuiTitle} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiChevron,
    TuiDataListWrapper,
    TuiItemsWithMore,
    TuiSelect,
} from '@taiga-ui/kit';
import {TuiCell} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        FormsModule,
        NgIf,
        TuiAvatar,
        TuiCell,
        TuiChevron,
        TuiDataListWrapper,
        TuiFormatNumberPipe,
        TuiItemsWithMore,
        TuiSelect,
        TuiTextfield,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Page {
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
