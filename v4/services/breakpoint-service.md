# BreakpointService

- **Package**: `CORE`
- **Type**: components/services

Service to observe changes in the current breakpoint.

```ts
import {TuiBreakpointService} from '@taiga-ui/core';

// ...
export class Example {
  private readonly breakpoint$ = inject(TuiBreakpointService);
}
```

### Usage Examples

#### Basic

**Template:**
```html
<p>Change the viewport of this window to see changes in breakpoint</p>
<table class="tui-space_top-4">
<thead>
<tr>
<th>CSS</th>
<th>Service</th>
</tr>
</thead>
<tbody>
<td>
<div class="mobile">Mobile</div>
<div class="desktop-small">Desktop small</div>
<div class="desktop-large">Desktop large</div>
</td>
<td *ngIf="breakpoint$ | async as breakpoint">
<div *ngIf="breakpoint === 'mobile'">Mobile</div>
<div *ngIf="breakpoint === 'desktopSmall'">Desktop small</div>
<div *ngIf="breakpoint === 'desktopLarge'">Desktop large</div>
</td>
</tbody>
</table>
```

**TypeScript:**
```ts
import {AsyncPipe, NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBreakpointService} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [AsyncPipe, NgIf],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly breakpoint$ = inject(TuiBreakpointService);
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

:host {
    display: block;
}

table {
    inline-size: 100%;
    border-spacing: 0;
}

th,
td {
    text-align: start;
    border: 1px solid var(--tui-border-normal);
    block-size: 3.375rem;
    padding: 0 1rem;
    vertical-align: middle;
}

.mobile {
    display: block;
}

.desktop-small {
    display: none;
}

.desktop-large {
    display: none;
}

@media @tui-tablet-min {
    .mobile {
        display: none;
    }

    .desktop-small {
        display: block;
    }

    .desktop-large {
        display: none;
    }
}

@media @tui-desktop-min {
    .mobile {
        display: none;
    }

    .desktop-small {
        display: none;
    }

    .desktop-large {
        display: block;
    }
}
```

- Inject
`TuiBreakpointService`
into your component:
