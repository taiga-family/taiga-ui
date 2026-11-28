# AutoFocus

- **Package**: `CDK`
- **Type**: directives

`tuiAutoFocus` allows to focus HTML-element right after its appearance. It works also with focusable Taiga UI components

### How to Use (Import)

```ts
@Component({
  standalone: true,
  imports: [
    // ...
    TuiAutoFocus,
  ],
  providers: [
    tuiAutoFocusOptionsProvider({
      delay: 300, // NaN = no delay/sync
      preventScroll: true,
    }),
  ],
})
export class Example {}
```

### How to Use (Template)

```html
<!-- Usual HTML element -->
<div
  tuiAutoFocus
  tabindex="0"
></div>

<!-- Or focusable component of Taiga UI -->
<tui-input
  tuiAutoFocus
  [(ngModel)]="model"
>
  Input
</tui-input>
```

### Usage Examples

#### Basic

**Template:**
```html
<button tuiButton type="button" class="tui-space_bottom-5" (click)="onClick()" > Show input </button>
<tui-input *ngIf="showInput" tuiAutoFocus [(ngModel)]="model" > Focusable tui-input </tui-input>
```

**TypeScript:**
```ts
import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAutoFocus} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [FormsModule, NgIf, TuiAutoFocus, TuiButton, TuiInputModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected showInput = false;
    protected model = 'Focused after its appearance';

    protected onClick(): void {
        this.showInput = true;
    }
}
```
