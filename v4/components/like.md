# Like

- **Package**: `KIT`
- **Type**: components

A like component based on native checkbox with icons and custom color for icon when `:checked` state.

### How to Use (Import)

```ts
import {Component} from '@angular/core';
import {TuiLike} from '@taiga-ui/kit';
// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiLike,
  ],
})
export class Example {}
```

### How to Use (Template)

```html
<input
  tuiLike
  type="checkbox"
/>
```

### Usage Examples

#### Basic

**Template:**
```html
<input tuiLike="var(--tui-status-negative)" type="checkbox" />
<input size="s" tuiLike type="checkbox" [checkedIcon]="'@tui.star-filled'" [uncheckedIcon]="'@tui.star'" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLike} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiLike],
    templateUrl: './index.html',
    styles: [':host { display: flex; gap: 1rem; align-items: center; }'],
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
    standalone: true,
    imports: [TuiLike],
    templateUrl: './index.html',
    styles: [':host { display: flex; gap: 1rem; align-items: center; }'],
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
    standalone: true,
    imports: [TuiLike],
    templateUrl: './index.html',
    styles: [':host { display: flex; gap: 1rem; align-items: center; }'],
    encapsulation,
    changeDetection,
    providers: [
        tuiLikeOptionsProvider({
            icons: {
                unchecked:
                    'https://raw.githubusercontent.com/MarsiBarsi/readme-icons/main/github.svg',
                checked: 'https://cdn-icons-png.flaticon.com/64/12710/12710759.png',
            },
        }),
    ],
})
export default class Example {}
```

#### Other appearances

**Template:**
```html
<input *ngFor="let appearance of appearances" tuiLike type="checkbox" [appearance]="appearance" />
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLike} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [NgForOf, TuiLike],
    templateUrl: './index.html',
    styles: [':host { display: flex; gap: 1rem; align-items: center; }'],
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
<p class="tui-text_body-xl">NgModel</p>
<input tuiLike="var(--tui-status-negative)" type="checkbox" [(ngModel)]="liked" />
<p class="tui-text_body-m-2">Liked: {{ liked }}</p>
</div>
<div>
<p class="tui-text_body-xl">Reactive form</p>
<form [formGroup]="likeForm">
<input formControlName="liked" tuiLike="var(--tui-status-negative)" type="checkbox" />
</form>
<p class="tui-text_body-m-2">Liked: {{ likeForm.value.liked }}</p>
</div>
<button size="m" tuiButton type="button" [style.width.%]="100" (click)="changeValue()" > Toggle </button>
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
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, TuiButton, TuiLike],
    templateUrl: './index.html',
    styles: [
        ':host { display: flex; column-gap: 3rem; justify-content: space-between; flex-wrap: wrap; }',
    ],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected liked = false;

    protected likeForm = new FormGroup({
        liked: new FormControl(false),
    });

    protected changeValue(): void {
        this.liked = !this.liked;
        this.likeForm.setValue({liked: !this.likeForm.value.liked});
    }
}
```
