# Resizer

- **Package**: `CDK`
- **Type**: directives

Directive to resize container in multiple directions.

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
    imports: [TuiResizable, TuiResizer],
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
    inset-inline-start: 0;
    inset-block-start: 0;
}

.right-bottom-handle {
    inset-inline-end: 0;
    inset-block-end: 0;
}

.top-middle {
    .center-left();

    inset-block-start: 0;
}

.top-middle-handle {
    inset-inline-start: 50%;
    inset-block-end: 0;
}

.top-right {
    inset-block-start: 0;
    inset-inline-end: 0;
}

.top-right-handle {
    inset-inline-start: 0;
    inset-block-end: 0;
}

.middle-right {
    .center-top();

    inset-inline-end: 0;
}

.middle-right-handle {
    inset-inline-start: 0;
    inset-block-start: 50%;
}

.bottom-right {
    inset-block-end: 0;
    inset-inline-end: 0;
}

.bottom-right-handle {
    inset-inline-start: 0;
    inset-block-start: 0;
}

.middle-bottom {
    .center-left();

    inset-block-end: 0;
}

.middle-bottom-handle {
    inset-inline-start: 50%;
    inset-block-start: 0;
}

.bottom-left {
    inset-block-end: 0;
    inset-inline-start: 0;
}

.bottom-left-handle {
    inset-inline-end: 0;
    inset-block-start: 0;
}

.left-middle {
    inset-inline-start: 0;
    inset-block-start: 50%;
    transform: translateY(-50%);
}

.left-middle-handle {
    inset-inline-end: 0;
    inset-block-start: 50%;
}

.middle-middle {
    .center-all();
}

.middle-middle-top-handle {
    .center-left();

    inset-block-start: 0;
}

.middle-middle-right-handle {
    .center-top();

    inset-inline-end: 0;
}

.middle-middle-bottom-handle {
    .center-left();

    inset-block-end: 0;
}

.middle-middle-left-handle {
    .center-top();

    inset-inline-start: 0;
}
```
