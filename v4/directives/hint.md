# Hint

- **Package**: `CORE`
- **Type**: directives

Directive to show a hint by hover of an element

### How to Use (Import)

```ts
import {TuiHint} from '@taiga-ui/core';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiHint,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<button
  tuiButton
  type="button"
  tuiHint="Custom host with text tooltip"
>
  Press me
</button>
<button
  tuiButton
  type="button"
  [tuiHint]="template"
>
  Press him ↑
</button>

<ng-template #template>Reusable template</ng-template>
```

### Example

```html
<ng-template #hint> To be accessible, hint should be set to a focusable element. See <a tuiLink [routerLink]="routes.HintDescribe" >
<code>HintDescribe</code>
</a>
</ng-template>
<span [tuiHint]="hint" [tuiHintAppearance]="appearance" [tuiHintDescribe]="'qwerty'" [tuiHintDirection]="direction" [tuiHintHideDelay]="hideDelay" [tuiHintShowDelay]="showDelay" > Hover it! </span>
<input id="qwerty" />
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| tuiHint | `PolymorpheusContent` | Content |
| tuiHintShowDelay | `number` | Show Delay |
| tuiHintHideDelay | `number` | Hide Delay |

### Usage Examples

#### Basic

**Template:**
```html
<tui-avatar size="l" tuiHintAppearance="dark" tuiHintDirection="right" [style.background]="'❤️' | tuiAutoColor" [tuiHint]="tooltip" > ❤️ </tui-avatar>
<ng-template #tooltip>
<div> What is <strong>love</strong> ? </div>
<div>Baby don't hurt me</div>
<div>Don't hurt me</div>
<div>Counter: {{ counter() }}</div>
<div>No more...</div>
<button size="xs" tuiButton type="button" (click)="onClick()" > Counter + 1 </button>
</ng-template>
```

**TypeScript:**
```ts
import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAutoColorPipe, TuiButton, TuiHint} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiAutoColorPipe, TuiAvatar, TuiButton, TuiHint],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly counter = signal(1);

    protected onClick(): void {
        this.counter.update((n) => n + 1);
    }
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

:host {
    display: block;
    background: #3e4757;
    box-shadow: 0 0 0 100rem #3e4757;
}
```

#### Customizing

**Template:**
```html
<tui-avatar size="l" tuiHint tuiHintDirection="right" [style.background]="'❤️' | tuiAutoColor" > ❤️ <tui-hint *tuiHint class="hint" [@.disabled]="true" > You can expose the bubble component with <code>*tuiHint</code> directive to customize it </tui-hint>
</tui-avatar>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAutoColorPipe, TuiHint} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiAutoColorPipe, TuiAvatar, TuiHint],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
.hint {
    color: #fff;
    background: linear-gradient(43deg, #4158d0 0%, #c850c0 46%, #ffcc70 100%);
    font-weight: bold;

    &::before {
        display: none;
    }
}
```

#### Nested

**Template:**
```html
<tui-badge appearance="accent" size="l" class="badge tui-space_left-2" [tuiHint]="badgeHint" > Hover me <ng-template #badgeHint>
<a tuiHintAppearance="dark" [tuiHint]="linkHint" > Hover me again <ng-template #linkHint>Nested hint</ng-template>
</a>
</ng-template>
</tui-badge>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHint} from '@taiga-ui/core';
import {TuiBadge} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiBadge, TuiHint],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### Auto

**Template:**
```html
<div tuiHintOverflow>Resize so text overflows</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHint} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiHint],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

div {
    .text-overflow();

    resize: horizontal;
}
```

#### Form

**Template:**
```html
<form [formGroup]="form">
<tui-textfield tuiChevron tuiTextfieldSize="m" [content]="stringify | tuiStringifyContent" >
<label tuiLabel>Term</label>
<input formControlName="period" tuiSelect />
<tui-data-list-wrapper *tuiTextfieldDropdown new [itemContent]="stringify | tuiStringifyContent" [items]="items | tuiFilterByInput" />
<tui-icon tuiHintDirection="top-left" [tuiTooltip]="periodHint" />
</tui-textfield>
<ng-template #periodHint> You will pay in equal installments on a monthly basis You will pay in equal installments on a monthly basis </ng-template>
</form>
<button tuiHintAppearance="dark" tuiHintDirection="top-left" tuiLink type="button" class="tui-space_top-4" [pseudo]="true" [tuiHint]="howToBuyTooltip" > How to buy <ng-template #howToBuyTooltip>
<ol class="tui-list tui-list_ordered tui-list_small">
<li class="tui-list__item">Choose an installment plan</li>
<li class="tui-list__item">Fill in the application</li>
<li class="tui-list__item"> When the bank approves, sign the contract via SMS or get it delivered to sign </li>
</ol>
</ng-template>
</button>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHint, TuiIcon, TuiLink, TuiTextfield} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiDataListWrapper,
    TuiFilterByInputPipe,
    TuiSelect,
    TuiStringifyContentPipe,
    TuiTooltip,
} from '@taiga-ui/kit';
import {TuiTextfieldControllerModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiChevron,
        TuiDataListWrapper,
        TuiFilterByInputPipe,
        TuiHint,
        TuiIcon,
        TuiLink,
        TuiSelect,
        TuiStringifyContentPipe,
        TuiTextfield,
        TuiTextfieldControllerModule,
        TuiTooltip,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = [
        {name: 'John', surname: 'Cleese'},
        {name: 'Eric', surname: 'Idle'},
        {name: 'Graham', surname: 'Chapman'},
        {name: 'Michael', surname: 'Palin'},
        {name: 'Terry', surname: 'Gilliam'},
        {name: 'Terry', surname: 'Jones'},
    ];

    protected readonly form = new FormGroup({
        period: new FormControl(),
    });

    protected readonly stringify = (item: {name: string; surname: string}): string =>
        `${item.name} ${item.surname}`;
}
```
