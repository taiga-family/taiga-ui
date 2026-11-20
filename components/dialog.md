# Dialog

- **Package**: `CORE`
- **Type**: components

Customizable modal dialogs

### Example

```html
<button size="m" tuiButton type="button" (click)="showDialog(template)" > Show </button>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [appearance] | `string` | appearance of the dialog |
| [closable] | `boolean` |  |
| [dismissible] | `boolean` | if you want prevent closing, for example, with a confirmation prompt. |
| [data] | `string` |  |
| [label] | `string` | heading of dialog |
| [required] | `boolean` | (you can catch it with "catch" operator or onError handler) |
| [size] | `null \| TuiSizeS \| TuiSizeL` | to make the dialog width fit its content. |

### Usage Examples

#### String

Basic string dialog with a customizable button.

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
import {TuiButton, TuiDialogService} from '@taiga-ui/core';

@Component({
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

Using declarative directive to layout and show a dialog.

**Template:**
```html
<button tuiButton type="button" (click)="open = true" > Show dialog </button>
<ng-template let-observer [tuiDialogOptions]="{label: 'Let us know'}" [(tuiDialog)]="open" >
<form tuiForm (submit.prevent)="observer.complete()" >
<tui-textfield>
<label tuiLabel>Your name</label>
<input tuiAutoFocus tuiInput />
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
import {TuiButton, TuiDialog, TuiInput} from '@taiga-ui/core';
import {TuiForm} from '@taiga-ui/layout';

@Component({
    imports: [TuiAutoFocus, TuiButton, TuiDialog, TuiForm, TuiInput],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;
}
```

#### Component

Reusing a component to show a dialog.

**Template:**
```html
<button tuiButton type="button" (click)="click()" > Show dialog </button>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiDialogService, TuiNotificationService} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {switchMap} from 'rxjs';

import {DialogComponent} from './component';

@Component({
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiNotificationService);
    private readonly dialogs = inject(TuiDialogService);

    protected click(): void {
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

Using bundled component for action confirmation.

**Template:**
```html
<button tuiButton type="button" (click)="onClick(content)" > Show dialog </button>
<ng-template #content let-context >
<form tuiForm>
<tui-textfield>
<label tuiLabel>Your name</label>
<input name="name" placeholder="John Wick" tuiAutoFocus tuiInput [ngModel]="value" (ngModelChange)="onModelChange($event)" />
</tui-textfield>
<footer>
<button tuiButton type="submit" (click.prevent)="context.complete()" > Submit </button>
</footer>
</form>
</ng-template>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiResponsiveDialogService} from '@taiga-ui/addon-mobile';
import {TuiAutoFocus} from '@taiga-ui/cdk';
import {TuiButton, TuiDialogService, TuiInput} from '@taiga-ui/core';
import {TuiConfirmService} from '@taiga-ui/kit';
import {TuiForm} from '@taiga-ui/layout';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

@Component({
    imports: [FormsModule, TuiAutoFocus, TuiButton, TuiForm, TuiInput],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        // Provide TUI_CONFIRM_DIALOG if you want to override default Confirm dialog
        TuiConfirmService,
        {
            provide: TuiDialogService,
            useExisting: TuiResponsiveDialogService,
        },
    ],
})
export default class Example {
    private readonly confirm = inject(TuiConfirmService);
    private readonly dialogs = inject(TuiDialogService);

    protected value = '';

    protected onModelChange(value: string): void {
        this.value = value;
        this.confirm.markAsDirty();
    }

    protected onClick(content: PolymorpheusContent): void {
        const closable = this.confirm.withConfirm({
            label: 'Are you sure?',
            data: {content: 'Your data will be <strong>lost</strong>'},
        });

        this.dialogs
            .open(content, {label: 'Application form', closable, dismissible: closable})
            .subscribe({
                complete: () => {
                    this.value = '';
                    this.confirm.markAsPristine();
                },
            });
    }
}
```

#### Closing

Providing a custom stream to close dialogs.

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
import {TUI_DIALOGS_CLOSE, TuiButton, TuiDialog, TuiTitle} from '@taiga-ui/core';
import {TuiHeader} from '@taiga-ui/layout';
import {merge} from 'rxjs';

import {AuthService} from './service';

@Component({
    imports: [TuiButton, TuiDialog, TuiHeader, TuiTitle],
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

Using built-in `fullscreen` appearance

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
<footer tuiFloatingContainer [style.margin-block-start]="'auto'" >
<button tuiButton type="button" (click)="fullscreen = false" > Got it </button>
<button appearance="flat" tuiButton type="button" (click)="fullscreen = false" > Never mind </button>
</footer>
</ng-template>
<ng-template [tuiDialogOptions]="{appearance: 'fullscreen'}" [(tuiDialog)]="scrollable" >
<tui-app-bar tuiAppBarSize>
<button iconStart="@tui.chevron-left" tuiIconButton tuiSlot="start" type="button" (click)="scrollable = false" > Back </button>
<progress size="s" tuiProgressBar [max]="100" [style.width.rem]="10" [value]="35" ></progress>
<button tuiButton tuiSlot="end" type="button" (click)="scrollable = false" > Action </button>
</tui-app-bar>
<section [style.margin]="'0 -1rem'"> @for (_ of '-'.repeat(50); track $index) { <div tuiCell>
<div appearance="primary" tuiAvatar="@tui.star" ></div>
<div tuiTitle> Title <div tuiSubtitle>Description</div>
</div>
<div tuiTitle> Secondary title <div tuiSubtitle>Another description</div>
</div>
</div> } </section>
<footer tuiFloatingContainer>
<button tuiButton type="button" (click)="scrollable = false" > Got it </button>
<button appearance="flat" tuiButton type="button" (click)="scrollable = false" > Never mind </button>
</footer>
</ng-template>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiCell, TuiDialog, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiProgress} from '@taiga-ui/kit';
import {TuiAppBar, TuiFloatingContainer, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [
        TuiAppBar,
        TuiAvatar,
        TuiButton,
        TuiCell,
        TuiDialog,
        TuiFloatingContainer,
        TuiHeader,
        TuiProgress,
        TuiTitle,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected fullscreen = false;
    protected scrollable = false;
}
```

#### Customization

Customizing look and animations of dialogs by augmenting built-in appearance or completely overriding it.

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
import {TuiButton, TuiDialog, TuiTitle} from '@taiga-ui/core';
import {TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [TuiButton, TuiDialog, TuiHeader, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
        font: var(--tui-typography-heading-h6);
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

#### Content width

Passing `null` as size lets the dialog width be determined by its content.

**Template:**
```html
<button tuiButton type="button" (click)="show()" > Show content-sized dialog </button>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButton, TuiDialogService} from '@taiga-ui/core';

@Component({
    imports: [TuiButton],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    private readonly dialogs = inject(TuiDialogService);

    protected show(): void {
        this.dialogs
            .open('The width of this dialog is defined by its content.', {
                label: 'Content-sized dialog',
                size: null,
            })
            .subscribe();
    }
}
```
