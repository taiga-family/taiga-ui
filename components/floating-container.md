# FloatingContainer

- **Package**: `KIT`
- **Type**: components

`FloatingContainer` is a special container for creating different animated sticky footers

### How to Use (Import)

```ts
// ...
import {tuiFloatingContainer, TuiButton} from '@taiga-ui/kit';

@Component({
  standalone: true,
  imports: [
    // ...
    tuiFloatingContainer,
    TuiButton,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
... Some content

<footer
  tuiFloatingContainer
>
  <button
    tuiButton
    type="button"
  >
    Main action
  </button>
  <button
    appearance="flat"
    tuiButton
    type="button"
  >
     Secondary action
  </button>
</label>
```

### Example

```html
<p>
<label tuiLabel>
<input tuiSwitch type="checkbox" [(ngModel)]="floating" /> Floating visibility </label>
</p>
<p>
<label tuiLabel>
<input tuiSwitch type="checkbox" [(ngModel)]="secondAction" /> Second action visibility </label>
</p>
<div class="content">
<div *ngFor="let i of 30 | tuiRepeatTimes" tuiCell >
<tui-avatar appearance="primary" src="@tui.star" />
<div tuiTitle> Title <div tuiSubtitle>Description</div>
</div>
</div>
<footer *ngIf="floating" @tuiSlideInTop [tuiFloatingContainer]="color" >
<button tuiButton type="button" > Main action </button>
<button *ngIf="secondAction" appearance="flat" tuiButton type="button" @tuiHeightCollapse > Secondary action </button>
</footer>
</div>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [tuiFloatingContainer] | `string` | Background |

### Usage Examples

#### Two actions

**Template:**
```html
<h2>Scroll to see the floating</h2>
<p>
<label tuiLabel>
<input tuiSwitch type="checkbox" [(ngModel)]="floating" /> Floating visibility </label>
</p>
<p>
<label tuiLabel>
<input tuiSwitch type="checkbox" [(ngModel)]="secondAction" /> Second action visibility </label>
</p>
<div #content class="content" (scroll)="onScroll(content)" >
<div *tuiRepeatTimes="let i of 30" tuiCell >
<tui-avatar appearance="primary" src="@tui.star" />
<div tuiTitle> Title <div tuiSubtitle>Description</div>
</div>
</div>
<footer *ngIf="floating" @tuiSlideInTop [tuiFloatingContainer]="secondAction ? '' : 'transparent'" >
<button tuiButton type="button" > Main action </button>
<button *ngIf="secondAction" appearance="flat" tuiButton type="button" @tuiHeightCollapse > Secondary action </button>
</footer>
</div>
```

**TypeScript:**
```ts
import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {
    TuiButton,
    tuiHeightCollapse,
    TuiLabel,
    tuiSlideInTop,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiAvatar, TuiFloatingContainer, TuiSwitch} from '@taiga-ui/kit';
import {TuiCell} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgIf,
        TuiAvatar,
        TuiButton,
        TuiCell,
        TuiFloatingContainer,
        TuiLabel,
        TuiRepeatTimes,
        TuiSwitch,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    animations: [tuiSlideInTop, tuiHeightCollapse],
})
export default class Example {
    protected floating = false;

    protected secondAction = false;

    protected onScroll(el: HTMLElement): void {
        this.floating = el.scrollTop > 100;
        this.secondAction = el.scrollTop > 500;
    }
}
```

**LESS:**
```less
.content {
    position: relative;
    display: block;
    inline-size: 18rem;
    block-size: 30rem;
    overflow: auto;
    box-shadow: 0 0.25rem 1.25rem rgba(0, 0, 0, 0.1);
    background: var(--tui-background-elevation-1);
}

footer {
    margin-inline-start: 1rem;
    margin-inline-end: 1rem;
}
```

#### Inside SheetDialog

**Template:**
```html
<button tuiButton type="button" (click)="open = true" > Show </button>
<ng-template #template>
<div tuiHeader>
<div tuiTitle> Title <div tuiSubtitle>Subtitle</div>
</div>
</div>
<label tuiLabel [style.margin-top.rem]="1" >
<input tuiSwitch type="checkbox" [(ngModel)]="floating" /> Floating visibility </label>
<label tuiLabel [style.margin-top.rem]="0.5" >
<input tuiSwitch type="checkbox" [(ngModel)]="secondAction" /> Second action visibility </label>
<input placeholder="Some search" tuiSearch type="search" class="input" [(ngModel)]="search" />
</ng-template>
<ng-template let-observer [tuiSheetDialogOptions]="{label: template, fullscreen: true}" [(tuiSheetDialog)]="open" >
<div class="content">
<section class="items">
<div *ngFor="let item of items | tuiFilter: filter : search" tuiCell >
<tui-avatar appearance="primary" src="@tui.star" />
<div tuiTitle> {{ item.title }} <div tuiSubtitle>{{ item.description }}</div>
</div>
</div>
</section>
<footer *ngIf="floating" tuiFloatingContainer @tuiSlideInTop >
<button tuiButton type="button" (click)="observer.complete()" > Main action </button>
<button *ngIf="secondAction" appearance="flat" tuiButton type="button" @tuiHeightCollapse (click)="observer.complete()" > Secondary action </button>
</footer>
</div>
</ng-template>
```

**TypeScript:**
```ts
import {NgFor, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSheetDialog} from '@taiga-ui/addon-mobile';
import {TUI_DEFAULT_MATCHER, TuiFilterPipe, type TuiMatcher} from '@taiga-ui/cdk';
import {
    TuiButton,
    tuiHeightCollapse,
    TuiLabel,
    tuiSlideInTop,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiAvatar, TuiFloatingContainer, TuiSwitch} from '@taiga-ui/kit';
import {TuiCell, TuiHeader, TuiSearch} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgFor,
        NgIf,
        TuiAvatar,
        TuiButton,
        TuiCell,
        TuiFilterPipe,
        TuiFloatingContainer,
        TuiHeader,
        TuiLabel,
        TuiSearch,
        TuiSheetDialog,
        TuiSwitch,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    animations: [tuiSlideInTop, tuiHeightCollapse],
})
export default class Example {
    protected open = false;

    protected floating = true;
    protected secondAction = false;

    protected search = '';

    protected readonly items = new Array(15).fill(0).map((_, index) => ({
        title: `Title ${index + 1}`,
        description: `Description ${index + 1}`,
    }));

    protected readonly filter: TuiMatcher<[(typeof this.items)[0], string]> = (
        item,
        search,
    ) => TUI_DEFAULT_MATCHER(item.title, search);
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.items {
    flex-grow: 1;
}

.input {
    .tui-prevent-ios-scroll();

    inline-size: 100%;
    margin-block-start: 0.75rem;
}

[tuiCell] {
    padding-inline-start: 0;
}
```

#### Action and label/button

**Template:**
```html
<p>
<label tuiLabel>
<input tuiSwitch type="checkbox" [(ngModel)]="floating" /> Floating visibility </label>
</p>
<p>
<label tuiLabel>
<input tuiSwitch type="checkbox" [(ngModel)]="additional" /> Additional content </label>
</p>
<div class="content">
<div *ngFor="let i of 30 | tuiRepeatTimes" tuiCell >
<tui-avatar appearance="primary" src="@tui.star" />
<div tuiTitle> Title <div tuiSubtitle>Description</div>
</div>
</div>
<footer *ngIf="floating" tuiFloatingContainer @tuiSlideInTop >
<tui-elastic-container>
<button tuiButton type="button" > Main action </button>
<span *ngIf="!additional" class="clamp" [@tuiCrossFade]="{bottom: '1rem'} | tuiAnimation" >
<tui-icon icon="@tui.settings" [style.font-size.rem]="1" /> Legal text, max 3 lines </span>
<button *ngIf="additional" appearance="flat" tuiButton type="button" [@tuiCrossFade]="{bottom: '1rem'} | tuiAnimation" > Secondary action </button>
</tui-elastic-container>
</footer>
</div>
```

**TypeScript:**
```ts
import {NgFor, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAnimationPipe, TuiRepeatTimesPipe} from '@taiga-ui/cdk';
import {
    TuiButton,
    tuiCrossFade,
    TuiIcon,
    TuiLabel,
    tuiSlideInTop,
    TuiTitle,
} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiElasticContainer,
    TuiFloatingContainer,
    TuiSwitch,
} from '@taiga-ui/kit';
import {TuiCell} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgFor,
        NgIf,
        TuiAnimationPipe,
        TuiAvatar,
        TuiButton,
        TuiCell,
        TuiElasticContainer,
        TuiFloatingContainer,
        TuiIcon,
        TuiLabel,
        TuiRepeatTimesPipe,
        TuiSwitch,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    animations: [tuiSlideInTop, tuiCrossFade],
})
export default class Example {
    protected floating = true;
    protected additional = false;
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local.less';

.content {
    position: relative;
    display: block;
    inline-size: 18rem;
    block-size: 30rem;
    overflow: auto;
    box-shadow: 0 0.25rem 1.25rem rgba(0, 0, 0, 0.1);
    background: var(--tui-background-elevation-1);
}

footer {
    margin-inline-start: 1rem;
    margin-inline-end: 1rem;
}

.clamp {
    .tui-line-clamp();

    margin-block-start: 0.5rem;
    min-block-size: 2rem;
}
```

#### Custom content

**Template:**
```html
<p>
<label tuiLabel>
<input name="test" tuiRadio type="radio" value="primary" [(ngModel)]="value" /> Show primary </label>
</p>
<p>
<label tuiLabel>
<input name="test" tuiRadio type="radio" value="card" [(ngModel)]="value" /> Show card </label>
</p>
<p>
<label tuiLabel>
<input name="test" tuiRadio type="radio" value="actions" [(ngModel)]="value" /> Show actions </label>
</p>
<div class="content">
<div *tuiRepeatTimes="let i of 30" tuiCell >
<tui-avatar appearance="primary" src="@tui.star" />
<div tuiTitle> Title <div tuiSubtitle>Description</div>
</div>
</div>
<footer *ngIf="value === 'primary'" tuiFloatingContainer="transparent" @tuiSlideInTop >
<button appearance="accent" tuiButton type="button" > Main action </button>
</footer>
<footer *ngIf="value === 'card'" tuiFloatingContainer="transparent" @tuiSlideInTop >
<div tuiCardLarge="compact" tuiSurface="floating" [style.margin-block-end.rem]="0.5" >
<header tuiHeader>
<div tuiTitle> 1000 $ <div tuiSubtitle>With price</div>
</div>
<aside tuiAccessories>
<button tuiButton type="button" > Continue </button>
</aside>
</header>
</div>
</footer>
<footer *ngIf="value === 'actions'" tuiFloatingContainer @tuiSlideInTop >
<button tuiButton type="button" > Main action </button>
<button appearance="flat" tuiButton type="button" > Secondary action </button>
</footer>
</div>
```

**TypeScript:**
```ts
import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiButton, TuiLabel, tuiSlideInTop, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiFloatingContainer, TuiRadio} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCell, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgIf,
        TuiAvatar,
        TuiButton,
        TuiCardLarge,
        TuiCell,
        TuiFloatingContainer,
        TuiHeader,
        TuiLabel,
        TuiRadio,
        TuiRepeatTimes,
        TuiSurface,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    animations: [tuiSlideInTop],
})
export default class Example {
    protected value = '';
}
```

**LESS:**
```less
.content {
    position: relative;
    display: block;
    inline-size: 18rem;
    block-size: 30rem;
    overflow: auto;
    box-shadow: 0 0.25rem 1.25rem rgba(0, 0, 0, 0.1);
    background: var(--tui-background-elevation-1);
}

footer {
    margin-inline-start: 1rem;
    margin-inline-end: 1rem;
}
```

#### Custom background color

**Template:**
```html
<p>
<label tuiLabel>
<input tuiSwitch type="checkbox" [(ngModel)]="floating" /> Floating visibility </label>
</p>
<p>
<label tuiLabel>
<input tuiSwitch type="checkbox" [(ngModel)]="background" /> Background visibility </label>
</p>
<p>
<label tuiLabel>
<input tuiSwitch type="checkbox" [(ngModel)]="secondAction" /> Second action visibility </label>
</p>
<p>
<tui-input-color [colors]="palette" [tuiDropdownMaxHeight]="375" [(ngModel)]="color" > Background color </tui-input-color>
</p>
<div class="content">
<div *tuiRepeatTimes="let i of 30" tuiCell >
<tui-avatar appearance="primary" src="@tui.star" />
<div tuiTitle> Title <div tuiSubtitle>Description</div>
</div>
</div>
<footer *ngIf="floating" @tuiSlideInTop [tuiFloatingContainer]="background ? color : 'transparent'" >
<button tuiButton type="button" > Main action </button>
<button *ngIf="secondAction" appearance="flat" tuiButton type="button" @tuiHeightCollapse > Secondary action </button>
</footer>
</div>
```

**TypeScript:**
```ts
import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {
    TuiButton,
    tuiHeightCollapse,
    TuiLabel,
    tuiSlideInTop,
    TuiTextfield,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiAvatar, TuiFloatingContainer, TuiSwitch} from '@taiga-ui/kit';
import {TuiCell} from '@taiga-ui/layout';
import {
    TUI_DEFAULT_INPUT_COLORS,
    tuiColorSelectorOptionsProvider,
    TuiInputColorModule,
} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgIf,
        TuiAvatar,
        TuiButton,
        TuiCell,
        TuiFloatingContainer,
        TuiInputColorModule,
        TuiLabel,
        TuiRepeatTimes,
        TuiSwitch,
        TuiTextfield,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [tuiColorSelectorOptionsProvider({selectorMode: false})],
    animations: [tuiSlideInTop, tuiHeightCollapse],
})
export default class Example {
    protected floating = true;
    protected secondAction = false;

    protected background = true;

    protected readonly palette = TUI_DEFAULT_INPUT_COLORS;
    protected color = 'rgba(255, 221, 45, 0.8)';
}
```

**LESS:**
```less
.content {
    position: relative;
    display: block;
    inline-size: 18rem;
    block-size: 30rem;
    overflow: auto;
    box-shadow: 0 0.25rem 1.25rem rgba(0, 0, 0, 0.1);
    background: var(--tui-background-elevation-1);
}

footer {
    margin-inline-start: 1rem;
    margin-inline-end: 1rem;
}
```

#### Primary button change

**Template:**
```html
<p>
<label tuiLabel>
<input tuiSwitch type="checkbox" [(ngModel)]="floating" /> Floating visibility </label>
</p>
<p>
<label tuiLabel>
<input tuiSwitch type="checkbox" [(ngModel)]="secondAction" /> Second action visibility </label>
</p>
<p>
<label tuiLabel>
<input tuiSwitch type="checkbox" [(ngModel)]="action" /> Primary action </label>
</p>
<div class="content">
<div *tuiRepeatTimes="let i of 30" tuiCell >
<tui-avatar appearance="primary" src="@tui.star" />
<div tuiTitle> Title <div tuiSubtitle>Description</div>
</div>
</div>
<footer *ngIf="floating" @tuiSlideInTop [tuiFloatingContainer]="secondAction ? '' : 'transparent'" >
<button *ngIf="!action" tuiButton type="button" [@tuiCrossFade]="{duration: 0.25} | tuiAnimation" > Main action </button>
<button *ngIf="action" appearance="primary-grayscale" tuiButton type="button" [@tuiCrossFade]="{duration: 0.25} | tuiAnimation" > Add to Apple Wallet </button>
<button *ngIf="secondAction" appearance="flat" tuiButton type="button" @tuiHeightCollapse > Secondary action </button>
</footer>
</div>
```

**TypeScript:**
```ts
import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAnimationPipe, TuiRepeatTimes} from '@taiga-ui/cdk';
import {
    TuiButton,
    tuiCrossFade,
    tuiHeightCollapse,
    TuiLabel,
    tuiSlideInTop,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiAvatar, TuiFloatingContainer, TuiSwitch} from '@taiga-ui/kit';
import {TuiCell} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgIf,
        TuiAnimationPipe,
        TuiAvatar,
        TuiButton,
        TuiCell,
        TuiFloatingContainer,
        TuiLabel,
        TuiRepeatTimes,
        TuiSwitch,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    animations: [tuiSlideInTop, tuiCrossFade, tuiHeightCollapse],
})
export default class Example {
    protected floating = true;

    protected action = false;
    protected secondAction = false;
}
```

**LESS:**
```less
.content {
    position: relative;
    display: block;
    inline-size: 18rem;
    block-size: 30rem;
    overflow: auto;
    box-shadow: 0 0.25rem 1.25rem rgba(0, 0, 0, 0.1);
    background: var(--tui-background-elevation-1);
}

footer {
    margin-inline-start: 1rem;
    margin-inline-end: 1rem;
}
```
