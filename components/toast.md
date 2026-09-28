# Toast

- **Package**: `KIT`
- **Type**: components

Using inline with various content. Use
`ShrinkWrap`
for balanced tight wrapping.

Custom styles and more component

Showing toast as notification on top of the screen. By default 2 toasts can be shown
simultaneously on desktop and 1 on mobile, the rest are queued. This number is controlled by
`TUI_TOAST_CONCURRENCY`
token

### Example

```html
<button tuiButton type="button" (click)="toast.set(true)" > Show toast </button>
<ng-template [tuiToast]="toast()" [tuiToastOptions]="{appearance, autoClose, closable, block}" (tuiToastChange)="toast.set($event)" >
<div tuiToast>I am a toast</div>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [appearance] | `string` | appearance of a toast |
| [autoClose] | `number` | automatic close timeout, 0 for a permanent toast |
| [closable] | `boolean` | show close button on desktop and close on swipe on mobile |
| [block] | `'start' \| 'end'` | block position |
| [data] | `I` |  |

### Usage Examples

#### Basic

Using inline with various content. Use `ShrinkWrap` for balanced tight wrapping.

**Template:**
```html
@for (platform of platforms; track $index) { <h2>{{ platform === 'web' ? 'Desktop' : 'Mobile' }}</h2>
<section [tuiPlatform]="platform">
<button tuiToast type="button" > Plain text interactive </button>
<div tuiToast> With action <button tuiButton type="button" > Action </button>
</div>
</section>
<section [tuiPlatform]="platform">
<div iconStart="@tui.info" tuiToast > With icon </div>
<div tuiToast>
<tui-icon appearance="accent" iconStart="@tui.box" tuiBadge /> With badge <button tuiButtonX>Close</button>
</div>
</section>
<section [tuiPlatform]="platform">
<div tuiToast>
<div tuiAvatar="@tui.user">
<img alt="" src="https://github.com/waterplea.png" />
</div> Avatar </div>
<div tuiToast>
<div tuiAvatar="@tui.user">
<img alt="" src="https://github.com/marsibarsi.png" />
</div> Everything <button tuiButton type="button" > Action </button> @if (platform === 'web') { <button tuiButtonX>Close</button> } </div>
</section>
<section [tuiPlatform]="platform">
<div iconStart="@tui.alarm-clock" tuiShrinkWrap="min(25rem, 100%)" tuiToast >
<tui-shrink-wrap> The text of the notification telling what happened is in three lines because there is a lot of information </tui-shrink-wrap>
<button tuiButton type="button" > Action </button>
</div>
</section> }
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiButton, TuiButtonX} from '@taiga-ui/core';
import {TuiAvatar, TuiBadge, TuiShrinkWrap, TuiToast} from '@taiga-ui/kit';

@Component({
    imports: [
        TuiAvatar,
        TuiBadge,
        TuiButton,
        TuiButtonX,
        TuiPlatform,
        TuiShrinkWrap,
        TuiToast,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
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

Custom styles and more component

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
import {WA_IS_E2E} from '@ng-web-apis/platform';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiButton, TuiLoader} from '@taiga-ui/core';
import {TuiProgressCircle, TuiToast} from '@taiga-ui/kit';
import {BehaviorSubject, of, switchMap, take, timer} from 'rxjs';

@Component({
    imports: [TuiButton, TuiLoader, TuiPlatform, TuiProgressCircle, TuiToast],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly trigger$ = new BehaviorSubject(0);

    protected readonly value = toSignal(
        inject(WA_IS_E2E) || isPlatformServer(inject(PLATFORM_ID))
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
    align-items: center;
}
```

#### Service

Showing toast as notification on top of the screen. By default 2 toasts can be shown simultaneously on desktop and 1 on mobile, the rest are queued. This number is controlled by `TUI_TOAST_CONCURRENCY` token

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
import {TuiButton, TuiIcon} from '@taiga-ui/core';
import {TuiToast, TuiToastService} from '@taiga-ui/kit';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';

@Component({
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
export class Toast {}

@Component({
    imports: [TuiButton, TuiToast],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly toast = inject(TuiToastService);
    protected readonly template = signal(false);

    protected primitive(): void {
        this.toast
            .open('Alarm is set for next <b>Sunday</b>, March 8, 2026, 10:00', {
                autoClose: 0,
                data: '@tui.alarm-clock',
            })
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

#### Custom appearance

**Template:**
```html
<button tuiButton type="button" (click)="component()" > Component </button>
```

**TypeScript:**
```ts
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiPortalContext} from '@taiga-ui/cdk';
import {TuiButton, TuiIcon} from '@taiga-ui/core';
import {TuiToast, type TuiToastOptions, TuiToastService} from '@taiga-ui/kit';
import {injectContext, PolymorpheusComponent} from '@taiga-ui/polymorpheus';

@Component({
    imports: [TuiIcon, TuiToast],
    template: `
        <div
            tuiToast
            [attr.data-appearance]="appearance"
        >
            <tui-icon
                icon="@tui.triangle-alert"
                [style.color]="'var(--tui-status-negative)'"
            />
            Lost connection.
            <br />
            Restore your internet to continue
        </div>
    `,
    styles: `
        [data-appearance='custom-warning'] {
            background: var(--tui-service-autofill-background);
        }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Toast {
    protected readonly appearance =
        injectContext<TuiPortalContext<TuiToastOptions<void>>>().appearance;
}

@Component({
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly toast = inject(TuiToastService);

    protected component(): void {
        this.toast
            .open(new PolymorpheusComponent(Toast), {
                closable: false,
                appearance: 'custom-warning',
            })
            .subscribe();
    }
}
```
