# Cell

- **Package**: `CORE`
- **Type**: components

Open this example on the phone with OS font size increased by 150% to see cell rearrange for
better readability.

### Example

```html
<div [tuiCell]="size" [tuiCellHeight]="height" > @if (height !== 'compact') { <div appearance="primary" tuiAvatar="@tui.star" ></div> } <div tuiTitle> Title @if (height !== 'compact') { <div tuiSubtitle>Description</div> } </div>
<div tuiTitle> Secondary title @if (height !== 'compact') { <div tuiSubtitle>Another description</div> } </div>
</div>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [tuiCell] | `'l' | 'm' | 's'` | layout size |
| [tuiCellHeight] | `'normal' | 'compact' | 'spacious'` | height mode |

### Usage Examples

#### Basic

**Template:**
```html
@for (size of sizes; track size) { <div [tuiCell]="size">
<div appearance="primary" tuiAvatar="@tui.star" ></div>
<div tuiTitle> Title <div tuiSubtitle>Description</div>
</div>
<div tuiTitle> Secondary title <div tuiSubtitle>Another description</div>
</div>
</div> }
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCell, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';

@Component({
    imports: [TuiAvatar, TuiCell, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
<tui-icon appearance="negative" iconStart="@tui.arrow-down-left" size="s" tuiBadge tuiSlot="top" />
<div size="s" tuiAvatar="@tui.phone" ></div>
</tui-badged-content>
<div tuiTitle [style.color]="'var(--tui-text-negative)'" > Allow incoming <div tuiSubtitle>Why would you?</div>
</div>
<input tuiSwitch type="checkbox" [(ngModel)]="incoming" />
</label>
<label tuiCell>
<tui-badged-content>
<tui-icon appearance="positive" iconStart="@tui.arrow-up-right" size="s" tuiBadge tuiSlot="top" />
<div size="s" tuiAvatar="@tui.phone" ></div>
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
import {TuiCell, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiBadge, TuiBadgedContent, TuiSwitch} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiAvatar,
        TuiBadge,
        TuiBadgedContent,
        TuiCell,
        TuiSwitch,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
<div appearance="positive" size="s" tuiBadge > +$30 </div>
<div tuiSubtitle>&nbsp;</div>
</div>
</div>
<div tuiCell>
<tui-avatar-stack>
<div tuiAvatar="@tui.user">
<img alt="" src="assets/images/avatar.jpg" />
</div>
<div tuiAvatar="@tui.user">
<img alt="" src="assets/images/poorly.png" />
</div>
<div tuiAvatar>+2</div>
</tui-avatar-stack>
<div tuiTitle> Waterplea <div tuiSubtitle>
<div appearance="neutral" size="s" tuiBadge >
<tui-icon icon="@tui.lock" /> 100 ₽ </div> Music <tui-icon appearance="positive" iconStart="@tui.bell" size="s" tuiBadge />
</div>
</div>
<a href="https://waterplea.bandcamp.com" tuiLink > Buy </a>
</div>
<div tuiCell>
<input tuiCheckbox type="checkbox" [(ngModel)]="value" />
<span paymentSystem="mastercard" size="s" tuiThumbnailCard > 1234 </span>
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
import {TuiCell, TuiCheckbox, TuiIcon, TuiLink, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiAvatarStack, TuiBadge, TuiProgress} from '@taiga-ui/kit';

@Component({
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
    styleUrl: './index.less',
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
<div tuiAvatar="@tui.user">
<img alt="" src="assets/images/avatar.jpg" />
</div>
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
import {TuiCell, TuiCheckbox, TuiIcon, TuiLoader, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiBadgeNotification, TuiSensitive, TuiTooltip} from '@taiga-ui/kit';

@Component({
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
    styleUrl: './index.less',
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
<div tuiAccessories tuiAvatar="@tui.eye" ></div>
<div tuiTitle> Long title in a cell will wrap to multiple lines and so will the subtitle <div tuiSubtitle [style.display]="'block'" > Use <strong>tuiAccessories</strong> to keep your side content properly aligned if you have many lines of text </div>
</div>
<div tuiAccessories>
<tui-icon icon="@tui.check" [style.color]="'var(--tui-text-positive)'" />
</div>
</div>
<div tuiCell [style.white-space]="'nowrap'" >
<div tuiFade tuiTitle > Alternatively you can use fade to hide extra text using nowrap CSS <div tuiSubtitle>Works the same for subtitle when fade directive is applied to the top</div>
</div>
<div tuiBadge>Works with the right side</div>
</div>
<div tuiCell [style.white-space]="'nowrap'" >
<div tuiAvatar="@tui.smile" [round]="false" ></div>
<div tuiTitle>
<div tuiTitle>
<span tuiFade>Works with fade on both sides</span>
<span tuiFade>Proportions are controlled with flex</span>
</div>
<div tuiSubtitle>
<span tuiFade>You can control proportions</span>
<span tuiFade>Flex is set to 70-30 by default</span>
</div>
</div>
<tui-badge-notification size="xs" />
</div>
<div tuiCell>
<div tuiAccessories tuiAvatar="@tui.user" >
<img alt="" src="assets/images/avatar.jpg" />
</div>
<div tuiAccessories tuiTitle > Alexander <div tuiSubtitle>Taiga UI developer</div>
</div>
<div tuiTitle>
<span [style.color]="'var(--tui-text-positive)'">+$1000</span>
<div tuiSubtitle>Bonus for tuiCell component</div>
<div appearance="primary" tuiBadge > Awesome! </div>
</div>
</div>
<div tuiCell>
<div tuiAccessories tuiAvatar="@tui.home" ></div>
<div tuiTitle>
<div tuiTitle>
<b tuiFade>Main account balance</b>
<span tuiFade>$123 456</span>
</div>
<div tuiSubtitle>
<span tuiFade>USD</span>
<span tuiFade>This subtitle has a lot of words in it</span>
</div>
<div appearance="neutral" tuiBadge > By default unless arrested </div>
</div>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCell, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiBadge, TuiBadgeNotification, TuiFade} from '@taiga-ui/kit';

@Component({
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
    styleUrl: './index.less',
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
<button appearance="icon" iconStart="@tui.ellipsis" tuiDropdownAlign="end" tuiDropdownAuto tuiIconButton type="button" [tuiDropdown]="dropdown" > Action </button>
<ng-template #dropdown let-close >
<tui-data-list-wrapper [items]="items" (itemClick)="close()" />
</ng-template>
</div>
<div tuiCell type="button" >
<div tuiTitle> Multiple actions <div tuiSubtitle>With content on the right</div>
</div>
<div tuiCellActions tuiGroup tuiTheme="dark" [collapsed]="true" > @for (item of items; track item) { <button appearance="primary-grayscale" tuiIconButton type="button" [iconStart]="item.icon" > {{ item }} </button> } </div>
<div tuiTitle> Hover over <div tuiSubtitle>Put it before the right side</div>
</div>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiCell, TuiDropdown, TuiGroup, TuiTitle} from '@taiga-ui/core';
import {TuiDataListWrapper} from '@taiga-ui/kit';

@Component({
    imports: [TuiButton, TuiCell, TuiDataListWrapper, TuiDropdown, TuiGroup, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
<div appearance="floating" tuiCardLarge >
<h3 tuiTitle="m">Inside a block</h3> @for (item of items; track item) { <button tuiCell type="button" >
<div appearance="accent" [tuiAvatar]="item.icon" ></div>
<span tuiTitle> {{ item.title }} <span tuiSubtitle>{{ item.subtitle }}</span>
</span>
</button> } </div>
<div tuiNotification>
<code>Cell</code> is used inside <code>DataList</code> options and <code>Textfield</code> template by default. </div>
<label tuiLabel> Inside a textfield <tui-textfield tuiChevron [content]="content" [tuiTextfieldCleaner]="false" >
<input tuiSelect [(ngModel)]="value" />
<tui-data-list-wrapper *tuiDropdown [itemContent]="content" [items]="items" />
<ng-template #content let-item >
<div appearance="primary" [tuiAvatar]="item.icon" ></div>
<span tuiTitle> {{ item.title }} <span tuiSubtitle>{{ item.subtitle }}</span>
</span>
</ng-template>
</tui-textfield>
</label>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCell, TuiNotification, TuiTextfield, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiChevron, TuiDataListWrapper, TuiSelect} from '@taiga-ui/kit';
import {TuiCardLarge} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
        TuiAvatar,
        TuiCardLarge,
        TuiCell,
        TuiChevron,
        TuiDataListWrapper,
        TuiNotification,
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
<div tuiNotification> Can be attached as host directive: <code>hostDirectives: [TuiConnected]</code>
</div>
<div appearance="floating" tuiCardLarge tuiConnected >
<h3 tuiTitle="m">Inside a block</h3> @for (item of items; track item) { <button tuiCell type="button" >
<div appearance="accent" [tuiAvatar]="item.icon" ></div>
<span tuiTitle> {{ item.title }} <span tuiSubtitle>{{ item.subtitle }}</span>
</span>
</button> } </div>
<div tuiConnected>
<label tuiCell>
<tui-badged-content>
<tui-icon appearance="negative" iconStart="@tui.arrow-down-left" size="s" tuiBadge tuiSlot="top" />
<div tuiAvatar="@tui.phone"></div>
</tui-badged-content>
<div tuiTitle [style.color]="'var(--tui-text-negative)'" > Allow incoming <div tuiSubtitle>Why would you?</div>
</div>
<input tuiSwitch type="checkbox" [(ngModel)]="incoming" />
</label>
<label tuiCell>
<tui-badged-content tuiAccessories>
<tui-icon appearance="positive" iconStart="@tui.arrow-up-right" size="s" tuiBadge tuiSlot="top" />
<div tuiAvatar="@tui.phone"></div>
</tui-badged-content>
<div tuiTitle>Allow outgoing unusual call that can change your life in an unusual way</div>
<div tuiAccessories>
<input tuiSwitch type="checkbox" [(ngModel)]="outgoing" />
</div>
</label>
<label tuiCell>
<tui-badged-content>
<tui-icon appearance="negative" iconStart="@tui.arrow-down-left" size="s" tuiBadge tuiSlot="top" />
<div tuiAvatar="@tui.phone"></div>
</tui-badged-content>
<div tuiTitle [style.color]="'var(--tui-text-negative)'" > Allow incoming <div tuiSubtitle>Why would you?</div>
</div>
<input tuiSwitch type="checkbox" [(ngModel)]="incoming" />
</label>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCell, TuiNotification, TuiTitle} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiBadge,
    TuiBadgedContent,
    TuiConnected,
    TuiSwitch,
} from '@taiga-ui/kit';
import {TuiCardLarge} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
        TuiAvatar,
        TuiBadge,
        TuiBadgedContent,
        TuiCardLarge,
        TuiCell,
        TuiConnected,
        TuiNotification,
        TuiSwitch,
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
<label tuiAppearance tuiAppearanceState="disabled" tuiCell >
<div tuiTitle>Disabled cell</div>
<div tuiCellActions tuiTheme="dark" >
<button appearance="primary-grayscale" iconStart="@tui.phone" tuiIconButton type="button" > Call me </button>
</div>
<div tuiTitle> Hover over <div tuiSubtitle>Put it before the right side</div>
</div>
</label>
</tui-loader>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiAppearance,
    TuiButton,
    TuiCell,
    TuiCheckbox,
    TuiIcon,
    TuiLoader,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiBadgeNotification, TuiTooltip} from '@taiga-ui/kit';

@Component({
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
    styleUrl: './index.less',
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
<div appearance="primary" tuiAvatar="@tui.home" ></div>
<div tuiTitle> Home <div tuiSubtitle>Main page</div>
</div>
</button>
<button tuiCell="l" tuiCellStretch type="button" >
<div appearance="accent" tuiAvatar="@tui.user" ></div>
<div tuiTitle> Profile <div tuiSubtitle>Account settings</div>
</div>
</button>
<button tuiCell="l" tuiCellStretch type="button" >
<div appearance="positive" tuiAvatar="@tui.heart" ></div>
<div tuiTitle> Favorites <div tuiSubtitle>Saved items</div>
</div>
<tui-badge-notification>3</tui-badge-notification>
</button>
<button tuiCell="l" tuiCellStretch type="button" >
<div appearance="warning" tuiAvatar="@tui.star" ></div>
<div tuiTitle> Premium <div tuiSubtitle>Upgrade your plan</div>
</div>
</button>
</nav>
<footer>
<button size="m" tuiButton type="button" (click)="observer.complete()" > Close </button>
</footer>
</ng-template>
<div appearance="floating" tuiCardLarge >
<h3 tuiTitle="m">Inside a card</h3> @for (item of items; track item) { <button tuiCell tuiCellStretch type="button" >
<div appearance="accent" [tuiAvatar]="item.icon" ></div>
<span tuiTitle> {{ item.title }} <span tuiSubtitle>{{ item.subtitle }}</span>
</span>
</button> } </div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSheetDialog, type TuiSheetDialogOptions} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiCell, TuiCellStretch, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiBadgeNotification} from '@taiga-ui/kit';
import {TuiCardLarge} from '@taiga-ui/layout';

@Component({
    imports: [
        TuiAvatar,
        TuiBadgeNotification,
        TuiButton,
        TuiCardLarge,
        TuiCell,
        TuiCellStretch,
        TuiSheetDialog,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;

    protected readonly options: Partial<TuiSheetDialogOptions> = {
        label: 'Navigation',
        closable: true,
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

#### Responsive

Open this example on the phone with OS font size increased by 150% to see cell rearrange for better readability.

**Template:**
```html
<div tuiCell tuiCellResponsive >
<div tuiAvatar="@tui.star"></div>
<div tuiTitle>
<div tuiTitle>
<span tuiFade>Works with fade on both sides</span>
<span tuiFade>Proportions are controlled with flex</span>
</div>
<div tuiSubtitle>
<span tuiFade>You can control proportions</span>
<span tuiFade>Flex is set to 70-30 by default</span>
</div>
</div>
</div>
<div tuiCell tuiCellResponsive >
<div tuiAvatar="@tui.star"></div>
<div tuiTitle> Long title that's hard to read with long button <div tuiSubtitle>Button wraps to the next line</div>
</div>
<div tuiAccessories>
<button tuiButton type="button" > Long button </button>
</div>
</div>
<div tuiCell tuiCellResponsive >
<div tuiTitle> A cell without avatar <div tuiSubtitle>Button wraps to the next line</div>
</div>
<div tuiAccessories>
<button tuiButton type="button" > Long button </button>
</div>
</div>
<label tuiCell tuiCellResponsive >
<span tuiAvatar="@tui.star"></span>
<span tuiTitle> For small accessories <span tuiSubtitle>Use grid-row: 1</span>
</span>
<span tuiAccessories>
<input tuiSwitch type="checkbox" [(ngModel)]="value" />
</span>
</label>
```

**TypeScript:**
```ts
import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiCell, TuiCellResponsive, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiFade, TuiSwitch} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiAvatar,
        TuiButton,
        TuiCell,
        TuiCellResponsive,
        TuiFade,
        TuiSwitch,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly value = signal(false);
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

    &:last-child [tuiAccessories] {
        grid-row: 1;
    }
}
```
