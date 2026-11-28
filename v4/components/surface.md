# Surface

- **Package**: `CORE`
- **Type**: components

General purpose container used in Taiga UI interfaces. Often used in conjunction with Card component.

### How to Use (Import)

```ts
import {Component} from '@angular/core';
import {TuiSurface} from '@taiga-ui/core';
// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiSurface,
  ],
})
export class Example {}
```

### How to Use (Template)

```html
<div tuiSurface>
  <!-- Content -->
</div>
```

### Usage Examples

#### Behaviors

**Template:**
```html
<button tuiSurface type="button" class="scale" > Scale </button>
<button tuiSurface type="button" class="overlay" > Overlay </button>
<button tuiSurface="primary" type="button" class="highlight" > Highlight </button>
<button tuiSurface type="button" class="offset" > Offset </button>
<button tuiSurface type="button" class="background" > Background </button>
<button tuiSurface type="button" class="shadow" > Shadow </button>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAppearance, TuiSurface} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiAppearance, TuiSurface],
    templateUrl: './index.html',
    styleUrls: ['./base.less', './index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.scale {
    @media @tui-mouse {
        &:hover {
            transform: scale(1.15);
        }
    }

    &:active {
        transform: scale(0.95);
    }
}

.overlay {
    &::after {
        opacity: 0;
        background: linear-gradient(
            -45deg,
            #a1a1b3 0.36%,
            #d4d1d8 46.96%,
            #f7fafa 67.14%,
            #d4d1d8 83.19%,
            #a1a1b3 93.03%
        );
    }

    @media @tui-mouse {
        &:hover::after {
            opacity: 0.5;
        }
    }

    &:active::after {
        opacity: 1;
    }
}

.highlight {
    @media @tui-mouse {
        &:hover::before {
            backdrop-filter: brightness(1.1);
        }
    }

    &:active::before {
        backdrop-filter: brightness(0.9);
    }
}

.offset:hover {
    transform: translate3d(0, -0.25rem, 0);
}

.background {
    &::after {
        background: url('/assets/images/not-found.svg') top;
        background-size: 300%;
    }

    &:hover::after {
        transform: scale(1.15);
    }
}

.shadow:hover {
    box-shadow: var(--tui-shadow-small-hover);
}
```

#### Presets

**Template:**
```html
<button tuiSurface="floating" type="button" > Floating </button>
<button tuiSurface="neutral" type="button" > Neutral </button>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSurface} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiSurface],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
:host {
    display: grid;
    grid-template-columns: repeat(3, 8rem);
    gap: 1rem;
}

[tuiSurface] {
    padding: 1.25rem;
    border-radius: var(--tui-radius-l);
}
```

#### Blur

**Template:**
```html
<div tuiSurface tuiTheme="dark" class="blur" >
<h2 class="title">backdrop-filter</h2>
<p>You can use backdrop-filter on tuiSurface element to blur the background behind it.</p> Never use this mode with shadow </div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSurface} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiSurface],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
:host {
    display: block;
    background: url('/assets/images/big-wallpaper.jpg');
    background-size: cover;
    padding: 2rem;
}

.blur {
    backdrop-filter: blur(1rem);
    background: var(--tui-background-neutral-1);
    color: var(--tui-text-primary);
    padding: 1rem 1.25rem;
}

.title {
    margin: 0;
    font: var(--tui-font-heading-6);
}
```

#### Video

**Template:**
```html
<div tuiSurface class="surface" >
<video autoplay loop playsinline tuiSurfaceLayer [muted]="true" >
<source src="assets/media/bbb.mp4" type="video/mp4" />
</video>
<p>
<b>Big Buck Bunny</b>
</p>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSurface} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiSurface],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
.surface {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    block-size: 18rem;
    color: #fff;
    font: var(--tui-font-text-l);

    &::after {
        background: var(--tui-background-neutral-1);
        box-shadow: inset 0 -7rem 6rem -6rem #000;
        mix-blend-mode: multiply;
    }
}
```

#### Selectable

**Template:**
```html
<label *tuiRepeatTimes="let index of 4" tuiSurface [style.border-radius.rem]="0.75" [style.padding.rem]="1.25" > Item {{ index + 1 }} <input tuiSurfaceLayer type="radio" [value]="index" [(ngModel)]="value" />
<div tuiRipple tuiSurfaceLayer [style.background-color]="'var(--tui-background-neutral-1)'" ></div>
</label>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiSurface} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [FormsModule, TuiRepeatTimes, TuiSurface],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected value = null;
}
```

**LESS:**
```less
:host {
    display: flex;
    gap: 1rem;
    white-space: nowrap;

    * > {
        flex-shrink: 0;
    }
}
```

#### Spacing compensation

**Template:**
```html
<button tuiSurface="floating" type="button" class="button" >
<span>
<span class="title">That looks good!</span> Apply manual compensation for a more balanced look. </span>
<tui-avatar appearance="accent" size="s" src="@tui.thumbs-up" />
</button>
<button tuiSurface="floating" type="button" class="button bad" >
<span>
<span class="title">This looks bad...</span> Use negative margin or reduced padding on specific sides to fix it. </span>
<tui-avatar appearance="accent" size="s" src="@tui.thumbs-down" />
</button>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSurface} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiAvatar, TuiSurface],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
.button {
    display: flex;
    inline-size: 20rem;
    text-align: start;
    gap: 1rem;
    border-radius: 1rem;
    padding: 1rem 1rem 1rem 1.25rem;
    font: var(--tui-font-text-m);
}

.title {
    display: block;
    font: var(--tui-font-heading-6);
    margin-block-end: 0.25rem;
}

.bad {
    margin-block-start: 1rem;
    padding: 1.25rem;
}
```

#### Examples

**Template:**
```html
<button tuiSurface type="button" class="card" [style.background-image]="'url(assets/images/tickets.svg)'" [style.color]="'#d45d8c'" >
<h3 class="heading">Tickets</h3>
<div class="content">Concerts, theater, sports and movies</div>
<tui-badge appearance="primary" size="s" class="badge" > 20% off </tui-badge>
</button>
<button tuiSurface type="button" class="card" [style.background-image]="'url(assets/images/gas.svg)'" [style.color]="'#7caeff'" >
<h3 class="heading">Gas</h3>
<tui-badge appearance="primary" size="s" class="badge" > +2000% </tui-badge>
</button>
<div tuiSurface class="restaurant" >
<header tuiTheme="dark" class="header" >
<label tuiTitle>
<span tuiSubtitle>RESTAURANT</span> Eat all you can </label>
<button appearance="icon" iconStart="@tui.ellipsis" size="xs" tuiIconButton type="button" > More </button>
</header>
<footer class="footer">
<button appearance="glass" size="m" tuiButton type="button" [style.border-radius.rem]="5" > Book a table </button>
<button appearance="glass" iconStart="@tui.heart" size="m" tuiIconButton type="button" [style.border-radius.rem]="5" > Favorite </button>
</footer>
</div>
<div tuiSurface tuiTheme="dark" class="blur" >
<tui-avatar src="assets/images/avatar.jpg" />
<label tuiLabel="Taiga UI">Alex Inkin</label>
<button appearance="glass" iconStart="@tui.mail" size="m" tuiIconButton type="button" class="button" > Message </button>
</div>
<div tuiCardLarge tuiSurface="floating" class="reviews" >
<h3 class="heading"> Taiga UI reviews <button tuiLink type="button" class="link" > Hide </button>
</h3>
<tui-scrollbar class="scrollbar" [hidden]="true" >
<div class="wrapper">
<div *ngFor="let review of reviews" tuiSurface="neutral" class="review" > {{ review.body }} <footer class="footer">
<tui-avatar size="m" src="assets/images/avatar.jpg" />
<label tuiTitle> {{ review.name }} <span tuiSubtitle>{{ review.time }}</span>
</label>
</footer>
</div>
</div>
</tui-scrollbar>
<button appearance="secondary" size="m" tuiButton type="button" > See all </button>
</div>
<div tuiSurface tuiTheme="dark" class="mask" >
<h3 class="heading"> My bank account <button appearance="secondary" iconStart="@tui.pencil" size="s" tuiIconButton type="button" class="button" > Edit name </button>
</h3>
<span class="sum">{{ 23742 | tuiAmount: 'USD' : 'left' | async }}</span>
<footer class="footer">
<tui-thumbnail-card paymentSystem="mastercard" [style.background]="'#337'" > 1234 </tui-thumbnail-card>
<tui-thumbnail-card paymentSystem="visa" [style.background]="'#e33'" > 5678 </tui-thumbnail-card>
<button appearance="secondary" iconStart="@tui.plus" size="s" tuiIconButton type="button" class="add" > Add card </button>
</footer>
</div>
```

**TypeScript:**
```ts
import {AsyncPipe, NgFor} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe, TuiThumbnailCard} from '@taiga-ui/addon-commerce';
import {
    TuiAppearance,
    TuiButton,
    TuiLabel,
    TuiLink,
    TuiScrollbar,
    TuiSurface,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiAvatar, TuiBadge} from '@taiga-ui/kit';
import {TuiCardLarge} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        NgFor,
        TuiAmountPipe,
        TuiAppearance,
        TuiAvatar,
        TuiBadge,
        TuiButton,
        TuiCardLarge,
        TuiLabel,
        TuiLink,
        TuiScrollbar,
        TuiSurface,
        TuiThumbnailCard,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less', './surface.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly reviews = [
        {
            name: 'Alex Inkin',
            time: '2 days ago',
            body: 'It is an absolute blast!',
        },
        {
            name: 'Alex Inkin',
            time: '3 days ago',
            body: 'I am starting to kind of enjoy this library.',
        },
        {
            name: 'Alex Inkin',
            time: '4 days ago',
            body: 'This library seems interesting but I hesitate refactoring our entire codebase...',
        },
    ];
}
```

**LESS:**
```less
:host {
    display: grid;
    grid-template-columns: repeat(6, 6.5rem);
    grid-auto-rows: 7rem;
    align-items: start;
    gap: 1rem;
}

.card {
    display: flex;
    block-size: 7rem;
    flex-direction: column;
    font: var(--tui-font-text-xs);

    &:first-child {
        grid-column: span 2;
    }

    .heading {
        font: var(--tui-font-text-s);
        color: #fff;
        font-weight: bold;
        margin: -0.125rem 0 0;
    }

    .content {
        max-inline-size: 50%;
        color: #fff;
    }

    .badge {
        margin: auto auto -0.125rem -0.125rem;
    }
}

.restaurant {
    display: flex;
    block-size: 15rem;
    grid-column: span 3;
    grid-row: span 2;
    flex-direction: column;
    justify-content: space-between;
    color: #fff;
    font-size: 1.375rem;

    .header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding: 0 0.25rem;
    }

    .footer {
        display: flex;
        justify-content: space-between;
    }
}

.blur {
    display: flex;
    grid-column: span 3;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    font: var(--tui-font-heading-6);
    color: #fff;

    .button {
        border-radius: 100%;
        margin: 0 0.375rem 0 auto;
    }
}

.reviews {
    display: flex;
    grid-column: span 3;
    grid-row: span 3;
    flex-direction: column;
    padding: 1rem;
    border-radius: 1.5rem;

    .heading {
        margin: -0.25rem 0 0;
        font: var(--tui-font-heading-6);
    }

    .link {
        float: right;
        font: var(--tui-font-text-m);

        // Safari 15+
        @supports (float: inline-end) {
            float: inline-end;
        }
    }

    .scrollbar {
        margin: 0.75rem -1.25rem 1.25rem;
        scroll-snap-type: x mandatory;
        overscroll-behavior-x: contain;
    }

    .wrapper {
        display: flex;
        padding: 0 1.25rem;
        gap: 0.625rem;

        &::after {
            content: '';
            min-inline-size: 0.625rem;
        }
    }

    .review {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        min-inline-size: calc(100% - 0.75rem);
        padding: 0.75rem 1rem 1rem;
        border-radius: 1rem;
        font: var(--tui-font-text-l);
        scroll-snap-align: start;
        scroll-margin: 1.25rem;
    }

    .footer {
        display: flex;
        align-items: flex-end;
        gap: 0.75rem;
        margin-block-start: auto;
        font: var(--tui-font-text-s);
    }

    .label {
        flex-direction: column-reverse;
        font-weight: bold;
    }
}

.mask {
    grid-column: span 3;
    grid-row: span 3;
    padding: 4rem 2rem 7rem;
    color: #fff;

    .heading {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        font: var(--tui-font-heading-6);
        margin: 0;
    }

    .button {
        border-radius: 100%;
        transform: scale(0.75);
    }

    .sum {
        font: var(--tui-font-heading-4);
        margin-block-end: 4rem;
    }

    .footer {
        display: flex;
        gap: 0.75rem;
        margin-block-start: 4rem;
    }

    .add {
        inline-size: 3rem;
        border-radius: var(--tui-radius-xs);
    }
}
```

You can combine element itself,
`::before`
and
`::after`
pseudo-elements to create complex surfaces.

For more complex cases like you can use
`tuiSurfaceLayer`
directive to introduce more layers behind content. But that is mostly necessary for additional elements like
`input type="radio"`
or a
`video`
tag as seen in the examples on the main tab.

**Styles to to be applied to the element:**
`background`
,
`border-radius`
,
`box-shadow`
,
`mask`
,
`padding`
,
`transform`

**Styles to be applied to ::BEFORE pseudo-element:**
`backdrop-filter`

**Styles to be applied to ::AFTER pseudo-element:**
Any overlays on top of
`backdrop-filter`
effect of ::BEFORE pseudo-element
