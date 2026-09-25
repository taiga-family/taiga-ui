# Popout

- **Package**: `EXPERIMENTAL`
- **Type**: components

Using service to show content in a new window.

### Usage Examples

#### Popout window

**Template:**
```html
<tui-textfield>
<label tuiLabel>Bidirectional communication</label>
<input tuiInput [(ngModel)]="value" />
</tui-textfield>
<p>
<button tuiButton type="button" (click)="toggle(template)" > Toggle popout window </button>
</p>
<ng-template #template>
<section tuiCardLarge>
<tui-textfield>
<label tuiLabel>Bidirectional communication</label>
<input tuiAutoFocus tuiInput [(ngModel)]="value" />
</tui-textfield>
</section>
</ng-template>
```

**TypeScript:**
```ts
import {Component, inject, signal, type TemplateRef} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiAutoFocus} from '@taiga-ui/cdk';
import {TuiButton, TuiInput} from '@taiga-ui/core';
import {TuiPopoutService} from '@taiga-ui/experimental';
import {TuiCard} from '@taiga-ui/layout';
import {type Subscription} from 'rxjs';

@Component({
    imports: [FormsModule, TuiAutoFocus, TuiButton, TuiCard, TuiInput],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    private readonly popout = inject(TuiPopoutService);
    private sub: Subscription | null = null;

    protected readonly value = signal('Value');

    protected toggle(content: TemplateRef<any>): void {
        if (this.sub) {
            this.sub.unsubscribe();
            this.sub = null;
        } else {
            this.sub = this.popout
                .open(content, {
                    title: 'Page',
                    features: {
                        width: 320,
                        height: 160,
                        left: 600,
                        top: 300,
                    },
                })
                .subscribe({
                    complete: () => {
                        this.sub = null;
                    },
                });
        }
    }
}
```

#### Picture in Picture

**Template:**
```html
@if (!supported) { <p appearance="warning" tuiNotification > Document Picture-in-Picture is not supported in your browser, fallback to regular popout window will be used </p> } <button tuiButton type="button" [disabled]="!!subscription()" (click)="open()" > Open Picture-in-Picture </button>
```

**TypeScript:**
```ts
import {Component, inject, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {WA_DOCUMENT_PIP} from '@ng-web-apis/experimental';
import {TuiButton, TuiNotification} from '@taiga-ui/core';
import {TuiPopoutService} from '@taiga-ui/experimental';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {type Subscription} from 'rxjs';

import {Popout} from './popout';

@Component({
    imports: [TuiButton, TuiNotification],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected readonly popout = inject(TuiPopoutService);
    protected readonly supported = !!inject(WA_DOCUMENT_PIP)?.requestWindow;
    protected readonly subscription = signal<Subscription | null>(null);

    protected open(): void {
        this.subscription.set(
            this.popout
                .open(new PolymorpheusComponent(Popout), {
                    pip: true,
                    features: {height: 480, width: 320},
                })
                .subscribe({complete: () => this.subscription.set(null)}),
        );
    }
}
```

#### Directive

**Template:**
```html
<button iconStart="@tui.phone" tuiButton type="button" (click)="open.set(true)" > Call us </button>
<ng-template let-observer [tuiPopoutOptions]="{pip: true, features: {height: 480, width: 320}}" [(tuiPopout)]="open" >
<main tuiTheme="dark">
<div size="xl" tuiAvatar="@tui.user" ></div>
<header tuiHeader="body-l">
<hgroup tuiTitle>
<h1>Taiga Headquarters</h1>
<p tuiSubtitle>Calling...</p>
</hgroup>
</header>
<section>
<button appearance="warning" size="l" title="Headset" tuiAvatar="@tui.headset" type="button" ></button>
<button appearance="negative" size="l" title="Hang up" tuiAvatar="@tui.phone-off" type="button" (click)="observer.complete()" ></button>
</section>
</main>
</ng-template>
```

**TypeScript:**
```ts
import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiPopout} from '@taiga-ui/experimental';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [TuiAvatar, TuiButton, TuiHeader, TuiPopout, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Example {
    protected readonly open = signal(false);
}
```

**LESS:**
```less
main {
    display: grid;
    block-size: 100vh;
    place-items: center;
    place-content: center;
    grid-auto-rows: min-content;
    gap: 2rem;
    padding: 2rem;
    box-sizing: border-box;
    background: var(--tui-background-base);
}

section {
    display: flex;
    gap: 1rem;
}

[tuiTitle] {
    text-align: center;
}
```
