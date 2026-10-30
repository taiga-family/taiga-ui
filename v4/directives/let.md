# Let

- **Package**: `CDK`
- **Type**: directives

For Angular ≥ 18, use built-in @let syntax ! Run the following manual migration to replace the deprecated `*tuiLet` with built-in counterpart: Directive `tuiLet` allows to reuse computed value in several places in template to avoid recalculations of getters or many async pipes

### How to Use (Import)

```ts
import {TuiLet} from '@taiga-ui/cdk';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiLet,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<ng-container *tuiLet="someStream | async as streamValue">
  <p>
    {{streamValue}}
    <tui-icon [tuiTooltip]="template"></tui-icon>
  </p>
  <button
    tuiButton
    type="button"
  >
    Delete {{streamValue}}
  </button>
  <ng-template #template>{{streamValue}} is a current value of a someStream</ng-template>
</ng-container>
```

```
ng generate @taiga-ui/cdk:migrateTuiLet
```

### Usage Examples

#### With Pipe

**Template:**
```html
<ng-container *tuiLet="timer$ | async as time">
<p>Timer value: {{ time }}</p>
<p> It can be used many times: <tui-badge>{{ time }}</tui-badge>
</p>
<p>It subscribed once and async pipe unsubscribed it after component destroy</p>
</ng-container>
```

**TypeScript:**
```ts
import {AsyncPipe, isPlatformBrowser} from '@angular/common';
import {Component, inject, PLATFORM_ID} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLet} from '@taiga-ui/cdk';
import {TuiBadge} from '@taiga-ui/kit';
import {interval, NEVER, startWith} from 'rxjs';

@Component({
    standalone: true,
    imports: [AsyncPipe, TuiBadge, TuiLet],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected timer$ = isPlatformBrowser(inject(PLATFORM_ID))
        ? interval(1000).pipe(startWith(0))
        : NEVER;
}
```

#### With getter

**Template:**
```html
<div *tuiLet="getter as value">
<p>Calculated with getter value: {{ value }}</p>
<p> That can be used many times: <tui-badge>{{ value }}</tui-badge>
</p>
<p>And getter is called only once.</p>
</div>
```

**TypeScript:**
```ts
import {Component, DestroyRef, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLet} from '@taiga-ui/cdk';
import {TuiAlertService} from '@taiga-ui/core';
import {TuiBadge} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiBadge, TuiLet],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly destroyRef = inject(DestroyRef);
    private readonly alerts = inject(TuiAlertService);

    protected get getter(): string {
        this.alerts
            .open('Getter called')
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe();

        return '🐳';
    }
}
```
