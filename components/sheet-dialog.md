# SheetDialog

- **Package**: `ADDON-MOBILE`
- **Type**: components

A mobile draggable sheet dialog

### Example

```html
<ng-container *tuiLet="label === 'Template' ? labelTemplate : label as dialogLabel">
<button tuiButton type="button" (click)="showDialog(sheetTemplate, dialogLabel)" > Click </button>
<button tuiButton type="button" class="tui-space_left-4" (longtap)="showDialog(sheetTemplate, dialogLabel)" > Long tap </button>
</ng-container>
<ng-template #labelTemplate>
<div class="label">
<tui-avatar size="m">KG</tui-avatar>
<label tuiTitle>
<span tuiSubtitle>Terry Jones</span>
<b>Karl Gambolputty</b>
</label>
</div>
</ng-template>
<ng-template #sheetTemplate let-completeWith="completeWith" let-observer >
<p [style.flex-grow]="1"> Karl Gambolputty de von Ausfern-schplenden-schlitter-crasscrenbon-fried-digger-dingle-dangle-dongle-dungle-burstein-von-knacker-thrasher-apple-banger-horowitz-ticolensic-grander-knotty-spelltinkle-grandlich-grumblemeyer-spelterwasser-kurstlich-himbleeisen-bahnwagen-gutenabend-bitte-ein-nürnburger-bratwustle-gerspurten-mitzweimache-luber von Hautkopft of Ulm was the last-surviving relative of Johann Gambolputty de von. </p>
<footer tuiFloatingContainer>
<button tuiButton type="button" class="tui-space_right-1" (click)="observer.next('Hi')" > Say "Hi" </button>
<button tuiButton type="button" class="tui-space_right-1" (click)="completeWith('Hi and bye!')" > Say "Hi and bye!" </button>
<button tuiButton type="button" (click)="navigate()" > Navigate to Examples </button>
</footer>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [closeable] | `boolean` | Whether or not a sheet can be closed by user. |
| [fullscreen] | `boolean` | Fullscreen |
| [bar] | `boolean` | Show bar |
| [data] | `I` | Optional data to be passed to the sheet. |
| [label] | `PolymorpheusContent` | Sheet label. |
| [stops] | `string[]` | An array of stop points in any units for the sheet. |
| [initial] | `number` | means to stop on top of the sheet's content. |
| [offset] | `number` | ) |
| [required] | `boolean` | (you can catch it with "catch" operator or onError handler) |

```ts
constructor(private readonly sheets: TuiSheetDialogService) {}

// ...

this.sheets
    .open(
        'Content',
        {
            label: 'Heading',
            offset: 48,
        },
    )
    .subscribe();
```

### Usage Examples

#### String

**Template:**
```html
<button tuiButton type="button" (click)="onClick()" > Show </button>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSheetDialogService} from '@taiga-ui/addon-mobile';
import {TuiButton} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly service = inject(TuiSheetDialogService);

    protected onClick(): void {
        this.service
            .open('Supports <b>basic</b> HTML', {
                label: 'Simple sheet',
                data: {button: 'OK'},
            })
            .subscribe();
    }
}
```

#### Basic

**Template:**
```html
<button tuiButton type="button" (click)="open = true" > Show </button>
<ng-template let-observer [tuiSheetDialogOptions]="options" [(tuiSheetDialog)]="open" >
<a appearance="secondary" href="mailto:alexander@inkin.ru" iconStart="@tui.mail" size="m" tuiIconButton class="tui-space_right-2" > Email </a>
<a appearance="secondary" href="https://t.me/waterplea" iconStart="@tui.phone-forwarded" size="m" tuiIconButton class="tui-space_right-2" > Telegram </a>
<a appearance="secondary" href="https://waterplea.bandcamp.com/" iconStart="@tui.music" size="m" tuiIconButton > Music </a>
<p>Passionate Angular dev, musician and OSS author.</p>
<footer tuiFloatingContainer class="footer" >
<button size="m" tuiButton type="button" (click)="observer.complete()" > Give a raise </button>
<button appearance="secondary" size="m" tuiButton type="button" (click)="observer.complete()" > Fire </button>
</footer>
</ng-template>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSheetDialog, type TuiSheetDialogOptions} from '@taiga-ui/addon-mobile';
import {TuiButton} from '@taiga-ui/core';
import {TuiFloatingContainer} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiButton, TuiFloatingContainer, TuiSheetDialog],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;

    protected readonly options: Partial<TuiSheetDialogOptions> = {
        label: 'Alexander Inkin',
        closeable: false,
    };
}
```

#### Advanced

**Template:**
```html
<button tuiButton type="button" (click)="open = true" > Show/Hide </button>
<ng-template #label>
<label tuiTitle>
<span tuiSubtitle>Monty Python</span>
<b>And the Holy Grail</b>
</label>
</ng-template>
<ng-template [tuiSheetDialogOptions]="{ label: label, stops: ['5.5rem', '13rem'], }" [(tuiSheetDialog)]="open" >
<p class="buttons">
<button appearance="secondary" size="m" tuiButton type="button" > Buy {{ 12.99 | tuiAmount: 'USD' | async }} </button>
<button appearance="secondary" size="m" tuiButton type="button" > Rent {{ 4.99 | tuiAmount: 'USD' | async }} </button>
</p>
<h3>Cast:</h3>
<p>John Cleese</p>
<p>Eric Idle</p>
<p>Michael Palin</p>
<p>Graham Chapman</p>
<p>Terry Gilliam</p>
<p>Terry Jones</p>
<p>Carol Cleveland</p>
<hr />
<h3>Directed by:</h3>
<p>Terry Gilliam</p>
<p>Terry Jones</p>
<hr />
<h3>Produced by:</h3>
<p>Mark Forstater</p>
<p>Michael White</p>
<hr />
<h3>Written by:</h3>
<p>John Cleese</p>
<p>Eric Idle</p>
<p>Michael Palin</p>
<p>Graham Chapman</p>
<p>Terry Gilliam</p>
<p>Terry Jones</p>
<hr />
<h3>Budget:</h3>
<p>{{ 400000 | tuiAmount: 'USD' | async }}</p>
<hr />
<h3>Box office:</h3>
<p>{{ 5000000 | tuiAmount: 'USD' | async }}</p>
<hr />
<h3>Release date</h3>
<p>April 3, 1975</p>
<hr />
<h3>Running time</h3>
<p>92 minutes</p>
<footer class="footer">© EMI Films</footer>
<div tuiFloatingContainer class="floating" >
<button size="m" tuiButton type="button" > Add to Watch List </button>
</div>
</ng-template>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiSheetDialog} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiFloatingContainer} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        TuiAmountPipe,
        TuiButton,
        TuiFloatingContainer,
        TuiSheetDialog,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;
}
```

**LESS:**
```less
.buttons {
    display: flex;
    margin: 0 0 1rem;
    gap: 0.5rem;

    & button {
        flex: 1;
    }
}

.footer {
    padding: 1rem 0 1.25rem;
    border-image: conic-gradient(var(--tui-background-base-alt) 0 0) fill 0/0/0 100vh 100vh;
}

.floating {
    margin-block-start: -1rem;
    padding-block-start: 1rem;
}
```

#### Sticky elements

**Template:**
```html
<button tuiButton type="button" (click)="toggle(true)" > Show/Hide </button>
<ng-template [tuiSheetDialog]="open" [tuiSheetDialogOptions]="{stops: ['29rem'], offset: offset, fullscreen: true}" (tuiSheetDialogChange)="toggle($event)" >
<header class="header">
<tui-input tuiTextfieldIconLeft="@tui.search" [formControl]="search" > Find user </tui-input>
</header>
<div class="container">
<button *ngFor="let user of users$ | async" type="button" class="item" (click)="toggle(false)" >
<tui-avatar size="s" [src]="user | tuiInitials" [style.background]="user | tuiAutoColor" /> {{ user }} </button>
</div>
<footer tuiFloatingContainer>
<button tuiButton type="button" (click)="toggle(false)" > Invite more users </button>
<span class="legal">Opens a separate app</span>
</footer>
</ng-template>
```

**TypeScript:**
```ts
import {AsyncPipe, NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSheetDialog} from '@taiga-ui/addon-mobile';
import {TUI_DEFAULT_MATCHER, tuiControlValue} from '@taiga-ui/cdk';
import {TuiAutoColorPipe, TuiButton, TuiInitialsPipe} from '@taiga-ui/core';
import {TuiAvatar, TuiFloatingContainer} from '@taiga-ui/kit';
import {TuiInputModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';
import {map} from 'rxjs';

const USERS = [
    'John Doe',
    'Jane Doe',
    'John Smith',
    'Jane Smith',
    'John Johnson',
    'Jane Johnson',
    'John Williams',
    'Jane Williams',
    'John Brown',
    'Jane Brown',
    'John Davis',
    'Jane Davis',
    'John Miller',
    'Jane Miller',
    'John Wilson',
    'Jane Wilson',
];

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        NgForOf,
        ReactiveFormsModule,
        TuiAutoColorPipe,
        TuiAvatar,
        TuiButton,
        TuiFloatingContainer,
        TuiInitialsPipe,
        TuiInputModule,
        TuiSheetDialog,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;

    protected readonly offset = 16;

    protected readonly search = new FormControl('');

    protected readonly users$ = tuiControlValue<string>(this.search).pipe(
        map((search) => USERS.filter((user) => TUI_DEFAULT_MATCHER(user, search))),
    );

    protected toggle(open: boolean): void {
        this.open = open;

        if (open) {
            this.search.setValue('');
        }
    }
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local.less';

.header {
    position: sticky;
    top: 1.5rem;
    z-index: 1;
    padding: 0.25rem 0 1rem;
    background: var(--tui-background-elevation-1);
}

.container {
    flex-grow: 1;
}

.item {
    all: unset;
    display: flex;
    block-size: 3rem;
    align-items: center;
    gap: 1rem;
}

.legal {
    .tui-line-clamp();

    margin-block-start: 0.5rem;
    min-block-size: 2rem;
}
```

#### Responsive

**Template:**
```html
<button tuiButton type="button" (click)="open = true" > Show </button>
<ng-template let-observer [tuiResponsiveDialogOptions]="options" [(tuiResponsiveDialog)]="open" > This dialog would show up as regular <a tuiLink [routerLink]="routes.Dialog" > Dialog </a> on desktop and as a <code>SheetDialog</code> on a mobile device. <footer class="footer">
<button size="m" tuiButton type="button" (click)="observer.complete()" > This is really cool </button>
<button appearance="secondary" size="m" tuiButton type="button" (click)="observer.complete()" > Glad to know that </button>
</footer>
</ng-template>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {DemoRoute} from '@demo/routes';
import {
    TuiResponsiveDialog,
    type TuiResponsiveDialogOptions,
} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiLink} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [RouterLink, TuiButton, TuiLink, TuiResponsiveDialog],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly routes = DemoRoute;
    protected open = false;

    protected readonly options: Partial<TuiResponsiveDialogOptions> = {
        label: 'Responsive',
        size: 's',
    };
}
```

**LESS:**
```less
.footer {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    gap: 1rem;
    margin-block-start: 1rem;

    button {
        flex: 1;
        overflow: visible;
    }
}
```

#### AppBar

**Template:**
```html
<tui-notification> When mobile styles are enabled you can use <code style="white-space: nowrap">input[type='search'][tuiSearch]</code> to imitate iOS native input </tui-notification>
<p>
<button tuiButton type="button" (click)="open.set(true)" > Show </button>
</p>
<ng-template #bar>
<tui-app-bar>
<button tuiButton tuiSlot="left" type="button" (click)="open.set(false)" > Close </button> Search contacts </tui-app-bar>
<input placeholder="Search contacts" tuiSearch type="search" class="input" [(ngModel)]="search" />
</ng-template>
<ng-template [tuiSheetDialog]="open()" [tuiSheetDialogOptions]="{label: bar, bar: false, fullscreen: true}" (tuiSheetDialogChange)="open.set($event)" >
<div class="favorites">
<tui-avatar-labeled *ngFor="let item of items | slice: 0 : 6" [label]="item.name" >
<tui-avatar [src]="item.avatar | tuiFallbackSrc: '@tui.user' | async" />
</tui-avatar-labeled>
</div>
<div class="items">
<button *ngFor="let item of items | tuiFilter: filter : search" tuiCell type="button" class="cell" (click)="open.set(false)" >
<tui-avatar [src]="item.avatar | tuiFallbackSrc: '@tui.user' | async" />
<span tuiTitle>
<span tuiFade>{{ item.name }}</span>
<span tuiSubtitle>{{ item.email }}</span>
</span>
</button>
</div>
<footer tuiFloatingContainer>
<button tuiButton type="button" class="button" (click)="open.set(false)" > Add contact </button>
</footer>
</ng-template>
```

**TypeScript:**
```ts
import {AsyncPipe, NgForOf, SlicePipe} from '@angular/common';
import {Component, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSheetDialog} from '@taiga-ui/addon-mobile';
import {TUI_DEFAULT_MATCHER, TuiFilterPipe, type TuiMatcher} from '@taiga-ui/cdk';
import {TuiButton, TuiFallbackSrcPipe, TuiNotification, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiAvatarLabeled, TuiFade, TuiFloatingContainer} from '@taiga-ui/kit';
import {TuiAppBar, TuiCell} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        FormsModule,
        NgForOf,
        SlicePipe,
        TuiAppBar,
        TuiAvatar,
        TuiAvatarLabeled,
        TuiButton,
        TuiCell,
        TuiFade,
        TuiFallbackSrcPipe,
        TuiFilterPipe,
        TuiFloatingContainer,
        TuiNotification,
        TuiSheetDialog,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = signal(false);
    protected search = '';

    protected readonly items = [
        {
            name: 'Grigori Constantinopolsky',
            avatar: 'https://avatars.githubusercontent.com/u/10106368',
            email: 'grigori@gmail.com',
        },
        {
            name: 'Nikolai Rimsky-Korsakov',
            avatar: 'https://avatars.githubusercontent.com/u/11832552',
            email: 'nikolai@gmail.com',
        },
        {
            name: 'Hubert Wolfflegelstainhausenbergedorf',
            avatar: 'https://avatars.githubusercontent.com/u/46284632',
            email: 'hubert@gmail.com',
        },
        {
            name: 'Arkhangelsky Constantine',
            avatar: 'https://avatars.githubusercontent.com/u/35179038',
            email: 'contantine@gmail.com',
        },
        {
            name: 'Zoya Kosmodemyanskaya',
            avatar: 'https://avatars.githubusercontent.com/u/8158578',
            email: 'zoya@gmail.com',
        },
        {
            name: 'Johann Gambolputty',
            avatar: '',
            email: 'johann@gmail.com',
        },
        ...inject<readonly string[]>('Pythons' as any).map((name) => ({
            name,
            avatar: '',
            email: `${name.split(' ')[0]}@gmail.com`,
        })),
    ];

    protected readonly filter: TuiMatcher<[(typeof this.items)[0], string]> = (
        item,
        search,
    ) => TUI_DEFAULT_MATCHER(item.name, search);
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.input {
    .tui-prevent-ios-scroll();

    inline-size: 100%;
    margin-block-start: 0.75rem;
}

.favorites {
    .scrollbar-hidden();

    display: flex;
    gap: 0.75rem;
    margin: 1rem -1rem;
    padding: 0 0.5rem;
    overflow: auto;
}

.items {
    min-block-size: calc(100 * var(--tui-viewport-vh) - var(--tui-offset) - 19.5rem);
}

.cell {
    inline-size: stretch;
    margin: 0 -1rem;
    white-space: nowrap;
    overflow: hidden;
    border-radius: 0;
}

.button {
    .transition(bottom);
}
```

#### Fullscreen

**Template:**
```html
<button tuiButton type="button" (click)="open = true" > Show </button>
<ng-template let-observer [tuiSheetDialogOptions]="options" [(tuiSheetDialog)]="open" >
<span>
<a appearance="secondary" href="mailto:alexander@inkin.ru" iconStart="@tui.mail" size="m" tuiIconButton class="tui-space_right-2" > Email </a>
<a appearance="secondary" href="https://t.me/waterplea" iconStart="@tui.phone-forwarded" size="m" tuiIconButton class="tui-space_right-2" > Telegram </a>
<a appearance="secondary" href="https://waterplea.bandcamp.com/" iconStart="@tui.music" size="m" tuiIconButton > Music </a>
</span>
<p [style.flex-grow]="1">Passionate Angular dev, musician and OSS author.</p>
<footer tuiFloatingContainer>
<button size="m" tuiButton type="button" (click)="observer.complete()" > Give a raise </button>
<button appearance="secondary" size="m" tuiButton type="button" (click)="observer.complete()" > Fire </button>
</footer>
</ng-template>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSheetDialog, type TuiSheetDialogOptions} from '@taiga-ui/addon-mobile';
import {TuiButton} from '@taiga-ui/core';
import {TuiFloatingContainer} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiButton, TuiFloatingContainer, TuiSheetDialog],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;

    protected readonly options: Partial<TuiSheetDialogOptions> = {
        label: 'Alexander Inkin',
        closeable: true,
        fullscreen: true,
    };
}
```

- Inject service and show dialog:
