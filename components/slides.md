# Slides

- **Package**: `KIT`
- **Type**: components

A component for displaying dynamic content animated between states. Use negative value for `tuiSlides` to indicate backward direction, positive for forward direction and 0 for static crossfade. Important: each child must be exactly one DOM element.

### How to Use (Import)

```ts
import {TuiSlides} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiSlides,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<section [tuiSlides]="direction">// Content</section>
```

### Example

```html
<tui-textfield [style.width.rem]="15">
<label tuiLabel>Current slide</label>
<input tuiInputNumber [max]="0" [min]="2" [step]="1" [(ngModel)]="current" />
</tui-textfield>
<p [tuiSlides]="direction">
<ng-container *tuiRepeatTimes="let index of 3">
<div *ngIf="index === current">Slide #{{ index }}</div>
</ng-container>
</p>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [tuiSlides] | `number` | Transition direction |

### Usage Examples

#### Crossfade

**Template:**
```html
<div tuiGroup>
<button appearance="secondary" iconStart="@tui.chevron-left" size="m" tuiIconButton type="button" [disabled]="!index" (click)="index = index - 1" > Previous </button>
<button appearance="secondary" iconStart="@tui.chevron-right" size="m" tuiIconButton type="button" [disabled]="index === items.length - 1" (click)="index = index + 1" > Next </button>
</div>
<tui-elastic-container>
<section tuiSlides>
<ng-container *ngFor="let item of items; let i = index">
<div *ngIf="i === index" tuiTitle > {{ item }} <div tuiSubtitle>{{ item.repeat(10) }}</div>
</div>
</ng-container>
</section>
</tui-elastic-container>
```

**TypeScript:**
```ts
import {NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiGroup, TuiTitle} from '@taiga-ui/core';
import {TuiElasticContainer, TuiSlides} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        NgForOf,
        NgIf,
        TuiButton,
        TuiElasticContainer,
        TuiGroup,
        TuiSlides,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
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

.tui-leave {
    max-block-size: 0;
}
```

#### Stepper

**Template:**
```html
<tui-stepper [activeItemIndex]="index" (activeItemIndexChange)="onStep($event)" >
<button tuiStep>Personal details</button>
<button tuiStep>Shipping address</button>
<button tuiStep>Payment info</button>
</tui-stepper>
<section [tuiSlides]="direction">
<ng-container *ngFor="let form of forms; let i = index">
<form *ngIf="i === index" tuiCardLarge tuiForm tuiSurface="floating" [formGroup]="form" [id]="'form_' + i" (ngSubmit)="onSubmit()" >
<header tuiHeader>
<h2 tuiTitle> Registration form <span tuiSubtitle>Tell us about yourself</span>
</h2>
</header>
<tui-textfield *ngFor="let control of form.controls | keyvalue; let j = index">
<label tuiLabel>{{ control.key }}</label>
<input tuiTextfield [formControlName]="control.key" [tuiAutoFocus]="!!index && !j" />
</tui-textfield>
</form>
</ng-container>
</section>
<footer>
<button appearance="secondary" tuiButton type="button" [disabled]="!index" (click)="index = index - 1" > Back </button>
<button tuiButton type="submit" [attr.form]="'form_' + index" > Next </button>
</footer>
```

**TypeScript:**
```ts
import {KeyValuePipe, NgForOf, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAutoFocus, tuiMarkControlAsTouchedAndValidate} from '@taiga-ui/cdk';
import {TuiButton, TuiSurface, TuiTextfield, TuiTitle} from '@taiga-ui/core';
import {TuiSlides, TuiStepper} from '@taiga-ui/kit';
import {TuiCard, TuiForm, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        KeyValuePipe,
        NgForOf,
        NgIf,
        ReactiveFormsModule,
        TuiAutoFocus,
        TuiButton,
        TuiCard,
        TuiForm,
        TuiHeader,
        TuiSlides,
        TuiStepper,
        TuiSurface,
        TuiTextfield,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
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
section {
    margin: 1.5rem 0;
}

footer {
    display: flex;
    justify-content: space-between;
}
```

#### Routing

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
import {TuiSlides, TuiTabs} from '@taiga-ui/kit';
import {filter, map, pairwise} from 'rxjs';

@Component({
    standalone: true,
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

**Template:**
```html
<button tuiButton type="button" (click)="onClick()" > Show dialog </button>
<ng-template let-observer>
<tui-app-bar tuiAppBarSize>
<button *ngIf="step > 1" tuiButton tuiSlot="left" type="button" (click)="onStep(-1)" > Back </button>
<progress size="s" tuiProgressBar [max]="3" [style.width.rem]="10" [value]="step" ></progress>
<button tuiButton tuiSlot="right" type="button" (click)="observer.complete()" > Close </button>
</tui-app-bar>
<section [ngSwitch]="step" [tuiSlides]="direction" >
<div *ngSwitchCase="1">
<header>Welcome to the slides demo</header>
<p> These wrapping components will be animated upon navigating this modal dialog. This works well on both desktop and mobile. In your own layouts watch out for unwanted scrollbars. </p>
</div>
<div *ngSwitchCase="2">
<header>Header is optional</header>
<section [style.margin]="'0 -1rem'">
<div *tuiRepeatTimes="let _ of 5" tuiCell >
<tui-avatar appearance="primary" src="@tui.star" />
<div tuiTitle> Title <div tuiSubtitle>Description</div>
</div>
</div>
</section>
</div>
<div *ngSwitchCase="3" tuiCardLarge tuiSurface="floating" >
<header tuiHeader>
<h1 tuiTitle> Title <span tuiSubtitle>Subtitle</span>
</h1>
<aside tuiAccessories>
<tui-avatar appearance="primary" src="@tui.star" />
</aside>
</header>
<footer>
<button appearance="secondary" size="m" tuiButton type="button" > Label </button>
</footer>
</div>
</section>
<footer tuiFloatingContainer [style.margin-block-start]="'auto'" >
<button tuiButton type="button" (click)="step < 3 ? onStep(1) : observer.complete()" > {{ step < 3 ? 'Next' : 'OK' }} </button>
</footer>
</ng-template>
```

**TypeScript:**
```ts
import {NgIf, NgSwitch, NgSwitchCase} from '@angular/common';
import {Component, inject, TemplateRef, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSheetDialogService} from '@taiga-ui/addon-mobile';
import {TUI_IS_MOBILE, TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiButton, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiDialogService} from '@taiga-ui/experimental';
import {TuiAvatar, TuiFloatingContainer, TuiProgressBar, TuiSlides} from '@taiga-ui/kit';
import {TuiAppBar, TuiCard, TuiCell, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        NgIf,
        NgSwitch,
        NgSwitchCase,
        TuiAppBar,
        TuiAvatar,
        TuiButton,
        TuiCard,
        TuiCell,
        TuiFloatingContainer,
        TuiHeader,
        TuiProgressBar,
        TuiRepeatTimes,
        TuiSlides,
        TuiSurface,
        TuiTitle,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    @ViewChild(TemplateRef)
    private readonly template?: TemplateRef<any>;

    private readonly dialogs = inject(TUI_IS_MOBILE)
        ? inject(TuiSheetDialogService)
        : inject(TuiDialogService);

    protected step = 1;
    protected direction = 0;

    protected onClick(): void {
        this.step = 1;
        this.direction = 0;
        this.dialogs.open(this.template, {appearance: 'fullscreen'}).subscribe();
    }

    protected onStep(step: number): void {
        this.direction = step;
        this.step += step;
    }
}
```
