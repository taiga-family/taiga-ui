# Chip

- **Package**: `KIT`
- **Type**: components

Chip component is used to display array data and can also be interactive depending on the tag used.

### How to Use (Import)

```ts
import {Component} from '@angular/core';
import {TuiChip} from '@taiga-ui/kit';
// ...

@Component({
  imports: [
    // ...
    TuiChip,
  ],
})
export class Example {}
```

### How to Use (Template)

```html
<tui-chip appearance="primary">{{ value }}</tui-chip>
```

### Example

```html
<tui-chip [appearance]="appearance.appearance" [iconEnd]="icons.iconEnd" [iconStart]="icons.iconStart" [size]="size" > Chip </tui-chip>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [size] | `TuiSizeXS | TuiSizeL` | Size of the chip |

### Usage Examples

#### Basic

**Template:**
```html
<tui-chip>Default appearance is Neutral</tui-chip>
<tui-chip appearance="primary">Primary</tui-chip>
<tui-chip appearance="accent">Accent</tui-chip>
<tui-chip appearance="positive">Positive</tui-chip>
<tui-chip appearance="negative">Negative</tui-chip>
<tui-chip appearance="warning">Warning</tui-chip>
<tui-chip appearance="info">Info</tui-chip>
<tui-chip appearance="outline">Outline</tui-chip>
<tui-chip appearance="floating">Floating</tui-chip>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiChip} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiChip],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
tui-chip {
    margin: 0.5rem;
}
```

#### Sizes and content

**Template:**
```html
<section>
<tui-chip *ngFor="let size of sizes" [size]="size" [style.border-radius.rem]="5" > Text </tui-chip>
</section>
<section>
<tui-chip *ngFor="let size of sizes" iconStart="@tui.bell" [size]="size" > Single icon </tui-chip>
</section>
<section>
<tui-chip *ngFor="let size of sizes" iconEnd="@tui.circle-help" iconStart="@tui.bell" [size]="size" [style.border-radius.rem]="5" > Duo icon </tui-chip>
</section>
<section>
<tui-chip *ngFor="let size of sizes" [size]="size" >
<img *ngIf="size === 'm' || size === 's'" alt="Avatar" src="assets/images/avatar.jpg" [style.border-radius.rem]="size === 'm' ? 0.25 : 0.5" /> Image </tui-chip>
</section>
<section>
<tui-chip *ngFor="let size of sizes" [size]="size" [style.border-radius.rem]="5" >
<tui-avatar *ngIf="size === 'm' || size === 's'" src="assets/images/avatar.jpg" /> Avatar </tui-chip>
</section>
<section>
<tui-chip size="m"> Button <button iconStart="@tui.x" size="s" tuiIconButton type="button" > Remove </button>
</tui-chip>
<tui-chip *ngFor="let size of sizes | slice: 1" [size]="size" > Button <button iconStart="@tui.x" tuiIconButton type="button" > Remove </button>
</tui-chip>
</section>
<section>
<tui-chip *ngFor="let size of sizes" [size]="size" > Badge <tui-badge *ngIf="size !== 'xxs'" appearance="primary" [size]="size === 'm' ? 'm' : 's'" > 1 </tui-badge>
<button iconStart="@tui.x" tuiIconButton type="button" > Remove </button>
</tui-chip>
</section>
```

**TypeScript:**
```ts
import {NgForOf, NgIf, SlicePipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiAvatar, TuiBadge, TuiChip} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [NgForOf, NgIf, SlicePipe, TuiAvatar, TuiBadge, TuiButton, TuiChip],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly sizes = ['m', 's', 'xs', 'xxs'] as const;
}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

section {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}
```

#### Interactive

**Template:**
```html
<h3>Checkbox</h3>
<section>
<label *tuiRepeatTimes="let i of checked.length" appearance="" tuiChip > Checkbox {{ i + 1 }} <input appearance="outline-grayscale" tuiChip type="checkbox" [(ngModel)]="checked[i]" />
</label>
</section>
<h3>Radio</h3>
<section>
<label *tuiRepeatTimes="let i of 3" appearance="" tuiChip > Radio {{ i + 1 }} <input appearance="outline-grayscale" name="radio" tuiChip type="radio" [value]="i" />
</label>
</section>
<h3>Label outline</h3>
<section>
<label *tuiRepeatTimes="let i of checked.length" appearance="outline-grayscale" tuiChip >
<input tuiCheckbox type="checkbox" [(ngModel)]="checked[i]" /> Label {{ i + 1 }} </label>
</section>
<h3>Label accent</h3>
<section>
<label *tuiRepeatTimes="let i of checked.length" tuiChip [appearance]="checked[i] ? 'accent' : 'neutral'" >
<input hidden type="checkbox" [(ngModel)]="checked[i]" /> Label {{ i + 1 }} </label>
</section>
<h3>Button</h3>
<section>
<button *tuiRepeatTimes="let i of 3" tuiChip type="button" (click)="onChip(i)" > Button {{ i + 1 }} </button>
</section>
<section>
<tui-chip *tuiRepeatTimes="let i of 3"> Close button {{ i + 1 }} <button iconStart="@tui.x" tuiIconButton type="button" (click.stop)="onX(i)" > Remove </button>
</tui-chip>
</section>
<h3>Input</h3>
<section>
<tui-chip *tuiRepeatTimes="let i of values.length" appearance="" [style.color]="'transparent'" > {{ values[i] }} <input tuiChip [(ngModel)]="values[i]" />
</tui-chip>
</section>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiAlertService, TuiButton} from '@taiga-ui/core';
import {TuiCheckbox, TuiChip} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiButton, TuiCheckbox, TuiChip, TuiRepeatTimes],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiAlertService);

    protected readonly checked = [true, false, true];
    protected readonly values = ['test', 'Some text', 'WOW!'];

    protected onChip(index: number): void {
        this.alerts.open(`Clicked chip ${index + 1}`).subscribe();
    }

    protected onX(index: number): void {
        this.alerts
            .open(`Removed chip ${index + 1}`, {appearance: 'negative'})
            .subscribe();
    }
}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

h3 {
    margin: 0;
}

section {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}
```

#### Use cases

**Template:**
```html
<tui-chip appearance="primary" class="fade" >
<div tuiFade>Very long value in chip</div>
<div>{{ 123000 | tuiAmount: 'RUB' | async }}</div>
</tui-chip>
<tui-chip appearance="accent" iconStart="@tui.box" >
<div class="ellipsis">Very long value in chip</div>
</tui-chip>
<tui-badged-content>
<tui-badge-notification size="xs" tuiSlot="top" />
<tui-chip appearance="secondary" iconStart="@tui.bell" > Notifications </tui-chip>
</tui-badged-content>
<tui-chip appearance="custom" iconEnd="@tui.thumbs-up" > Customized chip </tui-chip>
<tui-chip [appearance]="selected ? 'primary' : 'neutral'"> Toggle chip <button iconStart="@tui.plus" tuiIconButton type="button" class="toggle" [style.transform]="selected ? 'rotate(45deg)' : 'rotate(0)'" (click)="selected = !selected" > Toggle </button>
</tui-chip>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiButton} from '@taiga-ui/core';
import {TuiBadgedContent, TuiBadgeNotification, TuiChip, TuiFade} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        TuiAmountPipe,
        TuiBadgedContent,
        TuiBadgeNotification,
        TuiButton,
        TuiChip,
        TuiFade,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected selected = false;
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

:host {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
}

.fade {
    max-inline-size: 11rem;
}

.ellipsis {
    max-inline-size: 7rem;
    .text-overflow();
}

[data-appearance='custom'] {
    color: #fff;
    background-image: linear-gradient(43deg, #4158d0 0%, #c850c0 46%, #ffcc70 100%);
    font-weight: bold;
}

.toggle {
    .transition(transform);

    color: inherit !important;
}
```

#### Auto color

**Template:**
```html
<tui-chip *ngFor="let chip of chips" appearance="custom" [style.background-color]="chip | tuiAutoColor" > {{ chip }} </tui-chip>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAutoColorPipe} from '@taiga-ui/core';
import {TuiChip} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [NgForOf, TuiAutoColorPipe, TuiChip],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected chips = [
        'Free',
        'Base',
        'Pro',
        'Enterprise',
        'Premium',
        'Ultimate',
        'Starter',
        'Advanced',
        'Business',
        'Enterprise',
        'Personal',
        'Standard',
        'Essential',
        'Professional',
        'Deluxe',
        'Gold',
        'Silver',
        'Bronze',
        'Plus',
        'Basic',
    ];
}
```

**LESS:**
```less
tui-chip {
    margin: 0.5rem;
}
```

#### Fade in complex designs

**Template:**
```html
<tui-chip appearance="accent" iconStart="@tui.shopping-cart" >
<div tuiFade>Supermarkets</div>
<div tuiFade>{{ 9000 | tuiAmount: 'USD' | async }}</div>
</tui-chip>
<tui-chip appearance="accent">
<tui-avatar src="assets/images/avatar.jpg" />
<div tuiFade>AI</div>
<div tuiFade>{{ 9870043000 | tuiAmount: 'USD' | async }}</div>
</tui-chip>
<tui-chip appearance="accent" iconEnd="@tui.shower-head" >
<div tuiFade>Long category name</div>
</tui-chip>
<p>Use CSS to set a custom priority for the fade:</p>
<tui-chip appearance="primary" class="custom" >
<div tuiFade>Miscellaneous goods</div>
<div tuiFade>{{ 105000 | tuiAmount: 'USD' | async }}</div>
</tui-chip>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiAvatar, TuiChip, TuiFade} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [AsyncPipe, TuiAmountPipe, TuiAvatar, TuiChip, TuiFade],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
tui-chip {
    margin: 0.5rem;
    max-inline-size: 9rem;
}

.custom {
    [tuiFade] {
        flex: 1 1 auto;
    }
}
```

If there are two labels with
`tuiFade`
inside the chip, the right label takes precedence by default. This means that the left label goes into
fade. But if the width of the left label is less than 30% of the whole chip, then the right part of the
chip will be faded in
