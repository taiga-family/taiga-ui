# NotificationMiddle

- **Package**: `KIT`
- **Type**: components

A modal component to indicate an ongoing blocking action

### How to Use (Import)

```ts
import {TuiNotificationMiddle} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiNotificationMiddle,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<ng-template [(tuiNotificationMiddle)]="open">Loader with text</ng-template>
```

### Example

```html
<button tuiButton type="button" (click)="open.set(true)" > Show </button>
<ng-template [tuiNotificationMiddle]="open()" [tuiNotificationMiddleOptions]="{closable: closable}" (tuiNotificationMiddleChange)="open.set($event)" > Notification example <button size="s" tuiButton type="button" (click)="open.set(false)" > Close </button>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [closable] | `boolean` | Whether the notification can be closed by the user taping outside or pressing Escape |

### Usage Examples

#### Default

**Template:**
```html
<ng-template [tuiNotificationMiddleOptions]="{closable: true}" [(tuiNotificationMiddle)]="open" />
<button tuiButton type="button" (click)="open = true" > Show </button>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiNotificationMiddle} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiButton, TuiNotificationMiddle],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;
}
```

#### Content

**Template:**
```html
<ng-template [tuiNotificationMiddleOptions]="{closable: true}" [(tuiNotificationMiddle)]="text" > Loader with text </ng-template>
<ng-template [tuiNotificationMiddleOptions]="{closable: true}" [(tuiNotificationMiddle)]="icon" >
<img alt="" [src]="'@tui.user' | tuiIcon" /> Custom icon </ng-template>
<button tuiButton type="button" (click)="text = true" > Text </button> &nbsp; <button tuiButton type="button" (click)="icon = true" > Icon </button>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiIconPipe} from '@taiga-ui/core';
import {TuiNotificationMiddle} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiButton, TuiIconPipe, TuiNotificationMiddle],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected text = false;
    protected icon = false;
}
```

#### Transition

**Template:**
```html
<ng-template [tuiNotificationMiddle]="open()" (tuiNotificationMiddleChange)="open.set($event)" >
<ng-container *ngIf="loading(); else done">
<tui-loader tuiAnimated />
<div tuiAnimated>Please wait...</div>
</ng-container>
<ng-template #done>
<tui-avatar appearance="positive" src="@tui.check" tuiAnimated />
<div tuiAnimated>Operation successful!</div>
</ng-template>
</ng-template>
<button tuiButton type="button" (click)="onClick()" > Show </button>
```

**TypeScript:**
```ts
import {NgIf} from '@angular/common';
import {Component, signal} from '@angular/core';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_FALSE_HANDLER, TuiAnimated} from '@taiga-ui/cdk';
import {TuiButton, TuiLoader} from '@taiga-ui/core';
import {TuiAvatar, TuiNotificationMiddle} from '@taiga-ui/kit';
import {filter, map, startWith, switchMap, take, tap, timer} from 'rxjs';

@Component({
    standalone: true,
    imports: [NgIf, TuiAnimated, TuiAvatar, TuiButton, TuiLoader, TuiNotificationMiddle],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly open = signal(false);
    protected readonly loading = toSignal(
        toObservable(this.open).pipe(
            filter(Boolean),
            switchMap(() =>
                timer(3000, 2000).pipe(
                    take(2),
                    map(TUI_FALSE_HANDLER),
                    startWith(true),
                    tap({complete: () => this.open.set(false)}),
                ),
            ),
        ),
    );

    protected onClick(): void {
        this.open.set(true);
    }
}
```

#### Service

**Template:**
```html
<button tuiButton type="button" (click)="onClick()" > Show </button>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiNotificationMiddleService} from '@taiga-ui/kit';
import {bufferTime, first, startWith, switchMap, timer} from 'rxjs';

@Component({
    standalone: true,
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly notification = inject(TuiNotificationMiddleService);

    protected onClick(): void {
        this.notification
            .open('Loading...')
            .pipe(
                startWith(null),
                // Imitating a quick request
                switchMap(() => timer(100)),
                // Using minimal time to show a notification
                bufferTime(600),
                first(),
            )
            .subscribe();
    }
}
```
