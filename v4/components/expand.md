# Expand

- **Package**: `EXPERIMENTAL`
- **Type**: components

### How to Use (Import)

```ts
import {TuiExpand} from '@taiga-ui/experimental';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiExpand,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<tui-expand [expanded]="expanded">Eager content</tui-expand>
```

### Usage Examples

#### Lazy

**Template:**
```html
<p> Chapman: Mr Wentworth just told me to come in here and say that there was trouble at the mill, that's all - I didn't expect a kind of Spanish Inquisition. </p>
<button tuiButton type="button" (click)="expanded = !expanded" > Show/Hide </button>
<tui-expand [expanded]="expanded">
<p *tuiItem>NOBODY expects the Spanish Inquisition!</p>
</tui-expand>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiItem} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {TuiExpand} from '@taiga-ui/experimental';

@Component({
    standalone: true,
    imports: [TuiButton, TuiExpand, TuiItem],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected expanded = false;
}
```

#### Eager

**Template:**
```html
<button tuiButton type="button" (click)="expanded = !expanded" > Show/Hide </button>
<tui-expand [expanded]="expanded">
<p *tuiRepeatTimes="let index of 3">I am eagerly loaded but hidden</p>
</tui-expand>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {TuiExpand} from '@taiga-ui/experimental';

@Component({
    standalone: true,
    imports: [TuiButton, TuiExpand, TuiRepeatTimes],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected expanded = false;
}
```

#### Async

**Template:**
```html
<button tuiButton type="button" (click)="expanded = !expanded" > Show/Hide </button>
<tui-expand [expanded]="expanded">
<tui-elastic-container *tuiItem>
<tui-loader *ngIf="loading$ | async; else content" [style.margin.rem]="1" />
<ng-template #content>
<p> You can use <code>ElasticContainer</code> to animate height changes </p>
<p>Just some more content</p> Making this section bigger than loader </ng-template>
</tui-elastic-container>
</tui-expand>
```

**TypeScript:**
```ts
import {AsyncPipe, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_FALSE_HANDLER, TuiItem} from '@taiga-ui/cdk';
import {TuiButton, TuiLoader} from '@taiga-ui/core';
import {TuiExpand} from '@taiga-ui/experimental';
import {TuiElasticContainer} from '@taiga-ui/kit';
import {map, startWith, timer} from 'rxjs';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        NgIf,
        TuiButton,
        TuiElasticContainer,
        TuiExpand,
        TuiItem,
        TuiLoader,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly loading$ = timer(2000).pipe(
        map(TUI_FALSE_HANDLER),
        startWith(true),
    );

    protected expanded = false;
}
```

#### Old syntax

**Template:**
```html
<p> Chapman: Mr Wentworth just told me to come in here and say that there was trouble at the mill, that's all - I didn't expect a kind of Spanish Inquisition. </p>
<button tuiButton type="button" (click)="toggle()" > Show/Hide </button>
<tui-expand [expanded]="expanded">
<ng-template tuiExpandContent>
<p>NOBODY expects the Spanish Inquisition!</p>
</ng-template>
</tui-expand>
<tui-expand [expanded]="expanded">
<div *ngFor="let page of subpages">
<div>{{ page }}</div>
</div>
</tui-expand>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiExpand} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [NgForOf, TuiButton, TuiExpand],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected expanded = false;

    protected subpages = ['page1', 'page2', 'page3'];

    protected toggle(): void {
        this.expanded = !this.expanded;
    }
}
```
