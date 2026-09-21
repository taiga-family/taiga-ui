# Notification

- **Package**: `CORE`
- **Type**: components

A notification message that can be displayed inline or as an alert

### Example

```html
<div tuiNotification [appearance]="appearance.appearance" [icon]="icon" [size]="size" >
<div tuiTitle> Title <div tuiSubtitle>I'm a subtitle secondary text</div>
<footer>
<button tuiButton type="button" (click)="notifications.open('I am content', this).subscribe()" > Show popover </button>
</footer>
</div>
</div>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [size] | `TuiSizeS | TuiSizeL` | — |
| [icon] | `TuiStringHandler<string> | string` | icon name or a function to match appearance to the icon |
| [label] | `string` | heading |
| [data] | `I` | arbitrary input data for the notification |
| [autoClose] | `TuiNumberHandler<string> | number` | auto close timeout, 0 for no auto close |
| [closable] | `boolean` | display close button |
| [block] | `'start' | 'end'` | block position |
| [inline] | `'start' | 'center' | 'end'` | inline position |

### Usage Examples

#### Basic

Various sizes, visual options and content examples

**Template:**
```html
<div size="l" tuiNotification > Hello world <button iconStart="@tui.x" tuiIconButton type="button" > Close </button>
</div>
<div appearance="warning" size="m" tuiNotification >
<div tuiTitle [style.padding-inline-end.rem]="2" > I am title <div tuiSubtitle>I am content of the notification and I can even wrap to multiple lines.</div>
<div>
<button tuiButton type="button" > So what? </button>
<button tuiLink type="button" > Whatever </button>
</div>
</div>
<button iconStart="@tui.x" tuiIconButton type="button" > Close </button>
</div>
<div appearance="neutral" icon="" size="s" tuiNotification > Most boring notification </div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiLink, TuiNotification, TuiTitle} from '@taiga-ui/core';

@Component({
    imports: [TuiButton, TuiLink, TuiNotification, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
```

#### Options

Using DI to set default values

**Template:**
```html
<div tuiNotification>Works with token options</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiNotification, tuiNotificationOptionsProvider} from '@taiga-ui/core';

@Component({
    imports: [TuiNotification],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiNotificationOptionsProvider({
            icon: '@tui.alarm-clock',
            appearance: 'neutral',
            size: 's',
        }),
    ],
})
export default class Example {}
```

#### Interactive

Interactive tags and visual customization

**Template:**
```html
<button appearance="neutral" icon="@tui.heart" iconEnd="@tui.chevron-right" size="m" tuiNotification type="button" >
<span tuiTitle> Custom icon color <span tuiSubtitle>Vertically centered</span>
</span>
</button>
<a iconEnd="@tui.chevron-right" size="l" tuiNotification [routerLink]="routes.Toast" >
<span tuiTitle> Toasts <span tuiSubtitle>A notification as a toast</span>
</span>
</a>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {DemoRoute} from '@demo/routes';
import {TuiNotification, TuiTitle} from '@taiga-ui/core';

@Component({
    imports: [RouterLink, TuiNotification, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly routes = DemoRoute;
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

:host {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

button[tuiNotification]::before {
    .center-top();

    color: var(--tui-text-negative);
}
```

#### Directive

Using directive to show a popover notification

**Template:**
```html
<button size="m" tuiButton type="button" (click)="show.set(true)" > Show </button>
<ng-template [tuiNotificationOptions]="{label: 'Directive', autoClose: 0, closable: false}" [(tuiNotification)]="show" >
<span tuiSubtitle>This is a declarative directive alert</span>
<button tuiButton type="button" (click)="show.set(false)" > Close </button>
</ng-template>
```

**TypeScript:**
```ts
import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiNotification} from '@taiga-ui/core';

@Component({
    imports: [TuiButton, TuiNotification],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly show = signal(false);
}
```

#### Service

Using service to show a popover notification

**Template:**
```html
<button size="s" tuiButton type="button" (click)="notifications.open('Hello there', {label: 'Notification'}).subscribe()" > Show string </button> &ngsp; <button size="s" tuiButton type="button" (click)="onClick()" > Show component </button>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {type TuiPortalContext} from '@taiga-ui/cdk';
import {
    TuiButton,
    TuiLink,
    type TuiNotificationOptions,
    TuiNotificationService,
} from '@taiga-ui/core';
import {injectContext, PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {switchMap, takeUntil} from 'rxjs';

@Component({
    imports: [TuiAmountPipe, TuiButton, TuiLink],
    template: `
        <span tuiSubtitle>
            <em>Your balance:</em>
            {{ value | tuiAmount: 'RUB' }}
        </span>
        <div>
            <button
                tuiButton
                type="button"
                (click)="context.completeWith(value)"
            >
                Submit
            </button>
            <button
                tuiLink
                type="button"
                (click)="increaseBalance()"
            >
                Increase
            </button>
        </div>
    `,
    changeDetection,
})
class Alert {
    protected readonly context =
        injectContext<TuiPortalContext<TuiNotificationOptions<number>, number>>();

    protected value = this.context.data;

    protected increaseBalance(): void {
        this.value += 10;
    }
}

@Component({
    selector: 'example-4',
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly notifications = inject(TuiNotificationService);

    protected readonly notification = this.notifications
        .open<number>(new PolymorpheusComponent(Alert), {
            label: 'Heading is so long that it should be shown in two lines of text',
            data: 237,
            appearance: 'warning',
            autoClose: 0,
        })
        .pipe(
            switchMap((value) =>
                this.notifications.open(`Got a value — ${value}`, {label: 'Response'}),
            ),
            takeUntil(inject(Router).events),
        );

    protected onClick(): void {
        this.notification.subscribe();
    }
}
```
