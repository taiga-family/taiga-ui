# Animated

- **Package**: `CDK`
- **Type**: directives

`TuiAnimated` allows adding animation to DOM elements in the same way as Angular's animate attribute but supported in Angular 19. In case the user's operating system has reduced motion settings turned on, Taiga UI will honor this, disabling animations under its control, and `TuiAnimated` will not play animations. To override this behavior, use `TUI_REDUCED_MOTION` injection token. However, this is not the recommended approach, as the user's system preferences would be ignored.

### How to Use (Import)

```ts
import {TuiAnimated} from '@taiga-ui/cdk';

// ...

@Component({
  imports: [
    // ...
    TuiAnimated,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<span
  *ngIf="isOpen"
  tuiAnimated
>
  Active
</span>
```

```less
&.tui-enter,
&.tui-leave {
  animation-name: tuiFade, tuiSlide;
}
```

### Usage Examples

#### Usage

**Template:**
```html
<button appearance="outline" tuiButton type="button" class="button" (click)="isOpen = !isOpen" > {{ isOpen ? 'Hide me' : 'Show opening crawl' }} </button> @if (isOpen) { <div tuiAnimated class="container" > A long time ago in a galaxy far, far away.... </div> }
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAnimated} from '@taiga-ui/cdk';
import {TuiAppearance, TuiButton} from '@taiga-ui/core';

@Component({
    imports: [FormsModule, TuiAnimated, TuiAppearance, TuiButton],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected isOpen = false;
}
```

**LESS:**
```less
@width: 15rem;

.button {
    inline-size: @width;
    border-radius: 1rem 1rem 0 0;
}

.container {
    block-size: 6rem;
    inline-size: @width;
    overflow: hidden;
    background: #222;
    color: var(--tui-status-warning);

    &.tui-enter,
    &.tui-leave {
        animation-name: tuiFade, tuiScale;
    }
}
```

- Add to import:

- Add to template:

- Add to style:
