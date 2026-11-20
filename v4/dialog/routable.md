# Routable dialog

## Eager loading dialog

## Named outlet

### Usage Examples

#### Eager loading dialog

**Template:**
```html
<button routerLink="path/to/dialog" tuiButton type="button" > Open dialog </button>
<router-outlet />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [RouterLink, RouterOutlet, TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class TuiEagerExample1 {}
```

#### Named outlet

**Template:**
```html
<button tuiButton type="button" [routerLink]="[ { outlets: { myOutlet: 'path/to/dialog', }, }, ]" > Open dialog </button>
<router-outlet name="myOutlet" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [RouterLink, RouterOutlet, TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### Example 3

**Template:**
```html
<ol class="tui-list tui-list_ordered">
<li class="tui-list__item">
<p> Add <code>router-outlet</code> to the page template: </p>
<tui-doc-code filename="my-page.component.html" [code]="html" />
</li>
<li class="tui-list__item">
<p> Use <code>tuiGenerateDialogableRoute</code> inside children property of page router config </p>
<tui-doc-code filename="my-page.routes.ts" [code]="routes" />
</li>
</ol>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDocCode} from '@taiga-ui/addon-doc';

@Component({
    standalone: true,
    imports: [TuiDocCode],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class TuiEagerExample3 {
    protected readonly html = import('../setup/html.md?raw');
    protected readonly routes = import('../setup/routes.md?raw');
}
```
