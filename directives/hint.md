# Hint

- **Package**: `CORE`
- **Type**: directives

Directive to show a hint by hover of an element

### Example

```html
<ng-template #template> To be accessible, hint should be set to a focusable element. See <a appearance="" tuiLink [routerLink]="routes.HintDescribe" > HintDescribe </a>
</ng-template>
<span tuiBadge tuiHintDescribe="qwerty" [tuiHint]="template" [tuiHintAppearance]="hint.appearance" [tuiHintCentered]="hint.centered" [tuiHintDirection]="hint.direction" [tuiHintHideDelay]="hideDelay" [tuiHintShowDelay]="showDelay" > Hover me </span>
<input id="qwerty" placeholder="Focus me with keyboard" />
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [tuiHint] | `PolymorpheusContent` | content of the hint |
| [tuiHintContext] | `C` | context for the hint content |
| [tuiHintShowDelay] | `number` | show delay in milliseconds |
| [tuiHintHideDelay] | `number` | hide delay in milliseconds |

### Usage Examples

#### Basic

**Template:**
```html
<div size="l" tuiAvatar tuiHintAppearance="floating" tuiHintDirection="end" [style.background]="'❤️' | tuiAutoColor" [tuiHint]="tooltip" > ❤️ </div>
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
import {TuiButton, TuiHint} from '@taiga-ui/core';
import {TuiAutoColorPipe, TuiAvatar} from '@taiga-ui/kit';

@Component({
    imports: [TuiAutoColorPipe, TuiAvatar, TuiButton, TuiHint],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
@import '@taiga-ui/styles/utils';

:host {
    display: block;
    background: #3e4757;
    box-shadow: 0 0 0 100rem #3e4757;
}
```

#### Customizing

**Template:**
```html
<div size="l" tuiAvatar tuiHint tuiHintDirection="end" [style.background]="'❤️' | tuiAutoColor" > ❤️ <tui-hint *tuiHint class="hint" [@.disabled]="true" > You can expose the bubble component with <code>*tuiHint</code> directive to customize it </tui-hint>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHint} from '@taiga-ui/core';
import {TuiAutoColorPipe, TuiAvatar} from '@taiga-ui/kit';

@Component({
    imports: [TuiAutoColorPipe, TuiAvatar, TuiHint],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
<span appearance="accent" size="l" tuiBadge class="badge tui-space_left-2" [tuiHint]="badgeHint" > Hover me <ng-template #badgeHint>
<a tuiHintAppearance="dark" [tuiHint]="linkHint" > Hover me again <ng-template #linkHint>Nested hint</ng-template>
</a>
</ng-template>
</span>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHint} from '@taiga-ui/core';
import {TuiBadge} from '@taiga-ui/kit';

@Component({
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
    imports: [TuiHint],
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
<tui-data-list-wrapper *tuiDropdown [itemContent]="stringify | tuiStringifyContent" [items]="items | tuiFilterByInput" />
<tui-icon tuiHintDirection="top-start" [tuiTooltip]="periodHint" />
</tui-textfield>
<ng-template #periodHint> You will pay in equal installments on a monthly basis You will pay in equal installments on a monthly basis </ng-template>
</form>
<button tuiHintAppearance="floating" tuiHintDirection="top-start" tuiLink type="button" class="tui-space_top-4" [tuiHint]="howToBuyTooltip" > How to buy <ng-template #howToBuyTooltip>
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
import {
    TuiFilterByInputPipe,
    TuiHint,
    TuiIcon,
    TuiLink,
    TuiTextfield,
} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiDataListWrapper,
    TuiSelect,
    TuiStringifyContentPipe,
    TuiTooltip,
} from '@taiga-ui/kit';

@Component({
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

    protected readonly form = new FormGroup({period: new FormControl()});

    protected readonly stringify = (item: {name: string; surname: string}): string =>
        `${item.name} ${item.surname}`;
}
```
