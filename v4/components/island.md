# Island

- **Package**: `LEGACY`
- **Type**: components

This component is deprecated in favor of Card component Islands show information in rounded block with a border .tui-island : `.tui-island__category` `.tui-island__title` `.tui-island__paragraph` `.tui-island__paragraph_link` : paragraph with links. Margin top `16px` `.tui-island__paragraph_button` : paragraph with buttons. Margin top `20px` `.tui-island__figure` `.tui-island__content` : a class for a case when figure is aside `.tui-island__carousel-controls` : block with carousel actions `.tui-island__carousel-button` : button for carousel `.tui-island__carousel-pages` : carousel pages `.tui-island__footer-button` : footer button with island width

### How to Use (Import)

```ts
import {TuiIsland} from '@taiga-ui/legacy';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiIsland,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<tui-island>
  <h3 class="tui-island__title">Title</h3>
  <p class="tui-island__paragraph">Text</p>
  <p class="tui-island__paragraph tui-island__paragraph_button">
    <button
      tuiButton
      type="button"
      appearance="secondary"
    >
      Button
    </button>
  </p>
</tui-island>
```

### Example

```html
<tui-island class="island" [hoverable]="hoverable" [size]="size" [textAlign]="textAlign" >
<div class="tui-island__content">
<figure class="tui-island__figure">
<div class="some-figure"></div>
</figure>
<div>
<h3 class="tui-island__title">Some heading</h3>
<p class="tui-island__paragraph">Some information</p>
<p class="tui-island__paragraph tui-island__paragraph_button">
<button appearance="secondary" tuiButton type="button" [size]="size" > Button </button>
</p>
</div>
</div>
</tui-island>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| hoverable | `boolean` | Hoverable |
| size | `TuiSizeL` | Size |
| textAlign | `'left' | 'right' | 'center'` | Text align |

### Usage Examples

#### Basic

**Template:**
```html
<div class="container">
<div class="tui-row">
<div class="tui-col_md-4">
<tui-island>
<p class="tui-island__category">category</p>
<h3 class="tui-island__title">Some heading</h3>
<p class="tui-island__paragraph"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
<p class="tui-island__paragraph tui-island__paragraph_link">
<a href="/" tuiLink > Link </a>
</p>
</tui-island>
</div>
<div class="tui-col_md-4">
<tui-island>
<h3 class="tui-island__title">Title</h3>
<p class="tui-island__paragraph"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
<button appearance="flat" size="m" tuiButton type="button" class="tui-island__footer-button" > Button </button>
</tui-island>
</div>
<div class="tui-col_md-4">
<tui-island>
<div class="tui-island__content">
<figure class="tui-island__figure">
<div class="some-figure"></div>
</figure>
<div>
<p class="tui-island__paragraph"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
<p class="tui-island__paragraph tui-island__paragraph_link">
<a href="/" tuiLink > Fill some papers </a>
</p>
</div>
</div>
</tui-island>
</div>
</div>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiLink} from '@taiga-ui/core';
import {TuiIslandDirective} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [TuiButton, TuiIslandDirective, TuiLink],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
.container {
    max-inline-size: 62.5rem;
}

.some-figure {
    border-radius: 100%;
    inline-size: 3rem;
    block-size: 3rem;
    background-color: var(--tui-background-neutral-1);
}
```

#### Many options

**Template:**
```html
<div class="container">
<div class="tui-row">
<div class="tui-col_md-4">
<tui-island size="l">
<div class="tui-island__content">
<div class="tui-island__figure">
<form [formGroup]="testForm">
<input formControlName="testValue" tuiSwitch type="checkbox" [showIcons]="false" />
</form>
</div>
<div>
<p class="tui-island__category">Section</p>
<h3 class="tui-island__title">Title</h3>
<p class="tui-island__paragraph"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
<p class="tui-island__paragraph tui-island__paragraph_link">
<a href="/" tuiLink > Link </a>
</p>
</div>
</div>
</tui-island>
</div>
<div class="tui-col_md-4">
<a href="http://ng-web-apis.github.io/" rel="noreferrer" size="l" target="_blank" tuiIsland [hoverable]="true" >
<div class="tui-island__content">
<figure class="tui-island__figure">
<div class="some-figure"></div>
</figure>
<div>
<h3 class="tui-island__title">Credit card</h3>
<p class="tui-island__paragraph"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
</div>
</div>
</a>
</div>
<div class="tui-col_md-4">
<tui-island size="l" textAlign="center" >
<div class="tui-island__content">
<figure class="tui-island__figure">
<div class="some-figure"></div>
</figure>
<div>
<h3 class="tui-island__title">Debit card</h3>
<p class="tui-island__paragraph"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
<button appearance="flat" size="m" tuiButton type="button" class="tui-island__footer-button" > Button </button>
</div>
</div>
</tui-island>
</div>
</div>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiLink} from '@taiga-ui/core';
import {TuiSwitch} from '@taiga-ui/kit';
import {TuiIslandDirective} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiButton, TuiIslandDirective, TuiLink, TuiSwitch],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected testForm = new FormGroup({
        testValue: new FormControl(true),
    });
}
```

**LESS:**
```less
.container {
    max-inline-size: 62.5rem;
}

.some-figure {
    border-radius: 100%;
    inline-size: 3rem;
    block-size: 3rem;
    background-color: var(--tui-background-neutral-1);
}
```

#### Custom

**Template:**
```html
<div class="container">
<div class="tui-row">
<div class="tui-col_md-4">
<tui-island size="l">
<ul class="tui-list">
<li class="tui-list__item"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
<li class="tui-list__item"> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat </li>
<li class="tui-list__item"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur </li>
<li class="tui-list__item"> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </li>
</ul>
</tui-island>
</div>
<div class="tui-col_md-4">
<tui-island size="l" textAlign="center" >
<h3 class="title">Title!</h3>
<form [formGroup]="testForm">
<tui-input-phone formControlName="testValue" class="input" [tuiTextfieldLabelOutside]="true" > Input phone </tui-input-phone>
<tui-error formControlName="testValue" [error]="[] | tuiFieldError | async" />
</form>
</tui-island>
<tui-island size="l" textAlign="center" class="my-panel tui-space_top-5" >
<h3 class="title">Panel</h3>
<button tuiCardLarge type="button" > And now for something completely different <tui-avatar size="m" src="@tui.star" [style.margin]="0" />
</button>
</tui-island>
</div>
<div class="tui-col_md-4">
<a href="http://ng-web-apis.github.io/" rel="noreferrer" size="l" target="_blank" tuiIsland [hoverable]="true" >
<img alt="Taiga" class="image" [src]="bannerImage" />
<h3 class="title title_size_s">Title</h3>
<p class="text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua </p>
<a href="https://ng-web-apis.github.io" mode="secondary" rel="noreferrer" size="m" target="_blank" tuiButton type="button" class="button" > Visit a website </a>
</a>
</div>
</div>
<div class="tui-row tui-space_top-5">
<div class="tui-col_md-4">
<tui-island textAlign="center">
<h3 class="tui-island__title">Some product</h3>
<p class="tui-island__paragraph">{{ collapsingText }}</p>
<p class="tui-island__paragraph tui-island__paragraph_link">
<button tuiLink type="button" (click)="expandText()" > Show <ng-container *ngIf="expanded; else more">less</ng-container>
<ng-template #more>more</ng-template>
</button>
</p>
</tui-island>
</div>
<div class="tui-col_md-4"></div>
</div>
</div>
```

**TypeScript:**
```ts
import {AsyncPipe, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiError, TuiLink} from '@taiga-ui/core';
import {TuiAvatar, TuiFieldErrorPipe} from '@taiga-ui/kit';
import {TuiCardLarge} from '@taiga-ui/layout';
import {
    TuiInputPhoneModule,
    TuiIslandDirective,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        NgIf,
        ReactiveFormsModule,
        TuiAvatar,
        TuiButton,
        TuiCardLarge,
        TuiError,
        TuiFieldErrorPipe,
        TuiInputPhoneModule,
        TuiIslandDirective,
        TuiLink,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected bannerImage =
        'https://ng-web-apis.github.io/dist/assets/images/web-api.svg';

    protected expanded = false;
    protected index = 1;
    protected testForm = new FormGroup({
        testValue: new FormControl('', Validators.required),
    });

    protected collapsingText =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ' +
        'sed do eiusmod tempor incididunt ut labore et dolore ' +
        'magna aliqua.';

    protected get linesLimit(): number {
        return this.expanded ? 10 : 3;
    }

    protected expandText(): void {
        this.expanded = !this.expanded;
    }

    protected onIndexChange(index: number): void {
        this.index = index;
    }
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.container {
    max-inline-size: 62.5rem;
}

.title {
    font: var(--tui-font-heading-4);
    margin: 0 0 1rem;

    &_size_s {
        font: var(--tui-font-heading-6);
        margin: 0 0 0.75rem;
    }
}

.text {
    font: var(--tui-font-text-m);
    margin: 0 0 1.5rem;
}

.image {
    display: block;
    max-inline-size: ~'calc(100% + 2.5rem)';
    margin: -1.25rem -1.25rem 1.25rem;
    border-radius: var(--tui-radius-l) var(--tui-radius-l) 0 0;
}

.my-panel {
    display: flex;
    block-size: 15rem;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;
    overflow: hidden;

    .title {
        margin-block-start: 2.1875rem;
    }

    [tuiCardLarge] {
        .transition(transform);

        text-align: start;
        flex-direction: row;
        align-items: center;
        box-shadow: none;
        border: 1px solid var(--tui-border-normal);
        border-block-end: none;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }

    &:hover [tuiCardLarge] {
        transform: translateY(-1.6rem);
    }
}
```
