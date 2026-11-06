# Alert

- **Package**: `CORE`
- **Type**: components

Built-in implementation of notifications Position on screen can be configured by providing margins with `TUI_ALERT_POSITION` token. Default value is `2rem 3rem 0 auto` .

### Example

```html
<button size="m" tuiButton type="button" (click)="showNotification()" > Show </button>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [content] | `PolymorpheusContent` | Content |
| [appearance] | `string` | Appearance |
| [label] | `string` | Heading |
| [data] | `number` |  |
| [autoClose] | `TuiHandler | number` | Auto close timeout, 0 for no auto close |
| [closeable] | `boolean` | Has close button |
| [icon] | `PolymorpheusContent` | Icon |

```ts
import {TuiAlertService} from '@taiga-ui/core';
//...

export class Example {
  private readonly alerts = inject(TuiAlertService);

  constructor() {
    //...

    this.alerts.open('Notification').subscribe({
      complete: () => {
        console.log('Notification is closed');
      },
    });
  }
}
```

```ts
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {TuiAlertService} from '@taiga-ui/core';
import {CustomNotification} from './custom-notification.component';
import {inject} from '@angular/core';

//...

export class Example {
  private readonly alerts = inject(TuiAlertService);

  constructor() {
    //...

    this.alerts.open(new PolymorpheusComponent(CustomNotificationComponent)).subscribe({
      complete: () => {
        console.log('Notification is closed');
      },
    });
  }
}
```

```ts
import {TuiAlertOptions} from '@taiga-ui/core';
import {TuiPopover} from '@taiga-ui/cdk';
import {POLYMORPHEUS_CONTEXT} from '@taiga-ui/polymorpheus';

//...

export class NotificationExample {
  private readonly context: TuiPopover<TuiAlertOptions<boolean>, boolean> = inject(POLYMORPHEUS_CONTEXT);

  ok() {
    this.context.completeWith(true);
  }

  cancel() {
    this.context.completeWith(false);
  }
}
```

```ts
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {TuiAlertService} from '@taiga-ui/core';
import {inject, INJECTOR} from '@angular/core';

import {CustomNotification} from './custom-notification.component';

//...
export class Example {
  constructor() {
    //...
    inject(TuiAlertService)
      .open(new PolymorpheusComponent(CustomNotification, inject(INJECTOR)), {
        label: 'Heading',
      })
      .subscribe();
  }

  //...
}
```

```ts
import {tuiAlertOptionsProvider} from '@taiga-ui/core';

// ...

@Component({
  standalone: true,
  providers: [
    tuiAlertOptionsProvider({
      label: ({status}: any) => status[0].toUpperCase() + status.slice(1),
      appearance: 'negative',
      autoClose: 7000,
    }),
  ],
  //  ...
})
export class Example {}
```

### Usage Examples

#### Text

**Template:**
```html
<button size="m" tuiButton type="button" (click)="showNotification()" > Show </button>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService, TuiButton} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiAlertService);

    protected showNotification(): void {
        this.alerts
            .open('Basic <strong>HTML</strong>', {label: 'With a heading!'})
            .subscribe();
    }
}
```

#### Template

**Template:**
```html
<p> Your balance: <span>{{ money | tuiAmount: 'RUB' | async }}</span>
</p>
<button size="m" tuiButton type="button" class="tui-space_right-3" (click)="showWithdrawAlert()" > Withdraw </button>
<button size="m" tuiButton type="button" class="tui-space_right-3" (click)="showDepositAlert()" > Add </button>
<p>
<button size="m" tuiButton type="button" (click)="withdraw()" > Withdraw&nbsp; <span>{{ 100 | tuiAmount: 'RUB' | async }}</span>
</button>
</p>
<ng-template #withdrawTemplate="polymorpheus" polymorpheus >
<p>Notifications can be shown with template</p>
<p> Your balance: <span>{{ money | tuiAmount: 'RUB' | async }}</span>
</p>
<button tuiButton type="button" (click)="withdraw()" > Withdraw&nbsp; <span>{{ 100 | tuiAmount: 'RUB' | async }}</span>
</button>
</ng-template>
<ng-template #depositTemplate="polymorpheus" polymorpheus >
<p> If there are many templates, you can use <code>ViewChildren</code> instead of <code>ViewChild</code> or set them IDs with "#" (see code of this sample) </p>
<p> Your balance: <span>{{ money | tuiAmount: 'RUB' | async }}</span>
</p>
<button tuiButton type="button" (click)="deposit()" >
<span> Add&nbsp; <span>{{ 100 | tuiAmount: 'RUB' | async }}</span>
</span>
</button>
</ng-template>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component, inject, type TemplateRef, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {type TuiAlertContext, TuiAlertService, TuiButton} from '@taiga-ui/core';
import {PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    imports: [AsyncPipe, PolymorpheusTemplate, TuiAmountPipe, TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiAlertService);

    @ViewChild('withdrawTemplate')
    protected withdrawTemplate?: TemplateRef<TuiAlertContext>;

    @ViewChild('depositTemplate')
    protected depositTemplate?: TemplateRef<TuiAlertContext>;

    protected money = 1000;

    protected showWithdrawAlert(): void {
        this.alerts
            .open(this.withdrawTemplate || '', {
                label: 'A template sample',
                appearance: 'warning',
                autoClose: 0,
            })
            .subscribe();
    }

    protected showDepositAlert(): void {
        this.alerts
            .open(this.depositTemplate || '', {
                label: 'A template sample',
                appearance: 'positive',
                autoClose: 0,
            })
            .subscribe();
    }

    protected withdraw(): void {
        this.money -= 100;
    }

    protected deposit(): void {
        this.money += 100;
    }
}
```

#### Component

**Template:**
```html
<p>This notification will be removed after router change (see TypeScript tab)</p>
<button size="m" tuiButton type="button" (click)="showNotification()" > Show </button>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiPopover} from '@taiga-ui/cdk';
import {type TuiAlertOptions, TuiAlertService, TuiButton} from '@taiga-ui/core';
import {injectContext, PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {switchMap, takeUntil} from 'rxjs';

@Component({
    standalone: true,
    imports: [NgForOf, TuiButton],
    template: `
        <p>Yes?</p>
        <button
            *ngFor="let response of [true, false]"
            appearance="outline-grayscale"
            size="s"
            tuiButton
            type="button"
            class="tui-space_right-1"
            (click)="context.completeWith(response)"
        >
            {{ response ? 'Yes' : 'No' }}
        </button>
    `,
    changeDetection,
})
export class AlertExample {
    protected readonly context =
        injectContext<TuiPopover<TuiAlertOptions<void>, boolean>>();
}

@Component({
    standalone: true,
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiAlertService);
    private readonly notification = this.alerts
        .open<boolean>(new PolymorpheusComponent(AlertExample), {
            label: 'Question',
            appearance: 'negative',
            autoClose: 0,
        })
        .pipe(
            switchMap((response) =>
                this.alerts.open(`Got a value — ${response}`, {label: 'Information'}),
            ),
            takeUntil(inject(Router).events),
        );

    protected showNotification(): void {
        this.notification.subscribe();
    }
}
```

#### Component with data

**Template:**
```html
<button size="m" tuiButton type="button" (click)="showNotification()" > Show </button>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {type TuiPopover} from '@taiga-ui/cdk';
import {type TuiAlertOptions, TuiAlertService, TuiButton, TuiLink} from '@taiga-ui/core';
import {injectContext, PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {switchMap, takeUntil} from 'rxjs';

@Component({
    standalone: true,
    imports: [AsyncPipe, TuiAmountPipe, TuiButton, TuiLink],
    template: `
        <span tuiSubtitle>
            <em>Your balance:</em>
            {{ value | tuiAmount: 'RUB' | async }}
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
export class AlertExampleWithData {
    protected readonly context =
        injectContext<TuiPopover<TuiAlertOptions<number>, number>>();

    protected value = this.context.data;

    protected increaseBalance(): void {
        this.value += 10;
    }
}

@Component({
    standalone: true,
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiAlertService);
    private readonly notification = this.alerts
        .open<number>(new PolymorpheusComponent(AlertExampleWithData), {
            label: 'Heading is so long that it should be shown in two lines of text',
            data: 237,
            appearance: 'warning',
            autoClose: 0,
        })
        .pipe(
            switchMap((response) =>
                this.alerts.open(`Got a value — ${response}`, {label: 'Information'}),
            ),
            takeUntil(inject(Router).events),
        );

    protected showNotification(): void {
        this.notification.subscribe();
    }
}
```

#### Component with custom label

**Template:**
```html
<button size="m" tuiButton type="button" (click)="showNotification()" > Using function </button>
<p>
<button size="m" tuiButton type="button" (click)="showNotificationWithCustomLabel()" > Using component </button>
</p>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiPopover} from '@taiga-ui/cdk';
import {type TuiAlertOptions, TuiAlertService, TuiButton, TuiIcon} from '@taiga-ui/core';
import {
    injectContext,
    PolymorpheusComponent,
    PolymorpheusOutlet,
    PolymorpheusTemplate,
} from '@taiga-ui/polymorpheus';
import {takeUntil} from 'rxjs';

@Component({
    standalone: true,
    imports: [TuiIcon],
    template: `
        <label style="display: flex; align-items: center">
            <em>From custom label component with</em>
            <tui-icon icon="@tui.heart" />
        </label>
    `,
    changeDetection,
})
class CustomLabel {}

@Component({
    standalone: true,
    imports: [PolymorpheusOutlet, PolymorpheusTemplate],
    template: `
        <h4>Start content</h4>
        <ng-container *polymorpheusOutlet="context.label as text; context: context">
            {{ text }}
        </ng-container>
        <h4>End content</h4>
    `,
    changeDetection,
})
class AlertExampleWithCustomLabel {
    protected readonly context =
        injectContext<TuiPopover<TuiAlertOptions<unknown>, boolean>>();
}

@Component({
    standalone: true,
    selector: 'tui-alerts-example-5',
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly router = inject(Router);
    private readonly alerts = inject(TuiAlertService);

    private readonly notification = this.alerts
        .open(new PolymorpheusComponent(AlertExampleWithCustomLabel), {
            label: ({appearance}) =>
                appearance === 'negative'
                    ? 'Error label from function'
                    : 'Info label from function',
            appearance: 'negative',
            autoClose: 0,
        })
        .pipe(takeUntil(this.router.events));

    private readonly notificationWithCustomLabel = this.alerts
        .open(new PolymorpheusComponent(AlertExampleWithCustomLabel), {
            label: new PolymorpheusComponent(CustomLabel),
            appearance: 'warning',
            autoClose: 0,
        })
        .pipe(takeUntil(this.router.events));

    protected showNotification(): void {
        this.notification.subscribe();
    }

    protected showNotificationWithCustomLabel(): void {
        this.notificationWithCustomLabel.subscribe();
    }
}
```

#### Directive

**Template:**
```html
<button size="m" tuiButton type="button" (click)="show = true" > Show </button>
<ng-template [tuiAlertOptions]="{label: 'Directive', autoClose: 0, closeable: false}" [(tuiAlert)]="show" >
<span tuiSubtitle>This is a declarative directive alert</span>
<button tuiButton type="button" (click)="show = false" > Close </button>
</ng-template>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlert, TuiButton} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'tui-alerts-example-6',
    imports: [TuiAlert, TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected show = false;
}
```

#### Concurrency limit

**Template:**
```html
<button size="m" tuiButton type="button" (click)="showNotification()" > Show </button>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService, TuiButton} from '@taiga-ui/core';
import {mergeAll, type Observable, Subject} from 'rxjs';

const MAX_CONCURRENT = 3;

@Component({
    standalone: true,
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiAlertService);
    private readonly queue$ = new Subject<Observable<unknown>>();
    private i = 0;

    constructor() {
        this.queue$.pipe(mergeAll(MAX_CONCURRENT), takeUntilDestroyed()).subscribe();
    }

    protected showNotification(): void {
        this.queue$.next(
            this.alerts.open(
                `It is impossible to show more than ${MAX_CONCURRENT} alerts concurrently!<br/>` +
                    `<strong>Index: ${this.i++}</strong>`,
                {label: 'Use power of RxJS!'},
            ),
        );
    }
}
```

This example demonstrates how to limit maximum number of alert being shown to concurrently (it uses
[`mergeAll`](https://rxjs.dev/api/index/function/mergeAll)
RxJS-operator to achieve it). Just frequently click on the button to see it in action.

- Use service
`open`
method and subscribe to
`Observable`

- To pass notification with custom content, you can use
`your template`
.

- You can also customize notification logic with a component. Inject
`POLYMORPHEUS_CONTEXT`
into the component to get context input data and to output results. It has the following interface:
`, O>'">`
, where
`O`
is output data type and
`I`
is input data type.

- Use
`new PolymorpheusComponent(CustomNotificationComponent)`
to show notification component with a service:

- Use
`completeWith`
method to control notification from itself:

- If you use it from lazy loading modules, and want to reach for some local providers, you can pass
`Injector`
into
`new PolymorpheusComponent`
of your alert component.

- You can customize default alert options by providing
`TUI_ALERT_OPTIONS`
injection token globally across your app.
