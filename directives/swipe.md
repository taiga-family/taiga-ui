# Swipe

- **Package**: `CDK`
- **Type**: directives

`tuiSwipe` directive allows detecting swipes on mobile devices. You can configure the directive with `TUI_SWIPE_OPTIONS` token. Allowed options: timeout: max time between touchstart and touchend threshold : min distance between touchstart and touchend.

### Usage Examples

#### Basic

**Template:**
```html
<div [class]="`box tui-text_body-l ${swiped}`" (tuiSwipe)="onSwipe($event)" > Swiped {{ swiped }} </div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSwipe, type TuiSwipeEvent} from '@taiga-ui/cdk';

@Component({
    imports: [TuiSwipe],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    host: {'[class]': 'swiped'},
})
export default class Example {
    protected swiped = 'default';

    protected onSwipe(swipe: TuiSwipeEvent): void {
        this.swiped = swipe.direction;
    }
}
```

**LESS:**
```less
.box {
    display: flex;
    inline-size: 12.5rem;
    block-size: 12.5rem;
    background-color: var(--tui-background-accent-1);
    transition: all 0.5s ease-out;
    justify-content: center;
    align-items: center;
    touch-action: none;

    &.left {
        background-color: var(--tui-chart-categorical-12);
    }

    &.right {
        background-color: var(--tui-chart-categorical-03);
    }

    &.top {
        background-color: var(--tui-chart-categorical-08);
    }

    &.bottom {
        background-color: var(--tui-chart-categorical-10);
    }
}
```

#### With sidebar

**Template:**
```html
<div class="container tui-text_body-l" (tuiSwipe)="onSwipe($event)" > Swipe left to open <tui-drawer *tuiPopup="open()" direction="end" class="drawer tui-text_body-l" [overlay]="true" (click.self)="open.set(false)" (tuiSwipe)="onSwipe($event)" > Swipe right to close </tui-drawer>
</div>
```

**TypeScript:**
```ts
import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSwipe, type TuiSwipeEvent} from '@taiga-ui/cdk';
import {TuiPopup} from '@taiga-ui/core';
import {TuiDrawer} from '@taiga-ui/kit';

@Component({
    imports: [TuiDrawer, TuiPopup, TuiSwipe],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly open = signal(false);

    protected onSwipe(swipe: TuiSwipeEvent): void {
        console.info(swipe.direction);

        if (swipe.direction === 'left') {
            this.open.set(true);
        }

        if (swipe.direction === 'right') {
            this.open.set(false);
        }
    }
}
```

**LESS:**
```less
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    inline-size: 12.5rem;
    block-size: 12.5rem;
}

.drawer {
    inline-size: 17.25rem;
}
```
