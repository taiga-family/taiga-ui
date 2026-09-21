# Filter

- **Package**: `KIT`
- **Type**: components

Components shows separated items that can be used to filter content on the page. There are also an option with badges.

### Example

```html
<ng-template>
<tui-filter [badgeHandler]="badgeHandler" [disabledItemHandler]="disabledItemHandler" [formControl]="control" [items]="items" [size]="size" (toggledItem)="itemToggle.emitEvent($event)" />
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [badgeHandler] | `TuiHandler<T>` | to get a number to show by default |
| [content] | `PolymorpheusContent` | template for custom content in filter |
| [disabledItemHandler] | `TuiBooleanHandler` |  |
| [identityMatcher] | `TuiIdentityMatcher` |  |
| [items] | `T[]` | for view |
| [size] | `TuiSizeS | TuiSizeL` | size of items |

### API - Outputs

| Event | Type | Description |
|-------|------|-------------|
| (toggledItem) | `T` | toggled event for an item |

### Usage Examples

#### Basic

**Template:**
```html
<form [formGroup]="form">
<tui-filter formControlName="filters" size="s" [disabledItemHandler]="disabledItemHandler" [items]="items" />
</form>
<div>
<pre>Form value: {{ form.value | json }}</pre>
</div>
```

**TypeScript:**
```ts
import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiBooleanHandler} from '@taiga-ui/cdk';
import {TuiFilter} from '@taiga-ui/kit';

@Component({
    imports: [JsonPipe, ReactiveFormsModule, TuiFilter],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly form = new FormGroup({filters: new FormControl(['Food'])});

    protected readonly items = [
        'News',
        'Food',
        'Clothes',
        'Popular',
        'Goods',
        'Furniture',
        'Tech',
        'Building materials',
    ];

    protected disabledItemHandler: TuiBooleanHandler<string> = (item) => item.length < 7;
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

:host {
    max-inline-size: 34.375rem;
}

.title {
    font: var(--tui-typography-heading-h5);
    margin: 0 0 0.75rem;
}

.filters {
    display: inline;
}

.tag {
    margin: 0 0.25rem 0.25rem 0;
}
```

#### With badges

**Template:**
```html
<form [formGroup]="form">
<tui-filter formControlName="filters" [badgeHandler]="badgeHandler" [content]="content" [identityMatcher]="identityMatcher" [items]="items" />
</form>
<ng-template #content let-item > {{ item.title }} </ng-template>
<div>
<pre>Form value: {{ form.value | json }}</pre>
</div>
```

**TypeScript:**
```ts
import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiHandler, type TuiIdentityMatcher} from '@taiga-ui/cdk';
import {TuiFilter} from '@taiga-ui/kit';

interface Operations {
    operations: readonly Operation[];
    title: string;
}

interface Operation {
    amount: number;
}

const COMPLETED = {
    title: 'Done',
    operations: [{amount: 100}, {amount: 200}],
};

@Component({
    imports: [JsonPipe, ReactiveFormsModule, TuiFilter],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly form = new FormGroup({
        filters: new FormControl([{title: 'Drafts'}]),
    });

    protected items: readonly Operations[] = [
        COMPLETED,
        {
            title: 'Drafts',
            operations: [{amount: 100}, {amount: 200}, {amount: 100}, {amount: 100}],
        },
        {
            title: 'For sign',
            operations: [],
        },
        {
            title: 'Queue',
            operations: [
                {amount: 100},
                {amount: 200},
                {amount: 100},
                {amount: 200},
                {amount: 100},
                {amount: 200},
            ],
        },
    ];

    protected identityMatcher: TuiIdentityMatcher<Operations> = (
        item1: Operations,
        item2: Operations,
    ) => item1.title === item2.title;

    protected badgeHandler: TuiHandler<Operations, number> = (item) =>
        item.operations.length;
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

:host {
    max-inline-size: 34.375rem;
}

.title {
    font: var(--tui-typography-heading-h5);
    margin: 0 0 0.75rem;
}

.filters {
    display: inline;
}

.tag {
    margin: 0 0.25rem 0.25rem 0;
}
```

#### Custom

**Template:**
```html
<form [formGroup]="form">
<tui-filter formControlName="filters" [content]="content" [items]="items" />
</form>
<ng-template #content let-item > {{ item }} <tui-icon class="tui-space_left-2" [icon]="getItemIcon(item)" />
</ng-template>
<div>
<pre>Form value: {{ form.value | json }}</pre>
</div>
```

**TypeScript:**
```ts
import {JsonPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon} from '@taiga-ui/core';
import {TuiFilter} from '@taiga-ui/kit';

const getIcon: Record<string, string> = {
    Calendar: '@tui.calendar',
    Favorite: '@tui.star',
    Messages: '@tui.message-square',
    FAQ: '@tui.circle-help',
    Settings: '@tui.settings',
};

@Component({
    imports: [JsonPipe, ReactiveFormsModule, TuiFilter, TuiIcon],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected items = ['Calendar', 'Favorite', 'Messages', 'FAQ', 'Settings'];
    protected form = new FormGroup({filters: new FormControl<string[]>([])});

    protected getItemIcon(title: string): string {
        return getIcon[title] ?? '';
    }
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

:host {
    max-inline-size: 34.375rem;
}

.title {
    font: var(--tui-typography-heading-h5);
    margin: 0 0 0.75rem;
}

.filters {
    display: inline;
}

.tag {
    margin: 0 0.25rem 0.25rem 0;
}
```

#### With all button

**Template:**
```html
<div class="tui-space_bottom-4">Choose a department:</div>
<div class="filters-with-all">
<button appearance="outline-grayscale" size="m" tuiButton type="button" class="item tui-space_right-1 tui-space_bottom-1" [tuiAppearanceMode]="checked$ | async" (click)="toggleAll()" > All </button>
<tui-filter size="m" class="item" [items]="items" [ngModel]="model$ | async" (ngModelChange)="onModelChange($event)" />
</div>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiFilter} from '@taiga-ui/kit';
import {BehaviorSubject, map} from 'rxjs';

const Department = {
    IT: 'IT',
    HR: 'HR',
    HeadOffice: 'Heads',
    Delivery: 'Delivery',
    Admin: 'Administrative',
    Business: 'Business lines',
    MB: 'Business technologies',
    Finance: 'Corporate Finance',
    Payment: 'Payment Systems',
    Operating: 'Operating service lines',
    Marketing: 'Media-marketing',
    Security: 'Security Service',
} as const;

@Component({
    imports: [AsyncPipe, FormsModule, TuiButton, TuiFilter],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = Object.values(Department);
    protected readonly filters$ = new BehaviorSubject<readonly string[]>([]);

    protected readonly checked$ = this.filters$.pipe(
        map(({length}) => (length === this.items.length ? 'checked' : '')),
    );

    protected readonly model$ = this.filters$.pipe(
        map((value) => (value.length === this.items.length ? [] : value)),
    );

    protected onModelChange(model: readonly string[]): void {
        this.filters$.next(model);
    }

    protected toggleAll(): void {
        this.filters$.next(
            this.items.length === this.filters$.value.length ? [] : [...this.items],
        );
    }
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

.item {
    display: inline;
    vertical-align: bottom;
}
```
