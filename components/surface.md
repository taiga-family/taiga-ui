# Surface

- **Package**: `LAYOUT`
- **Type**: components

General purpose container used in Taiga UI interfaces. Often used in conjunction with Card component.

### Usage Examples

#### Behaviors

You can enable hover effects only on devices with pointer: `@media (hover: hover)`

**Template:**
```html
<button tuiSurface type="button" class="scale" > Scale </button>
<button tuiSurface type="button" class="overlay" > Overlay </button>
<button tuiAppearance="primary" tuiSurface type="button" class="highlight" > Highlight </button>
<button tuiSurface type="button" class="offset" > Offset </button>
<button tuiSurface type="button" class="background" > Background </button>
<button tuiSurface type="button" class="shadow" > Shadow </button>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAppearance} from '@taiga-ui/core';
import {TuiSurface} from '@taiga-ui/layout';

@Component({
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
@import '@taiga-ui/styles/utils';

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

Note that `padding` and `border-radius` are not part of the surface. Take a look at component for that.

**Template:**
```html
<button tuiAppearance="floating" tuiSurface type="button" > Floating </button>
<button tuiAppearance="neutral" tuiSurface type="button" > Neutral </button>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAppearance} from '@taiga-ui/core';
import {TuiSurface} from '@taiga-ui/layout';

@Component({
    imports: [TuiAppearance, TuiSurface],
    templateUrl: './index.html',
    styleUrl: './index.less',
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

Text should have vertical compensation to look properly aligned, either with unequal `padding` or with negative `margin` . Typical value is 0.25rem , smaller line-height might require 0.125rem instead.

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
import {TuiSurface} from '@taiga-ui/layout';

@Component({
    imports: [TuiSurface],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
    font: var(--tui-typography-heading-h6);
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
import {TuiSurface} from '@taiga-ui/layout';

@Component({
    imports: [TuiSurface],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
    font: var(--tui-typography-body-l);

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
@for (_ of '-'.repeat(4); track $index) { <label tuiSurface [style.border-radius.rem]="0.75" [style.padding.rem]="1.25" > Item {{ $index + 1 }} <input tuiSurfaceLayer type="radio" [value]="$index" [(ngModel)]="value" />
<div tuiRipple tuiSurfaceLayer [style.background-color]="'var(--tui-background-neutral-1)'" ></div>
</label> }
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRipple} from '@taiga-ui/addon-mobile';
import {TuiSurface} from '@taiga-ui/layout';

@Component({
    imports: [FormsModule, TuiRipple, TuiSurface],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
<button tuiAppearance="floating" tuiSurface type="button" class="button" >
<span>
<span class="title">That looks good!</span> Apply manual compensation for a more balanced look. </span>
<span appearance="accent" size="s" tuiAvatar="@tui.thumbs-up" ></span>
</button>
<button tuiAppearance="floating" tuiSurface type="button" class="button bad" >
<span>
<span class="title">This looks bad...</span> Use negative margin or reduced padding on specific sides to fix it. </span>
<span appearance="accent" size="s" tuiAvatar="@tui.thumbs-down" ></span>
</button>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAppearance} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiSurface} from '@taiga-ui/layout';

@Component({
    imports: [TuiAppearance, TuiAvatar, TuiSurface],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
    font: var(--tui-typography-body-m);
}

.title {
    display: block;
    font: var(--tui-typography-heading-h6);
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
<button tuiSurface tuiTheme="dark" type="button" class="card" [style.background-image]="'url(/assets/images/tickets.svg)'" [style.color]="'#d45d8c'" >
<span tuiTitle>
<b>Tickets</b>
<span tuiSubtitle>Concerts, theater, sports and movies</span>
</span>
<span appearance="primary" size="s" tuiBadge > 20% off </span>
</button>
<button tuiSurface tuiTheme="dark" type="button" class="card" [style.background-image]="'url(/assets/images/gas.svg)'" [style.color]="'#7caeff'" >
<span tuiTitle><b>Gas</b></span>
<span appearance="primary" size="s" tuiBadge > +2000% </span>
</button>
<div tuiSurface tuiTheme="dark" class="restaurant" >
<header tuiHeader="body-m">
<hgroup tuiTitle>
<h3>RESTAURANT</h3>
<p tuiSubtitle>Eat all you can</p>
</hgroup>
<aside tuiAccessories>
<button appearance="icon" iconStart="@tui.ellipsis" size="xs" tuiIconButton type="button" > More </button>
</aside>
</header>
<footer class="footer">
<button appearance="secondary-grayscale" size="m" tuiButton type="button" > Book a table </button>
<button appearance="secondary-grayscale" iconStart="@tui.heart" size="m" tuiIconButton type="button" > Favorite </button>
</footer>
</div>
<div tuiSurface tuiTheme="dark" class="blur" >
<div tuiAvatar="@tui.user">
<img alt="" src="assets/images/avatar.jpg" />
</div>
<label tuiTitle>
<span tuiSubtitle>Taiga UI</span>
<b>Alex Inkin</b>
</label>
<button appearance="secondary-grayscale" iconStart="@tui.mail" size="m" tuiIconButton type="button" class="button" > Message </button>
</div>
<section appearance="floating" tuiCardLarge class="reviews" >
<header tuiHeader="h6">
<hgroup tuiTitle>
<h2>Taiga UI reviews</h2>
</hgroup>
<aside tuiAccessories>
<button tuiLink type="button" class="link" > Hide </button>
</aside>
</header>
<div tuiScrollRef class="scrollbar" >
<div class="wrapper"> @for (review of reviews; track review) { <div tuiAppearance="neutral" tuiSurface class="review" > {{ review.body }} <footer tuiCell>
<div size="m" tuiAvatar="@tui.user" >
<img alt="" src="assets/images/avatar.jpg" />
</div>
<label tuiTitle> {{ review.name }} <span tuiSubtitle>{{ review.time }}</span>
</label>
</footer>
</div> } </div>
</div>
<button appearance="secondary" size="m" tuiButton type="button" > See all </button>
</section>
<div tuiSurface tuiTheme="dark" class="mask" >
<header tuiHeader="h4">
<hgroup tuiTitle>
<p tuiSubtitle> My bank account <button appearance="secondary" iconStart="@tui.pencil" size="xs" tuiIconButton type="button" [style.border-radius.%]="100" > Edit name </button>
</p>
<h3>{{ 23742 | tuiAmount: 'USD' : 'start' }}</h3>
</hgroup>
</header>
<footer class="footer">
<span paymentSystem="mastercard" tuiThumbnailCard [style.background]="'#337'" > 1234 </span>
<span paymentSystem="visa" tuiThumbnailCard [style.background]="'#e33'" > 5678 </span>
<button appearance="secondary" iconStart="@tui.plus" size="s" tuiIconButton type="button" class="add" > Add card </button>
</footer>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe, TuiThumbnailCard} from '@taiga-ui/addon-commerce';
import {
    TuiAppearance,
    TuiButton,
    TuiCell,
    TuiLink,
    TuiScrollRef,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiAvatar, TuiBadge} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader, TuiSurface} from '@taiga-ui/layout';

@Component({
    imports: [
        TuiAmountPipe,
        TuiAppearance,
        TuiAvatar,
        TuiBadge,
        TuiButton,
        TuiCardLarge,
        TuiCell,
        TuiHeader,
        TuiLink,
        TuiScrollRef,
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

    &:first-child {
        grid-column: span 2;
    }

    [tuiTitle] {
        color: var(--tui-text-primary);
        margin-block-end: auto;
    }
}

.restaurant {
    display: flex;
    block-size: 15rem;
    grid-column: span 3;
    grid-row: span 2;
    flex-direction: column;
    justify-content: space-between;

    .footer {
        display: flex;
        justify-content: space-between;

        button {
            border-radius: 5rem;
            backdrop-filter: blur(1rem) brightness(0.5);
        }
    }
}

.blur {
    display: flex;
    grid-column: span 3;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    color: var(--tui-text-primary);

    .button {
        border-radius: 100%;
        margin-inline-start: auto;
    }
}

.reviews {
    grid-column: span 3;
    grid-row: span 3;

    .scrollbar {
        overflow: auto;
        margin: 0.75rem -1.5rem 1.25rem;
        scroll-snap-type: x mandatory;
        overscroll-behavior-x: contain;
    }

    .wrapper {
        display: flex;
        padding: 0 1.5rem;
        gap: 0.625rem;

        &::after {
            content: '';
            min-inline-size: 0.875rem;
        }
    }

    .review {
        display: flex;
        flex-direction: column;
        min-inline-size: 100%;
        padding: 0.75rem 1rem 1rem;
        border-radius: 1rem;
        scroll-snap-align: start;
        scroll-margin: 1.5rem;
    }

    [tuiCell] {
        margin-block-start: auto;
    }
}

.mask {
    grid-column: span 3;
    grid-row: span 3;
    padding: 4rem 2rem 7rem;

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
pseudo-elements to create complex surfaces. Basic styles to simplify this are baked into
`Surface`
directive.

For more complex cases you can use
`tuiSurfaceLayer`
directive to introduce more layers behind content. But that is mostly necessary for additional elements
like
`input type="radio"`
or a
`video`
tag as seen in the examples on the main tab.

Styles applied to the element

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

Styles applied to
`::before`

Styles applied to
`::after`

Any overlays on top of
`backdrop-filter`
effect of
`::before`
pseudo-element
