# Carousel

- **Package**: `KIT`
- **Type**: components

Carousel allows you to rotate through arbitrary items. Multiple items can be shown simultaneously.

### How to Use (Import)

```ts
import {TuiCarousel} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiCarousel,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<tui-carousel>
  <div *tuiItem>Slide 1</div>
  <div *tuiItem>Slide 2</div>
  <div *tuiItem>Slide 3</div>
</tui-carousel>
```

### Example

```html
<tui-carousel class="carousel" [draggable]="draggable" [duration]="duration" [itemsCount]="itemsCount" [style.--tui-carousel-padding]="itemPadding" [(index)]="index" (touchstart.passive.stop)="(0)" >
<ng-container *tuiRepeatTimes="let item of 9">
<div *tuiItem class="plate" > {{ item }} <button size="s" tuiButton type="button" class="button" > I'm focusable </button>
</div>
</ng-container>
</tui-carousel>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [draggable] | `boolean` | Whether or not slider can be dragged by clicking and holding |
| [duration] | `number` | Duration in milliseconds for each slide for automatic rotation (use 0 to disable automatic rotation) |
| [itemsCount] | `number` | Number of slides shown at the same time |
| [(index)] | `number` | Current index |

### Usage Examples

#### Single

**Template:**
```html
<tui-carousel [duration]="4000" [(index)]="index" >
<ng-container *ngFor="let item of items">
<div *tuiItem class="item" >
<h2 class="title">{{ item }}</h2>
<!-- TODO: update documentation here -->
<a tuiButton [attr.href]="'https://en.wikipedia.org/wiki/' + item" > Wiki </a>
</div>
</ng-container>
</tui-carousel>
<tui-pagination size="s" class="pagination" [length]="items.length" [(index)]="index" />
```

**TypeScript:**
```ts
import {NgFor} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiCarousel, TuiPagination} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [NgFor, TuiButton, TuiCarousel, TuiPagination],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected index = 2;
    protected readonly items = inject<readonly string[]>('Pythons' as any);
}
```

**LESS:**
```less
:host {
    display: block;
}

.pagination {
    margin: 1rem auto 0;
}

.item {
    padding: 1rem;
    border: 1px solid var(--tui-border-normal);
    border-radius: 1rem;
}

.title {
    margin: 0 0 1rem;
}
```

#### Multiple

**Template:**
```html
<tui-carousel [draggable]="true" [itemsCount]="3" [(index)]="index" >
<ng-container *ngFor="let item of items; let i = index">
<img *tuiItem alt="" draggable="false" class="item" [class.item_active]="i === index + 1" [src]="'assets/images/' + item" />
</ng-container>
</tui-carousel>
```

**TypeScript:**
```ts
import {NgFor} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCarousel} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [NgFor, TuiCarousel],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected index = 0;

    protected readonly items = [
        'angular.svg',
        'avatar.jpg',
        'angular.svg',
        'avatar.jpg',
        'angular.svg',
        'avatar.jpg',
    ];
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.item {
    .transition(~'box-shadow, transform');

    display: block;
    max-block-size: 6.25rem;
    margin: 2rem auto;
    border-radius: 100%;

    &_active {
        box-shadow: var(--tui-shadow-medium);
        transform: scale(1.2);
    }
}
```

#### Custom

**Template:**
```html
<div tuiCarouselButtons class="wrapper" >
<button iconStart="@tui.chevron-left" tuiIconButton type="button" (click)="carousel.prev()" > Previous </button>
<tui-carousel #carousel class="carousel" >
<div *tuiItem class="item" >
<h2 class="title">Monty Python and the Holy Grail</h2>
<p> King Arthur and his Knights of the Round Table embark on a surreal, low-budget search for the Holy Grail, encountering many, very silly obstacles. </p>
<div>
<button appearance="primary" tuiButton type="button" > Buy ${{ 12.99 | tuiAmount: 'RUB' | async }} </button>
<button tuiButton type="button" class="tui-space_left-2" > Rent ${{ 4.99 | tuiAmount: 'RUB' | async }} </button>
</div>
</div>
<div *tuiItem class="item" >
<tui-loader />
</div>
<div *tuiItem class="item" [style.text-align]="'center'" >
<h2 class="title">Failed to load</h2>
<p>
<tui-avatar appearance="negative" src="@tui.x" />
</p>
</div>
</tui-carousel>
<button iconStart="@tui.chevron-right" tuiIconButton type="button" (click)="carousel.next()" > Next </button>
</div>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiButton, TuiLoader} from '@taiga-ui/core';
import {TuiAvatar, TuiCarousel} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [AsyncPipe, TuiAmountPipe, TuiAvatar, TuiButton, TuiCarousel, TuiLoader],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
.wrapper {
    display: flex;
    align-items: center;
}

.carousel {
    inline-size: 25rem;
    flex-shrink: 0;
}

.item {
    padding: 1rem;
    border: 1px solid var(--tui-border-normal);
    border-radius: 1rem;
}

.title {
    margin: 0 0 1rem;
}
```

#### Carousel inside dialog

**Template:**
```html
<button size="m" tuiButton type="button" (click)="onClick()" > Show dialog with carousel </button>
<ng-template #header>
<div class="header" [style.background-image]="background" ></div>
</ng-template>
<ng-template [tuiDialogOptions]="{size: 's', header: header}" [(tuiDialog)]="open" >
<div tuiCarouselButtons class="wrapper" (touchstart.passive.stop)="(0)" >
<button appearance="neutral" iconStart="@tui.chevron-left" tuiIconButton tuiTheme="dark" type="button" class="tui-space_right-4" (click)="navigate(-1)" > Previous </button>
<tui-carousel [(index)]="index">
<div *tuiItem>
<h2>Carousel is awesome</h2>
<p>It can show arbitrary content and it's very easy to control</p>
</div>
<div *tuiItem>
<h2>Pagination</h2>
<p> You can use <a tuiLink [routerLink]="routes.Pagination" > Pagination </a> component with size 's' together with it </p>
</div>
<div *tuiItem>
<h2>Buttons</h2>
<p> Use <code>tuiCarouselButtons</code> directive to setup navigation buttons </p>
</div>
</tui-carousel>
<button appearance="neutral" iconStart="@tui.chevron-right" tuiIconButton tuiTheme="dark" type="button" class="tui-space_left-4" (click)="navigate(1)" > Next </button>
</div>
<tui-pagination size="s" class="tui-space_top-4" [length]="3" [(index)]="index" />
<div class="tui-space_top-4">
<button appearance="primary" tuiButton type="button" (click)="open = false" > Got it! </button>
</div>
</ng-template>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {DemoRoute} from '@demo/routes';
import {TuiButton, TuiDialog, TuiLink} from '@taiga-ui/core';
import {TuiCarousel, TuiPagination} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [RouterLink, TuiButton, TuiCarousel, TuiDialog, TuiLink, TuiPagination],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly routes = DemoRoute;
    protected open = false;

    protected index = 0;

    protected get background(): string {
        switch (this.index) {
            case 0:
                return 'url(https://cdn.tvc.ru/pictures/mood/bw/194/22.jpg)';
            case 1:
                return 'url(https://ic.pics.livejournal.com/ruhtal/6943012/12468/12468_900.jpg)';
            default:
                return 'url(https://cdn.motor1.com/images/mgl/28bxz/s1/ford-carousel.jpg)';
        }
    }

    protected onClick(): void {
        this.index = 0;
        this.open = true;
    }

    protected navigate(delta: number): void {
        this.index = (this.index + delta) % 3;
    }
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.wrapper {
    display: flex;
    align-items: center;
    margin: 0 -5rem;

    :host-context(tui-root._mobile) & {
        margin: 0;

        button {
            display: none;
        }
    }
}

.header {
    .transition(background);

    block-size: 10rem;
    flex: 1;
    background: var(--tui-background-base) center;
    background-size: cover;
}
```

#### Vertical alignment

**Template:**
```html
<tui-carousel [itemsCount]="3" [(index)]="index" >
<ng-container *ngFor="let item of items">
<div *tuiItem class="item" >
<h2 class="title">{{ item.title }}</h2> {{ item.content }} </div>
</ng-container>
</tui-carousel>
<tui-pagination size="s" class="tui-space_top-4" [index]="rounded" [length]="items.length / itemsCount" (indexChange)="onIndex($event)" />
```

**TypeScript:**
```ts
import {NgFor} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCarousel, TuiPagination} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [NgFor, TuiCarousel, TuiPagination],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected index = 0;

    protected readonly itemsCount = 3;

    protected readonly items = [
        {title: 'First', content: 'First content'},
        {title: 'Title #2', content: 'Much more content here so the height is bigger'},
        {title: 'Title III', content: 'Small item again'},
        {title: 'Title four', content: 'Relatively ling content here'},
        {title: 'Fifth item', content: 'Tiny text'},
        {title: '6', content: "That one's short too"},
        {title: 'Lucky 7', content: 'This takes about two lines or so'},
        {title: 'Eighth card', content: 'Almost the last one'},
        {title: 'X', content: 'This is the longest item there is in this list'},
    ];

    protected get rounded(): number {
        return Math.floor(this.index / this.itemsCount);
    }

    protected onIndex(index: number): void {
        this.index = index * this.itemsCount;
    }
}
```

**LESS:**
```less
.item {
    padding: 1rem;
    border: 1px solid var(--tui-border-normal);
    border-radius: 1rem;
    margin-block-end: auto;
}

.title {
    margin: 0 0 1rem;
}
```
