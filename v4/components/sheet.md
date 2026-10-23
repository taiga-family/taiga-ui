# Sheet

- **Package**: `LEGACY`
- **Type**: components

If you need overlay and do not need image related functionality, it is recommended to use SheetDialog . `Sheet` component is on track to be deprecated. This component only works on mobile devices. Enable emulation in DevTools

### How to Use (Import)

```ts
import {TuiSheetModule} from '@taiga-ui/legacy';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiSheetModule,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<tui-root>
  <!-- Your app content -->
  <tui-sheets-host ngProjectAs="tuiOverContent"></tui-sheets-host>
</tui-root>
```

### Example

```html
<button tuiButton type="button" (click)="toggle()" > Toggle </button>
<ng-template #template>
<div class="top">
<tui-avatar size="l">Karl Gambolputty</tui-avatar>
<h2>Karl Gambolputty</h2>
</div>
</ng-template>
<ng-template [tuiSheetOptions]="options" [(tuiSheet)]="open" > Karl Gambolputty de von Ausfern-schplenden-schlitter-crasscrenbon-fried-digger-dingle-dangle-dongle-dungle-burstein-von-knacker-thrasher-apple-banger-horowitz-ticolensic-grander-knotty-spelltinkle-grandlich-grumblemeyer-spelterwasser-kurstlich-himbleeisen-bahnwagen-gutenabend-bitte-ein-nürnburger-bratwustle-gerspurten-mitzweimache-luber-hundsfut-gumberaber-shönendanker-kalbsfleisch-mittler-aucher von Hautkopft of Ulm was the last-surviving relative of Johann Gambolputty de von Ausfern-schplenden-schlitter-crasscrenbon-fried-digger-dingle-dangle-dongle-dungle-burstein-von-knacker-thrasher-apple-banger-horowitz-ticolensic-grander-knotty-spelltinkle-grandlich-grumblemeyer-spelterwasser-kurstlich-himbleeisen-bahnwagen-gutenabend-bitte-ein-nürnburger-bratwustle-gerspurten-mitzweimache-luber-hundsfut-gumberaber-shönendanker-kalbsfleisch-mittler-aucher von Hautkopft of Ulm. <div class="tui-space_top-4">
<button tuiButton type="button" (click)="toggle()" > Close </button>
</div>
</ng-template>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| closeable | `boolean` | Whether or not a sheet can be closed by user. |
| data | `I` | Optional data to be passed to the sheet. |
| image | `PolymorpheusContent<TuiSheetOptions<I>>` | >" [documentationPropertyValues]="imageVariants" [(documentationPropertyValue)]="image" > A content to show above the sheet. |
| imageSlide | `boolean` | Should image slide as the sheet is dragged. |
| stops | `string[]` | An array of stop points in any units for the sheet. |
| initial | `number` | Initial stop index to open on. Indices exceeding stops are treated as stop on image then stop on top of the sheet's content. |
| overlay | `boolean` | Show overlay under the sheet. |

### Usage Examples

#### String

**Template:**
```html
<button tuiButton type="button" (click)="stream$.next()" > Show/Hide </button>
```

**TypeScript:**
```ts
import {Component, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiSheetService} from '@taiga-ui/legacy';
import {Subject, switchMap} from 'rxjs';

@Component({
    standalone: true,
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly stream$ = new Subject<void>();

    constructor() {
        const service = inject(TuiSheetService);

        this.stream$
            .pipe(
                switchMap(() => service.open('Simple sheet', {overlay: true})),
                takeUntilDestroyed(),
            )
            .subscribe();
    }
}
```

#### Basic

**Template:**
```html
<button tuiButton type="button" (click)="toggle()" > Show/Hide </button>
<ng-template [tuiSheetOptions]="options" [(tuiSheet)]="open" >
<h2 tuiSheetHeading>Alexander Inkin</h2>
<div class="tui-space_top-4">
<a appearance="secondary" href="mailto:alexander@inkin.ru" iconStart="@tui.mail" size="m" tuiIconButton class="tui-space_right-2" > Email </a>
<a appearance="secondary" href="https://t.me/waterplea" iconStart="@tui.phone-forwarded" size="m" tuiIconButton class="tui-space_right-2" > Telegram </a>
<a appearance="secondary" href="https://waterplea.bandcamp.com/" iconStart="@tui.music" size="m" tuiIconButton > Music </a>
</div>
</ng-template>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiSheetModule, type TuiSheetOptions} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [TuiButton, TuiSheetModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;

    protected readonly options: Partial<TuiSheetOptions> = {
        overlay: true,
        image: 'assets/images/avatar.jpg',
    };

    protected toggle(): void {
        this.open = !this.open;
    }
}
```

#### Advanced

**Template:**
```html
<button tuiButton type="button" (click)="toggle()" > Show/Hide </button>
<ng-template [tuiSheetOptions]="options" [(tuiSheet)]="open" >
<h2 tuiHeader="xs" tuiSheetHeading >
<label tuiTitle>
<span tuiSubtitle>Monty Python</span> And the Holy Grail </label>
</h2>
<p class="buttons">
<button appearance="secondary" size="m" tuiButton type="button" class="tui-space_right-2" > Buy <span class="tui-space_left-1">{{ 12.99 | tuiAmount: 'USD' | async }}</span>
</button>
<button appearance="secondary" size="m" tuiButton type="button" > Rent <span class="tui-space_left-1">{{ 4.99 | tuiAmount: 'USD' | async }}</span>
</button>
</p>
<button size="m" tuiButton type="button" class="action" > Add to Watch List </button>
<h3 class="cast">Cast:</h3>
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
<p>
<span>{{ 400000 | tuiAmount: 'USD' | async }}</span>
</p>
<hr />
<h3>Box office:</h3>
<p>
<span>{{ 5000000 | tuiAmount: 'USD' | async }}</span>
</p>
<hr />
<h3>Release date</h3>
<p>April 3, 1975</p>
<hr />
<h3>Running time</h3>
<p>92 minutes</p>
<footer class="footer">© EMI Films</footer>
</ng-template>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiHeader} from '@taiga-ui/layout';
import {TuiSheetModule, type TuiSheetOptions} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [AsyncPipe, TuiAmountPipe, TuiButton, TuiHeader, TuiSheetModule, TuiTitle],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;

    protected readonly options: Partial<TuiSheetOptions> = {
        stops: ['calc(5rem + 74vw)', 'calc(9rem + 74vw)'],
        image: 'https://www.vintagemovieposters.co.uk/wp-content/uploads/2020/10/IMG_0323-1024x756.jpeg',
    };

    protected toggle(): void {
        this.open = !this.open;
    }
}
```

**LESS:**
```less
.buttons {
    display: flex;
    margin: 0.3rem 0 1rem;

    & button {
        flex: 1;
    }
}

.action {
    position: sticky;
    top: calc(100% - 4rem);
    z-index: 1;
    display: block;
    inline-size: 100%;
}

.cast {
    margin-block-start: -2rem;
}

.footer {
    margin: 0 -1rem -1rem;
    padding: 1rem 1rem 5rem;
    background: var(--tui-background-base-alt);
}
```

#### Elastic sticky

**Template:**
```html
<button tuiButton type="button" (click)="toggle()" > Show/Hide </button>
<ng-template [tuiSheetOptions]="options" [(tuiSheet)]="open" >
<h2 tuiSheetHeading class="heading" (tuiElasticSticky)="onElastic($event)" >
<img alt="Angular logo" src="assets/images/angular.svg" class="image" [style.opacity]="elastic * elastic * elastic" [style.transform]="transform" /> Web APIs for Angular </h2>
<p>Our goal is to provide high quality lightweight wrappers for various native Web APIs to use with Angular.</p>
<h3>Our libraries</h3>
<p>
<a href="https://github.com/taiga-family/ng-web-apis/tree/main/libs/common/README.md" tuiLink > Common </a>
</p>
<p>
<a href="https://github.com/taiga-family/ng-web-apis/tree/main/libs/universal/README.md" tuiLink > Universal </a>
</p>
<p>
<a href="https://github.com/taiga-family/ng-web-apis/tree/main/libs/audio/README.md" tuiLink > Audio </a>
</p>
<p>
<a href="https://github.com/taiga-family/ng-web-apis/tree/main/libs/canvas/README.md" tuiLink > Canvas </a>
</p>
<p>
<a href="https://github.com/taiga-family/ng-web-apis/tree/main/libs/geolocation/README.md" tuiLink > Geolocation </a>
</p>
<p>
<a href="https://github.com/taiga-family/ng-web-apis/tree/main/libs/intersection-observer/README.md" tuiLink > Intersection Observer </a>
</p>
<p>
<a href="https://github.com/taiga-family/ng-web-apis/tree/main/libs/midi/README.md" tuiLink > MIDI </a>
</p>
<p>
<a href="https://github.com/taiga-family/ng-web-apis/tree/main/libs/mutation-observer/README.md" tuiLink > Mutation Observer </a>
</p>
<p>
<a href="https://github.com/taiga-family/ng-web-apis/tree/main/libs/payment-request/README.md" tuiLink > Payment Request </a>
</p>
<p>
<a href="https://github.com/taiga-family/ng-web-apis/tree/main/libs/permissions/README.md" tuiLink > Permissions </a>
</p>
<p>
<a href="https://github.com/taiga-family/ng-web-apis/tree/main/libs/resize-observer/README.md" tuiLink > Resize Observer </a>
</p>
<p>
<a href="https://github.com/taiga-family/ng-web-apis/tree/main/libs/speech/README.md" tuiLink > Speech </a>
</p>
<p>
<a href="https://github.com/taiga-family/ng-web-apis/tree/main/libs/storage/README.md" tuiLink > Storage </a>
</p>
<p>
<a href="https://github.com/taiga-family/ng-web-apis/tree/main/libs/workers/README.md" tuiLink > Workers </a>
</p>
<h3>Sponsor</h3>
<p>
<a href="https://opencollective.com/ng-web-apis" tuiLink > Open Collective </a>
</p>
</ng-template>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiElasticSticky} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiLink} from '@taiga-ui/core';
import {TuiSheetModule, type TuiSheetOptions} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [TuiButton, TuiElasticSticky, TuiLink, TuiSheetModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;

    protected elastic = 1;

    protected readonly options: Partial<TuiSheetOptions> = {
        stops: ['12rem'],
    };

    protected get transform(): string {
        return `scale(${this.elastic * this.elastic})`;
    }

    protected toggle(): void {
        this.elastic = 1;
        this.open = !this.open;
    }

    protected onElastic(elastic: number): void {
        this.elastic = elastic;
    }
}
```

**LESS:**
```less
.heading {
    top: -8rem;
    display: flex;
    block-size: 12rem;
    align-items: flex-end;
    flex-direction: row-reverse;
    justify-content: space-between;
    background: var(--tui-chart-categorical-03);
}

.image {
    position: absolute;
    top: 1rem;
    left: 0;
    block-size: 8rem;
    inline-size: 100%;
    transform-origin: bottom;
    pointer-events: none;
}
```

#### Scroll

**Template:**
```html
<button tuiButton type="button" (click)="toggle()" > Show/Hide </button>
<img alt="" src="assets/images/earth.jpg" class="preload" />
<ng-template let-scroll$="scroll$" [tuiSheetOptions]="options" [(tuiSheet)]="open" >
<div class="wrapper">
<h2 tuiSheetHeading class="heading" > Planet Earth </h2>
<div class="earth">
<img alt="" src="assets/images/earth.jpg" class="image" [style.transform]="getTransform(scroll$ | async)" />
</div>
<p> Earth is the third planet from the Sun and the only astronomical object known to harbour and support life. About 29.2% of Earth's surface is land consisting of continents and islands. The remaining 70.8% is covered with water, mostly by oceans, seas, gulfs, and other salt-water bodies, but also by lakes, rivers, and other freshwater, which together constitute the hydrosphere. Much of Earth's polar regions are covered in ice. Earth's outer layer is divided into several rigid tectonic plates that migrate across the surface over many millions of years, while its interior remains active with a solid iron inner core, a liquid outer core that generates Earth's magnetic field, and a convective mantle that drives plate tectonics. </p>
</div>
</ng-template>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiSheetModule, type TuiSheetOptions} from '@taiga-ui/legacy';

const FRAMES = 166;

@Component({
    standalone: true,
    imports: [AsyncPipe, TuiButton, TuiSheetModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;

    protected readonly options: Partial<TuiSheetOptions> = {
        overlay: true,
        stops: ['4.5rem'],
    };

    protected toggle(): void {
        this.open = !this.open;
    }

    protected getTransform(y: number | null): string {
        const frame = Math.round((y || 0) / 2);
        const looped = frame % FRAMES;
        const percent = (100 / FRAMES) * looped;

        return `translate3d(0, -${percent}%, 0)`;
    }
}
```

**LESS:**
```less
.wrapper {
    color: #fff;
    background: #000;
    box-shadow: 0 5rem 0 1rem #000;
}

.heading {
    background: inherit;
}

.preload {
    position: absolute;
    block-size: 1px;
    inline-size: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    clip-path: inset(0);
}

.earth {
    position: relative;
    inline-size: 10rem;
    block-size: 10rem;
    margin: 1rem auto;
    overflow: hidden;
}

.image {
    position: absolute;
    top: 0;
    left: 0;
    inline-size: 100%;
}
```

#### IntersectionObserver

**Template:**
```html
<button tuiButton type="button" (click)="toggle()" > Show/Hide </button>
<ng-template [tuiSheetOptions]="options" [(tuiSheet)]="open" >
<ng-container waIntersectionObserver>
<h2 tuiSheetHeading>
<label tuiLabel="Monty Python">And the Holy Grail</label>
</h2>
<img *ngFor="let image of images" #img alt="" class="image" [src]="image" (waIntersectionObservee)="$event[0] && onIntersection($event[0], img)" />
</ng-container>
</ng-template>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WaIntersectionObserver} from '@ng-web-apis/intersection-observer';
import {TuiButton, TuiLabel} from '@taiga-ui/core';
import {TuiSheetModule, type TuiSheetOptions} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [NgForOf, TuiButton, TuiLabel, TuiSheetModule, WaIntersectionObserver],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;

    protected readonly options: Partial<TuiSheetOptions> = {
        overlay: true,
        stops: ['5rem'],
    };

    protected readonly images = [
        'https://m.media-amazon.com/images/M/MV5BOTEzOTMzNzcwNF5BMl5BanBnXkFtZTgwNDcxODUyMjI@._V1_FMjpg_UX1280_.jpg',
        'https://m.media-amazon.com/images/M/MV5BNzg0MzEwNDgwN15BMl5BanBnXkFtZTgwNTcxODUyMjI@._V1_FMjpg_UX1024_.jpg',
        'https://m.media-amazon.com/images/M/MV5BOTE0MTMxMTY3NF5BMl5BanBnXkFtZTgwNDc3NjIwMjE@._V1_FMjpg_UX1024_.jpg',
        'https://m.media-amazon.com/images/M/MV5BNjc4ODAyMDg3NF5BMl5BanBnXkFtZTgwOTY3NjIwMjE@._V1_FMjpg_UX600_.jpg',
        'https://m.media-amazon.com/images/M/MV5BMTU3NDY1MTk3M15BMl5BanBnXkFtZTgwMjc3NjIwMjE@._V1_FMjpg_UX1024_.jpg',
    ];

    protected toggle(): void {
        this.open = !this.open;
    }

    protected onIntersection(
        {isIntersecting}: IntersectionObserverEntry,
        {classList}: HTMLElement,
    ): void {
        classList.toggle('_visible', isIntersecting);
    }
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.image {
    .transition(~'transform, opacity');

    display: block;
    inline-size: 100%;
    margin: 1rem 0;
    transform: translate3d(-5rem, 0, 0);
    opacity: 0;

    &._visible {
        transform: none;
        opacity: 1;
    }
}
```
