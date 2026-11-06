# Expand

- **Package**: `Core`
- **Type**: components

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
import {TuiButton, TuiExpand} from '@taiga-ui/core';

@Component({
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
<tui-expand [expanded]="expanded"> @for (_ of '-'.repeat(3); track $index) { <p>I am eagerly loaded but hidden</p> } </tui-expand>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiExpand} from '@taiga-ui/core';

@Component({
    imports: [TuiButton, TuiExpand],
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
<tui-elastic-container *tuiItem> @if (loading$ | async) { <tui-loader [style.margin.rem]="1" /> } @else { <p> You can use <code>ElasticContainer</code> to animate height changes </p>
<p>Just some more content</p> Making this section bigger than loader } </tui-elastic-container>
</tui-expand>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_FALSE_HANDLER, TuiItem} from '@taiga-ui/cdk';
import {TuiButton, TuiExpand, TuiLoader} from '@taiga-ui/core';
import {TuiElasticContainer} from '@taiga-ui/layout';
import {map, startWith, timer} from 'rxjs';

@Component({
    imports: [AsyncPipe, TuiButton, TuiElasticContainer, TuiExpand, TuiItem, TuiLoader],
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
