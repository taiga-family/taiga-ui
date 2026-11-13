# Like

- **Package**: `KIT`
- **Type**: components

A like component based on native checkbox with icons and custom color for icon when `:checked` state.

### Usage Examples

#### Basic

**Template:**
```html
<input tuiLike="var(--tui-status-negative)" type="checkbox" />
<input checkedIcon="@tui.star-filled" size="s" tuiLike type="checkbox" uncheckedIcon="@tui.star" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLike} from '@taiga-ui/kit';

@Component({
    imports: [TuiLike],
    templateUrl: './index.html',
    styles: ':host { display: flex; gap: 1rem; align-items: center; }',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### Icons from DI

**Template:**
```html
<input tuiLike="var(--tui-status-warning)" type="checkbox" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLike, tuiLikeOptionsProvider} from '@taiga-ui/kit';

@Component({
    imports: [TuiLike],
    templateUrl: './index.html',
    styles: ':host { display: flex; gap: 1rem; align-items: center; }',
    encapsulation,
    changeDetection,
    providers: [
        tuiLikeOptionsProvider({
            icons: {unchecked: '@tui.star', checked: '@tui.star-filled'},
        }),
    ],
})
export default class Example {}
```

#### External icons

**Template:**
```html
<input tuiLike type="checkbox" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLike, tuiLikeOptionsProvider} from '@taiga-ui/kit';

@Component({
    imports: [TuiLike],
    templateUrl: './index.html',
    styles: ':host { display: flex; gap: 1rem; align-items: center; }',
    encapsulation,
    changeDetection,
    providers: [
        tuiLikeOptionsProvider({
            icons: {
                unchecked:
                    'https://raw.githubusercontent.com/MarsiBarsi/readme-icons/main/github.svg',
                checked: '/assets/icons/github.svg',
            },
        }),
    ],
})
export default class Example {}
```

#### Other appearances

**Template:**
```html
@for (appearance of appearances; track appearance) { <input tuiLike type="checkbox" [appearance]="appearance" /> }
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLike} from '@taiga-ui/kit';

@Component({
    imports: [TuiLike],
    templateUrl: './index.html',
    styles: ':host { display: flex; gap: 1rem; align-items: center; }',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly appearances = ['negative', 'positive', 'warning', 'flat'] as const;
}
```

#### With forms

**Template:**
```html
<div>
<h3>NgModel</h3>
<input tuiLike="var(--tui-status-negative)" type="checkbox" [(ngModel)]="liked" />
<p>Liked: {{ liked }}</p>
</div>
<div>
<h3>Reactive form</h3>
<form [formGroup]="likeForm">
<input formControlName="liked" tuiLike="var(--tui-status-negative)" type="checkbox" />
</form>
<p>Liked: {{ likeForm.value.liked }}</p>
</div>
<button size="m" tuiButton type="button" (click)="changeValue()" > Toggle </button>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiLike} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, ReactiveFormsModule, TuiButton, TuiLike],
    templateUrl: './index.html',
    styles: ':host { display: flex; column-gap: 3rem; justify-content: space-between; flex-wrap: wrap; }',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected liked = false;
    protected likeForm = new FormGroup({liked: new FormControl(false)});

    protected changeValue(): void {
        this.liked = !this.liked;
        this.likeForm.setValue({liked: !this.likeForm.value.liked});
    }
}
```
