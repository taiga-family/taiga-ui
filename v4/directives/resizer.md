# Resizer

- **Package**: `CDK`
- **Type**: directives

Directive to resize container in multiple directions.

### How to Use (Import)

```ts
import {TuiResizable, TuiResizer} from '@taiga-ui/cdk';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiResizable,
    TuiResizer,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<div tuiResizable>
  <div [tuiResizer]="[1, 0]"></div>
</div>
```

### Usage Examples

#### Basic

**Template:**
```html
<div tuiResizable class="left-top item" > [1, 1] <div class="right-bottom-handle handle" [tuiResizer]="[1, 1]" ></div>
</div>
<div tuiResizable class="top-middle item" > [0, 1] <div class="top-middle-handle handle" [tuiResizer]="[0, 1]" ></div>
</div>
<div tuiResizable class="top-right item" > [-1, 1] <div class="top-right-handle handle" [tuiResizer]="[-1, 1]" ></div>
</div>
<div tuiResizable class="middle-right item" > [-1, 0] <div class="middle-right-handle handle" [tuiResizer]="[-1, 0]" ></div>
</div>
<div tuiResizable class="bottom-right item" > [-1, -1] <div class="bottom-right-handle handle" [tuiResizer]="[-1, -1]" ></div>
</div>
<div tuiResizable class="middle-bottom item" > [0, -1] <div class="middle-bottom-handle handle" [tuiResizer]="[0, -1]" ></div>
</div>
<div tuiResizable class="bottom-left item" > [1, -1] <div class="bottom-left-handle handle" [tuiResizer]="[1, -1]" ></div>
</div>
<div tuiResizable class="left-middle item" > [1, 0] <div class="left-middle-handle handle" [tuiResizer]="[1, 0]" ></div>
</div>
<div tuiResizable class="middle-middle item" > All <div class="middle-middle-top-handle handle" [tuiResizer]="[0, -2]" ></div>
<div class="middle-middle-right-handle handle" [tuiResizer]="[2, 0]" ></div>
<div class="middle-middle-bottom-handle handle" [tuiResizer]="[0, 2]" ></div>
<div class="middle-middle-left-handle handle" [tuiResizer]="[-2, 0]" ></div>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiResizable, TuiResizer} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    imports: [TuiResizable, TuiResizer],
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
    position: relative;
    display: block;
    block-size: 30rem;
}

.item {
    position: absolute;
    display: flex;
    background: #87ceeb;
    align-items: center;
    text-align: center;
    justify-content: center;
    inline-size: 5rem;
    block-size: 5rem;
}

.handle {
    position: absolute;
    background: #ffc0cb;
    inline-size: 1.25rem;
    block-size: 1.25rem;
    transform: inherit;
}

.left-top {
    left: 0;
    top: 0;
}

.right-bottom-handle {
    right: 0;
    bottom: 0;
}

.top-middle {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
}

.top-middle-handle {
    left: 50%;
    bottom: 0;
}

.top-right {
    top: 0;
    right: 0;
}

.top-right-handle {
    left: 0;
    bottom: 0;
}

.middle-right {
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}

.middle-right-handle {
    left: 0;
    top: 50%;
}

.bottom-right {
    bottom: 0;
    right: 0;
}

.bottom-right-handle {
    left: 0;
    top: 0;
}

.middle-bottom {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}

.middle-bottom-handle {
    left: 50%;
    top: 0;
}

.bottom-left {
    bottom: 0;
    left: 0;
}

.bottom-left-handle {
    right: 0;
    top: 0;
}

.left-middle {
    left: 0;
    top: 50%;
    transform: translateY(-50%);
}

.left-middle-handle {
    right: 0;
    top: 50%;
}

.middle-middle {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.middle-middle-top-handle {
    left: 50%;
    top: 0;
    transform: translateX(-50%);
}

.middle-middle-right-handle {
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}

.middle-middle-bottom-handle {
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
}

.middle-middle-left-handle {
    left: 0;
    top: 50%;
    transform: translateY(-50%);
}
```
