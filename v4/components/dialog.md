# Dialog

- **Package**: `CORE`
- **Type**: components

Built-in implementation of Taiga UI modals If you want custom dialogs see this link on creating your own implementation Use `TUI_DIALOGS_CLOSE` token if you need to close dialog with from a stream. For example, this way you can close dialogs by logout

### Example

```html
<button size="m" tuiButton type="button" (click)="showDialog(template)" > Show </button>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [closeable] | `boolean` |  |
| [dismissible] | `boolean` | if you want prevent closing, for example, with a confirmation prompt. |
| [data] | `number` |  |
| [header] | `PolymorpheusContent` | Content above a heading |
| [label] | `string` | Heading of dialog |
| [required] | `boolean` | (you can catch it with "catch" operator or onError handler) |
| [size] | `TuiDialogSize` | Size |
| [appearance] | `string` | Appearance of dialog |

```ts
@Component({
  standalone: true,
  // ...
  providers: [
    {
      provide: TUI_DIALOGS_CLOSE,
      deps: [AuthService],
      useFactory: (authService) => authService.logout$,
    },
  ],
})
export class Example {}
```

```ts
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {TuiDialogService} from '@taiga-ui/core';
import {inject} from '@angular/core';

// ...

export class Example {
  private readonly dialogs = inject(TuiDialogService);

  // ...

  open() {
    this.dialogs.open('Hello!').subscribe();
  }
}
```

```ts
import {TuiDialogContext} from '@taiga-ui/core';
import {injectContext} from '@taiga-ui/polymorpheus';

// ...

export class Example {
  public readonly context = injectContext<TuiDialogContext<boolean>>();

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
import {TuiDialogService} from '@taiga-ui/core';

import {MyDialog} from './my-dialog.component.ts';

// ...

@Component({
  // ...
})
export class Example {
  private readonly injector = inject(INJECTOR);
  private readonly dialogs = inject(TuiDialogService);

  // ...
  open() {
    this.dialogs
      .open(
        // this.injector is optional
        new PolymorpheusComponent(MyDialog, this.injector),
      )
      .subscribe();
  }
}
```

### Usage Examples

#### Dialog from string

**Template:**
```html
<button size="m" tuiButton type="button" (click)="showDialog()" > Default button </button>
<p>
<button size="m" tuiButton type="button" (click)="showDialogWithCustomButton()" > Custom button </button>
</p>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiDialogService} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly dialogs = inject(TuiDialogService);

    protected showDialog(): void {
        this.dialogs
            .open(
                '<div>This is a plain string dialog.</div>It supports basic <strong>HTML</strong>',
                {label: 'Heading', size: 's'},
            )
            .subscribe();
    }

    protected showDialogWithCustomButton(): void {
        this.dialogs
            .open('Good, Anakin, Good!', {
                label: 'Star wars. Episode III',
                size: 's',
                data: {button: 'Do it!'},
            })
            .subscribe();
    }
}
```

#### Component dialog

**Template:**
```html
<button size="m" tuiButton type="button" (click)="showDialog()" > Show </button>
```

**TypeScript:**
```ts
import {Component, inject, INJECTOR} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, tuiDialog} from '@taiga-ui/core';
import {type Observable} from 'rxjs';

@Component({
    standalone: true,
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly injector = inject(INJECTOR);

    protected async showDialog(): Promise<void> {
        const dialog = await this.lazyLoad();

        dialog(237).subscribe({
            next: (data) => {
                console.info(`Dialog emitted data = ${data}`);
            },
            complete: () => {
                console.info('Dialog closed');
            },
        });
    }

    private async lazyLoad(): Promise<(data: number) => Observable<number>> {
        const {DialogExample} = await import('./dialog-example/dialog-example.component');

        return tuiDialog(DialogExample, {
            injector: this.injector,
            dismissible: true,
            label: 'Heading',
        });
    }
}
```

#### Dialog from template

**Template:**
```html
<p> Your balance: <span>{{ money | tuiAmount: 'RUB' | async }}</span>
</p>
<button size="m" tuiButton type="button" (click)="showDialog(template)" > Show </button>
<ng-template #template let-observer >
<p>You can show a dialog with template</p>
<p> Your balance: <span>{{ money | tuiAmount: 'RUB' | async }}</span>
</p>
<button size="m" tuiButton tuiChevron tuiDropdownOpen type="button" class="tui-space_right-3" [tuiDropdown]="dropdown" > Withdraw <ng-template #dropdown let-close >
<tui-data-list>
<button *ngFor="let sum of [10, 50, 100]" tuiOption (click)="withdraw(sum); close()" > {{ sum | tuiAmount: 'RUB' | async }} </button>
</tui-data-list>
</ng-template>
</button>
<button size="m" tuiButton type="button" (click)="observer.complete()" > Cancel </button>
</ng-template>
```

**TypeScript:**
```ts
import {AsyncPipe, NgForOf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {
    TuiButton,
    TuiDataList,
    type TuiDialogContext,
    TuiDialogService,
    TuiDropdown,
} from '@taiga-ui/core';
import {TuiChevron} from '@taiga-ui/kit';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        NgForOf,
        TuiAmountPipe,
        TuiButton,
        TuiChevron,
        TuiDataList,
        TuiDropdown,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly dialogs = inject(TuiDialogService);

    protected money = 1000;

    protected showDialog(content: PolymorpheusContent<TuiDialogContext>): void {
        this.dialogs.open(content).subscribe();
    }

    protected withdraw(sum: number): void {
        this.money -= sum;
    }
}
```

#### Mobile dialog

**Template:**
```html
<h3>Long mobile dialog with filters</h3>
<button size="m" tuiButton type="button" class="tui-space_right-3 tui-space_bottom-2" (click)="showDialog(long, button)" > Show </button>
<ng-template #button>
<button *ngIf="!filters" tuiButton type="button" class="portal" (click)="onFilterClick()" (touchmove.prevent.zoneless)="(0)" > Filters </button>
</ng-template>
<ng-template #long>
<div class="background"></div>
<header #header class="header" (tuiElasticSticky)="onElastic($event, header)" >
<section class="logo">
<label class="date">8 March, 23:51</label>
<tui-avatar size="xl" src="@tui.chevron-down" class="icon" />
</section>
<div class="wrapper">
<p class="description">Card payment</p>
<h3 class="title">Sushi</h3>
<span class="money" [tuiNumberFormat]="{decimalMode: 'always'}" > {{ 300 | tuiAmount: 'RUB' | async }} </span>
</div>
</header>
<blockquote>
<h1>Additional information</h1>
<p> In user interface design for computer applications, a modal window is a graphical control element subordinate to an application's main window. A modal window creates a mode that disables the main window but keeps it visible, with the modal window as a child window in front of it. Users must interact with the modal window before they can return to the parent application. This avoids interrupting the workflow on the main window. Modal windows are sometimes called heavy windows or modal dialogs because they often display a dialog box. </p>
</blockquote>
<blockquote>
<h2>Additional information</h2>
<p> In user interface design for computer applications, a modal window is a graphical control element subordinate to an application's main window. A modal window creates a mode that disables the main window but keeps it visible, with the modal window as a child window in front of it. Users must interact with the modal window before they can return to the parent application. This avoids interrupting the workflow on the main window. Modal windows are sometimes called heavy windows or modal dialogs because they often display a dialog box. </p>
</blockquote>
</ng-template>
```

**TypeScript:**
```ts
import {AsyncPipe, NgIf} from '@angular/common';
import {Component, inject, type TemplateRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiElasticSticky} from '@taiga-ui/addon-mobile';
import {tuiClamp} from '@taiga-ui/cdk';
import {
    TuiButton,
    TuiDialogService,
    TuiDropdownService,
    TuiNumberFormat,
} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        NgIf,
        TuiAmountPipe,
        TuiAvatar,
        TuiButton,
        TuiElasticSticky,
        TuiNumberFormat,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly dialogs = inject(TuiDialogService);
    private readonly dropdowns = inject(TuiDropdownService);

    protected filters = false;

    protected onElastic(value: number, {style}: HTMLElement): void {
        const scale = tuiClamp(value, 0.7, 1);

        style.setProperty('transform', `scale(${scale})`);
        style.setProperty('width', `calc((100% + 3.5rem) / ${scale})`);
    }

    protected onFilterClick(): void {
        this.filters = true;
        this.dialogs.open('Dialog with filters').subscribe({
            complete: () => {
                this.filters = false;
            },
        });
    }

    protected showDialog(
        content: PolymorpheusContent,
        button: TemplateRef<Record<string, unknown>>,
    ): void {
        const templateRef = this.dropdowns.addTemplate(button);

        this.dialogs.open(content).subscribe({
            complete: () => {
                this.dropdowns.removeTemplate(templateRef);
            },
        });
    }
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

@color-mobile-gray: #9299a2;

:host {
    font-family: -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
}

.portal {
    .center-left();

    position: fixed;
    bottom: ~'max(1.25rem, env(safe-area-inset-bottom))';
    animation: tuiFadeIn var(--tui-duration) var(--tui-duration);
    animation-fill-mode: backwards;
}

.header {
    position: sticky;
    top: 0;
    inline-size: calc(100% + 3.5rem);
    margin-block-start: -1.75rem;
    margin-inline-start: -1.75rem;
    text-align: center;
    overflow-wrap: break-word;
    background: var(--tui-chart-categorical-20);
    border-radius: 1rem 1rem 0 0;
    transform-origin: top left;
}

.background {
    position: sticky;
    top: -1rem;
    block-size: 2rem;
    inline-size: calc(100% + 3.5rem);
    margin: -1.75rem 0 -1.75rem -1.75rem;
    background: var(--tui-chart-categorical-20);
    border-radius: 1rem 1rem 0 0;
}

.wrapper {
    background: var(--tui-background-base-alt);
    padding: 3.125rem 0 2rem;
}

.logo {
    position: relative;
    block-size: 5.5rem;
    color: var(--tui-background-base);
}

.date {
    display: block;
    font-size: 1.0625rem;
    line-height: 1.125rem;
    padding: 0.75rem 0;
}

.icon {
    position: relative;
    margin-block-start: 0.25rem;
    box-shadow: 0 0 0 2px var(--tui-background-base-alt);
    color: var(--tui-background-base-alt);
    background: var(--tui-chart-categorical-20);
}

.description {
    font-size: 1.0625rem;
    line-height: 1.125rem;
    margin: 0.5rem 0 0;
    color: @color-mobile-gray;
}

.title {
    font-weight: bold;
    font-size: 1.0625rem;
    line-height: 1.25rem;
    margin: 1.5rem 0 0.25rem;
}

.money {
    font-size: 2.125rem;
    line-height: 2.5rem;
}
```

#### Dialog with header

**Template:**
```html
<button size="m" tuiButton type="button" class="tui-space_right-2" (click)="onClick(content, header, 'm')" > Show </button>
<button size="m" tuiButton type="button" (click)="onClick(content, header, 'fullscreen')" > Show fullscreen </button>
<ng-template #content let-observer > Take a look <div class="buttons">
<button size="m" tuiButton type="button" (click)="observer.complete()" > Very cool! </button>
</div>
</ng-template>
<ng-template #header>
<div class="header">
<img alt="Cool" src="https://ng-web-apis.github.io/dist/assets/images/web-api.svg" />
</div>
</ng-template>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiButton,
    type TuiDialogContext,
    TuiDialogService,
    type TuiDialogSize,
} from '@taiga-ui/core';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    imports: [TuiButton],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly dialogs = inject(TuiDialogService);

    protected onClick(
        content: PolymorpheusContent<TuiDialogContext>,
        header: PolymorpheusContent,
        size: TuiDialogSize,
    ): void {
        this.dialogs
            .open(content, {
                label: 'What a cool library set',
                header,
                size,
            })
            .subscribe();
    }
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.header {
    display: flex;
    inline-size: 100%;
    block-size: 12.5rem;
    align-items: center;
    justify-content: center;
    background: #ffdd2d;
}

.buttons {
    display: flex;
    justify-content: center;
    margin-block-start: 1.5rem;

    :host-context(tui-root._mobile) & {
        flex-direction: column;
    }
}
```

#### Dialog with directive

**Template:**
```html
<button size="m" tuiButton tuiHint="Some text" tuiHintDirection="top" type="button" (click)="showDialog()" > Show </button>
<ng-template let-observer [tuiDialogOptions]="{label: 'Declarative directive', size: 's'}" [(tuiDialog)]="open" >
<form [formGroup]="exampleForm" (ngSubmit)="observer.complete()" >
<p>This abstracts away service and subscription</p>
<tui-input formControlName="exampleControl" tuiAutoFocus > Some value </tui-input>
<p>
<button tuiButton type="submit" > Ok </button>
</p>
</form>
</ng-template>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAutoFocus} from '@taiga-ui/cdk';
import {TuiButton, TuiDialog, TuiHint} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiAutoFocus,
        TuiButton,
        TuiDialog,
        TuiHint,
        TuiInputModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected exampleForm = new FormGroup({
        exampleControl: new FormControl(''),
    });

    protected open = false;

    protected showDialog(): void {
        this.open = true;
    }
}
```

#### Fullscreen mobile dialog with autofocus

**Template:**
```html
<button size="m" tuiButton type="button" (click)="showDialog()" > Show </button>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, tuiDialog} from '@taiga-ui/core';

import {SearchDialogExample} from './search-example/search-dialog-example.component';

@Component({
    standalone: true,
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly dialog = tuiDialog(SearchDialogExample, {
        size: 'page',
        closeable: true,
        dismissible: true,
    });

    protected showDialog(): void {
        this.dialog().subscribe();
    }
}
```

#### Confirmation

**Template:**
```html
<button size="m" tuiButton type="button" (click)="onClick(content)" > Open </button>
<ng-template #content let-context >
<tui-input class="tui-space_bottom-3" [ngModel]="value" (ngModelChange)="onModelChange($event)" > Your name </tui-input>
<button tuiButton type="button" (click)="context.complete()" > Submit </button>
</ng-template>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiResponsiveDialogService} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiDialogService} from '@taiga-ui/core';
import {TuiConfirmService} from '@taiga-ui/kit';
import {TuiInputModule} from '@taiga-ui/legacy';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    imports: [FormsModule, TuiButton, TuiInputModule],
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
        const closeable = this.confirm.withConfirm({
            label: 'Are you sure?',
            data: {
                content: 'Your data will be <strong>lost</strong>',
            },
        });

        this.dialogs
            .open(content, {label: 'Form', closeable, dismissible: closeable})
            .subscribe({
                complete: () => {
                    this.value = '';
                    this.confirm.markAsPristine();
                },
            });
    }
}
```

#### Pay

**Template:**
```html
<div class="container">
<tui-textfield>
<input maxlength="5" placeholder="0 ... 999 ₽" postfix=" ₽" tuiInputNumber [formControl]="amountControl" [min]="0" />
<tui-icon tuiHintDirection="top" tuiTooltip="The amount must be less than 1000 ₽" />
</tui-textfield>
<button tuiButton type="button" class="pay-button" (click)="payByCard()" >
<div class="icon-group">
<img alt="visa" [src]="'@tui.visa' | tuiIcon" />
<img alt="maestro" [src]="'@tui.maestro' | tuiIcon" />
<img alt="mir" [src]="'@tui.mir' | tuiIcon" />
</div> Pay </button>
</div>
```

**TypeScript:**
```ts
import {Component, DestroyRef, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiButton,
    tuiDialog,
    TuiHint,
    TuiIcon,
    TuiIconPipe,
    TuiTextfield,
} from '@taiga-ui/core';
import {TuiInputNumber, TuiTooltip} from '@taiga-ui/kit';

import {PayModal} from './pay-modal/pay-modal.component';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        TuiButton,
        TuiHint,
        TuiIcon,
        TuiIconPipe,
        TuiInputNumber,
        TuiTextfield,
        TuiTooltip,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly destroyRef = inject(DestroyRef);
    private readonly payModal = tuiDialog(PayModal, {
        size: 'auto',
        closeable: true,
    });

    protected readonly amountControl = new FormControl(100, {
        nonNullable: true,
    });

    protected payByCard(): void {
        this.payModal({
            amount: this.amountControl.value,
        })
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe();
    }
}
```

**LESS:**
```less
.container {
    inline-size: 100%;
    max-inline-size: 30rem;
    margin: 0 auto;
    padding-block-start: 1.25rem;
}

.pay-button {
    margin-block-start: 1rem;
    inline-size: 100%;
}

.icon-group {
    display: flex;
    gap: 0.125rem;
    background: #f6f6f6;
    padding: 0.125rem 0.3125rem;
    margin-inline-end: 0.5rem;
    border-radius: 0.3125rem;
}

img {
    inline-size: 1.5rem;
    block-size: 1.5rem;
}
```

#### Appearance

**Template:**
```html
<button size="m" tuiButton type="button" (click)="showDialog()" > Show </button>
```

**TypeScript:**
```ts
import {Component, inject, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButton, TuiDialogService} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiButton],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export default class Example {
    private readonly dialogs = inject(TuiDialogService);

    protected showDialog(): void {
        this.dialogs
            .open(
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
                {
                    label: 'What is Lorem Ipsum?',
                    appearance: 'lorem-ipsum',
                },
            )
            .subscribe();
    }
}
```

**LESS:**
```less
tui-dialog[data-appearance='lorem-ipsum'] {
    margin: 1.25rem auto;
    border: none;
    border-radius: 0;
}
```

#### Theme color

**Template:**
```html
<button size="m" tuiButton type="button" (click)="showDialog()" > Show </button>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiThemeColorService} from '@taiga-ui/cdk';
import {TuiButton, TuiDialogService} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly dialogs = inject(TuiDialogService);
    private readonly theme = inject(TuiThemeColorService);

    protected showDialog(): void {
        this.theme.color = '#ffdd2d';
        this.dialogs
            .open(
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
                {label: 'What is Lorem Ipsum?'},
            )
            .subscribe({
                complete: () => {
                    this.theme.color = '#ff7043';
                },
            });
    }
}
```

## Template can be customized

Dialog has
`Observer`
in its context to call
`next`
,
`complete`
or
`error`
of stream. There is also a
`completeWith`
method to pass data and close dialog with one action

_There is no need in input data for template dialog because you can set it in template. But if you use a component, context is the only way to get data from outside_

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur eligendi esse minima nobis!
Assumenda debitis, delectus dicta dolore eos explicabo fuga id inventore maiores, nihil, nobis
nostrum quasi quo unde! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
eligendi esse minima nobis! Assumenda debitis, delectus dicta dolore eos explicabo fuga id
inventore maiores, nihil, nobis nostrum quasi quo unde!

Say "Hi and bye!"

- Use
`open`
method to initiate a dialog, subscribe to a returned
`Observable`
to show it :

- If you want to use your own component as a dialog content, use
`POLYMORPHEUS_CONTEXT`
in it. Dialog will provide this token with some useful options:
`$implicit`
with
`'">`
and
`completeWith`
hook to call
`next`
and
`complete`
in one action.

- You can also use a
template

- Use
`Observer`
from
`$implicit`
field of context to close a dialog or get some data

`'">`
, the first type is the return type of value, for example:
`... )'">`
. The second type is type of passed data to the dialog:
``
. Accordingly, in the dialog component the context will be as follows:
``
and
``

- If you use dialog components in lazy loading modules, and want to reach for some local providers,
you can pass
`Injector`
into
`new PolymorpheusComponent`
of your dialog component.
