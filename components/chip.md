# Chip

- **Package**: `KIT`
- **Type**: components

Chip component is used to display array data and can also be interactive depending on the tag used.

### Example

```html
<span tuiChip [appearance]="appearance.appearance" [iconEnd]="icons.iconEnd" [iconStart]="icons.iconStart" [size]="size" > Chip </span>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [size] | `TuiSizeXXS` | — |

### Usage Examples

#### Basic

**Template:**
```html
<span tuiChip>Default appearance is Neutral</span>
<span appearance="primary" tuiChip > Primary </span>
<span appearance="accent" tuiChip > Accent </span>
<span appearance="positive" tuiChip > Positive </span>
<span appearance="negative" tuiChip > Negative </span>
<span appearance="warning" tuiChip > Warning </span>
<span appearance="info" tuiChip > Info </span>
<span appearance="outline" tuiChip > Outline </span>
<span appearance="floating" tuiChip > Floating </span>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiChip} from '@taiga-ui/kit';

@Component({
    imports: [TuiChip],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
[tuiChip] {
    margin: 0.5rem;
}
```

#### Sizes and content

**Template:**
```html
<section> @for (size of sizes; track size) { <span tuiChip [size]="size" [style.border-radius.rem]="5" > Text </span> } </section>
<section> @for (size of sizes; track size) { <span iconStart="@tui.bell" tuiChip [size]="size" > Single icon </span> } </section>
<section> @for (size of sizes; track size) { <span iconEnd="@tui.circle-help" iconStart="@tui.bell" tuiChip [size]="size" [style.border-radius.rem]="5" > Duo icon </span> } </section>
<section> @for (size of sizes; track size) { <span tuiChip [size]="size" > @if (size === 'm' || size === 's') { <img alt="Avatar" src="assets/images/avatar.jpg" [style.border-radius.rem]="size === 'm' ? 0.25 : 0.5" /> } Image </span> } </section>
<section> @for (size of sizes; track size) { <span tuiChip [size]="size" [style.border-radius.rem]="5" > @if (size === 'm' || size === 's') { <div tuiAvatar="@tui.user" [round]="true" >
<img alt="" src="assets/images/avatar.jpg" />
</div> } Avatar </span> } </section>
<section>
<span size="m" tuiChip > Button <button iconStart="@tui.x" size="s" tuiIconButton type="button" > Remove </button>
</span> @for (size of sizes | slice: 1; track size) { <span tuiChip [size]="size" > Button <button iconStart="@tui.x" tuiIconButton type="button" > Remove </button>
</span> } </section>
<section> @for (size of sizes; track size) { <span tuiChip [size]="size" > Badge @if (size !== 'xxs') { <div appearance="primary" tuiBadge [size]="size === 'm' ? 'm' : 's'" > 1 </div> } <button iconStart="@tui.x" tuiIconButton type="button" > Remove </button>
</span> } </section>
```

**TypeScript:**
```ts
import {SlicePipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiAvatar, TuiBadge, TuiChip} from '@taiga-ui/kit';

@Component({
    imports: [SlicePipe, TuiAvatar, TuiBadge, TuiButton, TuiChip],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
<section> @for (_ of '-'.repeat(checked.length); track $index) { <label appearance="" tuiChip > Checkbox {{ $index + 1 }} <input appearance="outline-grayscale" tuiChip type="checkbox" [(ngModel)]="checked[$index]" />
</label> } </section>
<h3>Radio</h3>
<section> @for (_ of '-'.repeat(3); track $index) { <label appearance="" tuiChip > Radio {{ $index + 1 }} <input appearance="outline-grayscale" name="radio" tuiChip type="radio" [value]="$index" />
</label> } </section>
<h3>Label outline</h3>
<section> @for (_ of '-'.repeat(checked.length); track $index) { <label appearance="outline-grayscale" tuiChip >
<input tuiCheckbox type="checkbox" [(ngModel)]="checked[$index]" /> Label {{ $index + 1 }} </label> } </section>
<h3>Label accent</h3>
<section> @for (_ of '-'.repeat(checked.length); track $index) { <label tuiChip [appearance]="checked[$index] ? 'accent' : 'neutral'" >
<input hidden type="checkbox" [(ngModel)]="checked[$index]" /> Label {{ $index + 1 }} </label> } </section>
<h3>Button</h3>
<section> @for (_ of '-'.repeat(3); track $index) { <button tuiChip type="button" (click)="onChip($index)" > Button {{ $index + 1 }} </button> } </section>
<section> @for (_ of '-'.repeat(3); track $index) { <span tuiChip> Close button {{ $index + 1 }} <button iconStart="@tui.x" tuiIconButton type="button" (click.stop)="onX($index)" > Remove </button>
</span> } </section>
<h3>Input</h3>
<section> @for (_ of '-'.repeat(values.length); track $index) { <span appearance="" tuiChip [style.color]="'transparent'" > {{ values[$index] }} <input tuiChip [(ngModel)]="values[$index]" />
</span> } </section>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiCheckbox, TuiNotificationService} from '@taiga-ui/core';
import {TuiChip} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiButton, TuiCheckbox, TuiChip],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiNotificationService);

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
<span appearance="primary" tuiChip class="fade" >
<div tuiFade>Very long value in chip</div>
<div>{{ 123000 | tuiAmount: 'RUB' }}</div>
</span>
<span appearance="accent" iconStart="@tui.box" tuiChip >
<div class="ellipsis">Very long value in chip</div>
</span>
<tui-badged-content>
<tui-badge-notification size="xs" tuiSlot="top" />
<span appearance="secondary" iconStart="@tui.bell" tuiChip > Notifications </span>
</tui-badged-content>
<span appearance="custom" iconEnd="@tui.thumbs-up" tuiChip > Customized chip </span>
<span tuiChip [appearance]="selected ? 'primary' : 'neutral'" > Toggle chip <button iconStart="@tui.plus" tuiIconButton type="button" class="toggle" [style.transform]="selected ? 'rotate(45deg)' : 'rotate(0)'" (click)="selected = !selected" > Toggle </button>
</span>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiButton} from '@taiga-ui/core';
import {TuiBadgedContent, TuiBadgeNotification, TuiChip, TuiFade} from '@taiga-ui/kit';

@Component({
    imports: [
        TuiAmountPipe,
        TuiBadgedContent,
        TuiBadgeNotification,
        TuiButton,
        TuiChip,
        TuiFade,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected selected = false;
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

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
@for (chip of chips; track chip) { <span appearance="custom" tuiChip [style.background-color]="chip | tuiAutoColor" > {{ chip }} </span> }
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAutoColorPipe, TuiChip} from '@taiga-ui/kit';

@Component({
    imports: [TuiAutoColorPipe, TuiChip],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
[tuiChip] {
    margin: 0.5rem;
}
```

#### Fade in complex designs

**Template:**
```html
<span appearance="accent" iconStart="@tui.shopping-cart" tuiChip >
<div tuiFade>Supermarkets</div>
<div tuiFade>{{ 9000 | tuiAmount: 'USD' }}</div>
</span>
<span appearance="accent" tuiChip >
<span tuiAvatar="@tui.user">
<img alt="" src="assets/images/avatar.jpg" />
</span>
<div tuiFade>AI</div>
<div tuiFade>{{ 9870043000 | tuiAmount: 'USD' }}</div>
</span>
<span appearance="accent" iconEnd="@tui.shower-head" tuiChip >
<div tuiFade>Long category name</div>
</span>
<p>Use CSS to set a custom priority for the fade:</p>
<span appearance="primary" tuiChip class="custom" >
<div tuiFade>Miscellaneous goods</div>
<div tuiFade>{{ 105000 | tuiAmount: 'USD' }}</div>
</span>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiAvatar, TuiChip, TuiFade} from '@taiga-ui/kit';

@Component({
    imports: [TuiAmountPipe, TuiAvatar, TuiChip, TuiFade],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
[tuiChip] {
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
