# Carousel

- **Package**: `CORE`
- **Type**: components

Generic swipeable container to scroll through content

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [min] | `number` | min index |
| [max] | `number` | max index |
| [(index)] | `number` | current index |
| *tuiItem='let index' | `TemplateRef<TuiContext<number>>` | is index of item in scroller. |

### Usage Examples

#### Basic

Minimal implementation with limits.

**Template:**
```html
<button appearance="action" iconStart="@tui.chevron-left" tuiIconButton type="button" [disabled]="index() === 0" (click)="carousel.prev()" > Previous </button>
<tui-carousel #carousel [max]="5" [min]="0" [(index)]="index" >
<ng-container *tuiItem="let index">{{ index }}</ng-container>
</tui-carousel>
<button appearance="action" iconStart="@tui.chevron-right" tuiIconButton type="button" [disabled]="index() === 5" (click)="carousel.next()" > Next </button>
```

**TypeScript:**
```ts
import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiCarousel} from '@taiga-ui/core';

@Component({
    imports: [TuiButton, TuiCarousel],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly index = signal(0);
}
```

**LESS:**
```less
:host {
    display: grid;
    gap: 1rem;
    grid-template-columns: min-content 1fr min-content;
    font: var(--tui-typography-heading-h3);
}
```

#### Looped

Infinite loop with seamless transitions.

**Template:**
```html
<tui-carousel [style.inline-size.rem]="12">
<section *tuiItem="let index" appearance="neutral" tuiCardMedium > @let current = items.at(index % items.length); <span [tuiAvatar]="current?.icon"></span>
<footer tuiTitle> {{ current?.title }} <span tuiSubtitle>{{ current?.subtitle }}</span>
</footer>
</section>
</tui-carousel>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCarousel, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCard} from '@taiga-ui/layout';

@Component({
    imports: [TuiAvatar, TuiCard, TuiCarousel, TuiTitle],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = [
        {
            title: 'Taiga UI',
            subtitle: 'Angular UI Kit',
            icon: '@img.assets/images/taiga.svg',
        },
        {
            title: 'Maskito',
            subtitle: 'Masking library',
            icon: '@img.https://raw.githubusercontent.com/taiga-family/maskito/main/projects/demo/src/assets/icons/maskito.svg',
        },
        {
            title: 'Editor',
            subtitle: 'WYSIWYG',
            icon: '@tui.pencil',
        },
    ];
}
```

#### Automatic

Scrolling to the next slide after timeout.

**Template:**
```html
<tui-carousel #carousel="tuiCarousel" [duration]="5000" [(index)]="index" >
<section *tuiItem="let index" appearance="neutral" tuiCardMedium > @let current = items.at(index % items.length); <span [tuiAvatar]="current?.icon"></span>
<footer tuiTitle> {{ current?.title }} <span tuiSubtitle>{{ current?.subtitle }}</span>
</footer>
</section>
</tui-carousel>
<tui-pager [count]="items.length" [index]="clamped()" [valueContent]="content" />
<ng-template #content let-current >
<progress max="100" size="s" tuiProgressBar class="progress" [class.progress_active]="clamped() === current" [value]="clamped() === current && !isE2E ? carousel.progress() : 0" ></progress>
</ng-template>
```

**TypeScript:**
```ts
import {Component, computed, inject, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_IS_E2E} from '@ng-web-apis/platform';
import {TuiCarousel, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiPager, TuiProgress} from '@taiga-ui/kit';
import {TuiCard} from '@taiga-ui/layout';

@Component({
    imports: [TuiAvatar, TuiCard, TuiCarousel, TuiPager, TuiProgress, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly isE2E = inject(WA_IS_E2E);
    protected readonly index = signal(0);

    protected readonly items = [
        {
            title: 'Taiga UI',
            subtitle: 'Angular UI Kit',
            icon: '@img.assets/images/taiga.svg',
        },
        {
            title: 'Maskito',
            subtitle: 'Masking library',
            icon: '@img.https://raw.githubusercontent.com/taiga-family/maskito/main/projects/demo/src/assets/icons/maskito.svg',
        },
        {
            title: 'Editor',
            subtitle: 'WYSIWYG',
            icon: '@tui.pencil',
        },
    ];

    protected readonly clamped = computed(
        () =>
            ((this.index() % this.items.length) + this.items.length) % this.items.length,
    );
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

:host {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    inline-size: 12rem;
}

.progress {
    .transition(all);

    inline-size: 1rem;

    &:not(&_active) {
        inline-size: 0.5rem;
        color: transparent;
    }
}
```

#### Dynamic height

Carousel automatically transitions height of the container.

**Template:**
```html
<tui-carousel [max]="4" [min]="0" [style.inline-size.rem]="17" >
<section *tuiItem="let index" appearance="neutral" tuiCardLarge="compact" [style.inline-size.%]="90" >
<header tuiHeader>Slide {{ index + 1 }}</header> {{ texts[index] }} </section>
</tui-carousel>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCarousel} from '@taiga-ui/core';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [TuiCardLarge, TuiCarousel, TuiHeader],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly texts = [
        'Lorem ipsum dolor sit amet',
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
        'Contrary to popular belief, Lorem Ipsum is not simply random text',
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable",
    ];
}
```

#### Multiple

Multiple items per slide.

**Template:**
```html
<tui-carousel>
<ng-template let-index tuiItem > @for (_ of '-'.repeat(4); track $index) { @let item = items.at((index * 4 + $index) % this.items.length); <tui-avatar-labeled [label]="item?.label || ''">
<span tuiAvatar>
<img alt="" [src]="item?.avatar" />
</span>
</tui-avatar-labeled> } </ng-template>
</tui-carousel>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCarousel} from '@taiga-ui/core';
import {TuiAvatar, TuiAvatarLabeled} from '@taiga-ui/kit';

@Component({
    imports: [TuiAvatar, TuiAvatarLabeled, TuiCarousel],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = [
        {
            label: 'Alex Inkin',
            avatar: 'https://avatars.githubusercontent.com/u/11832552',
        },
        {
            label: 'Vladimir Potekhin',
            avatar: 'https://avatars.githubusercontent.com/u/46284632',
        },
        {
            label: 'Nikita Barsukov',
            avatar: 'https://avatars.githubusercontent.com/u/35179038',
        },
        {
            label: 'Max Ivanov',
            avatar: 'https://avatars.githubusercontent.com/u/12021443',
        },
        {
            label: 'German Panov',
            avatar: 'https://avatars.githubusercontent.com/u/87331898',
        },
    ];
}
```

**LESS:**
```less
tui-carousel {
    inline-size: 16rem;
}

tui-avatar-labeled {
    inline-size: 4rem;
    scroll-snap-align: start;
    scroll-snap-stop: always;
}
```

#### Scroll-driven animation

Custom scroll-driven animation with CSS.

**Template:**
```html
<button appearance="action" iconStart="@tui.chevron-left" tuiIconButton type="button" [disabled]="index() === 0" (click)="carousel.prev()" > Previous </button>
<tui-carousel #carousel [max]="5" [min]="0" [(index)]="index" >
<section *tuiItem="let index" class="item" > {{ index + 1 }} </section>
</tui-carousel>
<button appearance="action" iconStart="@tui.chevron-right" tuiIconButton type="button" [disabled]="index() === 5" (click)="carousel.next()" > Next </button>
```

**TypeScript:**
```ts
import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiCarousel} from '@taiga-ui/core';

@Component({
    imports: [TuiButton, TuiCarousel],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly index = signal(0);
}
```

**LESS:**
```less
:host {
    display: grid;
    gap: 1rem;
    grid-template-columns: min-content 1fr min-content;
    align-items: center;
    font: var(--tui-typography-heading-h3);
}

.item {
    display: flex;
    inline-size: 100%;
    block-size: 10rem;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    background: var(--tui-background-neutral-1);
    // Keep the name outside conditional rules so Angular scopes it in minified CSS.
    animation-name: carousel-item;
}

@media (prefers-reduced-motion: no-preference) {
    @supports (animation-timeline: view(inline)) {
        .item {
            animation-duration: 1ms;
            animation-timing-function: linear;
            animation-fill-mode: both;
            animation-timeline: view(inline);
            animation-range: cover;
        }
    }
}

@keyframes carousel-item {
    0%,
    100% {
        transform: scale(0.85);
        opacity: 0.5;
    }

    50% {
        transform: scale(1);
        opacity: 1;
    }
}
```
