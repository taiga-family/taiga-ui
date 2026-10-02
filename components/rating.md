# Rating

- **Package**: `KIT`
- **Type**: components

### Usage Examples

#### Basic

**Template:**
```html
<label> Rate Taiga UI <tui-rating class="rating" [(ngModel)]="value" />
</label>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRating} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiRating],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = 0;
}
```

**LESS:**
```less
.rating {
    font-size: 1.5rem;
    inline-size: 10rem;
}
```

#### Custom icons

**Template:**
```html
<label> Are you satisfied with Taiga UI? <tui-rating class="rating" [attr.data-value]="value" [icon]="icon" [max]="3" [(ngModel)]="value" /> @if (value) { <button appearance="icon" iconStart="@tui.x" size="s" tuiIconButton type="button" class="button" (click)="value = 0" > Clear </button> } </label>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiContext} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {TuiRating} from '@taiga-ui/kit';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

@Component({
    imports: [FormsModule, TuiButton, TuiRating],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = 0;

    protected readonly icon: PolymorpheusContent<TuiContext<number>> = ({$implicit}) => {
        switch ($implicit) {
            case 1:
                return '@tui.frown';
            case 2:
                return '@tui.meh';
            default:
                return '@tui.smile';
        }
    };
}
```

**LESS:**
```less
.rating,
.button {
    display: inline-block;
    vertical-align: middle;
}

.rating {
    color: var(--tui-status-info);

    &[data-value='1'] {
        color: var(--tui-status-negative);
        background-color: var(--tui-status-negative-pale-hover);
    }

    &[data-value='2'] {
        color: var(--tui-status-warning);
        background-color: var(--tui-status-warning-pale-hover);
    }

    &[data-value='3'] {
        color: var(--tui-status-positive);
        background-color: var(--tui-status-positive-pale-hover);
    }

    &:hover {
        color: var(--tui-status-info);
        background-color: var(--tui-status-info-pale-hover);
    }
}
```

#### Static

**Template:**
```html
<label> Back to the Future <tui-rating [icon]="icon" [max]="10" [ngModel]="8.5" [readonly]="true" />
</label>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRating, type TuiRatingContext} from '@taiga-ui/kit';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

@Component({
    imports: [FormsModule, TuiRating],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly icon: PolymorpheusContent<TuiRatingContext> = ({filled}) =>
        filled ? '@tui.star-filled' : '@tui.star';
}
```
