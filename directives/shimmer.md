# Shimmer

- **Package**: `KIT`
- **Type**: directives

`tuiShimmer` directive visually implements the "Shimmer" UI pattern — an animated loading indicator that simulates content appearance while data is being fetched. This pattern enhances the user experience by providing visual feedback during loading states, helping users understand that the interface is active and content is on its way. When to Use To indicate loading states in cards, headers, lists, avatars, and other UI elements. When you want to visually communicate that content is loading, rather than missing or frozen. Shimmer is used when you have cached data that is currently being refreshed and if you have no data at all — a better choice would be Skeleton

### Example

```html
<section appearance="floating" tuiCardLarge >
<header tuiHeader>
<hgroup tuiTitle [tuiShimmer]="shimmer" >
<h5>You got $237&nbsp;000,42 left</h5>
<p tuiSubtitle>Where's the money, Lebowski?</p>
</hgroup>
<aside tuiAccessories>
<div appearance="primary" tuiAvatar="@tui.star" ></div>
</aside>
</header>
<tui-avatar-stack [tuiShimmer]="shimmer"> @for (avatar of avatars; track $index) { <div tuiAvatar="@tui.user">
<img alt="" [src]="avatar" />
</div> } </tui-avatar-stack>
<footer>
<button appearance="secondary" size="m" tuiButton type="button" > It's down there </button>
<button size="m" tuiButton type="button" > Take another look </button>
</footer>
</section>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [tuiShimmer] | `boolean` | enabling shimmer state |

### Usage Examples

#### Basic

**Template:**
```html
<label tuiLabel>
<input tuiSwitch type="checkbox" [(ngModel)]="loading" /> Loading </label>
<h3>Shimmer</h3>
<section appearance="floating" tuiCardLarge >
<header tuiHeader>
<hgroup tuiTitle [tuiShimmer]="loading" >
<h5>You got $237&nbsp;000,42 left</h5>
<p tuiSubtitle>Where's the money, Lebowski?</p>
</hgroup>
<aside tuiAccessories>
<div appearance="primary" tuiAvatar="@tui.star" ></div>
</aside>
</header>
<tui-avatar-stack [tuiShimmer]="loading"> @for (avatar of avatars; track $index) { <div tuiAvatar="@tui.user">
<img alt="" [src]="avatar" />
</div> } </tui-avatar-stack>
<footer>
<button appearance="secondary" size="m" tuiButton type="button" > It's down there </button>
<button size="m" tuiButton type="button" > Take another look </button>
</footer>
</section>
<h3>Skeleton</h3>
<section appearance="floating" tuiCardLarge >
<header tuiHeader>
<hgroup tuiTitle>
<h5 [tuiSkeleton]="loading && 5"> {{ loading ? '' : 'You got $237&nbsp;000,42 left' }} </h5>
<p tuiSubtitle [tuiSkeleton]="loading && 6" > {{ loading ? '' : "Where's the money, Lebowski?" }} </p>
</hgroup>
<aside tuiAccessories>
<div appearance="primary" tuiAvatar="@tui.star" [tuiSkeleton]="loading" ></div>
</aside>
</header>
<tui-avatar-stack> @for (avatar of avatars; track avatar) { <div [tuiAvatar]="avatar" [tuiSkeleton]="loading" ></div> } </tui-avatar-stack>
<footer>
<button appearance="secondary" size="m" tuiButton type="button" > It's down there </button>
<button size="m" tuiButton type="button" > Take another look </button>
</footer>
</section>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButton, TuiLabel, TuiTitle} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiAvatarStack,
    TuiShimmer,
    TuiSkeleton,
    TuiSwitch,
} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
        TuiAvatar,
        TuiAvatarStack,
        TuiButton,
        TuiCardLarge,
        TuiHeader,
        TuiLabel,
        TuiShimmer,
        TuiSkeleton,
        TuiSwitch,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
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

h3 {
    font: var(--tui-typography-heading-h6);
    margin: 0;
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
<section appearance="floating" tuiCardLarge >
<header tuiHeader>
<hgroup tuiTitle [tuiShimmer]="loading" >
<h5>You got $237&nbsp;000,42 left</h5>
<p tuiSubtitle>Where's the money, Lebowski?</p>
</hgroup>
<aside tuiAccessories>
<div appearance="primary" tuiAvatar="@tui.star" ></div>
</aside>
</header>
<tui-avatar-stack [tuiShimmer]="loading"> @for (avatar of avatars; track $index) { <div tuiAvatar="@tui.user">
<img alt="" [src]="avatar" />
</div> } </tui-avatar-stack>
<footer>
<button appearance="secondary" size="m" tuiButton type="button" > It's down there </button>
<button size="m" tuiButton type="button" > Take another look </button>
</footer>
</section>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButton, TuiLabel, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiAvatarStack, TuiShimmer, TuiSwitch} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
        TuiAvatar,
        TuiAvatarStack,
        TuiButton,
        TuiCardLarge,
        TuiHeader,
        TuiLabel,
        TuiShimmer,
        TuiSwitch,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
