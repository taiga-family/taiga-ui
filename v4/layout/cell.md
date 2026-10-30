# Cell

- **Package**: `LAYOUT`
- **Type**: components

### How to Use (Import)

```ts
import {Component} from '@angular/core';
import {TuiCell} from '@taiga-ui/layout';
// ...

@Component({
  imports: [
    // ...
    TuiCell,
  ],
})
export class Example {}
```

### How to Use (Template)

```html
<div tuiCell>
  <tui-avatar src="..."></tui-avatar>
  <div tuiTitle>
    Title
    <div tuiSubtitle>Subtitle</div>
  </div>
  <button tuiButton>Action</button>
</div>
```

### Example

```html
<div [tuiCell]="size" [tuiCellHeight]="height" >
<tui-avatar *ngIf="height !== 'compact'" appearance="primary" src="@tui.star" />
<div tuiTitle> Title <div *ngIf="height !== 'compact'" tuiSubtitle > Description </div>
</div>
<div tuiTitle> Secondary title <div *ngIf="height !== 'compact'" tuiSubtitle > Another description </div>
</div>
</div>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [tuiCell] | `'l' | 'm' | 's'` | Layout size |
| [tuiCellHeight] | `'normal' | 'compact' | 'spacious'` | Height mode |

### Usage Examples

#### Basic

**Template:**
```html
<div *ngFor="let size of sizes" [tuiCell]="size" >
<tui-avatar appearance="primary" src="@tui.star" />
<div tuiTitle> Title <div tuiSubtitle>Description</div>
</div>
<div tuiTitle> Secondary title <div tuiSubtitle>Another description</div>
</div>
</div>
```

**TypeScript:**
```ts
import {NgFor} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCell} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [NgFor, TuiAvatar, TuiCell, TuiTitle],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly sizes = ['s', 'm', 'l'] as const;
}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

[tuiCell] {
    max-inline-size: 25rem;
}
```

#### Label

**Template:**
```html
<label tuiCell>
<tui-badged-content>
<tui-icon appearance="negative" icon="@tui.arrow-down-left" size="s" tuiBadge tuiSlot="top" />
<tui-avatar size="s" src="@tui.phone" />
</tui-badged-content>
<div tuiTitle [style.color]="'var(--tui-text-negative)'" > Allow incoming <div tuiSubtitle>Why would you?</div>
</div>
<input tuiSwitch type="checkbox" [(ngModel)]="incoming" />
</label>
<label tuiCell>
<tui-badged-content>
<tui-icon appearance="positive" icon="@tui.arrow-up-right" size="s" tuiBadge tuiSlot="top" />
<tui-avatar size="s" src="@tui.phone" />
</tui-badged-content>
<div tuiTitle>Allow outgoing</div>
<input tuiSwitch type="checkbox" [(ngModel)]="outgoing" />
</label>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiBadge, TuiBadgedContent, TuiSwitch} from '@taiga-ui/kit';
import {TuiCell} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiAvatar,
        TuiBadge,
        TuiBadgedContent,
        TuiCell,
        TuiIcon,
        TuiSwitch,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected incoming = false;
    protected outgoing = true;
}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

[tuiCell] {
    max-inline-size: 25rem;
}
```

#### Left side

**Template:**
```html
<div tuiCell>
<label tuiProgressLabel>
<tui-icon icon="@tui.smile" [style.color]="'var(--tui-background-accent-1)'" />
<tui-progress-circle size="s" [value]="0.3" />
</label>
<div tuiTitle>
<strong>$30 our of $100</strong>
<div tuiSubtitle>Saving for a Benjamin Franklin portrait</div>
</div>
<div tuiTitle>
<tui-badge appearance="positive" size="s" > +$30 </tui-badge>
<div tuiSubtitle>&nbsp;</div>
</div>
</div>
<div tuiCell>
<tui-avatar-stack>
<tui-avatar src="assets/images/avatar.jpg" />
<tui-avatar src="assets/images/poorly.png" />
<tui-avatar>+2</tui-avatar>
</tui-avatar-stack>
<div tuiTitle> Waterplea <div tuiSubtitle>
<tui-badge appearance="neutral" size="s" >
<tui-icon icon="@tui.lock" /> 100 ₽ </tui-badge> Music <tui-icon appearance="positive" icon="@tui.bell" size="s" tuiBadge />
</div>
</div>
<a href="https://waterplea.bandcamp.com" tuiLink > Buy </a>
</div>
<div tuiCell>
<input tuiCheckbox type="checkbox" [(ngModel)]="value" />
<tui-thumbnail-card paymentSystem="mastercard" size="s" > 1234 </tui-thumbnail-card>
<div tuiTitle> Primary Card <div tuiSubtitle>**** **** **** 1234</div>
</div>
</div>
<div tuiCell>
<img alt="Poster" src="https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY209_CR0,0,140,209_AL_.jpg" [style.border-radius.rem]="0.5" [style.width.rem]="3" />
<div tuiTitle>
<div tuiSubtitle>Ridley Scott, 1982</div> Blade Runner <div tuiSubtitle> A blade runner must pursue and terminate four replicants who stole a ship in space and have returned to Earth to find their creator. </div>
</div>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiThumbnailCard} from '@taiga-ui/addon-commerce';
import {TuiIcon, TuiLink, TuiTitle} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiAvatarStack,
    TuiBadge,
    TuiCheckbox,
    TuiProgress,
} from '@taiga-ui/kit';
import {TuiCell} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiAvatar,
        TuiAvatarStack,
        TuiBadge,
        TuiCell,
        TuiCheckbox,
        TuiIcon,
        TuiLink,
        TuiProgress,
        TuiThumbnailCard,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = false;
}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

[tuiCell] {
    max-inline-size: 25rem;
}
```

#### Right side

**Template:**
```html
<a href="https://github.com/taiga-family/taiga-ui" tuiCell >
<div tuiTitle>Notifications</div>
<tui-badge-notification size="l">3</tui-badge-notification>
<tui-icon tuiTooltip="A cell can be a link" (click.prevent)="(0)" />
<div tuiSubtitle> Read <tui-icon icon="@tui.chevron-right" />
</div>
</a>
<label tuiCell>
<div tuiTitle> A label <div tuiSubtitle>Clicking it will toggle checkbox</div>
</div>
<tui-loader />
<input tuiCheckbox type="checkbox" [(ngModel)]="value" />
</label>
<button tuiCell type="button" >
<div tuiTitle>
<div tuiSubtitle>
<span [style.color]="'var(--tui-text-positive)'">For sale</span> • <span>ebay</span>
</div> It can be a button <div tuiSubtitle>In stock</div>
</div>
<div tuiTitle>
<div tuiSubtitle>&nbsp;</div> $237 <div tuiSubtitle>321 items</div>
</div>
</button>
<div tuiCell>
<tui-avatar src="assets/images/avatar.jpg" />
<div tuiTitle>Salary</div>
<div tuiTitle>
<span [style.color]="'var(--tui-text-positive)'" [tuiSensitive]="true" > Enough </span>
<div tuiSubtitle>Sky's the limit</div>
</div>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiLoader, TuiTitle} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiBadgeNotification,
    TuiCheckbox,
    TuiSensitive,
    TuiTooltip,
} from '@taiga-ui/kit';
import {TuiCell} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiAvatar,
        TuiBadgeNotification,
        TuiCell,
        TuiCheckbox,
        TuiIcon,
        TuiLoader,
        TuiSensitive,
        TuiTitle,
        TuiTooltip,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = false;
}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

[tuiCell] {
    max-inline-size: 25rem;
}
```

#### Long content

**Template:**
```html
<div tuiCell>
<tui-avatar src="@tui.eye" tuiAccessories />
<div tuiTitle> Long title in a cell will wrap to multiple lines and so will the subtitle <div tuiSubtitle [style.display]="'block'" > Use <strong>tuiAccessories</strong> to keep your side content properly aligned if you have many lines of text </div>
</div>
<div tuiAccessories>
<tui-icon icon="@tui.check" [style.color]="'var(--tui-text-positive)'" />
</div>
</div>
<div tuiCell [style.white-space]="'nowrap'" >
<div tuiFade tuiTitle > Alternatively you can use fade to hide extra text using nowrap CSS <div tuiSubtitle>Works the same for subtitle when fade directive is applied to the top</div>
</div>
<tui-badge>Works with the right side</tui-badge>
</div>
<div tuiCell [style.white-space]="'nowrap'" >
<tui-avatar src="@tui.smile" [round]="false" />
<div tuiFade tuiTitle > Works with fade on both sides <div tuiSubtitle>You can control proportions</div>
</div>
<div tuiFade tuiTitle > Proportions are controlled with flex <div tuiSubtitle>Flex shrink is set to 70-30 by default</div>
</div>
<tui-badge-notification size="xs" />
</div>
<div tuiCell>
<tui-avatar src="assets/images/avatar.jpg" tuiAccessories />
<div tuiAccessories tuiTitle > Alexander <div tuiSubtitle>Taiga UI developer</div>
</div>
<div tuiTitle>
<span [style.color]="'var(--tui-text-positive)'">+$1000</span>
<div tuiSubtitle>Bonus for tuiCell component</div>
<tui-badge appearance="primary">Awesome!</tui-badge>
</div>
</div>
<div tuiCell>
<tui-avatar src="@tui.home" tuiAccessories />
<div tuiTitle>
<strong>Main account</strong>
<div tuiSubtitle>USD</div>
<tui-badge appearance="neutral">By default unless arrested</tui-badge>
</div>
<div tuiAccessories tuiTitle [style.white-space]="'nowrap'" [style.width]="0" > $123 456 <div tuiSubtitle>Careful, content may overlap</div>
</div>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiBadge, TuiBadgeNotification, TuiFade} from '@taiga-ui/kit';
import {TuiCell} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiAvatar,
        TuiBadge,
        TuiBadgeNotification,
        TuiCell,
        TuiFade,
        TuiIcon,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

[tuiCell] {
    max-inline-size: 25rem;
}
```

#### Actions

**Template:**
```html
<div tuiCell>
<div tuiTitle> Single action <div tuiSubtitle>Description of the action</div>
</div>
<button tuiButton type="button" > Action </button>
</div>
<div tuiCell>
<div tuiTitle> Multiple actions <div tuiSubtitle>With no content on the right</div>
</div>
<button appearance="icon" iconStart="@tui.ellipsis" tuiDropdownAlign="right" tuiDropdownOpen tuiIconButton type="button" [tuiDropdown]="dropdown" > Action </button>
<ng-template #dropdown let-close >
<tui-data-list-wrapper [items]="items" (itemClick)="close()" />
</ng-template>
</div>
<button tuiCell type="button" >
<div tuiTitle> Multiple actions <div tuiSubtitle>When there's content on the right</div>
</div>
<div tuiCellActions tuiGroup tuiTheme="dark" [collapsed]="true" >
<button *ngFor="let item of items" appearance="primary-grayscale" tuiIconButton type="button" [iconStart]="item.icon" > {{ item }} </button>
</div>
<div tuiTitle> Hover over <div tuiSubtitle>Put it before the right side</div>
</div>
</button>
```

**TypeScript:**
```ts
import {NgFor} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiDropdown, TuiGroup, TuiTitle} from '@taiga-ui/core';
import {TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiCell} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        NgFor,
        TuiButton,
        TuiCell,
        TuiDataListWrapper,
        TuiDropdown,
        TuiGroup,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = [
        {
            icon: '@tui.phone',
            toString: () => 'Call now',
        },
        {
            icon: '@tui.star',
            toString: () => 'Add to favorites',
        },
        {
            icon: '@tui.trash',
            toString: () => 'Remove item',
        },
    ];
}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

[tuiCell] {
    max-inline-size: 25rem;
}
```

#### Combinations

**Template:**
```html
<tui-notification> Don't forget import <code>TuiCardLarge</code>
</tui-notification>
<div tuiCardLarge tuiSurface="floating" >
<h3 tuiTitle="m">Inside a block</h3>
<button *ngFor="let item of items" tuiCell type="button" >
<tui-avatar appearance="accent" [src]="item.icon" />
<span tuiTitle> {{ item.title }} <span tuiSubtitle>{{ item.subtitle }}</span>
</span>
</button>
</div>
<label tuiLabel> Inside a dropdown <tui-textfield tuiChevron [content]="content" [tuiTextfieldCleaner]="false" >
<input tuiSelect [(ngModel)]="value" />
<tui-data-list-wrapper *tuiTextfieldDropdown new [itemContent]="content" [items]="items" />
<ng-template #content let-item >
<span tuiCell>
<tui-avatar appearance="primary" [src]="item.icon" />
<span tuiTitle> {{ item.title }} <span tuiSubtitle>{{ item.subtitle }}</span>
</span>
</span>
</ng-template>
</tui-textfield>
</label>
<label tuiLabel> Inverted title and subtitle <tui-textfield tuiChevron [content]="title" [tuiTextfieldCleaner]="false" >
<input tuiSelect [(ngModel)]="value" />
<tui-data-list-wrapper *tuiTextfieldDropdown new [itemContent]="title" [items]="items" />
<ng-template #title let-item >
<span tuiCell>
<tui-avatar appearance="primary" [src]="item.icon" />
<span tuiTitle>
<span tuiSubtitle>{{ item.subtitle }}</span> {{ item.title }} </span>
</span>
</ng-template>
</tui-textfield>
</label>
```

**TypeScript:**
```ts
import {NgFor} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiNotification, TuiSurface, TuiTextfield, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiChevron, TuiDataListWrapper, TuiSelect} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCell} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgFor,
        TuiAvatar,
        TuiCardLarge,
        TuiCell,
        TuiChevron,
        TuiDataListWrapper,
        TuiNotification,
        TuiSelect,
        TuiSurface,
        TuiTextfield,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = [
        {
            icon: '@tui.eye',
            title: 'Show more',
            subtitle: 'Ctrl + Shift + M',
        },
        {
            icon: '@tui.mail',
            title: 'Send message',
            subtitle: 'Keep it short',
        },
        {
            icon: '@tui.lock',
            title: 'Access',
            subtitle: 'Block your account',
        },
    ];

    protected value = this.items[0]!;
}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    max-inline-size: 20rem;
    gap: 1rem;
}
```

#### Connected

**Template:**
```html
<tui-notification> Can be attached as host directive: <code>hostDirectives: [TuiConnected]</code>
</tui-notification>
<div tuiCardLarge tuiConnected tuiSurface="floating" >
<h3 tuiTitle="m">Inside a block</h3>
<button *ngFor="let item of items" tuiCell type="button" >
<tui-avatar appearance="accent" [src]="item.icon" />
<span tuiTitle> {{ item.title }} <span tuiSubtitle>{{ item.subtitle }}</span>
</span>
</button>
</div>
<div tuiConnected>
<label tuiCell>
<tui-badged-content>
<tui-icon appearance="negative" icon="@tui.arrow-down-left" size="s" tuiBadge tuiSlot="top" />
<tui-avatar src="@tui.phone" />
</tui-badged-content>
<div tuiTitle [style.color]="'var(--tui-text-negative)'" > Allow incoming <div tuiSubtitle>Why would you?</div>
</div>
<input tuiSwitch type="checkbox" [(ngModel)]="incoming" />
</label>
<label tuiCell>
<tui-badged-content tuiAccessories>
<tui-icon appearance="positive" icon="@tui.arrow-up-right" size="s" tuiBadge tuiSlot="top" />
<tui-avatar src="@tui.phone" />
</tui-badged-content>
<div tuiTitle>Allow outgoing unusual call that can change your life in an unusual way</div>
<div tuiAccessories>
<input tuiSwitch type="checkbox" [(ngModel)]="outgoing" />
</div>
</label>
<label tuiCell>
<tui-badged-content>
<tui-icon appearance="negative" icon="@tui.arrow-down-left" size="s" tuiBadge tuiSlot="top" />
<tui-avatar src="@tui.phone" />
</tui-badged-content>
<div tuiTitle [style.color]="'var(--tui-text-negative)'" > Allow incoming <div tuiSubtitle>Why would you?</div>
</div>
<input tuiSwitch type="checkbox" [(ngModel)]="incoming" />
</label>
</div>
```

**TypeScript:**
```ts
import {NgFor} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiNotification, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiBadge,
    TuiBadgedContent,
    TuiConnected,
    TuiDataListWrapper,
    TuiSwitch,
} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCell} from '@taiga-ui/layout';
import {TuiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgFor,
        TuiAvatar,
        TuiBadge,
        TuiBadgedContent,
        TuiCardLarge,
        TuiCell,
        TuiConnected,
        TuiDataListWrapper,
        TuiIcon,
        TuiNotification,
        TuiSelectModule,
        TuiSurface,
        TuiSwitch,
        TuiTextfieldControllerModule,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = [
        {
            icon: '@tui.eye',
            title: 'Show more',
            subtitle: 'Ctrl + Shift + M',
        },
        {
            icon: '@tui.mail',
            title: 'Send message',
            subtitle:
                'Allow outgoing unusual call that can change your life in an unusual way',
        },
        {
            icon: '@tui.lock',
            title: 'Access',
            subtitle: 'Block your account',
        },
    ];

    protected value = this.items[0]!;

    protected incoming = false;
    protected outgoing = true;
}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    max-inline-size: 20rem;
    gap: 1rem;
}
```

#### Disabled state

**Template:**
```html
<button disabled tuiCell type="button" >
<div tuiTitle>Disabled cell</div>
<tui-badge-notification size="l">1</tui-badge-notification>
<tui-icon tuiTooltip="A cell can be a button" (click.prevent)="(0)" />
<div tuiSubtitle>Hint enabled</div>
</button>
<label tuiAppearance tuiAppearanceState="disabled" tuiCell >
<div tuiTitle> A disabled label <div tuiSubtitle>Clicking it will not toggle checkbox</div>
</div>
<tui-loader />
<input disabled tuiCheckbox type="checkbox" [(ngModel)]="value" />
<tui-icon tuiTooltip="Hint enabled" />
</label>
<tui-loader class="cell">
<button tuiCell type="button" >
<div tuiTitle>Disabled cell</div>
<div tuiCellActions tuiTheme="dark" >
<button appearance="primary-grayscale" iconStart="@tui.phone" tuiIconButton type="button" > Call me </button>
</div>
<div tuiTitle> Hover over <div tuiSubtitle>Put it before the right side</div>
</div>
</button>
</tui-loader>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAppearance, TuiButton, TuiIcon, TuiLoader, TuiTitle} from '@taiga-ui/core';
import {TuiBadgeNotification, TuiCheckbox, TuiTooltip} from '@taiga-ui/kit';
import {TuiCell} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiAppearance,
        TuiBadgeNotification,
        TuiButton,
        TuiCell,
        TuiCheckbox,
        TuiIcon,
        TuiLoader,
        TuiTitle,
        TuiTooltip,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = false;
}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.cell,
[tuiCell] {
    inline-size: 100%;
    max-inline-size: 25rem;
    box-sizing: border-box;
}
```

#### Stretch

**Template:**
```html
<button tuiButton type="button" (click)="open = true" > Open Sheet Dialog </button>
<ng-template let-observer [tuiSheetDialogOptions]="options" [(tuiSheetDialog)]="open" >
<nav>
<button tuiCell="l" tuiCellStretch type="button" >
<div tuiTitle> Home <div tuiSubtitle>Main page</div>
</div>
</button>
<button tuiCell="l" tuiCellStretch type="button" >
<div tuiTitle> Profile <div tuiSubtitle>Account settings</div>
</div>
</button>
<button tuiCell="l" tuiCellStretch type="button" >
<div tuiTitle> Favorites <div tuiSubtitle>Saved items</div>
</div>
<tui-badge-notification>3</tui-badge-notification>
</button>
<button tuiCell="l" tuiCellStretch type="button" >
<div tuiTitle> Premium <div tuiSubtitle>Upgrade your plan</div>
</div>
</button>
</nav>
<footer>
<button size="m" tuiButton type="button" (click)="observer.complete()" > Close </button>
</footer>
</ng-template>
<div tuiCardLarge tuiSurface="floating" >
<h3 tuiTitle="m">Inside a card</h3>
<button *ngFor="let item of items" tuiCell tuiCellStretch type="button" >
<tui-avatar appearance="accent" [src]="item.icon" />
<span tuiTitle> {{ item.title }} <span tuiSubtitle>{{ item.subtitle }}</span>
</span>
</button>
</div>
```

**TypeScript:**
```ts
import {NgFor} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSheetDialog, type TuiSheetDialogOptions} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiBadgeNotification} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCell, TuiCellStretch} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        NgFor,
        TuiAvatar,
        TuiBadgeNotification,
        TuiButton,
        TuiCardLarge,
        TuiCell,
        TuiCellStretch,
        TuiSheetDialog,
        TuiSurface,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;

    protected readonly options: Partial<TuiSheetDialogOptions> = {
        label: 'Navigation',
        closeable: true,
    };

    protected readonly items = [
        {
            icon: '@tui.eye',
            title: 'Show more',
            subtitle: 'Ctrl + Shift + M',
        },
        {
            icon: '@tui.mail',
            title: 'Send message',
            subtitle: 'Keep it short',
        },
        {
            icon: '@tui.lock',
            title: 'Access',
            subtitle: 'Block your account',
        },
    ];
}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    max-inline-size: 20rem;
    gap: 1rem;
}
```
