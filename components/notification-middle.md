# NotificationMiddle

- **Package**: `KIT`
- **Type**: components

A modal component to indicate an ongoing blocking action

### Example

```html
<button tuiButton type="button" (click)="open.set(true)" > Show </button>
<ng-template [tuiNotificationMiddle]="open()" [tuiNotificationMiddleOptions]="{closable: closable}" (tuiNotificationMiddleChange)="open.set($event)" > Notification example <button size="s" tuiButton type="button" (click)="open.set(false)" > Close </button>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [closable] | `boolean` | whether the notification can be closed by the user tapping outside or pressing Escape |

### Usage Examples

#### Default

Basic empty loader.

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

Changing content and adding text to the card.

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

Dynamically updating content and closing with timeout. Don't forget Animated directive!

**Template:**
```html
<ng-template [tuiNotificationMiddle]="open()" (tuiNotificationMiddleChange)="open.set($event)" > @if (loading()) { <tui-loader tuiAnimated />
<div tuiAnimated>Please wait...</div> } @else { <div appearance="positive" tuiAnimated tuiAvatar="@tui.check" ></div>
<div tuiAnimated>Operation successful!</div> } </ng-template>
<button tuiButton type="button" (click)="onClick()" > Show </button>
```

**TypeScript:**
```ts
import {Component, signal} from '@angular/core';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_FALSE_HANDLER, TuiAnimated} from '@taiga-ui/cdk';
import {TuiButton, TuiLoader} from '@taiga-ui/core';
import {TuiAvatar, TuiNotificationMiddle} from '@taiga-ui/kit';
import {filter, map, startWith, switchMap, take, tap, timer} from 'rxjs';

@Component({
    imports: [TuiAnimated, TuiAvatar, TuiButton, TuiLoader, TuiNotificationMiddle],
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

Design specs require notification to be shown for a minimum of 600ms to prevent visual flickering for short requests.

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
