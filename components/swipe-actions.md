# SwipeActions

- **Package**: `ADDON-MOBILE`
- **Type**: components

Component should be used on mobile devices only.

### Usage Examples

#### Basic

**Template:**
```html
<tui-swipe-actions>
<div appearance="floating" tuiCardLarge tuiCell >
<div appearance="primary" tuiAvatar="@tui.dollar-sign" ></div>
<div tuiTitle>
<strong>{{ 10000 | tuiAmount: 'USD' }}</strong>
<div tuiSubtitle>Dollar account</div>
</div>
</div>
<button iconStart="@tui.eye" size="m" tuiIconButton tuiSwipeAction type="button" > Show </button>
<button iconStart="@tui.pencil-line" size="m" tuiIconButton tuiSwipeAction type="button" > Edit </button>
<button appearance="secondary" iconStart="@tui.share" size="m" tuiIconButton tuiSwipeAction type="button" > Share </button>
</tui-swipe-actions>
<tui-swipe-actions>
<div appearance="floating" tuiCardLarge tuiCell >
<div appearance="primary" tuiAvatar="@tui.gift" ></div>
<div tuiTitle>
<strong>{{ 23000 | tuiAmount: 'EUR' }}</strong>
<div tuiSubtitle>Goal</div>
</div>
</div>
<button iconStart="@tui.eye" size="m" tuiIconButton tuiSwipeAction type="button" > Show </button>
</tui-swipe-actions>
<tui-swipe-actions [style.--tui-action-gap]="16" [style.--tui-item-size]="32" >
<div appearance="floating" tuiCardLarge tuiCell >
<div appearance="primary" tuiAvatar="@tui.briefcase" ></div>
<div tuiTitle>
<strong>{{ 5000 | tuiAmount: 'EUR' }}</strong>
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
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiSwipeActions} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiCell, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge} from '@taiga-ui/layout';

@Component({
    imports: [
        TuiAmountPipe,
        TuiAvatar,
        TuiButton,
        TuiCardLarge,
        TuiCell,
        TuiSwipeActions,
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
    inline-size: 100%;
    flex-direction: column;
    gap: 1rem;
}

[tuiCardLarge] {
    margin: 3rem 1.5rem;
}

tui-swipe-actions {
    margin: -3rem -1.5rem;
}

button[tuiSwipeAction] {
    border-radius: 100%;
}
```

#### Custom

**Template:**
```html
<tui-swipe-actions [style.--tui-actions-padding.rem]="1">
<div tuiSurface class="blur" >
<div tuiAvatar="@tui.user">
<img alt="" src="assets/images/avatar.jpg" />
</div>
<h3 tuiTitle="m">Alex Inkin</h3>
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
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiSwitch} from '@taiga-ui/kit';
import {TuiSurface} from '@taiga-ui/layout';

@Component({
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
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected checkbox = false;
}
```

**LESS:**
```less
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
<div appearance="floating" tuiCardLarge tuiCell >
<div appearance="primary" tuiAvatar="@tui.dollar-sign" ></div>
<div tuiTitle>
<strong>{{ 10000 | tuiAmount: 'USD' }}</strong>
<div tuiSubtitle>Dollar account</div>
</div>
</div>
<button iconStart="@tui.eye" size="m" tuiIconButton tuiSwipeAction type="button" > Show </button>
<button iconStart="@tui.pencil-line" size="m" tuiIconButton tuiSwipeAction type="button" > Edit </button>
<button appearance="secondary" iconStart="@tui.share" size="m" tuiIconButton tuiSwipeAction type="button" > Share </button>
</tui-swipe-actions>
<tui-swipe-actions [autoClose]="true">
<div appearance="floating" tuiCardLarge tuiCell >
<div appearance="primary" tuiAvatar="@tui.gift" ></div>
<div tuiTitle>
<strong>{{ 23000 | tuiAmount: 'EUR' }}</strong>
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
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiSwipeActions, TuiSwipeActionsAutoClose} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiCell, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge} from '@taiga-ui/layout';

@Component({
    imports: [
        TuiAmountPipe,
        TuiAvatar,
        TuiButton,
        TuiCardLarge,
        TuiCell,
        TuiSwipeActions,
        TuiSwipeActionsAutoClose,
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

tui-swipe-actions {
    margin: -3rem -1.5rem;
}

[tuiCardLarge] {
    margin: 3rem 1.5rem;
}

button[tuiSwipeAction] {
    border-radius: 100%;
}
```

#### Dynamic actions

**Template:**
```html
<tui-swipe-actions>
<div appearance="floating" tuiCardLarge tuiCell >
<div appearance="primary" tuiAvatar="@tui.dollar-sign" ></div>
<div tuiTitle>
<strong>{{ 10000 | tuiAmount: 'USD' }}</strong>
<div tuiSubtitle>Dollar account</div>
</div>
</div> @if (editButton) { <button iconStart="@tui.pencil-line" size="m" tuiIconButton tuiSwipeAction type="button" > Edit </button> } @if (shareButton) { <button appearance="secondary" iconStart="@tui.share" size="m" tuiIconButton tuiSwipeAction type="button" > Share </button> } </tui-swipe-actions>
<label>
<input tuiCheckbox type="checkbox" [(ngModel)]="shareButton" /> Share button </label>
<label>
<input tuiCheckbox type="checkbox" [(ngModel)]="editButton" /> Edit button </label>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiSwipeActions} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiCell, TuiCheckbox, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
        TuiAmountPipe,
        TuiAvatar,
        TuiButton,
        TuiCardLarge,
        TuiCell,
        TuiCheckbox,
        TuiSwipeActions,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
}

tui-swipe-actions {
    margin: -3rem -1.5rem -1.5rem;
}

[tuiCardLarge] {
    margin: 3rem 1.5rem;
}

button[tuiSwipeAction] {
    border-radius: 100%;
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
<div appearance="floating" tuiCardLarge tuiCell >
<div appearance="primary" tuiAvatar="@tui.dollar-sign" ></div>
<div tuiTitle>
<strong>{{ 10000 | tuiAmount: 'USD' }}</strong>
<div tuiSubtitle>Dollar account</div>
</div>
</div>
<button appearance="flat" iconStart="@tui.ellipsis-vertical" size="s" tuiDropdownAuto tuiIconButton type="button" class="fallback" [tuiDropdown]="content" > Actions </button>
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
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiSwipeActions} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiCell, TuiDataList, TuiDropdown, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge} from '@taiga-ui/layout';

@Component({
    imports: [
        TuiAmountPipe,
        TuiAvatar,
        TuiButton,
        TuiCardLarge,
        TuiCell,
        TuiDataList,
        TuiDropdown,
        TuiSwipeActions,
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
@import '@taiga-ui/styles/utils';

:host {
    display: flex;
}

.fallback {
    .center-top();

    inset-inline-end: 2rem;
}

tui-swipe-actions {
    margin: -3rem -1.5rem;
}

[tuiCardLarge] {
    margin: 3rem 1.5rem;
}

button[tuiSwipeAction] {
    border-radius: 100%;
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
<div [style.marginBottom.rem]="1.5">
<button appearance="secondary-grayscale" iconEnd="@tui.play" size="m" tuiButton type="button" [disabled]="onboarding()" (click)="onboarding.set(true)" > Play </button>
</div>
<tui-swipe-actions [(onboarding)]="onboarding">
<div appearance="floating" tuiCardLarge tuiCell >
<div appearance="primary" tuiAvatar="@tui.dollar-sign" ></div>
<div tuiTitle>
<strong>{{ 10000 | tuiAmount: 'USD' }}</strong>
<div tuiSubtitle>Dollar account</div>
</div>
</div>
<button iconStart="@tui.eye" size="m" tuiIconButton tuiSwipeAction type="button" > Show </button>
<button iconStart="@tui.pencil-line" size="m" tuiIconButton tuiSwipeAction type="button" > Edit </button>
<button appearance="secondary" iconStart="@tui.share" size="m" tuiIconButton tuiSwipeAction type="button" > Share </button>
</tui-swipe-actions>
<tui-swipe-actions [(onboarding)]="onboarding">
<div appearance="floating" tuiCardLarge tuiCell >
<div appearance="primary" tuiAvatar="@tui.gift" ></div>
<div tuiTitle>
<strong>{{ 23000 | tuiAmount: 'EUR' }}</strong>
<div tuiSubtitle>Goal</div>
</div>
</div>
<button iconStart="@tui.eye" size="m" tuiIconButton tuiSwipeAction type="button" > Show </button>
</tui-swipe-actions>
```

**TypeScript:**
```ts
import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiSwipeActions, TuiSwipeActionsOnboarding} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiCell, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
        TuiAmountPipe,
        TuiAvatar,
        TuiButton,
        TuiCardLarge,
        TuiCell,
        TuiSwipeActions,
        TuiSwipeActionsOnboarding,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly onboarding = signal(false);
}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

[tuiCardLarge] {
    margin: 3rem 1.5rem;
}

tui-swipe-actions {
    margin: -3rem -1.5rem;
}

button[tuiSwipeAction] {
    border-radius: 100%;
}
```
