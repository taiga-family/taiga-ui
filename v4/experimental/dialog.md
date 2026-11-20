# DialogExperimental

- **Package**: `EXPERIMENTAL`
- **Type**: components

Customizable modal dialogs

### How to Use (Import)

```ts
import {TuiButton} from '@taiga-ui/core';
import {TuiDialog} from '@taiga-ui/experimental';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiButton,
    TuiDialog,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<ng-template
  [tuiDialogOptions]="{ size: 'm' }"
  [(tuiDialog)]="open"
>
  <header tuiHeader>
    <hgroup tuiTitle>
      <h2>I am a title</h2>
      <p>I am some text</p>
    </hgroup>
  </header>
  <!-- Arbitrary content -->
  <footer>
    <button tuiButton>Primary Button</button>
    <button
      tuiButton
      appearance="secondary"
    >
      Secondary Button
    </button>
  </footer>
</ng-template>
```

### Example

```html
<button size="m" tuiButton type="button" (click)="showDialog(template)" > Show </button>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [appearance] | `string` | Appearance of dialog |
| [closable] | `boolean` |  |
| [dismissible] | `boolean` | if you want prevent closing, for example, with a confirmation prompt. |
| [data] | `string` |  |
| [label] | `string` | Heading of dialog |
| [required] | `boolean` | (you can catch it with "catch" operator or onError handler) |
| [size] | `TuiSizeS | TuiSizeL` | Size |

### Usage Examples

#### String

**Template:**
```html
<button tuiButton type="button" (click)="default()" > Default button </button>
<br />
<br />
<button tuiButton type="button" (click)="custom()" > Custom button </button>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiDialogService} from '@taiga-ui/experimental';

@Component({
    standalone: true,
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly dialogs = inject(TuiDialogService);

    protected default(): void {
        this.dialogs
            .open(
                'This is a plain string dialog.<br />It supports basic <strong>HTML</strong>',
                {label: 'Heading', size: 's'},
            )
            .subscribe();
    }

    protected custom(): void {
        this.dialogs
            .open('Good, Anakin, Good!', {
                label: 'Star wars. Episode III',
                size: 's',
                data: 'Do it!',
            })
            .subscribe();
    }
}
```

#### Directive

**Template:**
```html
<button tuiButton type="button" (click)="open = true" > Show dialog </button>
<ng-template let-observer [tuiDialogOptions]="{label: 'Let us know'}" [(tuiDialog)]="open" >
<form tuiForm (submit.prevent)="observer.complete()" >
<tui-textfield>
<label tuiLabel>Your name</label>
<input tuiAutoFocus tuiTextfield />
</tui-textfield>
<footer>
<button appearance="secondary" tuiButton type="button" (click)="observer.complete()" > Cancel </button>
<button tuiButton type="submit" > Submit </button>
</footer>
</form>
</ng-template>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAutoFocus} from '@taiga-ui/cdk';
import {TuiButton, TuiTextfield} from '@taiga-ui/core';
import {TuiDialog} from '@taiga-ui/experimental';
import {TuiForm} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [TuiAutoFocus, TuiButton, TuiDialog, TuiForm, TuiTextfield],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;
}
```

#### Component

**Template:**
```html
<button tuiButton type="button" (click)="onClick()" > Show dialog </button>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService, TuiButton} from '@taiga-ui/core';
import {TuiDialogService} from '@taiga-ui/experimental';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {switchMap} from 'rxjs';

import {DialogComponent} from './component';

@Component({
    standalone: true,
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiAlertService);
    private readonly dialogs = inject(TuiDialogService);

    protected onClick(): void {
        this.dialogs
            .open<string>(new PolymorpheusComponent(DialogComponent), {
                label: 'Edit info',
                size: 's',
                data: 'Alex Inkin',
            })
            .pipe(switchMap((name) => this.alerts.open(name)))
            .subscribe();
    }
}
```

#### Confirmation

**Template:**
```html
<button tuiButton type="button" (click)="onClick()" > Show dialog </button>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService, TuiButton} from '@taiga-ui/core';
import {TuiDialogService} from '@taiga-ui/experimental';
import {TUI_CONFIRM, type TuiConfirmData} from '@taiga-ui/kit';
import {switchMap} from 'rxjs';

@Component({
    standalone: true,
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiAlertService);
    private readonly dialogs = inject(TuiDialogService);

    protected onClick(): void {
        const data: TuiConfirmData = {
            content: 'This action cannot be undone',
            yes: 'Sure!',
            no: 'No, thanks',
        };

        this.dialogs
            .open<boolean>(TUI_CONFIRM, {size: 's', label: 'Are you sure?', data})
            .pipe(switchMap((v) => this.alerts.open(v, {label: 'Response'})))
            .subscribe();
    }
}
```

#### Closing

**Template:**
```html
<button tuiButton type="button" (click)="open = true" > Show dialog </button>
<ng-template let-id="id" [tuiDialogOptions]="{size: 's'}" [(tuiDialog)]="open" >
<header tuiHeader>
<hgroup tuiTitle>
<h2 [id]="id">Hello!</h2>
<p>Don't forget to set ID for accessible label</p>
</hgroup>
</header>
<footer>
<button tuiButton type="button" (click)="auth.logout()" > Logout </button>
</footer>
</ng-template>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAutoFocus} from '@taiga-ui/cdk';
import {TUI_DIALOGS_CLOSE, TuiButton, TuiTextfield, TuiTitle} from '@taiga-ui/core';
import {TuiDialog} from '@taiga-ui/experimental';
import {TuiHeader} from '@taiga-ui/layout';
import {merge} from 'rxjs';

import {AuthService} from './service';

@Component({
    standalone: true,
    imports: [TuiAutoFocus, TuiButton, TuiDialog, TuiHeader, TuiTextfield, TuiTitle],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        // This has to be added to global providers, shown here for demonstration purposes only
        {
            provide: TUI_DIALOGS_CLOSE,
            useFactory: () => merge(inject(AuthService), inject(Router).events),
        },
    ],
})
export default class Example {
    protected readonly auth = inject(AuthService);
    protected open = false;
}
```

#### Fullscreen

**Template:**
```html
<button tuiButton type="button" (click)="fullscreen = true" > Show fullscreen </button>
<br />
<br />
<button tuiButton type="button" (click)="scrollable = true" > Show scrollable </button>
<ng-template let-id="id" [tuiDialogOptions]="{appearance: 'fullscreen'}" [(tuiDialog)]="fullscreen" >
<header tuiHeader>
<hgroup tuiTitle>
<h2 [id]="id">Fullscreen heading</h2>
<p> This is shown fullscreen regardless of content height, you can use <code>margin-top: auto</code> to make sure footer is at the bottom of the page. </p>
</hgroup>
</header>
<footer tuiFloatingContainer [style.margin-top]="'auto'" >
<button tuiButton type="button" (click)="fullscreen = false" > Got it </button>
<button appearance="flat" tuiButton type="button" (click)="fullscreen = false" > Never mind </button>
</footer>
</ng-template>
<ng-template [tuiDialogOptions]="{appearance: 'fullscreen'}" [(tuiDialog)]="scrollable" >
<tui-app-bar tuiAppBarSize>
<button iconStart="@tui.chevron-left" tuiIconButton tuiSlot="left" type="button" (click)="scrollable = false" > Back </button>
<progress size="s" tuiProgressBar [max]="100" [style.width.rem]="10" [value]="35" ></progress>
<button tuiButton tuiSlot="right" type="button" (click)="scrollable = false" > Action </button>
</tui-app-bar>
<section [style.margin]="'0 -1rem'">
<div *tuiRepeatTimes="let _ of 50" tuiCell >
<tui-avatar appearance="primary" src="@tui.star" />
<div tuiTitle> Title <div tuiSubtitle>Description</div>
</div>
<div tuiTitle> Secondary title <div tuiSubtitle>Another description</div>
</div>
</div>
</section>
<footer tuiFloatingContainer>
<button tuiButton type="button" (click)="scrollable = false" > Got it </button>
<button appearance="flat" tuiButton type="button" (click)="scrollable = false" > Never mind </button>
</footer>
</ng-template>
```

**TypeScript:**
```ts
import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiDialog} from '@taiga-ui/experimental';
import {TuiAvatar, TuiFloatingContainer, TuiProgress} from '@taiga-ui/kit';
import {TuiAppBar, TuiCell, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiAppBar,
        TuiAvatar,
        TuiButton,
        TuiCell,
        TuiDialog,
        TuiFloatingContainer,
        TuiHeader,
        TuiProgress,
        TuiRepeatTimes,
        TuiTitle,
    ],
    templateUrl: './index.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export default class Example {
    protected fullscreen = false;
    protected scrollable = false;
}
```

#### Customization

**Template:**
```html
<button tuiButton type="button" (click)="augmented = true" > Show augmented </button>
<br />
<br />
<button tuiButton type="button" (click)="custom = true" > Show custom </button>
<ng-template let-id="id" [tuiDialogOptions]="{size: 's', appearance: 'taiga compact'}" [(tuiDialog)]="augmented" >
<header tuiHeader>
<hgroup tuiTitle>
<h2 [id]="id">Augmented design</h2>
<p>Using both built-in "taiga" appearance and custom "compact" appearance to alter built-in styles</p>
</hgroup>
</header>
</ng-template>
<ng-template let-id="id" [tuiDialogOptions]="{appearance: 'sheet'}" [(tuiDialog)]="custom" >
<header [id]="id">Custom design</header>
<p> Overriding default appearance completely and taking the styles of dialog fully upon oneself, leaving only behavior like focus trap and closable/dismissible interactions to Taiga UI </p>
</ng-template>
```

**TypeScript:**
```ts
import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiDialog} from '@taiga-ui/experimental';
import {TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [TuiButton, TuiDialog, TuiHeader, TuiTitle],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export default class Example {
    protected augmented = false;
    protected custom = false;
}
```

**LESS:**
```less
[data-appearance~='compact'] {
    padding: 1rem !important;
    border-radius: var(--tui-radius-s) !important;
}

[data-appearance='sheet'] {
    inline-size: 100vw;
    align-self: flex-end;
    padding: 1.25rem 1rem ~'max(1.25rem, env(safe-area-inset-bottom))';

    --tui-from: translate3d(0, 100vh, 0);

    &.tui-enter,
    &.tui-leave {
        animation-name: tuiSlide;
    }

    > header,
    > ng-component > header {
        font: var(--tui-font-heading-6);
    }

    > p,
    > ng-component > p {
        margin: 1rem 0 0;
    }

    > button {
        background: none !important;
    }
}
```
