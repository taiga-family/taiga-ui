# Accordion

- **Package**: `KIT`
- **Type**: components

Default use case for an accordion with exclusive expanded item.

Customizing appearance of the accordion with CSS.

Using accordion with a single item akin to
`details`
+
`summary`
tags.

Choosing between eagerly instantiated and lazy instantiated content.

Showing multiple nested accordion blocks.

Using
`Connected`
directive to implement stepper-like UI.

Adding action buttons to accordion header.

### Example

```html
<tui-accordion [closeOthers]="closeOthers" [size]="size" >
<button tuiAccordion>Taiga UI cdk</button>
<tui-expand> Development kit consisting of the low level tools and abstractions used to develop Taiga UI Angular entities </tui-expand>
<button [(tuiAccordion)]="open">Taiga UI core</button>
<tui-expand> Basic elements needed to develop components, directives and more using Taiga UI design system </tui-expand>
</tui-accordion>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [closeOthers] | `boolean` | close other sections when user opens one |
| [size] | `TuiSizeS \| TuiSizeL` | — |
| [(tuiAccordion)] | `boolean` | individual item open state |

### Usage Examples

#### Basic

Default use case for an accordion with exclusive expanded item.

**Template:**
```html
<tui-accordion> @for (item of data | keyvalue; track item) { <button [tuiAccordion]="$index === 1">{{ item.key }}</button>
<tui-expand>{{ item.value }}</tui-expand> } </tui-accordion>
```

**TypeScript:**
```ts
import {KeyValuePipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAccordion} from '@taiga-ui/kit';

@Component({
    imports: [KeyValuePipe, TuiAccordion],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly data = {
        'Taiga UI cdk':
            'Development kit consisting of the low level tools and abstractions used to develop Taiga UI Angular entities',
        'Taiga UI core':
            'Basic elements needed to develop components, directives and more using Taiga UI design system',
        'Taiga UI kit':
            'The main set of components used to build Taiga UI based Angular applications',
    };
}
```

#### Custom

Customizing appearance of the accordion with CSS.

**Template:**
```html
<tui-accordion class="accordion"> @for (group of operations | keyvalue: orderBy; track group) { <button appearance="" iconEnd="" tuiAccordion tuiCell >
<span tuiTitle>
<strong>{{ group.key }}</strong>
<span tuiSubtitle> @if (group.value.length) { {{ group.value.length }} operations • Total: {{ sum(group.value) | tuiAmount: '$' : 'start' }} } @else { No operations so far } </span>
</span>
</button>
<tui-expand [style.display]="group.value.length ? null : 'none'"> @for (operation of group.value; track operation) { <div tuiCell>
<div [appearance]="operation.sum && operation.sum > 0 ? '' : 'negative'" [tuiAvatar]="getIcon(operation)" ></div>
<span tuiTitle>
<strong>{{ operation.title }}</strong> @if (operation.subtitle) { <span tuiSubtitle> {{ operation.subtitle }} </span> } </span> @if (operation.sum) { <span tuiTitle [style.color]="operation.sum > 0 ? 'var(--tui-text-positive)' : null" > {{ operation.sum | tuiAmount: '$' : 'start' }} <span tuiSubtitle>{{ operation.time }}</span>
</span> } @else { <button appearance="secondary" tuiButton type="button" > Retry </button> } </div> } </tui-expand> } </tui-accordion>
```

**TypeScript:**
```ts
import {KeyValuePipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiButton, TuiCell, TuiTitle} from '@taiga-ui/core';
import {TuiAccordion, TuiAvatar} from '@taiga-ui/kit';

interface Operation {
    title: string;
    subtitle?: string;
    sum?: number;
    time?: string;
}

@Component({
    imports: [
        KeyValuePipe,
        TuiAccordion,
        TuiAmountPipe,
        TuiAvatar,
        TuiButton,
        TuiCell,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly operations = {
        Today: [],
        Yesterday: [
            {
                title: 'Cashback',
                subtitle: 'Pot of gold',
                sum: 237,
                time: '19:32',
            },
            {title: 'Failed to load'},
        ],
        'January 6, 2021': [
            {
                title: 'Salary',
                subtitle: 'Account number ••••237',
                sum: 43256,
                time: '11:02',
            },
            {
                title: 'Shaman Hat',
                subtitle: 'Insurrection Apparel',
                sum: -99,
                time: '09:11',
            },
            {
                title: 'Shaman Makeup',
                subtitle: 'Insurrection Apparel',
                sum: -75,
                time: '09:11',
            },
        ],
    };

    protected getIcon(operation: Operation): string {
        if (!operation.sum) {
            return '@tui.triangle-alert';
        }

        return operation.sum > 0 ? '@tui.thumbs-up' : '@tui.thumbs-down';
    }

    protected sum(operations: readonly Operation[]): number {
        return operations.reduce((acc, {sum}) => acc + (sum || 0), 0);
    }

    protected orderBy(): number {
        return 0;
    }
}
```

**LESS:**
```less
.accordion {
    inline-size: 20rem;
    border-radius: 0;

    [tuiAccordion] {
        border-block-start: 1px solid var(--tui-border-normal);
        background: transparent !important;
        mask-image: none;
    }

    tui-expand,
    [tuiCell] {
        padding-inline-start: 0;
        padding-inline-end: 0;
        box-shadow: none;
    }
}
```

#### Single

Using accordion with a single item akin to `details` + `summary` tags.

**Template:**
```html
<tui-accordion>
<button tuiAccordion>Taiga UI cdk</button>
<tui-expand> Development kit consisting of the low level tools and abstractions used to develop Taiga UI Angular entities </tui-expand>
</tui-accordion>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAccordion} from '@taiga-ui/kit';

@Component({
    imports: [TuiAccordion],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### Eager and Lazy

Choosing between eagerly instantiated and lazy instantiated content.

**Template:**
```html
<tui-accordion>
<button tuiAccordion>Taiga UI lazy</button>
<tui-expand>
<ng-container *tuiItem>I'm lazy content</ng-container>
</tui-expand>
</tui-accordion>
<tui-accordion [style.margin-block-start.rem]="1">
<button tuiAccordion>Taiga UI eager</button>
<tui-expand>I'm eager content</tui-expand>
</tui-accordion>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAccordion} from '@taiga-ui/kit';

@Component({
    imports: [TuiAccordion],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### Nested

Showing multiple nested accordion blocks.

**Template:**
```html
<tui-accordion>
<button [tuiAccordion]="true">Level 1</button>
<tui-expand> Development kit consisting of the low level tools and abstractions used to develop Taiga UI Angular entities <tui-accordion [style.margin-block-start.rem]="0.75">
<button [tuiAccordion]="true">Level 2</button>
<tui-expand> The main set of components used to build Taiga UI based Angular applications <tui-accordion [style.margin-block-start.rem]="0.75">
<button [tuiAccordion]="true">Level 3</button>
<tui-expand> Basic elements needed to develop components, directives and more using Taiga UI design system </tui-expand>
</tui-accordion>
</tui-expand>
</tui-accordion>
</tui-expand>
</tui-accordion>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAccordion} from '@taiga-ui/kit';

@Component({
    imports: [TuiAccordion],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### Connected

Using `Connected` directive to implement stepper-like UI.

**Template:**
```html
<tui-accordion tuiConnected class="accordion" > @for (item of steps | keyvalue: orderBy; track item) { <button appearance="icon" [tuiAccordion]="$index === 1" >
<div [appearance]="isChecked(item.value.steps) ? 'info' : ''" [tuiAvatar]="isChecked(item.value.steps) ? '@tui.check' : ''" ></div> {{ item.key }} </button>
<tui-expand> {{ item.value.text }} @for (step of item.value.steps; track step) { <label tuiCell>
<input tuiCheckbox type="checkbox" [ngModel]="selected.includes(step)" (ngModelChange)="toggle(step)" />
<span tuiTitle>{{ step }}</span>
</label> } </tui-expand> } </tui-accordion>
```

**TypeScript:**
```ts
import {KeyValuePipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiArrayToggle} from '@taiga-ui/cdk';
import {TuiCell, TuiCheckbox, TuiTitle} from '@taiga-ui/core';
import {TuiAccordion, TuiAvatar, TuiConnected} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        KeyValuePipe,
        TuiAccordion,
        TuiAvatar,
        TuiCell,
        TuiCheckbox,
        TuiConnected,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly steps = {
        'First steps': {
            text: 'Getting to know your workplace',
            steps: ['Looks around', 'Talk to colleagues', 'Have lunch'],
        },
        'Work day': {
            text: 'Start working',
            steps: ['Open the project', 'Read the documentation', 'Start coding'],
        },
        Mastery: {
            text: 'Become a pro',
            steps: ['Write tests', 'Refactor the code', 'Deploy the project'],
        },
    };

    protected selected = this.steps['First steps'].steps.concat(
        this.steps['Work day'].steps[0] || '',
    );

    protected isChecked(steps: readonly string[]): boolean {
        return steps.every((step) => this.selected.includes(step));
    }

    protected toggle(step: string): void {
        this.selected = tuiArrayToggle(this.selected, step);
    }

    protected orderBy(): number {
        return 0;
    }
}
```

**LESS:**
```less
.accordion {
    inline-size: 20rem;
    color: var(--tui-text-secondary);

    [tuiAccordion] {
        font: var(--tui-typography-heading-h6);
        padding: 0;
    }

    tui-expand {
        box-shadow: none;
        padding: 0;
    }

    [tuiCell] {
        margin-inline-start: -1rem;
    }
}
```

#### With Action Button

Adding action buttons to accordion header.

**Template:**
```html
<tui-accordion> @for (item of items; track item.title) { <div class="t-header">
<button appearance="icon" tuiAccordion > {{ item.title }} </button>
<button appearance="icon" iconStart="@tui.info" tuiIconButton type="button" (click)="showDetails(item)" > Show details about {{ item.title }} </button>
</div>
<tui-expand> {{ item.content }} </tui-expand> } </tui-accordion>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiDialogService} from '@taiga-ui/core';
import {TuiAccordion} from '@taiga-ui/kit';

interface Item {
    readonly title: string;
    readonly content: string;
    readonly details: string;
}

@Component({
    imports: [TuiAccordion, TuiButton],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly dialogs = inject(TuiDialogService);

    protected readonly items: readonly Item[] = [
        {
            title: 'Taiga UI cdk',
            content:
                'Development kit consisting of the low level tools and abstractions used to develop Taiga UI Angular entities',
            details:
                'Framework-agnostic utilities: directives, pipes, observables and DI tokens shared across all Taiga UI packages.',
        },
        {
            title: 'Taiga UI core',
            content:
                'Basic elements needed to develop components, directives and more using Taiga UI design system',
            details:
                'Design tokens, theming and the foundational building blocks every other Taiga UI package relies on.',
        },
        {
            title: 'Taiga UI kit',
            content:
                'The main set of components used to build Taiga UI based Angular applications',
            details:
                'Ready-to-use high level components: accordion, calendar, input masks and much more.',
        },
    ];

    protected showDetails(item: Item): void {
        this.dialogs.open(item.details, {label: item.title, size: 's'}).subscribe();
    }
}
```

**LESS:**
```less
tui-accordion {
    .t-header {
        display: flex;
        align-items: stretch;

        > [tuiAccordion] {
            flex: 1;
            justify-content: flex-start;
            text-align: start;

            &::after {
                margin-inline-start: auto;
            }
        }
    }

    tui-expand {
        box-shadow: none;
    }
}
```
