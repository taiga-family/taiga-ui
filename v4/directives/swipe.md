# Swipe

- **Package**: `CDK`
- **Type**: directives

`tuiSwipe` directive allows detecting swipes on mobile devices. You can configure the directive with `TUI_SWIPE_OPTIONS` token. Allowed options: timeout: max time between touchstart and touchend threshold : min distance between touchstart and touchend.

### How to Use (Import)

```ts
import {TuiSwipe} from '@taiga-ui/cdk';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiSwipe,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<div (tuiSwipe)="..."></div>
```

### Usage Examples

#### Basic

**Template:**
```html
<div [class]="'box tui-text_body-l ' + swiped" (tuiSwipe)="onSwipe($event)" > Swiped {{ swiped }} </div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSwipe, type TuiSwipeEvent} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    imports: [TuiSwipe],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    host: {
        '[class]': 'swiped',
    },
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
<div class="container tui-text_body-l" (tuiSwipe)="onSwipe($event)" > Swipe left to open <div *tuiSidebar="!!(open$ | async); direction: 'right'" class="sidebar tui-text_body-l" (tuiSwipe)="onSwipe($event)" > Swipe right to close </div>
</div>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSidebar} from '@taiga-ui/addon-mobile';
import {TuiSwipe, type TuiSwipeEvent} from '@taiga-ui/cdk';
import {Subject} from 'rxjs';

@Component({
    standalone: true,
    imports: [AsyncPipe, TuiSidebar, TuiSwipe],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly open$ = new Subject<boolean>();

    protected toggle(open: boolean): void {
        this.open$.next(open);
    }

    protected onSwipe(swipe: TuiSwipeEvent): void {
        console.info(swipe.direction);

        if (swipe.direction === 'left') {
            this.toggle(true);
        }

        if (swipe.direction === 'right') {
            this.toggle(false);
        }
    }
}
```

**LESS:**
```less
.container {
    inline-size: 12.5rem;
    block-size: 12.5rem;
}

.sidebar {
    inline-size: 100%;
    block-size: 100%;
}

.container,
.sidebar {
    display: flex;
    justify-content: center;
    align-items: center;
}
```
