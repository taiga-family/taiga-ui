# ElasticSticky

- **Package**: `ADDON-MOBILE`
- **Type**: directives

Directive allows to scale "stuck" sticky heading. It can also be used as service `TuiElasticStickyService`

### Usage Examples

#### Basic

**Template:**
```html
<tui-scrollbar class="scrollbar">
<p>I never wanted to do this in the first place!</p>
<header tuiElasticSticky class="header" >
<div class="wrapper">
<span class="money" [style.fontSize.em]="scale$ | async" > {{ 237000 | tuiAmount: 'RUB' }} </span>
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
import {type AfterViewInit, Component, viewChild} from '@angular/core';
import {outputToObservable} from '@angular/core/rxjs-interop';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiElasticSticky} from '@taiga-ui/addon-mobile';
import {tuiClamp} from '@taiga-ui/cdk';
import {TuiScrollbar} from '@taiga-ui/core';
import {distinctUntilChanged, map, type Observable, startWith} from 'rxjs';

@Component({
    imports: [AsyncPipe, TuiAmountPipe, TuiElasticSticky, TuiScrollbar],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example implements AfterViewInit {
    protected readonly elasticSticky = viewChild(TuiElasticSticky);
    protected scale$?: Observable<number>;

    public ngAfterViewInit(): void {
        const sticky = this.elasticSticky();

        if (!sticky) {
            return;
        }

        // If we use it like that instead of (tuiElasticSticky)="onElasticSticky($event)"
        // we will not trigger unnecessary change detection when scale is less than 0.5
        this.scale$ = outputToObservable(sticky.tuiElasticSticky).pipe(
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
    z-index: 1;
    inset-block-start: 0;
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
<p>I always wanted to be... a lumberjack!</p> @if (show) { <p>I always wanted to be... a lumberjack!</p>
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
<p>I always wanted to be... a lumberjack!</p> } <header class="header" (tuiElasticSticky)="onElastic2($event)" >
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
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiElasticSticky} from '@taiga-ui/addon-mobile';
import {tuiClamp} from '@taiga-ui/cdk';
import {TuiButton, TuiScrollbar} from '@taiga-ui/core';

@Component({
    imports: [TuiButton, TuiElasticSticky, TuiScrollbar],
    templateUrl: './index.html',
    styleUrl: '../1/index.less',
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
