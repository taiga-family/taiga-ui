# FloatingContainer

- **Package**: `LAYOUT`
- **Type**: components

`FloatingContainer` is a special container for creating different animated sticky footers

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
<div class="content"> @for (_ of '-'.repeat(30); track $index) { <div tuiCell>
<div appearance="primary" tuiAvatar="@tui.star" ></div>
<div tuiTitle> Title <div tuiSubtitle>Description</div>
</div>
</div> } @if (floating) { <footer [tuiFloatingContainer]="color">
<button tuiButton type="button" > Main action </button>
<tui-expand [expanded]="secondAction">
<button appearance="flat" tuiButton type="button" > Secondary action </button>
</tui-expand>
</footer> } </div>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [tuiFloatingContainer] | `string` | background color |

### Usage Examples

#### Basic

Appearing on scroll and toggling of secondary action.

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
<div #content class="content" (scroll)="onScroll(content)" > @for (_ of '-'.repeat(30); track $index) { <div tuiCell>
<div appearance="primary" tuiAvatar="@tui.star" ></div>
<div tuiTitle> Title <div tuiSubtitle>Description</div>
</div>
</div> } @if (floating) { <footer [tuiFloatingContainer]="secondAction ? '' : 'transparent'">
<button tuiButton type="button" > Main action </button>
<tui-expand [expanded]="secondAction">
<button appearance="flat" tuiButton type="button" > Secondary action </button>
</tui-expand>
</footer> } </div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiCell, TuiExpand, TuiLabel, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiSwitch} from '@taiga-ui/kit';
import {TuiFloatingContainer} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
        TuiAvatar,
        TuiButton,
        TuiCell,
        TuiExpand,
        TuiFloatingContainer,
        TuiLabel,
        TuiSwitch,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
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
    margin-inline: 1rem;
}
```

#### Sheet

Using inside a SheetDialog

**Template:**
```html
<button tuiButton type="button" (click)="open = true" > Show </button>
<ng-template let-observer [tuiSheetDialogOptions]="{appearance: 'fullscreen'}" [(tuiSheetDialog)]="open" >
<header tuiHeader>
<hgroup tuiTitle>
<h2>Title</h2>
<p tuiSubtitle>Subtitle</p>
<p [style.margin-block]="'0.75rem 0'">
<label tuiLabel>
<input tuiSwitch type="checkbox" [(ngModel)]="floating" /> Floating visibility </label>
</p>
<p>
<label tuiLabel>
<input tuiSwitch type="checkbox" [(ngModel)]="secondAction" /> Second action visibility </label>
</p>
<p>
<input placeholder="Some search" tuiSearch type="search" class="input" [(ngModel)]="search" />
</p>
</hgroup>
</header>
<section class="content"> @for (item of items | tuiFilter: filter : search; track item) { <div tuiCell>
<div appearance="primary" tuiAvatar="@tui.star" ></div>
<div tuiTitle> {{ item.title }} <div tuiSubtitle>{{ item.description }}</div>
</div>
</div> } </section> @if (floating) { <footer tuiFloatingContainer>
<button tuiButton type="button" (click)="observer.complete()" > Main action </button>
<tui-expand [expanded]="secondAction">
<button appearance="flat" tuiButton type="button" (click)="observer.complete()" > Secondary action </button>
</tui-expand>
</footer> } </ng-template>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSheetDialog} from '@taiga-ui/addon-mobile';
import {TUI_DEFAULT_MATCHER, TuiFilterPipe, type TuiMatcher} from '@taiga-ui/cdk';
import {TuiButton, TuiCell, TuiExpand, TuiLabel, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiSwitch} from '@taiga-ui/kit';
import {TuiFloatingContainer, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
        TuiAvatar,
        TuiButton,
        TuiCell,
        TuiExpand,
        TuiFilterPipe,
        TuiFloatingContainer,
        TuiHeader,
        TuiLabel,
        TuiSheetDialog,
        TuiSwitch,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;
    protected floating = true;
    protected secondAction = false;
    protected search = '';

    protected readonly items = Array.from({length: 15}, (_, index) => ({
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
@import '@taiga-ui/styles/utils';

.content {
    flex-grow: 1;
    margin: 0 -1rem;
}

.input {
    .tui-prevent-ios-scroll();

    inline-size: 100%;
    margin-block-start: 0.25rem;
}
```

#### Text

Text block can be used together with a single button.

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
<div class="content"> @for (_ of '-'.repeat(30); track $index) { <div tuiCell>
<div appearance="primary" tuiAvatar="@tui.star" ></div>
<div tuiTitle> Title <div tuiSubtitle>Description</div>
</div>
</div> } @if (floating) { <footer tuiFloatingContainer>
<button tuiButton type="button" > Main action </button>
<tui-elastic-container>
<div tuiSlides> @if (additional) { <button appearance="flat" tuiButton type="button" > Secondary action </button> } @else { <div class="clamp">
<tui-icon icon="@tui.settings" [style.font-size.rem]="1" /> Legal text, max 3 lines </div> } </div>
</tui-elastic-container>
</footer> } </div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiCell, TuiIcon, TuiLabel, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiSwitch} from '@taiga-ui/kit';
import {TuiElasticContainer, TuiFloatingContainer, TuiSlides} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
        TuiAvatar,
        TuiButton,
        TuiCell,
        TuiElasticContainer,
        TuiFloatingContainer,
        TuiIcon,
        TuiLabel,
        TuiSlides,
        TuiSwitch,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected floating = true;
    protected additional = false;
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils.less';

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
    margin-inline: 1rem;
}

.clamp {
    .tui-line-clamp();

    margin-block-start: 0.5rem;
    min-block-size: 2rem;

    &.tui-enter,
    &.tui-leave {
        animation-name: tuiFade;
    }
}
```

#### Content

Any kind of content can be placed inside. Use `animation: none` to prevent pop-in animation.

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
<div class="content"> @for (_ of '-'.repeat(30); track $index) { <div tuiCell>
<div appearance="primary" tuiAvatar="@tui.star" ></div>
<div tuiTitle> Title <div tuiSubtitle>Description</div>
</div>
</div> } @if (value === 'primary') { <footer tuiFloatingContainer="transparent" class="static" >
<button appearance="accent" tuiButton type="button" > Main action </button>
</footer> } @if (value === 'card') { <footer tuiFloatingContainer="transparent">
<div appearance="floating" tuiCardLarge="compact" [style.margin-block-end.rem]="0.5" >
<header tuiHeader>
<div tuiTitle> 1000 $ <div tuiSubtitle>With price</div>
</div>
<aside tuiAccessories>
<button tuiButton type="button" > Continue </button>
</aside>
</header>
</div>
</footer> } @if (value === 'actions') { <footer tuiFloatingContainer>
<button tuiButton type="button" > Main action </button>
<button appearance="flat" tuiButton type="button" > Secondary action </button>
</footer> } </div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiCell, TuiLabel, TuiRadio, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge, TuiFloatingContainer, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
        TuiAvatar,
        TuiButton,
        TuiCardLarge,
        TuiCell,
        TuiFloatingContainer,
        TuiHeader,
        TuiLabel,
        TuiRadio,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
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

.static {
    animation: none;
}

footer {
    margin-inline: 1rem;
}
```

#### Overlay

Overlay color can be customized.

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
<tui-textfield iconStart="@tui.paintbrush">
<label tuiLabel>Background color</label>
<input placeholder="#00000000" tuiInputColor [(ngModel)]="color" />
</tui-textfield>
<label class="label">
<span>0%</span>
<span>Opacity</span>
<span>100%</span>
</label>
</p>
<div class="content"> @for (_ of '-'.repeat(30); track $index) { <div tuiCell>
<div appearance="primary" tuiAvatar="@tui.star" ></div>
<div tuiTitle> Title <div tuiSubtitle>Description</div>
</div>
</div> } @if (floating) { <footer [tuiFloatingContainer]="background ? color : 'transparent'">
<button tuiButton type="button" > Main action </button>
<tui-expand [expanded]="secondAction">
<button appearance="flat" tuiButton type="button" > Secondary action </button>
</tui-expand>
</footer> } </div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiCell, TuiExpand, TuiLabel, TuiTitle} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiInputColor,
    tuiInputColorOptionsProvider,
    TuiSwitch,
} from '@taiga-ui/kit';
import {TuiFloatingContainer} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
        TuiAvatar,
        TuiButton,
        TuiCell,
        TuiExpand,
        TuiFloatingContainer,
        TuiInputColor,
        TuiLabel,
        TuiSwitch,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [tuiInputColorOptionsProvider({format: 'hexa', align: 'end'})],
})
export default class Example {
    protected floating = true;
    protected secondAction = false;
    protected background = true;
    protected color = '#ffdd2dcc';
}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils.less';

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
    margin-inline: 1rem;
}

.label {
    .tui-slider-ticks-labels();
}
```

#### Crossfade

Using Slides to crossfade a button.

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
<div class="content"> @for (_ of '-'.repeat(30); track $index) { <div tuiCell>
<div appearance="primary" tuiAvatar="@tui.star" ></div>
<div tuiTitle> Title <div tuiSubtitle>Description</div>
</div>
</div> } @if (floating) { <footer [tuiFloatingContainer]="secondAction ? '' : 'transparent'">
<div tuiSlides> @if (action) { <button appearance="primary-grayscale" tuiButton type="button" > Add to Apple Wallet </button> } @else { <button tuiButton type="button" > Main action </button> } </div>
<tui-expand [expanded]="secondAction">
<button appearance="flat" tuiButton type="button" > Secondary action </button>
</tui-expand>
</footer> } </div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiCell, TuiExpand, TuiLabel, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiSwitch} from '@taiga-ui/kit';
import {TuiFloatingContainer, TuiSlides} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
        TuiAvatar,
        TuiButton,
        TuiCell,
        TuiExpand,
        TuiFloatingContainer,
        TuiLabel,
        TuiSlides,
        TuiSwitch,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
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
    margin-inline: 1rem;
}
```

#### Compact

Shrink a single action with `justify-self` to pin it to the trailing edge.

**Template:**
```html
<div class="content">
<tui-textfield class="field">
<label tuiLabel>Name</label>
<input placeholder="Tap to open the keyboard" tuiInput [(ngModel)]="value" />
</tui-textfield> @for (_ of '-'.repeat(30); track $index) { <div tuiCell>
<div appearance="primary" tuiAvatar="@tui.star" ></div>
<div tuiTitle> Title <div tuiSubtitle>Description</div>
</div>
</div> } <footer tuiFloatingContainer="transparent">
<button size="m" tuiButton type="button" class="action" > Next </button>
</footer>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiCell, TuiInput, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiFloatingContainer} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
        TuiAvatar,
        TuiButton,
        TuiCell,
        TuiFloatingContainer,
        TuiInput,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
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
    // inset the footer so the container's bleeding background stays within the scroll area
    margin-inline: 1rem;
}

.field {
    margin: 1rem 1rem 0;
}

.action {
    // shrink the single action to its content and pin it to the trailing edge
    justify-self: end;
}
```
