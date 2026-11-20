# Shimmer

- **Package**: `KIT`
- **Type**: directives

`tuiShimmer` directive visually implements the "Shimmer" UI pattern — an animated loading indicator that simulates content appearance while data is being fetched. This pattern enhances the user experience by providing visual feedback during loading states, helping users understand that the interface is active and content is on its way. When to Use To indicate loading states in cards, headers, lists, avatars, and other UI elements. When you want to visually communicate that content is loading, rather than missing or frozen. Shimmer is used when you have cached data that is currently being refreshed and if you have no data at all — a better choice would be Skeleton

### How to Use (Import)

```ts
@Component({
  standalone: true,
  imports: [
    // ...
    TuiShimmer,
  ],
})
export class Example {
  protected shimmer = true;
}
```

### How to Use (Template)

```html
<!-- Usual HTML element -->
<div [tuiShimmer]="shimmer">I'm shimmering</div>

<!-- Or other component of Taiga UI -->
<tui-calendar [tuiShimmer]="shimmer" />
```

### Example

```html
<section tuiCardLarge tuiSurface="floating" >
<header tuiHeader>
<hgroup tuiTitle [tuiShimmer]="shimmer" >
<h5>You got $237&nbsp;000,42 left</h5>
<p tuiSubtitle>Where's the money, Lebowski?</p>
</hgroup>
<aside tuiAccessories>
<tui-avatar appearance="primary" src="@tui.star" />
</aside>
</header>
<tui-avatar-stack [tuiShimmer]="shimmer">
<tui-avatar src="https://avatars.githubusercontent.com/u/87331898" />
<tui-avatar src="https://avatars.githubusercontent.com/u/12021443" />
<tui-avatar src="https://avatars.githubusercontent.com/u/35179038" />
<tui-avatar src="https://avatars.githubusercontent.com/u/46284632" />
<tui-avatar src="https://avatars.githubusercontent.com/u/10106368" />
<tui-avatar src="https://avatars.githubusercontent.com/u/11832552" />
</tui-avatar-stack>
<footer>
<button appearance="secondary" size="m" tuiButton type="button" > It's down there </button>
<button size="m" tuiButton type="button" > Take another look </button>
</footer>
</section>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [tuiShimmer] | `boolean` | Shimmer state |

### Usage Examples

#### Basic

**Template:**
```html
<label tuiLabel>
<input tuiSwitch type="checkbox" [(ngModel)]="loading" /> Loading </label>
<span [style.font]="'var(--tui-font-text-xl)'">Shimmer</span>
<section tuiAppearance="floating" tuiCardLarge >
<header tuiHeader>
<hgroup tuiTitle [tuiShimmer]="loading" >
<h5>You got $237&nbsp;000,42 left</h5>
<p tuiSubtitle>Where's the money, Lebowski?</p>
</hgroup>
<aside tuiAccessories>
<tui-avatar appearance="primary" src="@tui.star" />
</aside>
</header>
<tui-avatar-stack [tuiShimmer]="loading">
<tui-avatar *ngFor="let avatar of avatars" [src]="avatar" />
</tui-avatar-stack>
<footer>
<button appearance="secondary" size="m" tuiButton type="button" > It's down there </button>
<button size="m" tuiButton type="button" > Take another look </button>
</footer>
</section>
<span [style.font]="'var(--tui-font-text-xl)'">Skeleton</span>
<section tuiAppearance="floating" tuiCardLarge >
<header tuiHeader>
<hgroup tuiTitle>
<h5 [tuiSkeleton]="loading && 5"> {{ loading ? '' : 'You got $237&nbsp;000,42 left' }} </h5>
<p tuiSubtitle [tuiSkeleton]="loading && 6" > {{ loading ? '' : "Where's the money, Lebowski?" }} </p>
</hgroup>
<aside tuiAccessories>
<tui-avatar appearance="primary" src="@tui.star" [tuiSkeleton]="loading" />
</aside>
</header>
<tui-avatar-stack>
<tui-avatar *ngFor="let avatar of avatars" [src]="avatar" [tuiSkeleton]="loading" />
</tui-avatar-stack>
<footer>
<button appearance="secondary" size="m" tuiButton type="button" > It's down there </button>
<button size="m" tuiButton type="button" > Take another look </button>
</footer>
</section>
```

**TypeScript:**
```ts
import {NgFor} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiAppearance, TuiButton, TuiLabel, TuiTitle} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiAvatarStack,
    TuiShimmer,
    TuiSkeleton,
    TuiSwitch,
} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgFor,
        TuiAppearance,
        TuiAvatar,
        TuiAvatarStack,
        TuiButton,
        TuiCardLarge,
        TuiDemo,
        TuiHeader,
        TuiLabel,
        TuiShimmer,
        TuiSkeleton,
        TuiSwitch,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class Example {
    protected loading = true;

    protected readonly avatars = [
        'https://avatars.githubusercontent.com/mdlufy',
        'https://avatars.githubusercontent.com/splincode',
        'https://avatars.githubusercontent.com/nsbarsukov',
        'https://avatars.githubusercontent.com/vladimirpotekhin',
        'https://avatars.githubusercontent.com/marsibarsi',
        'https://avatars.githubusercontent.com/waterplea',
    ];
}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

footer {
    display: flex;
    gap: 1.25rem;

    button {
        flex: 1;
    }
}
```

#### Disabled animations

**Template:**
```html
<label tuiLabel>
<input tuiSwitch type="checkbox" [(ngModel)]="loading" /> Loading </label>
<section tuiAppearance="floating" tuiCardLarge >
<header tuiHeader>
<hgroup tuiTitle [tuiShimmer]="loading" >
<h5>You got $237&nbsp;000,42 left</h5>
<p tuiSubtitle>Where's the money, Lebowski?</p>
</hgroup>
<aside tuiAccessories>
<tui-avatar appearance="primary" src="@tui.star" />
</aside>
</header>
<tui-avatar-stack [tuiShimmer]="loading">
<tui-avatar *ngFor="let avatar of avatars; let index = index" [src]="avatar" />
</tui-avatar-stack>
<footer>
<button appearance="secondary" size="m" tuiButton type="button" > It's down there </button>
<button size="m" tuiButton type="button" > Take another look </button>
</footer>
</section>
```

**TypeScript:**
```ts
import {NgFor} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiAppearance, TuiButton, TuiLabel, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiAvatarStack, TuiShimmer, TuiSwitch} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgFor,
        TuiAppearance,
        TuiAvatar,
        TuiAvatarStack,
        TuiButton,
        TuiCardLarge,
        TuiDemo,
        TuiHeader,
        TuiLabel,
        TuiShimmer,
        TuiSwitch,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class Example {
    protected loading = true;

    protected readonly avatars = [
        'https://avatars.githubusercontent.com/mdlufy',
        'https://avatars.githubusercontent.com/splincode',
        'https://avatars.githubusercontent.com/nsbarsukov',
        'https://avatars.githubusercontent.com/vladimirpotekhin',
        'https://avatars.githubusercontent.com/marsibarsi',
        'https://avatars.githubusercontent.com/waterplea',
    ];
}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

section {
    --tui-duration: 0;
}

footer {
    display: flex;
    gap: 1.25rem;

    button {
        flex: 1;
    }
}
```
