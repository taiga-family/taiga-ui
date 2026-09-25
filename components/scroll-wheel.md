# ScrollWheel

- **Package**: `EXPERIMENTAL`
- **Type**: components

Work in progress, do not use! There are known issues in Safari, as always A component for spinning wheels or other infinitely scrollable containers, not to be confused with virtual scrolling which typically has ends.

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [buffer] | `number` | Number of items rendered around current item (10 by default) |
| [(index)] | `number` | Topmost visible item index |

### Usage Examples

#### Basic

Each item can have arbitrary height

**Template:**
```html
<tui-scroll-wheel [style.block-size.rem]="20">
<div *tuiItem="let index" [style.background]="getHeight(index).toString() | tuiAutoColor" [style.block-size.px]="getHeight(index)" > {{ index }} </div>
</tui-scroll-wheel>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiItem} from '@taiga-ui/cdk';
import {TuiScrollWheel} from '@taiga-ui/experimental';
import {TuiAutoColorPipe} from '@taiga-ui/kit';

@Component({
    imports: [TuiAutoColorPipe, TuiItem, TuiScrollWheel],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected getHeight(seed: number): number {
        let t = seed + 0x6d2b79f5;

        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);

        return Math.floor((((t ^ (t >>> 14)) >>> 0) / 4294967296) * 75) + 25;
    }
}
```

#### Scroll snapping

Use bigger buffer for smaller items to avoid flickering at high speeds

**Template:**
```html
<tui-scroll-wheel waIntersectionThreshold="0.5" [buffer]="50" [(index)]="hours" >
<ng-template let-index>
<div [class._current]="index - 2 === hours()">{{ getHours(index) }}</div>
</ng-template>
</tui-scroll-wheel> : <tui-scroll-wheel waIntersectionThreshold="0.5" [buffer]="50" [(index)]="minutes" >
<ng-template let-index>
<div [class._current]="index - 2 === minutes()">{{ getMinutes(index) }}</div>
</ng-template>
</tui-scroll-wheel>
<p>
<output>Selected: {{ getHours(hours() + 2) }}:{{ getMinutes(minutes() + 2) }}</output>
</p>
```

**TypeScript:**
```ts
import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiScrollWheel} from '@taiga-ui/experimental';

@Component({
    imports: [TuiScrollWheel],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly hours = signal(-2);
    protected readonly minutes = signal(-2);

    protected getHours(index: number): string {
        return (((index % 24) + 24) % 24).toString().padStart(2, '0');
    }

    protected getMinutes(index: number): string {
        return (((index % 60) + 60) % 60).toString().padStart(2, '0');
    }
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

:host {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    font: var(--tui-typography-heading-h6);
    place-items: center;
}

tui-scroll-wheel {
    block-size: 15rem;
    mask-image: linear-gradient(transparent, black 7.5rem, transparent);
    justify-self: start;

    &:first-child {
        justify-self: end;
    }
}

div {
    .transition(color);

    display: flex;
    align-items: center;
    justify-content: center;
    block-size: 3rem;
    font: var(--tui-typography-heading-h6);
    font-variant: tabular-nums;
    scroll-snap-align: start;
    color: var(--tui-text-tertiary);

    &._current {
        color: var(--tui-text-primary);
    }
}

p {
    grid-column: 1 / -1;
}
```
