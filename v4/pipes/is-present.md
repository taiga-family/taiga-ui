# IsPresent

- **Package**: `CDK`
- **Type**: pipes

Pipe wrapper for `IsPresent` function

### How to Use (Import)

```ts
import {TuiIsPresentPipe} from '@taiga-ui/cdk';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiIsPresentPipe,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<div *ngIf="item | tuiIsPresent">{{item}}</div>
```

### Usage Examples

#### Usage

**Template:**
```html
<ng-container *tuiLet="count$ | async as count">
<div *ngIf="count | tuiIsPresent; else loading"> count is <code>{{ count | json }}</code>
</div>
<ng-template #loading>
<div> count is <code>{{ count | json }}</code> while it's loading </div>
</ng-template>
</ng-container>
<button size="m" tuiButton type="button" class="tui-space_top-4" (click)="loadCount()" > Load count </button>
```

**TypeScript:**
```ts
import {AsyncPipe, JsonPipe, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIsPresentPipe, TuiLet} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {delayWhen, of, Subject} from 'rxjs';

@Component({
    standalone: true,
    imports: [AsyncPipe, JsonPipe, NgIf, TuiButton, TuiIsPresentPipe, TuiLet],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly loadCountSubject = new Subject<void>();

    protected readonly count$ = of(0).pipe(delayWhen(() => this.loadCountSubject));

    protected loadCount(): void {
        this.loadCountSubject.next();
        this.loadCountSubject.complete();
    }
}
```
