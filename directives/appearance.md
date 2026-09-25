# Appearance

- **Package**: `CORE`
- **Type**: directives

A directive for visual presets of interactive components

### Example

```html
<button tuiButton type="button" [appearance]="appearance" [tuiAppearanceFocus]="focus" [tuiAppearanceState]="state" > Appearance </button>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [tuiAppearance] | `string` | when host component already exposes it via hostDirectives) |
| [tuiAppearanceFocus] | `boolean | null` | manual override of focused state |
| [tuiAppearanceState] | `TuiInteractiveState | null` | manual override of interactive state |

### Usage Examples

#### Basic

**Template:**
```html
<div tuiAppearance="secondary" type="button" > Non-interactive elements do not react to pointer </div>
<button tuiAppearance="secondary" type="button" > Hovered state is only triggered on devices with pointer </button>
<button tuiAppearance="secondary" tuiDropdown="Button looks hovered when dropdown is open" type="button" [tuiAppearanceState]="open ? 'hover' : null" [(tuiDropdownOpen)]="open" > Triggering state manually </button>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAppearance, TuiDropdown} from '@taiga-ui/core';

@Component({
    imports: [TuiAppearance, TuiDropdown],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;
}
```

**LESS:**
```less
:host {
    display: grid;
    grid-auto-rows: 3rem;
    gap: 1rem;
    text-align: center;
}

div {
    padding: 0.25rem 2rem;
}

button {
    border: none;
    inline-size: 100%;
    block-size: 100%;
}
```

#### Custom

**Template:**
```html
<button tuiAppearance="acid" type="button" > SCSS mixins have the same names </button>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAppearance} from '@taiga-ui/core';

@Component({
    imports: [TuiAppearance],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

button {
    border: none;
    padding: 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
}

[tuiAppearance][data-appearance='acid'] {
    color: var(--tui-chart-categorical-06);
    background: var(--tui-chart-categorical-09);

    --tui-border-focus: var(--tui-chart-categorical-06);

    .appearance-hover({
        color: var(--tui-chart-categorical-09);
        background: var(--tui-chart-categorical-14);
    });

    .appearance-active({
        color: var(--tui-chart-categorical-08);
        background: var(--tui-chart-categorical-10);
    });
}
```

#### Checkbox

**Template:**
```html
<input tuiAppearance="secondary" type="checkbox" class="like" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAppearance} from '@taiga-ui/core';

@Component({
    imports: [TuiAppearance],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

.like {
    inline-size: var(--tui-height-m);
    block-size: var(--tui-height-m);
    border-radius: 100%;
    cursor: pointer;

    &::before {
        .fullsize();

        content: '';
        background: currentColor;
        mask-image: url('/assets/taiga-ui/icons/heart.svg');
        mask-repeat: no-repeat;
        mask-position: center;
        mask-size: 3em 1.5em;
    }

    &:checked::before {
        color: var(--tui-text-negative);
        mask-image: url('/assets/taiga-ui/icons/heart-filled.svg');
        mask-repeat: no-repeat;
        mask-position: center;
    }
}
```

#### Bundled

**Template:**
```html
@for (group of appearances | keyvalue: asIs; track group) { <h3>{{ group.key }}</h3>
<section class="section"> @for (appearance of group.value; track appearance) { <button iconStart="@tui.star" tuiButton type="button" [appearance]="appearance" [cdkCopyToClipboard]="appearance" (cdkCopyToClipboardCopied)="$event && onCopy(appearance)" > {{ appearance }} </button> } </section> }
```

**TypeScript:**
```ts
import {ClipboardModule} from '@angular/cdk/clipboard';
import {KeyValuePipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiNotificationService} from '@taiga-ui/core';

@Component({
    imports: [ClipboardModule, KeyValuePipe, TuiButton],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiNotificationService);

    protected readonly appearances = {
        Primary: ['primary', 'primary-destructive', 'primary-grayscale'],
        Secondary: ['secondary', 'secondary-destructive', 'secondary-grayscale'],
        Flat: ['flat', 'flat-destructive', 'flat-grayscale'],
        Outline: ['outline', 'outline-destructive', 'outline-grayscale'],
        Action: ['action', 'action-destructive', 'action-grayscale'],
        Status: ['neutral', 'negative', 'positive', 'warning', 'info'],
        Others: ['icon', 'floating', 'textfield', 'accent'],
    };

    protected asIs(): number {
        return 0;
    }

    protected onCopy(name: string): void {
        this.alerts
            .open(`Appearance ${name} copied`, {appearance: 'positive'})
            .subscribe();
    }
}
```

**LESS:**
```less
.section {
    display: flex;
    gap: 1rem;
}
```
