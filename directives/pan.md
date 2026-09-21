# Pan

- **Package**: `CDK`
- **Type**: directives

`tuiPan` The directive emits delta between mousemove / touchmove events. You can use it to change the coordinates of an element as in example below

### Usage Examples

#### Basic

**Template:**
```html
<div class="container tui-text_body-l">
<div class="circle" [style.transform]="transform$ | async" (tuiPan)="onPan($event)" ></div>
</div>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPan} from '@taiga-ui/cdk';
import {BehaviorSubject, map} from 'rxjs';

@Component({
    imports: [AsyncPipe, TuiPan],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly sanitizer = inject(DomSanitizer);

    protected readonly coordinates$ = new BehaviorSubject([0, 0]);

    protected readonly transform$ = this.coordinates$.pipe(
        map((coords) =>
            this.sanitizer.bypassSecurityTrustStyle(
                `translate(${coords[0]}px, ${coords[1]}px)`,
            ),
        ),
    );

    protected get currentCoords(): number[] {
        return this.coordinates$.value;
    }

    protected onPan(delta: readonly [number, number]): void {
        this.coordinates$.next([
            (this.currentCoords[0] ?? 0) + delta[0],
            (this.currentCoords[1] ?? 0) + delta[1],
        ]);
    }
}
```

**LESS:**
```less
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    inline-size: 12rem;
    block-size: 12rem;
    background-color: var(--tui-background-neutral-1);
    overflow: hidden;
}

.circle {
    inline-size: 6rem;
    block-size: 6rem;
    border-radius: 100%;
    touch-action: none;
    background-color: var(--tui-chart-categorical-01);
    box-shadow: 0.25rem 0.25rem 0.5rem 0 rgba(34, 60, 80, 0.2);
    cursor: move;
    will-change: transform;
}
```
