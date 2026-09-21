# SearchBar

- **Package**: `ADDON-MOBILE`
- **Type**: components

`TuiSearchBar` is a mobile search field. Put `tuiSearchBar` on any element — semantically that is `<search>` — project a native `<input tuiSearchBar>` into it and a `<button tuiButtonX>` next to it. The searchbar only lays them out per platform: on iOS the button sits to the right of the field, on Android it moves inside the field on the leading side and turns into a back arrow.

### Usage Examples

#### Inline iOS

**Template:**
```html
<search tuiSearchBar>
<input placeholder="Search" tuiSearchBar />
</search>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSearchBar} from '@taiga-ui/addon-mobile';
import {TUI_PLATFORM} from '@taiga-ui/cdk';

@Component({
    imports: [TuiSearchBar],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [{provide: TUI_PLATFORM, useValue: 'ios'}],
    host: {'[attr.data-platform]': '"ios"'},
})
export default class Example {}
```

#### Android

**Template:**
```html
<search tuiSearchBar>
<input placeholder="Search" tuiSearchBar [formControl]="query" />
<button tuiButtonX (click)="query.reset()" > Cancel </button>
</search>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSearchBar} from '@taiga-ui/addon-mobile';
import {TUI_PLATFORM} from '@taiga-ui/cdk';
import {TuiButtonX} from '@taiga-ui/core';

@Component({
    imports: [ReactiveFormsModule, TuiButtonX, TuiSearchBar],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [{provide: TUI_PLATFORM, useValue: 'android'}],
    host: {'[attr.data-platform]': '"android"'},
})
export default class Example {
    protected readonly query = new FormControl('');
}
```

#### iOS floating

**Template:**
```html
<search>
<form appearance="floating" tuiSearchBar (ngSubmit)="onSubmit()" >
<input name="query" placeholder="Search" tuiSearchBar [(ngModel)]="query" />
<button tuiButtonX type="reset" > Cancel </button>
</form>
</search>
```

**TypeScript:**
```ts
import {Component, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSearchBar} from '@taiga-ui/addon-mobile';
import {TuiButtonX, TuiNotificationService} from '@taiga-ui/core';

@Component({
    imports: [FormsModule, TuiButtonX, TuiSearchBar],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    host: {'[attr.data-platform]': '"ios"'},
})
export default class Example {
    private readonly alert = inject(TuiNotificationService);

    protected readonly query = signal<string | null>('');

    protected onSubmit(): void {
        this.alert.open(`Searching for ${this.query()}`).subscribe();
    }
}
```

**LESS:**
```less
:host {
    display: block;
    box-sizing: border-box;
    inline-size: 20rem;
    padding: 1.5rem 1rem;
    overflow-x: hidden;
}
```

#### App bar

**Template:**
```html
<header class="header"> @if (!active()) { <tui-app-bar>
<button title="Back" tuiAppBarBack tuiSlot="start" type="button" ></button> Taiga UI </tui-app-bar> } <search>
<form appearance="floating" tuiSearchBar (tuiActiveZoneChange)="active.set($event)" >
<input placeholder="Search" tuiSearchBar />
<button tuiButtonX type="reset" > Cancel </button>
</form>
</search>
</header> @for (_ of '-'.repeat(12); track $index) { <div tuiCell>
<div appearance="secondary" tuiAvatar="@tui.heart" ></div>
<div tuiTitle> Title <div tuiSubtitle>Description</div>
</div>
</div> }
```

**TypeScript:**
```ts
import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSearchBar} from '@taiga-ui/addon-mobile';
import {TUI_PLATFORM, TuiActiveZone} from '@taiga-ui/cdk';
import {TUI_LIQUID_GLASS, TuiButtonX, TuiCell, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiAppBar} from '@taiga-ui/layout';

@Component({
    imports: [
        TuiActiveZone,
        TuiAppBar,
        TuiAvatar,
        TuiButtonX,
        TuiCell,
        TuiSearchBar,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [
        // Not required if `provideTaiga({apis: {liquidGlass: true}})` is already set up
        {provide: TUI_LIQUID_GLASS, useValue: true},
        {provide: TUI_PLATFORM, useValue: 'ios'},
    ],
    host: {
        '[attr.data-platform]': '"ios"',
        '[class.tui-liquid-glass]': 'true',
    },
})
export default class Example {
    protected readonly active = signal(false);
}
```

**LESS:**
```less
:host {
    display: block;
    max-block-size: 20rem;
    inline-size: 20rem;
    overscroll-behavior: none;
    overflow-x: hidden;
}

.header {
    position: sticky;
    z-index: 1;
    inset-block-start: 0;
    overflow: hidden;
    margin-block-end: -2rem;
    padding-block-end: 2rem;
}

search {
    padding: 0.75rem 1rem;
}
```

#### Sticky

**Template:**
```html
<h2 class="title" (waIntersectionObservee)="floating.set(!$event[0]?.isIntersecting)" > Search </h2>
<search>
<form tuiSearchBar [appearance]="floating() ? 'floating' : 'neutral'" >
<input placeholder="Search" tuiSearchBar />
<button tuiButtonX type="reset" > Cancel </button>
</form>
</search> @for (_ of '-'.repeat(12); track $index) { <div tuiCell>
<div appearance="secondary" tuiAvatar="@tui.heart" ></div>
<div tuiTitle> Title <div tuiSubtitle>Description</div>
</div>
</div> }
```

**TypeScript:**
```ts
import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    WaIntersectionObserver,
    WaIntersectionObserverDirective,
    WaIntersectionRoot,
} from '@ng-web-apis/intersection-observer';
import {TuiSearchBar} from '@taiga-ui/addon-mobile';
import {TUI_PLATFORM} from '@taiga-ui/cdk';
import {TUI_LIQUID_GLASS, TuiButtonX, TuiCell, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';

@Component({
    imports: [
        TuiAvatar,
        TuiButtonX,
        TuiCell,
        TuiSearchBar,
        TuiTitle,
        WaIntersectionObserver,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [
        // Not required if `provideTaiga({apis: {liquidGlass: true}})` is already set up
        {provide: TUI_LIQUID_GLASS, useValue: true},
        {provide: TUI_PLATFORM, useValue: 'ios'},
    ],
    hostDirectives: [WaIntersectionObserverDirective, WaIntersectionRoot],
    host: {
        '[attr.data-platform]': '"ios"',
        '[class.tui-liquid-glass]': 'true',
    },
})
export default class Example {
    protected readonly floating = signal(false);
}
```

**LESS:**
```less
:host {
    display: block;
    max-block-size: 20rem;
    inline-size: 20rem;
    overflow: auto;
    overscroll-behavior: none;
}

.title {
    margin: 0.5rem 0;
    font: var(--tui-typography-heading-h4);
    font-weight: bold;
}

search {
    position: sticky;
    z-index: 1;
    inset-block-start: 0;
    padding: 0.75rem 1rem;
}
```
