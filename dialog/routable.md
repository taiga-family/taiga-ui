# Routable

### Usage Examples

#### Lazy loading dialog

**HTML:**
```html
<button
    routerLink="path/to/lazy"
    tuiButton
    type="button"
>
    Open dialog
</button>

<router-outlet />
```

**Typescript:**
```ts
import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';

@Component({
    selector: 'tui-lazy-example',
    imports: [RouterLink, RouterOutlet, TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example1 {}
```

**Routes:**
```ts
import {type Routes} from '@angular/router';
import {tuiRouteDialog} from '@taiga-ui/kit';

import {DialogExample as EagerExample} from './2/dialog.component';
import {DialogExample as NamedOutletExample} from './3/dialog.component';

export default [
    {
        path: '',
        loadComponent: async () => import('.'),
        children: [
            tuiRouteDialog(async () => import('./1/dialog.component'), {
                path: 'path/to/lazy',
            }),
            tuiRouteDialog(EagerExample, {path: 'path/to/eager'}),
            tuiRouteDialog(NamedOutletExample, {
                path: 'path/to/named-outlet',
                outlet: 'myOutlet',
            }),
        ],
    },
] satisfies Routes;
```

**Dialog:**
```ts
import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    template: 'Lazy loaded dialog content',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LazyDialog {}
```

#### Eager dialog

**HTML:**
```html
<button
    routerLink="path/to/eager"
    tuiButton
    type="button"
>
    Open dialog
</button>

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
    selector: 'tui-eager-example',
    imports: [RouterLink, RouterOutlet, TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example2 {}
```

**Routes:**
```ts
import {type Routes} from '@angular/router';
import {tuiRouteDialog} from '@taiga-ui/kit';

import {DialogExample as EagerExample} from './2/dialog.component';
import {DialogExample as NamedOutletExample} from './3/dialog.component';

export default [
    {
        path: '',
        loadComponent: async () => import('.'),
        children: [
            tuiRouteDialog(async () => import('./1/dialog.component'), {
                path: 'path/to/lazy',
            }),
            tuiRouteDialog(EagerExample, {path: 'path/to/eager'}),
            tuiRouteDialog(NamedOutletExample, {
                path: 'path/to/named-outlet',
                outlet: 'myOutlet',
            }),
        ],
    },
] satisfies Routes;
```

**Dialog:**
```ts
import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'eager-loaded-dialog',
    template: 'Eager loaded dialog content',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogExample {}
```

#### Named outlet

**HTML:**
```html
<button
    tuiButton
    type="button"
    [routerLink]="[
        {
            outlets: {
                myOutlet: 'path/to/named-outlet',
            },
        },
    ]"
>
    Open dialog
</button>

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
    selector: 'tui-named-outlet-example',
    imports: [RouterLink, RouterOutlet, TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example3 {}
```

**Routes:**
```ts
import {type Routes} from '@angular/router';
import {tuiRouteDialog} from '@taiga-ui/kit';

import {DialogExample as EagerExample} from './2/dialog.component';
import {DialogExample as NamedOutletExample} from './3/dialog.component';

export default [
    {
        path: '',
        loadComponent: async () => import('.'),
        children: [
            tuiRouteDialog(async () => import('./1/dialog.component'), {
                path: 'path/to/lazy',
            }),
            tuiRouteDialog(EagerExample, {path: 'path/to/eager'}),
            tuiRouteDialog(NamedOutletExample, {
                path: 'path/to/named-outlet',
                outlet: 'myOutlet',
            }),
        ],
    },
] satisfies Routes;
```

**Dialog:**
```ts
import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    template: 'Dialog content via named outlet',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogExample {}
```
