# Breadcrumbs

- **Package**: `KIT`
- **Type**: components

Navigation element that shows a path from root page to the current

### How to Use (Import)

```ts
import {TuiItem} from '@taiga-ui/cdk';
import {TuiBreadcrumbs} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiItem,
    TuiBreadcrumbs,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<tui-breadcrumbs [size]="size">
  <ng-container *ngFor="let item of items">
    <a
      *tuiItem
      tuiLink
      [routerLink]="item.routerLink"
    >
      {{ item.caption }}
    </a>
  </ng-container>
</tui-breadcrumbs>
```

### Example

```html
<tui-breadcrumbs [itemsLimit]="itemsLimit" [size]="size" >
<ng-container *ngFor="let item of items">
<button *tuiItem tuiLink type="button" > {{ item }} </button>
</ng-container>
</tui-breadcrumbs>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [itemsLimit] | `number` | Limit on visible items |
| [size] | `TuiSizeL` | Text size |

### Usage Examples

#### Basic

**Template:**
```html
<tui-breadcrumbs>
<ng-container *ngFor="let item of items">
<a *tuiItem tuiLink [routerLink]="item.routerLink" > {{ item.caption }} </a>
</ng-container>
</tui-breadcrumbs>
<tui-breadcrumbs size="l" class="tui-space_top-2" >
<ng-container *ngFor="let item of items">
<a *tuiItem tuiLink [routerLink]="item.routerLink" > {{ item.caption }} </a>
</ng-container>
</tui-breadcrumbs>
```

**TypeScript:**
```ts
import {NgFor} from '@angular/common';
import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiItem} from '@taiga-ui/cdk';
import {TuiLink} from '@taiga-ui/core';
import {TuiBreadcrumbs} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [NgFor, RouterLink, TuiBreadcrumbs, TuiItem, TuiLink],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected items = [
        {
            caption: 'Selects',
            routerLink: '/components/select',
        },
        {
            caption: 'Multi',
            routerLink: '/components/multi-select',
        },
        {
            caption: 'With tags',
            routerLink: '/components/multi-select',
        },
        {
            caption: 'Current',
            routerLink: '/navigation/breadcrumbs',
            routerLinkActiveOptions: {exact: true},
        },
    ];
}
```

#### Overflow

**Template:**
```html
<h3 tuiTitle>
<strong>Truncate</strong>
<span tuiSubtitle> Using <code>.text-truncate()</code> mixin </span>
</h3>
<tui-breadcrumbs>
<ng-container *ngFor="let item of items; let last = last">
<button *tuiItem tuiHintOverflow tuiLink type="button" class="link" [class.link_last]="last" > {{ item }} </button>
</ng-container>
</tui-breadcrumbs>
<hr />
<h3 tuiTitle>
<strong>Fade</strong>
<span tuiSubtitle> Combining <code>.text-truncate()</code> mixin with <code>
<a tuiLink [routerLink]="fade" > Fade </a>
</code> directive </span>
</h3>
<tui-breadcrumbs>
<ng-container *ngFor="let item of items; let last = last">
<button *tuiItem tuiFade tuiHintOverflow tuiLink type="button" class="link" [class.link_last]="last" > {{ item }} </button>
</ng-container>
</tui-breadcrumbs>
<hr />
<h3 tuiTitle>
<strong>Scroll</strong>
<span tuiSubtitle> Putting <code>
<a tuiLink [routerLink]="fade" > Fade </a>
</code> directive on entire component </span>
</h3>
<tui-breadcrumbs tuiFade>
<ng-container *ngFor="let item of items; let last = last">
<button *tuiItem tuiLink type="button" [class.link_last]="last" > {{ item }} </button>
</ng-container>
</tui-breadcrumbs>
<hr />
<h3 tuiTitle>
<strong>Collapse</strong>
<span tuiSubtitle> Using <code>itemsLimit: number</code>
</span>
</h3>
<tui-breadcrumbs [itemsLimit]="10">
<ng-container *ngFor="let item of items; let last = last">
<button *tuiItem tuiLink type="button" [class.link_last]="last" > {{ item }} </button>
</ng-container>
</tui-breadcrumbs>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {DemoRoute} from '@demo/routes';
import {TuiItem} from '@taiga-ui/cdk';
import {TuiHint, TuiLink, TuiTitle} from '@taiga-ui/core';
import {TuiBreadcrumbs, tuiBreadcrumbsOptionsProvider, TuiFade} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        NgForOf,
        RouterLink,
        TuiBreadcrumbs,
        TuiFade,
        TuiHint,
        TuiItem,
        TuiLink,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [tuiBreadcrumbsOptionsProvider({icon: '/'})],
})
export default class Example {
    protected readonly fade = DemoRoute.Fade;
    protected readonly items = [
        'First item',
        'Very very long second item that must overflow',
        'Third item',
        'One last super long item that is never gonna fit',
    ];
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

:host {
    display: block;
    max-inline-size: 30rem;
}

hr,
h3 {
    margin: 1rem 0;
}

.link {
    .text-truncate();

    &_last {
        font-weight: bold;
        color: var(--tui-text-primary);
    }
}
```
