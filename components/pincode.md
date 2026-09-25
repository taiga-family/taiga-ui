# Pincode

- **Package**: `KIT`
- **Type**: components

Masked mode via
`type="password"`
— entered digits render as filled dots

**Fast loading**
— response under 500ms. Enter
`1234`
for success, any other code for error

**Long loading**
— response over 700ms, auto-bounce while waiting. Enter
`1234`
for success, any other code for error

**Desktop dialog**
with auto-focused input and full verification flow. Same logic as Mobile, native keyboard input.
Enter
`1234`
for successful validation

**Mobile bottom sheet**
with a custom numeric pad and full verification flow —
`inputmode="none"`
suppresses the native keyboard. Enter
`1234`
for successful validation; wrong code triggers shake-clear-retry

### Example

```html
<tui-textfield>
<input tuiPincode [formControl]="control" [invalid]="invalid()" [maxLength]="length" [type]="type()" (confirmed)="confirmed.emitEvent($event)" (finished)="finished.emitEvent($event); onFinished()" />
</tui-textfield>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| type | `string` | masks each digit as a filled dot |
| [invalid] | `boolean \| null` | — shake and auto-clear |
| maxLength | `number` | number of cells, pending animation triggers once value reaches this length |

### API - Outputs

| Event | Type | Description |
|-------|------|-------------|
| (confirmed) | `void` | fires after the success wave, before dots collapse. Use to reveal a loader for the next-step transition |
| (finished) | `void` | fires at the end of the verification cycle — after success collapse or after invalid shake + auto-clear |

### Usage Examples

#### Basic

**Template:**
```html
<tui-textfield>
<input tuiPincode [(ngModel)]="value" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPincode} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiPincode],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = '';
}
```

#### Dots

Masked mode via `type="password"` — entered digits render as filled dots

**Template:**
```html
<tui-textfield>
<input tuiPincode type="password" [maxLength]="6" [(ngModel)]="value" />
</tui-textfield>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPincode} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiPincode],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = '';
}
```

#### Fast loading

Fast loading — response under 500ms. Enter `1234` for success, any other code for error

**Template:**
```html
@if (done()) { <div class="done">PIN verified ✓</div> } @else { <tui-textfield>
<input tuiPincode [invalid]="verification.value()" [(ngModel)]="pin" (confirmed)="done.set(true)" />
</tui-textfield> }
```

**TypeScript:**
```ts
import {Component, resource, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPincode} from '@taiga-ui/kit';

const CORRECT = '1234';
const FAST_LATENCY = 300;

async function fakeApiInvalidate(pin: string): Promise<boolean> {
    return new Promise((resolve) =>
        setTimeout(() => resolve(pin !== CORRECT), FAST_LATENCY),
    );
}

@Component({
    imports: [FormsModule, TuiPincode],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly verification = resource({
        request: () => this.pin(),
        loader: async ({request}) =>
            request.length === 4 ? fakeApiInvalidate(request) : null,
    });

    protected readonly done = signal(false);
    protected readonly pin = signal('');
}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: 1.5rem;
}
```

#### Long loading

Long loading — response over 700ms, auto-bounce while waiting. Enter `1234` for success, any other code for error

**Template:**
```html
@if (done()) { <div class="done">PIN verified ✓</div> } @else { <div class="field" [class.field_success]="verification.value() === false" >
<tui-loader class="loader" [inheritColor]="true" [loading]="verification.value() === false" />
<tui-textfield>
<input tuiPincode [invalid]="verification.value()" [(ngModel)]="pin" (finished)="onFinished()" />
</tui-textfield>
</div> }
```

**TypeScript:**
```ts
import {Component, resource, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLoader} from '@taiga-ui/core';
import {TuiPincode} from '@taiga-ui/kit';

const CORRECT = '1234';

async function fakeApiInvalidate(pin: string): Promise<boolean> {
    return new Promise((resolve) => setTimeout(() => resolve(pin !== CORRECT), 1000));
}

@Component({
    imports: [FormsModule, TuiLoader, TuiPincode],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly verification = resource({
        request: () => this.pin(),
        loader: async ({request}) =>
            request.length === 4 ? fakeApiInvalidate(request) : null,
    });

    protected readonly done = signal(false);
    protected readonly pin = signal('');

    protected onFinished(): void {
        if (this.verification.value() === false) {
            setTimeout(() => this.done.set(true), 2000);
        }
    }
}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: 1.5rem;
}

.done {
    color: var(--tui-text-positive);
    font-size: 1rem;
    font-weight: 500;
}

.field {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    block-size: 4rem;
}

tui-loader {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--tui-text-action);
    scale: 0;
    pointer-events: none;
}

.field_success tui-loader {
    animation: loaderIn 500ms cubic-bezier(0, 0, 0.58, 1) 2150ms forwards;
}

@keyframes loaderIn {
    0% {
        scale: 0;
    }

    30% {
        scale: 1.2;
    }

    100% {
        scale: 1;
    }
}
```

#### Desktop

Desktop dialog with auto-focused input and full verification flow. Same logic as Mobile, native keyboard input. Enter `1234` for successful validation

**Template:**
```html
<button tuiButton type="button" (click)="open.set(true)" > Open dialog </button>
<ng-template let-observer [tuiDialogOptions]="{size: 's'}" [(tuiDialog)]="open" >
<div class="content">
<span paymentSystem="mir" size="m" tuiThumbnailCard > 2206 </span>
<header tuiHeader="h5" class="heading" >
<h2 tuiTitle>Enter PIN</h2>
</header>
<div class="container">
<tui-textfield>
<input tuiAutoFocus tuiPincode type="password" [invalid]="verification.value()" [(ngModel)]="pin" (confirmed)="open.set(false); pin.set('')" />
</tui-textfield>
</div>
</div>
<footer class="footer">
<button appearance="flat" size="m" tuiButton type="button" (click)="observer.complete()" > Cancel </button>
</footer>
</ng-template>
```

**TypeScript:**
```ts
import {Component, resource, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiThumbnailCard} from '@taiga-ui/addon-commerce';
import {TuiAutoFocus} from '@taiga-ui/cdk';
import {TuiButton, TuiDialog, TuiTitle} from '@taiga-ui/core';
import {TuiPincode} from '@taiga-ui/kit';
import {TuiHeader} from '@taiga-ui/layout';

const CORRECT = '1234';

async function fakeApiInvalidate(pin: string): Promise<boolean> {
    return new Promise((resolve) => setTimeout(() => resolve(pin !== CORRECT), 1000));
}

@Component({
    imports: [
        FormsModule,
        TuiAutoFocus,
        TuiButton,
        TuiDialog,
        TuiHeader,
        TuiPincode,
        TuiThumbnailCard,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly verification = resource({
        request: () => this.pin(),
        loader: async ({request}) =>
            request.length === 4 ? fakeApiInvalidate(request) : null,
    });

    protected readonly open = signal(false);
    protected readonly pin = signal('');
}
```

**LESS:**
```less
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    padding: 1.5rem 1.5rem 0;
}

.heading {
    justify-content: center;
}

.container {
    display: flex;
    align-items: center;
    justify-content: center;
    block-size: 4rem;
}

.footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5rem;
    padding-block-start: 0.5rem;
}
```

#### Mobile

Mobile bottom sheet with a custom numeric pad and full verification flow — `inputmode="none"` suppresses the native keyboard. Enter `1234` for successful validation; wrong code triggers shake-clear-retry

**Template:**
```html
<button tuiButton type="button" (click)="open.set(true)" > Open sheet </button>
<ng-template let-observer [tuiSheetDialogOptions]="options" [(tuiSheetDialog)]="open" >
<header class="header">
<tui-app-bar>
<button tuiButton tuiSlot="start" type="button" (click)="observer.complete()" > Close </button>
</tui-app-bar>
</header>
<div class="content">
<span paymentSystem="mir" size="m" tuiThumbnailCard > 2206 </span>
<header tuiHeader="h5">
<h2 tuiTitle>Create a PIN</h2>
</header>
<div class="container">
<tui-textfield>
<input inputmode="none" tuiPincode type="password" [invalid]="verification.value()" [(ngModel)]="pin" (confirmed)="open.set(false); pin.set('')" />
</tui-textfield>
</div>
<div class="pad"> @for (key of keys; track key) { @if (key === '') { <span></span> } @else if (key === 'backspace') { <button type="button" class="key" [disabled]="verification.value() != null" (click)="onKey(key)" >
<tui-icon icon="@tui.delete" />
</button> } @else { <button type="button" class="key" [disabled]="verification.value() != null" (click)="onKey(key)" > {{ key }} </button> } } </div>
<button tuiLink type="button" (click)="observer.complete()" > Skip </button>
</div>
</ng-template>
```

**TypeScript:**
```ts
import {Component, resource, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiThumbnailCard} from '@taiga-ui/addon-commerce';
import {TuiSheetDialog, type TuiSheetDialogOptions} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiIcon, TuiLink, TuiTitle} from '@taiga-ui/core';
import {TuiPincode} from '@taiga-ui/kit';
import {TuiAppBar, TuiHeader} from '@taiga-ui/layout';

const CORRECT = '1234';

async function fakeApiInvalidate(pin: string): Promise<boolean> {
    return new Promise((resolve) => setTimeout(() => resolve(pin !== CORRECT), 1000));
}

@Component({
    imports: [
        FormsModule,
        TuiAppBar,
        TuiButton,
        TuiHeader,
        TuiIcon,
        TuiLink,
        TuiPincode,
        TuiSheetDialog,
        TuiThumbnailCard,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly verification = resource({
        request: () => this.pin(),
        loader: async ({request}) =>
            request.length === 4 ? fakeApiInvalidate(request) : null,
    });

    protected readonly open = signal(false);
    protected readonly pin = signal('');

    protected readonly keys = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '',
        '0',
        'backspace',
    ] as const;

    protected readonly options: Partial<TuiSheetDialogOptions> = {
        closable: false,
        bar: false,
        appearance: 'fullscreen',
    };

    protected onKey(key: string): void {
        if (this.verification.value() != null) {
            return;
        }

        const value = this.pin();

        if (key === 'backspace') {
            this.pin.set(value.slice(0, -1));

            return;
        }

        if (value.length >= 4) {
            return;
        }

        this.pin.set(`${value}${key}`);
    }
}
```

**LESS:**
```less
.header {
    margin-block-end: 1.5rem;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
}

.container {
    display: flex;
    align-items: center;
    justify-content: center;
    block-size: 4rem;
    margin-block-end: auto;
}

.pad {
    display: grid;
    grid-template-columns: repeat(3, 4.5rem);
    gap: 0.5rem 1.5rem;
    justify-items: center;
    margin-block-end: 0.5rem;
}

.key {
    display: flex;
    align-items: center;
    justify-content: center;
    inline-size: 4.5rem;
    block-size: 4.5rem;
    border: none;
    border-radius: 50%;
    background: transparent;
    font: 2.5rem/1 var(--tui-typography-family-display);
    color: var(--tui-text-primary);
    cursor: pointer;
    transition: background var(--tui-duration-short, 150ms);

    @media (pointer: fine) {
        &:hover {
            background: var(--tui-background-neutral-1-hover);
        }
    }

    &:focus-visible {
        outline: 0.125rem solid var(--tui-border-focus);
        outline-offset: 0.125rem;
    }

    &:active {
        background: var(--tui-background-neutral-1-pressed);
    }

    &:disabled {
        opacity: 0.4;
        cursor: default;
    }
}

tui-app-bar {
    align-self: stretch;
}
```
