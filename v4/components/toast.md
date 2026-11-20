# Toast

- **Package**: `KIT`
- **Type**: components

Using inline with various content
Custom styles and more component

Showing toast as notification on top of the screen. By default 2 toasts can be shown simultaneously
on desktop and 1 on mobile, the rest are queued. This number is controlled by
`TUI_TOASTS_CONCURRENCY`
token

### How to Use (Import)

```ts
import {TuiToast} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiToast,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<!-- Inline -->
<div tuiToast>
  Notification
  <button
    tuiButton
    type="button"
  >
    Action
  </button>
</div>

<!-- Portal -->
<ng-template [(tuiToast)]="open">
  <button tuiToast>Interactive toast</button>
</ng-template>
```

### Example

```html
<button tuiButton type="button" (click)="toast.set(true)" > Show toast </button>
<ng-template [tuiToast]="toast()" [tuiToastOptions]="{appearance: appearance, autoClose: autoClose, closable: closable}" (tuiToastChange)="toast.set($event)" >
<div tuiToast>I am a toast</div>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [appearance] | `string` | Appearance of a toast |
| [autoClose] | `number` | Automatic close timeout, 0 for a permanent toast |
| [closable] | `boolean` | Show close button on desktop and close on swipe on mobile |
| [data] | `I` |  |

### Usage Examples

#### Basic

**Template:**
```html
<ng-container *ngFor="let platform of platforms">
<h2>{{ platform === 'web' ? 'Desktop' : 'Mobile' }}</h2>
<section [tuiPlatform]="platform">
<button tuiToast type="button" > Plain text interactive </button>
<div tuiToast> With action <button tuiButton type="button" > Action </button>
</div>
</section>
<section [tuiPlatform]="platform">
<div iconStart="@tui.info" tuiToast > With icon </div>
<div tuiToast>
<tui-icon appearance="accent" icon="@tui.box" tuiBadge /> With badge <button appearance="icon" iconStart="@tui.x" size="xs" tuiIconButton type="button" > Close </button>
</div>
</section>
<section [tuiPlatform]="platform">
<div tuiToast>
<tui-avatar [src]="'https://github.com/waterplea.png' | tuiFallbackSrc: '@tui.user' | async" /> Avatar </div>
<div tuiToast>
<tui-avatar [src]="'https://github.com/marsibarsi.png' | tuiFallbackSrc: '@tui.user' | async" /> Everything <button tuiButton type="button" > Action </button>
<button *ngIf="platform === 'web'" appearance="icon" iconStart="@tui.x" size="xs" tuiIconButton type="button" > Close </button>
</div>
</section>
<section [tuiPlatform]="platform">
<div iconStart="@tui.alarm-clock" tuiShrinkWrap="min(25rem, 100%)" tuiToast >
<tui-shrink-wrap> The text of the notification telling what happened is in three lines because there is a lot of information </tui-shrink-wrap>
<button tuiButton type="button" > Action </button>
</div>
</section>
</ng-container>
```

**TypeScript:**
```ts
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiButton, TuiFallbackSrcPipe, TuiIcon} from '@taiga-ui/core';
import {TuiAvatar, TuiBadge, TuiShrinkWrap, TuiToast} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        NgForOf,
        NgIf,
        TuiAvatar,
        TuiBadge,
        TuiButton,
        TuiFallbackSrcPipe,
        TuiIcon,
        TuiPlatform,
        TuiShrinkWrap,
        TuiToast,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly platforms = ['web', 'ios'] as const;
}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: var(--tui-background-base-alt);
    box-shadow: 0 0 0 100rem var(--tui-background-base-alt);
}

section {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
}

[tuiToast]::before {
    color: var(--tui-background-accent-1);
}
```

#### Customization

**Template:**
```html
<h2>Desktop</h2>
<section tuiPlatform="web">
<div tuiToast>
<tui-progress-circle size="xxs" [max]="100" [value]="value()" /> Sending to printer <button size="s" tuiButton type="button" (click)="trigger$.next(0)" > Restart </button>
</div>
<div tuiTheme="dark" tuiToast [style.background]="'#575B61'" >
<tui-loader [inheritColor]="true" /> Updating... </div>
</section>
<h2>Mobile</h2>
<section tuiPlatform="ios">
<div tuiToast>
<tui-loader /> Updating... </div>
<div iconStart="@tui.circle-check" tuiTheme="dark" tuiToast [style.background]="'var(--tui-text-action)'" > Added <button appearance="secondary-grayscale" size="s" tuiButton type="button" > Label </button>
</div>
</section>
```

**TypeScript:**
```ts
import {isPlatformServer} from '@angular/common';
import {Component, inject, PLATFORM_ID} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_E2E, TuiPlatform} from '@taiga-ui/cdk';
import {TuiButton, TuiLoader} from '@taiga-ui/core';
import {TuiProgressCircle, TuiToast} from '@taiga-ui/kit';
import {BehaviorSubject, of, switchMap, take, timer} from 'rxjs';

@Component({
    standalone: true,
    imports: [TuiButton, TuiLoader, TuiPlatform, TuiProgressCircle, TuiToast],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly trigger$ = new BehaviorSubject(0);
    protected readonly value = toSignal(
        inject(TUI_IS_E2E) || isPlatformServer(inject(PLATFORM_ID))
            ? of(30)
            : this.trigger$.pipe(switchMap(() => timer(0, 200).pipe(take(100)))),
        {initialValue: 0},
    );
}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: var(--tui-background-base-alt);
    box-shadow: 0 0 0 100rem var(--tui-background-base-alt);
}

section {
    display: flex;
    gap: 1rem;
}
```

#### Service

**Template:**
```html
<button tuiButton type="button" (click)="primitive()" > String </button>
<button tuiButton type="button" (click)="template.set(true)" > Template </button>
<button tuiButton type="button" (click)="component()" > Component </button>
<ng-template [tuiToast]="template()" [tuiToastOptions]="{closable: false}" (tuiToastChange)="template.set($event)" >
<a href="https://github.com/taiga-family/taiga-ui" iconEnd="@tui.external-link" iconStart="@tui.github" rel="noreferrer noopener" target="_blank" tuiToast > Check out source code </a>
</ng-template>
```

**TypeScript:**
```ts
import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiPopover} from '@taiga-ui/cdk';
import {type TuiAlertOptions, TuiButton, TuiIcon} from '@taiga-ui/core';
import {TuiToast, TuiToastService} from '@taiga-ui/kit';
import {injectContext, PolymorpheusComponent} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    imports: [TuiIcon, TuiToast],
    template: `
        <div tuiToast>
            <tui-icon
                icon="@tui.triangle-alert"
                [style.color]="'var(--tui-status-negative)'"
            />
            Lost connection.
            <br />
            Restore your internet to continue
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Toast {
    protected readonly context =
        injectContext<TuiPopover<TuiAlertOptions<void>, boolean>>();
}

@Component({
    standalone: true,
    imports: [TuiButton, TuiToast],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly toast = inject(TuiToastService);
    protected readonly template = signal(false);

    protected primitive(): void {
        this.toast
            .open(
                'Alarm is successfully set for next <b>Sunday</b>, March 8, 2026, 10:00',
                {
                    autoClose: 0,
                    data: '@tui.alarm-clock',
                },
            )
            .subscribe();
    }

    protected component(): void {
        this.toast.open(new PolymorpheusComponent(Toast), {closable: false}).subscribe();
    }
}
```

**LESS:**
```less
:host {
    display: flex;
    gap: 1rem;
}
```
