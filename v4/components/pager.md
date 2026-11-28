# Pager

- **Package**: `KIT`
- **Type**: components

### How to Use (Import)

```ts
import {Component} from '@angular/core';
import {TuiPager} from '@taiga-ui/kit';
// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiPager,
  ],
})
export class Example {}
```

### How to Use (Template)

```html
<tui-pager
  [index]="index"
  [count]="count"
/>
```

### Example

```html
<tui-pager [count]="count" [index]="index" [max]="max" [size]="size" [valueContent]="valueContent" />
<ng-template #templateRef>
<tui-icon icon="@tui.heart-filled" />
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [size] | `'m' | 's'` | Layout size |
| [index] | `number` | Current active dot |
| [max] | `number` | Max visible dots |
| [count] | `number` | Count of dots |
| [valueContent] | `TemplateRef` | A template for custom view |

### Usage Examples

#### Basic

**Template:**
```html
<tui-pager [count]="count" [index]="index" />
<div class="tui-space_top-3">
<button size="xs" tuiButton type="button" (click)="prev()" > prev </button>
<button size="xs" tuiButton type="button" class="tui-space_left-3" (click)="next()" > next </button>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiPager} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiButton, TuiPager],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected count = 10;
    protected index = 0;

    protected prev(): void {
        this.index = Math.max(this.index - 1, 0);
    }

    protected next(): void {
        this.index = Math.min(this.index + 1, this.count - 1);
    }
}
```

#### Icons

**Template:**
```html
<tui-pager [count]="count" [index]="activeIndex" [valueContent]="content" />
<ng-template #content let-index >
<ng-container *ngIf="index === count - 2">
<tui-icon icon="@tui.view" />
</ng-container>
<ng-container *ngIf="index === count - 1">
<tui-icon icon="@tui.square-plus" />
</ng-container>
</ng-template>
<div class="tui-space_top-3">
<button size="xs" tuiButton type="button" (click)="prev()" > prev </button>
<button size="xs" tuiButton type="button" class="tui-space_left-3" (click)="next()" > next </button>
</div>
```

**TypeScript:**
```ts
import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiIcon} from '@taiga-ui/core';
import {TuiPager} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [NgIf, TuiButton, TuiIcon, TuiPager],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected count = 8;
    protected activeIndex = 0;

    protected prev(): void {
        this.activeIndex = Math.max(this.activeIndex - 1, 0);
    }

    protected next(): void {
        this.activeIndex = Math.min(this.activeIndex + 1, this.count - 1);
    }
}
```

#### Dynamic width

**Template:**
```html
<tui-pager [count]="count" [index]="activeIndex()" [valueContent]="content" />
<ng-template #content let-index >
<progress max="100" size="s" tuiProgressBar class="progress" [class.progress_active]="activeIndex() === index" [value]="activeIndex() === index | tuiMapper: toProgress | async" ></progress>
</ng-template>
<div class="tui-space_top-3">
<button size="xs" tuiButton type="button" (click)="prev()" > prev </button>
<button size="xs" tuiButton type="button" class="tui-space_left-3" (click)="next()" > next </button>
</div>
```

**TypeScript:**
```ts
import {AsyncPipe, isPlatformServer} from '@angular/common';
import {Component, inject, PLATFORM_ID, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_E2E, TuiMapperPipe} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {TuiPager, TuiProgress} from '@taiga-ui/kit';
import {map, type Observable, of, takeWhile, tap, timer} from 'rxjs';

@Component({
    standalone: true,
    imports: [AsyncPipe, TuiButton, TuiMapperPipe, TuiPager, TuiProgress],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected static = inject(TUI_IS_E2E) || isPlatformServer(inject(PLATFORM_ID));
    protected count = 10;
    protected activeIndex = signal(0);

    protected readonly toProgress = (active: boolean): Observable<number> =>
        active && !this.static
            ? timer(0, 100).pipe(
                  map((i) => i * 5 + 20),
                  takeWhile((value) => value <= 100),
                  tap({complete: () => this.next()}),
              )
            : of(100);

    protected prev(): void {
        this.activeIndex.update((index) => Math.max(index - 1, 0));
    }

    protected next(): void {
        this.activeIndex.update((index) => Math.min(index + 1, this.count - 1));
    }
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.progress {
    .transition(~'color, inline-size');

    inline-size: 1rem;

    &:not(&_active) {
        inline-size: 0.5rem;
        color: transparent;
    }
}
```
