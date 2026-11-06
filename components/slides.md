# Slides

- **Package**: `LAYOUT`
- **Type**: components

A component for displaying dynamic content animated between states. Use negative value for `tuiSlides` to indicate backward direction, positive for forward direction and 0 for static crossfade. Important: each child must be exactly one DOM element.

### Example

```html
<tui-textfield [style.width.rem]="15">
<label tuiLabel>Current slide</label>
<input tuiInputNumber [max]="2" [min]="0" [step]="1" [(ngModel)]="current" />
</tui-textfield>
<p [tuiSlides]="direction"> @for (_ of '-'.repeat(3); track $index) { @if ($index === current) { <div>Slide #{{ $index }}</div> } } </p>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [tuiSlides] | `number` | transition direction |

### Usage Examples

#### Crossfade

Static crossfading of slides with slight delay for smoother overlap.

**Template:**
```html
<div tuiGroup>
<button appearance="secondary" iconStart="@tui.chevron-left" size="m" tuiIconButton type="button" [disabled]="!index" (click)="index = index - 1" > Previous </button>
<button appearance="secondary" iconStart="@tui.chevron-right" size="m" tuiIconButton type="button" [disabled]="index === items.length - 1" (click)="index = index + 1" > Next </button>
</div>
<tui-elastic-container>
<section tuiSlides> @for (item of items; track item) { @if ($index === index) { <div tuiTitle> {{ item }} <div tuiSubtitle>{{ item.repeat(10) }}</div>
</div> } } </section>
</tui-elastic-container>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiGroup, TuiTitle} from '@taiga-ui/core';
import {TuiElasticContainer, TuiSlides} from '@taiga-ui/layout';

@Component({
    imports: [TuiButton, TuiElasticContainer, TuiGroup, TuiSlides, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = ['First slide ', 'Second slide ', 'Third slide '];
    protected index = 0;
}
```

**LESS:**
```less
[tuiGroup] {
    inline-size: fit-content;
    margin: 0 auto 1rem;
}

[tuiSubtitle] {
    color: var(--tui-text-secondary);
}

[tuiTitle] {
    --tui-duration: 0.6s;

    animation-delay: 0.3s;

    &.tui-leave {
        animation-delay: 0s;
    }
}
```

#### Stepper

Navigating back and forth using Stepper .

**Template:**
```html
<tui-stepper [activeItemIndex]="index" (activeItemIndexChange)="onStep($event)" >
<button tuiStep>Personal details</button>
<button tuiStep>Shipping address</button>
<button tuiStep>Payment info</button>
</tui-stepper>
<tui-elastic-container>
<section [tuiSlides]="direction"> @for (form of forms; track form; let i = $index) { @if (i === index) { <form appearance="floating" tuiCardLarge tuiForm [formGroup]="form" [id]="`form_${i}`" (ngSubmit)="onSubmit()" >
<header tuiHeader>
<h2 tuiTitle> Registration form <span tuiSubtitle>Tell us about yourself</span>
</h2>
</header> @for (control of form.controls | keyvalue; track control; let j = $index) { <tui-textfield>
<label tuiLabel>{{ control.key }}</label>
<input tuiInput [formControlName]="control.key" [tuiAutoFocus]="!!index && !j" />
</tui-textfield> } </form> } } </section>
</tui-elastic-container>
<footer>
<button appearance="secondary" tuiButton type="button" [disabled]="!index" (click)="index = index - 1" > Back </button>
<button tuiButton type="submit" [attr.form]="`form_${index}`" > Next </button>
</footer>
```

**TypeScript:**
```ts
import {KeyValuePipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAutoFocus, tuiMarkControlAsTouchedAndValidate} from '@taiga-ui/cdk';
import {TuiButton, TuiInput, TuiTitle} from '@taiga-ui/core';
import {TuiStepper} from '@taiga-ui/kit';
import {
    TuiCard,
    TuiElasticContainer,
    TuiForm,
    TuiHeader,
    TuiSlides,
} from '@taiga-ui/layout';

@Component({
    imports: [
        KeyValuePipe,
        ReactiveFormsModule,
        TuiAutoFocus,
        TuiButton,
        TuiCard,
        TuiElasticContainer,
        TuiForm,
        TuiHeader,
        TuiInput,
        TuiSlides,
        TuiStepper,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected index = 0;
    protected direction = 0;

    protected readonly forms = [
        new FormGroup({
            Name: new FormControl('', Validators.required),
            Surname: new FormControl('', Validators.required),
        }),
        new FormGroup({
            Country: new FormControl('', Validators.required),
            City: new FormControl('', Validators.required),
            Address: new FormControl('', Validators.required),
        }),
        new FormGroup({
            Card: new FormControl('', Validators.required),
            Value: new FormControl('', Validators.required),
        }),
    ];

    protected onStep(step: number): void {
        this.direction = step - this.index;
        this.index = step;
    }

    protected onSubmit(): void {
        tuiMarkControlAsTouchedAndValidate(this.forms[this.index]!);

        if (this.forms[this.index]?.invalid) {
            return;
        }

        this.direction = 1;
        this.index = Math.min(this.index + 1, this.forms.length - 1);
    }
}
```

**LESS:**
```less
tui-elastic-container {
    padding: 2rem;
    margin: 0 -2rem;
}

footer {
    display: flex;
    justify-content: space-between;
}
```

#### Routing

Animating nested routes, adding Animated to host directives of route component is required.

**Template:**
```html
<tui-tabs [activeItemIndex]="-1">
<a routerLink="1" routerLinkActive tuiTab > Home </a>
<a routerLink="2" routerLinkActive tuiTab > Notifications </a>
<a routerLink="3" routerLinkActive tuiTab > Settings </a>
</tui-tabs>
<p [tuiSlides]="direction()">
<router-outlet />
</p>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {
    NavigationStart,
    Router,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTabs} from '@taiga-ui/kit';
import {TuiSlides} from '@taiga-ui/layout';
import {filter, map, pairwise} from 'rxjs';

@Component({
    imports: [RouterLink, RouterLinkActive, RouterOutlet, TuiSlides, TuiTabs],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly direction = toSignal(
        inject(Router).events.pipe(
            filter((event) => event instanceof NavigationStart),
            map(({url}: any) => Number(url.split('/').at(-1))),
            pairwise(),
            map(([prev, next]) => next - prev),
        ),
        {initialValue: 1},
    );
}
```

#### Dialog

Using slides inside a dialog.

**Template:**
```html
<button tuiButton type="button" (click)="onClick()" > Show dialog </button>
<ng-template let-observer>
<tui-app-bar tuiAppBarSize> @if (step > 1) { <button tuiButton tuiSlot="start" type="button" (click)="onStep(-1)" > Back </button> } <progress size="s" tuiProgressBar [max]="3" [style.width.rem]="10" [value]="step" ></progress>
<button tuiButton tuiSlot="end" type="button" (click)="observer.complete()" > Close </button>
</tui-app-bar>
<section [tuiSlides]="direction"> @switch (step) { @case (1) { <div>
<header>Welcome to the slides demo</header>
<p> These wrapping components will be animated upon navigating this modal dialog. This works well on both desktop and mobile. In your own layouts watch out for unwanted scrollbars. </p>
</div> } @case (2) { <div>
<header>Header is optional</header>
<section [style.margin]="'0 -1rem'"> @for (_ of '-'.repeat(5); track $index) { <div tuiCell>
<div appearance="primary" tuiAvatar="@tui.star" ></div>
<div tuiTitle> Title <div tuiSubtitle>Description</div>
</div>
</div> } </section>
</div> } @case (3) { <div appearance="floating" tuiCardLarge >
<header tuiHeader>
<h1 tuiTitle> Title <span tuiSubtitle>Subtitle</span>
</h1>
<aside tuiAccessories>
<div appearance="primary" tuiAvatar="@tui.star" ></div>
</aside>
</header>
<footer>
<button appearance="secondary" size="m" tuiButton type="button" > Label </button>
</footer>
</div> } } </section>
<footer tuiFloatingContainer [style.margin-block-start]="'auto'" >
<button tuiButton type="button" (click)="step < 3 ? onStep(1) : observer.complete()" > {{ step < 3 ? 'Next' : 'OK' }} </button>
</footer>
</ng-template>
```

**TypeScript:**
```ts
import {Component, inject, TemplateRef, viewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {TuiSheetDialogService} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiCell, TuiDialogService, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiProgressBar} from '@taiga-ui/kit';
import {
    TuiAppBar,
    TuiCard,
    TuiFloatingContainer,
    TuiHeader,
    TuiSlides,
} from '@taiga-ui/layout';

@Component({
    imports: [
        TuiAppBar,
        TuiAvatar,
        TuiButton,
        TuiCard,
        TuiCell,
        TuiFloatingContainer,
        TuiHeader,
        TuiProgressBar,
        TuiSlides,
        TuiTitle,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly template = viewChild(TemplateRef);

    private readonly dialogs = inject(WA_IS_MOBILE)
        ? inject(TuiSheetDialogService)
        : inject(TuiDialogService);

    protected step = 1;
    protected direction = 0;

    protected onClick(): void {
        this.step = 1;
        this.direction = 0;
        this.dialogs.open(this.template(), {appearance: 'fullscreen'}).subscribe();
    }

    protected onStep(step: number): void {
        this.direction = step;
        this.step += step;
    }
}
```
