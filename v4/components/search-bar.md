# SearchBar

- **Package**: `ADDON-MOBILE`
- **Type**: components

`TuiSearchBar` is a mobile search field. Put `tuiSearchBar` on a `<form>` or a `<search>` element, project a native `<input tuiSearchBar>` into it and a `<button tuiIconButton tuiButtonClose>` next to it. The searchbar only lays them out per platform: on iOS the button sits to the right of the field, on Android it moves inside the field on the leading side and turns into a back arrow.

### How to Use (Import)

```ts
import {TuiSearchBar} from '@taiga-ui/addon-mobile';
import {TuiButton} from '@taiga-ui/core';
import {TuiButtonClose} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiButton,
    TuiButtonClose,
    TuiSearchBar,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<form tuiSearchBar>
  <input
    placeholder="Search"
    tuiSearchBar
  />
  <button
    tuiButtonClose
    tuiIconButton
    type="reset"
  >
    Cancel
  </button>
</form>
```

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
    standalone: true,
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
<button tuiButtonClose tuiIconButton type="button" (click)="query.reset()" > Cancel </button>
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
import {TuiButton} from '@taiga-ui/core';
import {TuiButtonClose} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiButton, TuiButtonClose, TuiSearchBar],
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
<div role="search">
<form appearance="floating" tuiSearchBar (ngSubmit)="onSubmit()" >
<input name="query" placeholder="Search" tuiSearchBar [(ngModel)]="query" />
<button tuiButtonClose tuiIconButton type="reset" > Cancel </button>
</form>
</div>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSearchBar} from '@taiga-ui/addon-mobile';
import {TuiAlertService, TuiButton} from '@taiga-ui/core';
import {TuiButtonClose} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [FormsModule, TuiButton, TuiButtonClose, TuiSearchBar],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    host: {'[attr.data-platform]': '"ios"'},
})
export default class Example {
    private readonly alert = inject(TuiAlertService);

    protected query: string | null = '';

    protected onSubmit(): void {
        this.alert.open(`Searching for ${this.query}`).subscribe();
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
<header class="header">
<tui-app-bar *ngIf="!active">
<button title="Back" tuiAppBarBack tuiSlot="left" type="button" ></button> Taiga UI </tui-app-bar>
<div role="search">
<form appearance="floating" tuiSearchBar (tuiActiveZoneChange)="active = $event" >
<input placeholder="Search" tuiSearchBar />
<button tuiButtonClose tuiIconButton type="reset" > Cancel </button>
</form>
</div>
</header>
<div *tuiRepeatTimes="let index of 12" tuiCell >
<tui-avatar appearance="secondary" src="@tui.heart" />
<div tuiTitle> Title <div tuiSubtitle>Description</div>
</div>
</div>
```

**TypeScript:**
```ts
import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSearchBar} from '@taiga-ui/addon-mobile';
import {TUI_PLATFORM, TuiActiveZone, TuiRepeatTimes} from '@taiga-ui/cdk';
import {TUI_LIQUID_GLASS, TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiButtonClose} from '@taiga-ui/kit';
import {TuiAppBar, TuiCell} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        NgIf,
        TuiActiveZone,
        TuiAppBar,
        TuiAvatar,
        TuiButton,
        TuiButtonClose,
        TuiCell,
        TuiRepeatTimes,
        TuiSearchBar,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [
        {provide: TUI_LIQUID_GLASS, useValue: true},
        {provide: TUI_PLATFORM, useValue: 'ios'},
    ],
    host: {
        '[attr.data-platform]': '"ios"',
        '[class.tui-liquid-glass]': 'true',
    },
})
export default class Example {
    protected active = false;
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

[role='search'] {
    padding: 0.75rem 1rem;
}
```

#### Sticky

**Template:**
```html
<h2 class="title" (waIntersectionObservee)="floating = !$event[0]?.isIntersecting" > Search </h2>
<div role="search">
<form tuiSearchBar [appearance]="floating ? 'floating' : 'neutral'" >
<input placeholder="Search" tuiSearchBar />
<button tuiButtonClose tuiIconButton type="reset" > Cancel </button>
</form>
</div>
<div *tuiRepeatTimes="let index of 12" tuiCell >
<tui-avatar appearance="secondary" src="@tui.heart" />
<div tuiTitle> Title <div tuiSubtitle>Description</div>
</div>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    WaIntersectionObserver,
    WaIntersectionObserverDirective,
    WaIntersectionRoot,
} from '@ng-web-apis/intersection-observer';
import {TuiSearchBar} from '@taiga-ui/addon-mobile';
import {TUI_PLATFORM, TuiRepeatTimes} from '@taiga-ui/cdk';
import {TUI_LIQUID_GLASS, TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiButtonClose} from '@taiga-ui/kit';
import {TuiCell} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiAvatar,
        TuiButton,
        TuiButtonClose,
        TuiCell,
        TuiRepeatTimes,
        TuiSearchBar,
        TuiTitle,
        WaIntersectionObserver,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [
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
    protected floating = false;
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
    font: var(--tui-font-heading-4);
    font-weight: bold;
}

[role='search'] {
    position: sticky;
    z-index: 1;
    inset-block-start: 0;
    padding: 0.75rem 1rem;
}
```

#### Progressive blur

**Template:**
```html
<h2 class="title" (waIntersectionObservee)="floating = !$event[0]?.isIntersecting" > Search </h2>
<div role="search">
<form tuiSearchBar [appearance]="floating ? 'floating' : 'neutral'" [class.tui-liquid-glass_blur]="floating" >
<input placeholder="Search" tuiSearchBar />
<button tuiButtonClose tuiIconButton type="reset" > Cancel </button>
</form>
</div>
<div *tuiRepeatTimes="let index of 12" tuiCell >
<tui-avatar appearance="secondary" src="@tui.heart" />
<div tuiTitle> Title <div tuiSubtitle>Description</div>
</div>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    WaIntersectionObserver,
    WaIntersectionObserverDirective,
    WaIntersectionRoot,
} from '@ng-web-apis/intersection-observer';
import {TuiSearchBar} from '@taiga-ui/addon-mobile';
import {TUI_PLATFORM, TuiRepeatTimes} from '@taiga-ui/cdk';
import {TUI_LIQUID_GLASS, TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiButtonClose} from '@taiga-ui/kit';
import {TuiCell} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiAvatar,
        TuiButton,
        TuiButtonClose,
        TuiCell,
        TuiRepeatTimes,
        TuiSearchBar,
        TuiTitle,
        WaIntersectionObserver,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [
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
    protected floating = false;
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
    font: var(--tui-font-heading-4);
    font-weight: bold;
}

[role='search'] {
    position: sticky;
    z-index: 1;
    inset-block-start: 0;
}

// The blur covers the search bar box, so the padding belongs to it
form {
    padding: 0.75rem 1rem;
}
```

No form here, so the cancel button clears the field through a
`FormControl`

An active field on iOS is
`floating`
: liquid glass with a round cancel button. The bar sits on a
`<form>`
, so clearing and
`Enter`
work on their own

Pinned along with the app bar, the field is
`floating`
from the start and keeps that look while the content scrolls under it. Pinning is up to you, the search bar
only takes care of the look. Once the field becomes active, it takes the place of the app bar

Under a large heading the field starts inline and turns
`floating`
once the heading scrolls away — here the switch is driven by an
`IntersectionObserver`
watching the heading

On iOS with liquid glass, a progressive blur can be shown under the pinned field once the content scrolls
beneath it. To activate it, apply the
`tui-liquid-glass_blur`
class to the
`tuiSearchBar`
element. If the background is colored, provide it via the
`--tui-progressive-blur-background`
CSS variable for correct fading
