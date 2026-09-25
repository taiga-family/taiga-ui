# SheetDialog

- **Package**: `ADDON-MOBILE`
- **Type**: components

A mobile draggable sheet dialog

### Example

```html
<button tuiButton type="button" (click)="showDialog(sheetTemplate)" > Click </button>
<ng-template #sheetTemplate let-completeWith="completeWith" let-observer >
<p [style.flex-grow]="1"> Karl Gambolputty de von Ausfern-schplenden-schlitter-crasscrenbon-fried-digger-dingle-dangle-dongle-dungle-burstein-von-knacker-thrasher-apple-banger-horowitz-ticolensic-grander-knotty-spelltinkle-grandlich-grumblemeyer-spelterwasser-kurstlich-himbleeisen-bahnwagen-gutenabend-bitte-ein-nürnburger-bratwustle-gerspurten-mitzweimache-luber von Hautkopft of Ulm was the last-surviving relative of Johann Gambolputty de von. </p>
<footer tuiFloatingContainer>
<button tuiButton type="button" (click)="observer.next('Hi')" > Say "Hi" </button>
<button tuiButton type="button" (click)="completeWith('Hi and bye!')" > Say "Hi and bye!" </button>
</footer>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [appearance] | `string` | custom data-appearance attribute value |
| [closable] | `boolean` | whether or not a sheet can be closed by user. |
| [bar] | `boolean` | show top bar |
| [data] | `I` | optional data to be passed to the sheet. |
| [label] | `string` | sheet heading. |
| [stops] | `string[]` | an array of stop points in any units for the sheet. |
| [initial] | `number` | means to stop on top of the sheet's content. |
| [offset] | `number` | ) |
| [required] | `boolean` | (you can catch it with "catch" operator or onError handler) |
| [themeColor] | `string` | , an empty string opts out. |

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
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly service = inject(TuiSheetDialogService);

    protected onClick(): void {
        this.service
            .open('Supports <b>basic</b> HTML', {label: 'Simple sheet'})
            .subscribe();
    }
}
```

#### Basic

**Template:**
```html
<button tuiButton type="button" (click)="open = true" > Show </button>
<ng-template let-observer [tuiSheetDialogOptions]="options" [(tuiSheetDialog)]="open" >
<div>
<a appearance="secondary" href="mailto:alexander@inkin.ru" iconStart="@tui.mail" size="m" tuiIconButton class="tui-space_right-2" > Email </a>
<a appearance="secondary" href="https://t.me/waterplea" iconStart="@tui.phone-forwarded" size="m" tuiIconButton class="tui-space_right-2" > Telegram </a>
<a appearance="secondary" href="https://waterplea.bandcamp.com/" iconStart="@tui.music" size="m" tuiIconButton > Music </a>
</div>
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
import {TuiFloatingContainer} from '@taiga-ui/layout';

@Component({
    imports: [TuiButton, TuiFloatingContainer, TuiSheetDialog],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;

    protected readonly options: Partial<TuiSheetDialogOptions> = {
        label: 'Alexander Inkin',
        closable: false,
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
<ng-template [tuiSheetDialogOptions]="{stops: ['5.75rem', '13.875rem']}" [(tuiSheetDialog)]="open" >
<header tuiHeader="body-m">
<hgroup tuiTitle>
<p tuiSubtitle>Monty Python</p>
<h2>And the Holy Grail</h2>
</hgroup>
</header>
<p class="buttons">
<button appearance="secondary" size="m" tuiButton type="button" > Buy {{ 12.99 | tuiAmount: 'USD' }} </button>
<button appearance="secondary" size="m" tuiButton type="button" > Rent {{ 4.99 | tuiAmount: 'USD' }} </button>
</p>
<div>
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
<p>{{ 400000 | tuiAmount: 'USD' }}</p>
<hr />
<h3>Box office:</h3>
<p>{{ 5000000 | tuiAmount: 'USD' }}</p>
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
</div>
</ng-template>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiSheetDialog} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiFloatingContainer, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [
        TuiAmountPipe,
        TuiButton,
        TuiFloatingContainer,
        TuiHeader,
        TuiSheetDialog,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
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

hr {
    block-size: 1px;
    border: none;
    background: var(--tui-border-normal);
}
```

#### Sticky elements

**Template:**
```html
<button tuiButton type="button" (click)="toggle(true)" > Show/Hide </button>
<ng-template [tuiSheetDialog]="open" [tuiSheetDialogOptions]="{stops: ['29rem'], offset: offset, appearance: 'fullscreen'}" (tuiSheetDialogChange)="toggle($event)" >
<header class="header">
<tui-textfield iconStart="@tui.search">
<input tuiInput [formControl]="search" />
<label tuiLabel>Find user</label>
</tui-textfield>
</header>
<div class="container"> @for (user of users$ | async; track user) { <button type="button" class="item" (click)="toggle(false)" >
<div size="s" [style.background]="user | tuiAutoColor" [tuiAvatar]="user | tuiInitials" ></div> {{ user }} </button> } </div>
<footer tuiFloatingContainer>
<button tuiButton type="button" (click)="toggle(false)" > Invite more users </button>
<span class="legal">Opens a separate app</span>
</footer>
</ng-template>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSheetDialog} from '@taiga-ui/addon-mobile';
import {TUI_DEFAULT_MATCHER, tuiControlValue} from '@taiga-ui/cdk';
import {TuiButton, TuiInput} from '@taiga-ui/core';
import {TuiAutoColorPipe, TuiAvatar, TuiInitialsPipe} from '@taiga-ui/kit';
import {TuiFloatingContainer} from '@taiga-ui/layout';
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
    imports: [
        AsyncPipe,
        ReactiveFormsModule,
        TuiAutoColorPipe,
        TuiAvatar,
        TuiButton,
        TuiFloatingContainer,
        TuiInitialsPipe,
        TuiInput,
        TuiSheetDialog,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
@import '@taiga-ui/styles/utils.less';

.header {
    padding-block: 0.25rem 1rem;
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
<ng-template let-observer [tuiResponsiveDialogOptions]="options" [(tuiResponsiveDialog)]="open" >
<div> This dialog would show up as regular <a tuiLink [routerLink]="routes.Dialog" > Dialog </a> on desktop and as a <code>SheetDialog</code> on a mobile device. </div>
<footer>
<button appearance="secondary" size="m" tuiButton type="button" (click)="observer.complete()" > Glad to know that </button>
<button size="m" tuiButton type="button" (click)="observer.complete()" > Sure </button>
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
    imports: [RouterLink, TuiButton, TuiLink, TuiResponsiveDialog],
    templateUrl: './index.html',
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

#### AppBar

**Template:**
```html
<div tuiNotification> When mobile styles are enabled you can use <code style="white-space: nowrap">input[type='search'][tuiSearch]</code> to imitate iOS native input </div>
<p>
<button tuiButton type="button" (click)="open.set(true)" > Show </button>
</p>
<ng-template [tuiSheetDialogOptions]="{appearance: 'fullscreen', bar: false}" [(tuiSheetDialog)]="open" >
<header>
<tui-app-bar>
<button tuiButton tuiSlot="start" type="button" (click)="open.set(false)" > Close </button> Search contacts </tui-app-bar>
<input placeholder="Search contacts" tuiSearch type="search" class="input" [(ngModel)]="search" />
</header>
<div class="favorites"> @for (item of items | slice: 0 : 6; track item) { <tui-avatar-labeled [label]="item.name">
<div tuiAvatar="@tui.user">
<img alt="" [src]="item.avatar" />
</div>
</tui-avatar-labeled> } </div>
<div class="items"> @for (item of items | tuiFilter: filter : search; track item) { <button tuiCell type="button" class="cell" (click)="open.set(false)" >
<div tuiAvatar="@tui.user">
<img alt="" [src]="item.avatar" />
</div>
<span tuiTitle>
<span tuiFade>{{ item.name }}</span>
<span tuiSubtitle>{{ item.email }}</span>
</span>
</button> } </div>
<footer tuiFloatingContainer>
<button tuiButton type="button" class="button" (click)="open.set(false)" > Add contact </button>
</footer>
</ng-template>
```

**TypeScript:**
```ts
import {SlicePipe} from '@angular/common';
import {Component, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSheetDialog} from '@taiga-ui/addon-mobile';
import {TUI_DEFAULT_MATCHER, TuiFilterPipe, type TuiMatcher} from '@taiga-ui/cdk';
import {TuiButton, TuiCell, TuiNotification, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiAvatarLabeled, TuiFade} from '@taiga-ui/kit';
import {TuiAppBar, TuiFloatingContainer} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
        SlicePipe,
        TuiAppBar,
        TuiAvatar,
        TuiAvatarLabeled,
        TuiButton,
        TuiCell,
        TuiFade,
        TuiFilterPipe,
        TuiFloatingContainer,
        TuiNotification,
        TuiSheetDialog,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly open = signal(false);
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
@import '@taiga-ui/styles/utils';

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
    inline-size: 100%;
    margin: 0 -1rem;
    white-space: nowrap;
    overflow: hidden;
    border-radius: 0;
}

.button {
    .transition(inset-block-end);
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
import {TuiFloatingContainer} from '@taiga-ui/layout';

@Component({
    imports: [TuiButton, TuiFloatingContainer, TuiSheetDialog],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;

    protected readonly options: Partial<TuiSheetDialogOptions> = {
        label: 'Alexander Inkin',
        closable: true,
        appearance: 'fullscreen',
    };
}
```

#### Address bar color

**Template:**
```html
<button tuiButton type="button" (click)="onClick()" > Show </button>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    tuiSheetDialogOptionsProvider,
    TuiSheetDialogService,
} from '@taiga-ui/addon-mobile';
import {TuiButton} from '@taiga-ui/core';

@Component({
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    // `themeColor` sets the `<meta name="theme-color">` (mobile address bar)
    // while the sheet is open, then reverts on close. Scope the service so the
    // option applies only to sheets opened from here; provide it once at the
    // application root to make it the default everywhere. Pass an empty string
    // to opt out.
    providers: [
        TuiSheetDialogService,
        tuiSheetDialogOptionsProvider({themeColor: '#ff1493'}),
    ],
})
export default class Example {
    private readonly service = inject(TuiSheetDialogService);

    protected onClick(): void {
        this.service
            .open(
                'On mobile, the browser address bar turns <b>pink</b> while this sheet is open.',
                {label: 'Address bar color'},
            )
            .subscribe();
    }
}
```

- Inject service and show dialog:
