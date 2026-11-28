# ElasticSticky

- **Package**: `ADDON-MOBILE`
- **Type**: directives

Directive allows to scale "stuck" sticky heading. It can also be used as service `TuiElasticStickyService`

### How to Use (Import)

```ts
import {TuiElasticSticky} from '@taiga-ui/addon-mobile';
import {TuiScrollbar} from '@taiga-ui/core';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiScrollbar,
    TuiElasticSticky,
  ],
  // ...
})
export class Example {
  scale = 1;

  // ...

  onElastic(scale: number) {
    this.scale = clamp(scale, 0.5, 1); // We do not want to scale below 50%
  }
}
```

### How to Use (Template)

```html
<tui-scrollbar>
  <header (tuiElasticSticky)="onElastic($event)">I'm sticky</header>
  ...
</tui-scrollbar>
```

### Usage Examples

#### Basic

**Template:**
```html
<tui-scrollbar class="scrollbar">
<p>I never wanted to do this in the first place!</p>
<header tuiElasticSticky class="header" >
<div class="wrapper">
<span class="money" [style.fontSize.em]="scale$ | async" > {{ 237000 | tuiAmount: 'RUB' | async }} </span>
</div>
</header>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
</tui-scrollbar>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {type AfterViewInit, Component, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiElasticSticky} from '@taiga-ui/addon-mobile';
import {tuiClamp} from '@taiga-ui/cdk';
import {TuiScrollbar} from '@taiga-ui/core';
import {distinctUntilChanged, map, type Observable, startWith} from 'rxjs';

@Component({
    standalone: true,
    imports: [AsyncPipe, TuiAmountPipe, TuiElasticSticky, TuiScrollbar],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example implements AfterViewInit {
    @ViewChild(TuiElasticSticky)
    protected readonly elasticSticky?: TuiElasticSticky;

    protected scale$?: Observable<number>;

    public ngAfterViewInit(): void {
        if (!this.elasticSticky) {
            return;
        }

        // If we use it like that instead of (tuiElasticSticky)="onElasticSticky($event)"
        // we will not trigger unnecessary change detection when scale is less than 0.5
        this.scale$ = this.elasticSticky.tuiElasticSticky.pipe(
            map((scale) => tuiClamp(scale, 0.5, 1)),
            startWith(1),
            distinctUntilChanged(),
        );
    }
}
```

**LESS:**
```less
:host {
    display: block;
}

.scrollbar {
    block-size: 12.5rem;
}

.header {
    position: sticky;
    top: 0;
    z-index: 1;
    block-size: 5.5rem;
    pointer-events: none;
}

.wrapper {
    color: var(--tui-background-base);
    background: #bc71c9;
    font-size: 2rem;
    pointer-events: auto;
}

.money {
    display: block;
    line-height: 1em;
    padding: 1em 1.5rem;
}
```

#### Dynamic inner content

**Template:**
```html
<tui-scrollbar class="scrollbar">
<p>I never wanted to do this in the first place!</p>
<header class="header" (tuiElasticSticky)="onElastic1($event)" >
<div class="wrapper" [style.padding.rem]="scale1 * 2" > 1 </div>
</header>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<button tuiButton type="button" (click)="show = !show" > show/hide content </button>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<ng-container *ngIf="show">
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
</ng-container>
<header class="header" (tuiElasticSticky)="onElastic2($event)" >
<div class="wrapper" [style.padding.rem]="scale2 * 2" > 2 </div>
</header>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
<p>I always wanted to be... a lumberjack!</p>
</tui-scrollbar>
```

**TypeScript:**
```ts
import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiElasticSticky} from '@taiga-ui/addon-mobile';
import {tuiClamp} from '@taiga-ui/cdk';
import {TuiButton, TuiScrollbar} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [NgIf, TuiButton, TuiElasticSticky, TuiScrollbar],
    templateUrl: './index.html',
    styleUrls: ['../1/index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected show = false;
    protected scale1 = 1;
    protected scale2 = 1;

    protected onElastic1(scale: number): void {
        this.scale1 = tuiClamp(scale, 0.2, 1);
    }

    protected onElastic2(scale: number): void {
        this.scale2 = tuiClamp(scale, 0.2, 1);
    }
}
```
