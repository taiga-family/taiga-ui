# SwipeAction

- **Package**: `ADDON-MOBILE`
- **Type**: components

Component should be used on mobile devices only.

### How to Use (Import)

```ts
import {Component} from '@angular/core';
import {TuiSwipeActions} from '@taiga-ui/addon-mobile';
// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiSwipeActions,
  ],
})
export class Example {}
```

### How to Use (Template)

```html
<tui-swipe-actions>
  <div>Card content</div>

  <button
    iconStart="@tui.eye"
    size="m"
    tuiIconButton
    tuiSwipeAction
  ></button>
</tui-swipe-actions>
```

### Usage Examples

#### Basic

**Template:**
```html
<tui-swipe-actions>
<div tuiCardLarge tuiCell tuiSurface="floating" >
<tui-avatar appearance="primary" src="@tui.dollar-sign" />
<div tuiTitle>
<strong>{{ 10000 | tuiAmount: 'USD' | async }}</strong>
<div tuiSubtitle>Dollar account</div>
</div>
</div>
<button iconStart="@tui.eye" size="m" tuiIconButton tuiSwipeAction type="button" > Show </button>
<button iconStart="@tui.pencil-line" size="m" tuiIconButton tuiSwipeAction type="button" > Edit </button>
<button appearance="secondary" iconStart="@tui.share" size="m" tuiIconButton tuiSwipeAction type="button" > Share </button>
</tui-swipe-actions>
<tui-swipe-actions>
<div tuiCardLarge tuiCell tuiSurface="floating" >
<tui-avatar appearance="primary" src="@tui.gift" />
<div tuiTitle>
<strong>{{ 23000 | tuiAmount: 'EUR' | async }}</strong>
<div tuiSubtitle>Goal</div>
</div>
</div>
<button iconStart="@tui.eye" size="m" tuiIconButton tuiSwipeAction type="button" > Show </button>
</tui-swipe-actions>
<tui-swipe-actions [style.--tui-action-gap]="16" [style.--tui-item-size]="32" >
<div tuiCardLarge tuiCell tuiSurface="floating" >
<tui-avatar appearance="primary" src="@tui.briefcase" />
<div tuiTitle>
<strong>{{ 5000 | tuiAmount: 'EUR' | async }}</strong>
<div tuiSubtitle>Vacations</div>
</div>
</div>
<button iconStart="@tui.eye" size="s" tuiIconButton tuiSwipeAction type="button" > Show </button>
<button iconStart="@tui.pencil-line" size="s" tuiIconButton tuiSwipeAction type="button" > Edit </button>
<button appearance="secondary" iconStart="@tui.share" size="s" tuiIconButton tuiSwipeAction type="button" > Share </button>
<button appearance="secondary-destructive" iconStart="@tui.trash" size="s" tuiIconButton tuiSwipeAction type="button" > Delete </button>
</tui-swipe-actions>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiSwipeActions} from '@taiga-ui/addon-mobile';
import {TuiAppearance, TuiButton, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCell} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        TuiAmountPipe,
        TuiAppearance,
        TuiAvatar,
        TuiButton,
        TuiCardLarge,
        TuiCell,
        TuiSurface,
        TuiSwipeActions,
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
    inline-size: 18rem;
    margin: 2rem 0;
}

[tuiCardLarge] {
    margin: 3rem 1.5rem;
}

tui-swipe-actions {
    margin: -3rem -1.5rem;
}

button[tuiSwipeAction] {
    border-radius: 100%;

    &:last-child {
        margin-inline-end: 0.5rem;
    }
}
```

#### Custom

**Template:**
```html
<tui-swipe-actions [style.--tui-actions-padding.rem]="0.5">
<div tuiSurface class="blur" >
<tui-avatar src="assets/images/avatar.jpg" />
<h3 tuiTitle="m">Alex Inkin</h3>
<button appearance="glass" iconStart="@tui.mail" size="m" tuiIconButton type="button" class="button" > Message </button>
</div>
<input tuiSwipeAction tuiSwitch type="checkbox" [(ngModel)]="checkbox" />
<button appearance="secondary-destructive" iconStart="@tui.trash" size="m" tuiIconButton tuiSwipeAction type="button" [style.borderRadius.%]="100" > Trash </button>
</tui-swipe-actions>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSwipeActions} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiSwitch} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiAvatar,
        TuiButton,
        TuiSurface,
        TuiSwipeActions,
        TuiSwitch,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected checkbox = false;
}
```

**LESS:**
```less
:host {
    inline-size: 20rem;
}

.blur {
    z-index: 1;
    display: flex;
    background-image: url('/assets/images/restaurant-2.jpg');
    border-radius: 1rem;
    padding: 1.25rem;
    justify-content: space-between;
    align-items: center;
    color: #fff;

    &::before {
        backdrop-filter: blur(1rem);
    }
}
```

#### Autoclose

**Template:**
```html
<tui-swipe-actions [autoClose]="true">
<div tuiCardLarge tuiCell tuiSurface="floating" >
<tui-avatar appearance="primary" src="@tui.dollar-sign" />
<div tuiTitle>
<strong>{{ 10000 | tuiAmount: 'USD' | async }}</strong>
<div tuiSubtitle>Dollar account</div>
</div>
</div>
<button iconStart="@tui.eye" size="m" tuiIconButton tuiSwipeAction type="button" > Show </button>
<button iconStart="@tui.pencil-line" size="m" tuiIconButton tuiSwipeAction type="button" > Edit </button>
<button appearance="secondary" iconStart="@tui.share" size="m" tuiIconButton tuiSwipeAction type="button" > Share </button>
</tui-swipe-actions>
<tui-swipe-actions [autoClose]="true">
<div tuiCardLarge tuiCell tuiSurface="floating" >
<tui-avatar appearance="primary" src="@tui.gift" />
<div tuiTitle>
<strong>{{ 23000 | tuiAmount: 'EUR' | async }}</strong>
<div tuiSubtitle>Goal</div>
</div>
</div>
<button iconStart="@tui.eye" size="m" tuiIconButton tuiSwipeAction type="button" > Show </button>
<button iconStart="@tui.pencil-line" size="m" tuiIconButton tuiSwipeAction type="button" > Edit </button>
<button appearance="secondary" iconStart="@tui.share" size="m" tuiIconButton tuiSwipeAction type="button" > Share </button>
</tui-swipe-actions>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiSwipeActions, TuiSwipeActionsAutoClose} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCell} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        TuiAmountPipe,
        TuiAvatar,
        TuiButton,
        TuiCardLarge,
        TuiCell,
        TuiSurface,
        TuiSwipeActions,
        TuiSwipeActionsAutoClose,
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
    inline-size: 18rem;
    margin: 2rem 0;
}

tui-swipe-actions {
    margin: -3rem -1.5rem;
}

[tuiCardLarge] {
    margin: 3rem 1.5rem;
}

button[tuiSwipeAction] {
    border-radius: 100%;

    &:last-child {
        margin-inline-end: 0.5rem;
    }
}
```

#### Dynamic actions

**Template:**
```html
<tui-swipe-actions>
<div tuiCardLarge tuiCell tuiSurface="floating" >
<tui-avatar appearance="primary" src="@tui.dollar-sign" />
<div tuiTitle>
<strong>{{ 10000 | tuiAmount: 'USD' | async }}</strong>
<div tuiSubtitle>Dollar account</div>
</div>
</div>
<button *ngIf="editButton" iconStart="@tui.pencil-line" size="m" tuiIconButton tuiSwipeAction type="button" > Edit </button>
<button *ngIf="shareButton" appearance="secondary" iconStart="@tui.share" size="m" tuiIconButton tuiSwipeAction type="button" > Share </button>
</tui-swipe-actions>
<label>
<input tuiCheckbox type="checkbox" [(ngModel)]="shareButton" /> Share button </label>
<label>
<input tuiCheckbox type="checkbox" [(ngModel)]="editButton" /> Edit button </label>
```

**TypeScript:**
```ts
import {AsyncPipe, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiSwipeActions} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiCheckbox} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCell} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        FormsModule,
        NgIf,
        TuiAmountPipe,
        TuiAvatar,
        TuiButton,
        TuiCardLarge,
        TuiCell,
        TuiCheckbox,
        TuiSurface,
        TuiSwipeActions,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected shareButton = false;
    protected editButton = true;
}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    inline-size: 18rem;
}

tui-swipe-actions {
    --tui-actions-padding: 1rem;

    margin: -3rem -1.5rem;
}

[tuiCardLarge] {
    margin: 3rem 1.5rem;
}

button[tuiSwipeAction] {
    border-radius: 100%;

    &:last-child {
        margin-inline-end: 0.5rem;
    }
}

label {
    display: flex;
    align-items: center;
    margin-block-start: 0.5rem;
}

input[type='checkbox'] {
    margin-inline-end: 0.5rem;
}
```

#### Fallback for desktop

**Template:**
```html
<tui-swipe-actions>
<div tuiCardLarge tuiCell tuiSurface="floating" >
<tui-avatar appearance="primary" src="@tui.dollar-sign" />
<div tuiTitle>
<strong>{{ 10000 | tuiAmount: 'USD' | async }}</strong>
<div tuiSubtitle>Dollar account</div>
</div>
</div>
<button appearance="flat" iconStart="@tui.ellipsis-vertical" size="s" tuiDropdownOpen tuiIconButton type="button" class="fallback" [tuiDropdown]="content" > Actions </button>
<ng-template #content>
<tui-data-list>
<button tuiOption type="button" > Hide </button>
<button tuiOption type="button" > Edit </button>
</tui-data-list>
</ng-template>
<button iconStart="@tui.eye" size="m" tuiIconButton tuiSwipeAction type="button" > Show </button>
<button iconStart="@tui.pencil-line" size="m" tuiIconButton tuiSwipeAction type="button" > Edit </button>
</tui-swipe-actions>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiSwipeActions} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiDataList, TuiDropdown, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCell} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        TuiAmountPipe,
        TuiAvatar,
        TuiButton,
        TuiCardLarge,
        TuiCell,
        TuiDataList,
        TuiDropdown,
        TuiSurface,
        TuiSwipeActions,
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
@import '@taiga-ui/core/styles/taiga-ui-local';

:host {
    display: flex;
    inline-size: 18rem;
    margin: 2rem 0;
}

.fallback {
    .center-top();

    right: 2rem;
}

[tuiCardLarge] {
    margin: 3rem 1.5rem;
}

tui-swipe-actions {
    margin: -3rem -1.5rem;
}

button[tuiSwipeAction] {
    border-radius: 100%;

    &:last-child {
        margin-inline-end: 0.5rem;
    }
}

@media @tui-touch {
    .fallback {
        display: none;
    }
}
```

#### Onboarding

**Template:**
```html
<div>
<button appearance="secondary-grayscale" iconEnd="@tui.play" size="m" tuiButton type="button" [disabled]="onboarding" (click)="onboarding = true" > Play </button>
</div>
<tui-swipe-actions [(onboarding)]="onboarding">
<div tuiAppearance="floating" tuiCardLarge tuiCell >
<tui-avatar appearance="primary" src="@tui.dollar-sign" />
<div tuiTitle>
<strong>{{ 10000 | tuiAmount: 'USD' | async }}</strong>
<div tuiSubtitle>Dollar account</div>
</div>
</div>
<button iconStart="@tui.eye" size="m" tuiIconButton tuiSwipeAction type="button" > Show </button>
<button iconStart="@tui.pencil-line" size="m" tuiIconButton tuiSwipeAction type="button" > Edit </button>
<button appearance="secondary" iconStart="@tui.share" size="m" tuiIconButton tuiSwipeAction type="button" > Share </button>
</tui-swipe-actions>
<tui-swipe-actions [(onboarding)]="onboarding">
<div tuiAppearance="floating" tuiCardLarge tuiCell >
<tui-avatar appearance="primary" src="@tui.gift" />
<div tuiTitle>
<strong>{{ 23000 | tuiAmount: 'EUR' | async }}</strong>
<div tuiSubtitle>Goal</div>
</div>
</div>
<button iconStart="@tui.eye" size="m" tuiIconButton tuiSwipeAction type="button" > Show </button>
</tui-swipe-actions>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiSwipeActions, TuiSwipeActionsOnboarding} from '@taiga-ui/addon-mobile';
import {TuiAppearance, TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiCardLarge, TuiCell} from '@taiga-ui/layout';
import {AsyncPipe} from '@angular/common';
import {TuiAvatar} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        TuiAmountPipe,
        TuiAppearance,
        TuiAvatar,
        TuiButton,
        TuiCardLarge,
        TuiCell,
        TuiSwipeActions,
        TuiSwipeActionsOnboarding,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected onboarding = false;
}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    inline-size: 18rem;
    margin: 2rem 0;
}

[tuiCardLarge] {
    margin: 1.5rem 1rem;
}

tui-swipe-actions {
    margin: -1.5rem -1rem;
}

button[tuiSwipeAction] {
    border-radius: 100%;
}
```
