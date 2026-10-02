# Zoom

- **Package**: `CDK`
- **Type**: directives

`tuiZoom` directive emits delta between wheel events or between pinch on mobile devices. It emits coordinates of the zoom center as well. You can use it to change the scale of an element as in example below

### Usage Examples

#### Simple

**Template:**
```html
<div class="t-container" (tuiZoom)="onZoom($event)" >
<div class="t-zoomable" [style.scale]="scale$ | async" >
<span>{{ scale$ | async | number: '1.0-3' }}</span>
</div>
</div>
```

**TypeScript:**
```ts
import {AsyncPipe, DecimalPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiClamp, TuiZoom, type TuiZoomEvent} from '@taiga-ui/cdk';
import {scan, startWith, Subject} from 'rxjs';

@Component({
    imports: [AsyncPipe, DecimalPipe, TuiZoom],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly delta$ = new Subject<number>();
    protected readonly scale$ = this.delta$.pipe(
        scan((scale, next) => tuiClamp(scale + next, 0.5, 3), 1),
        startWith(1),
    );

    protected onZoom({delta}: TuiZoomEvent): void {
        this.delta$.next(delta);
    }
}
```

**LESS:**
```less
.t-container,
.t-zoomable {
    display: flex;
    align-items: center;
    justify-content: center;
}

.t-container {
    inline-size: 12rem;
    block-size: 12rem;
    background-color: var(--tui-background-neutral-1);
}

.t-zoomable {
    inline-size: 3rem;
    block-size: 3rem;
    background-color: var(--tui-background-accent-1);
    border-radius: var(--tui-radius-l);
}
```
