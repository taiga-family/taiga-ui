# AppBar

- **Package**: `LAYOUT`
- **Type**: components

Component for the main app header

### Usage Examples

#### Mobile — medium size

**Template:**
```html
<h3>iOS</h3>
<section tuiPlatform="ios">
<tui-app-bar>
<button tuiButton tuiSlot="start" type="button" > Back </button> Taiga UI <button tuiButton tuiSlot="end" type="button" > Action </button>
</tui-app-bar>
<tui-app-bar>
<button tuiAppBarBack tuiSlot="start" type="button" > Back </button> Taiga UI — Components library <button iconStart="@tui.user" tuiIconButton tuiSlot="end" type="button" > User </button>
</tui-app-bar>
<tui-app-bar>
<button title="Back" tuiAppBarBack tuiSlot="start" type="button" ></button> Taiga UI <button iconStart="@tui.user" tuiIconButton tuiSlot="end" type="button" > User </button>
<button iconStart="@tui.settings" title="Settings" tuiIconButton tuiSlot="end" type="button" ></button>
</tui-app-bar>
<tui-app-bar>
<label tuiTitle> Taiga UI <span tuiSubtitle>Components library</span>
</label>
<button iconStart="@tui.settings" title="Settings" tuiIconButton tuiSlot="end" type="button" ></button>
</tui-app-bar>
<tui-app-bar>
<button tuiAppBarBack tuiSlot="start" type="button" > Back </button>
<div>
<progress size="s" tuiProgressBar [max]="100" [value]="35" ></progress>
</div>
</tui-app-bar>
</section>
<h3 class="tui-space_top-8">Android</h3>
<section tuiPlatform="android">
<tui-app-bar> Taiga UI <button tuiButton tuiSlot="end" type="button" > Action </button>
</tui-app-bar>
<tui-app-bar>
<button tuiAppBarBack tuiSlot="start" type="button" > Back </button> Taiga UI — Components library <button iconStart="@tui.user" tuiIconButton tuiSlot="end" type="button" > User </button>
</tui-app-bar>
<tui-app-bar>
<button iconStart="@tui.x" title="Settings" tuiIconButton tuiSlot="start" type="button" ></button> Taiga UI <button iconStart="@tui.user" tuiIconButton tuiSlot="end" type="button" > User </button>
<button iconStart="@tui.settings" title="Settings" tuiIconButton tuiSlot="end" type="button" ></button>
</tui-app-bar>
<tui-app-bar>
<button title="Back" tuiAppBarBack tuiSlot="start" type="button" ></button>
<label tuiTitle> Taiga UI <span tuiSubtitle>Components library</span>
</label>
<button iconStart="@tui.settings" title="Settings" tuiIconButton tuiSlot="end" type="button" ></button>
</tui-app-bar>
<tui-app-bar>
<button tuiAppBarBack tuiSlot="start" type="button" > Back </button>
<progress size="s" tuiProgressBar [max]="100" [value]="35" ></progress>
</tui-app-bar>
</section>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiProgressBar} from '@taiga-ui/kit';
import {TuiAppBar} from '@taiga-ui/layout';

@Component({
    imports: [TuiAppBar, TuiButton, TuiPlatform, TuiProgressBar, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
tui-app-bar {
    box-shadow: var(--tui-shadow-small);
    inline-size: 20rem;
    margin-block-end: 1rem;
}
```

#### Desktop — large size

**Template:**
```html
<tui-app-bar tuiAppBarSize>
<button iconStart="@tui.chevron-left" tuiButton tuiSlot="start" type="button" > Action </button> Taiga UI </tui-app-bar>
<tui-app-bar tuiAppBarSize>
<label tuiTitle> Taiga UI <span tuiSubtitle>Components library</span>
</label>
<button tuiButton tuiSlot="end" type="button" > Action </button>
</tui-app-bar>
<tui-app-bar size="l">
<button tuiButton tuiSlot="start" type="button" > Action </button>
<label tuiTitle> Taiga UI is a very long title that should fade away <span tuiSubtitle>Components library</span>
</label>
<button iconStart="@tui.x" tuiIconButton tuiSlot="end" type="button" > Close </button>
</tui-app-bar>
<tui-app-bar size="l">
<button iconStart="@tui.chevron-left" size="xs" tuiIconButton tuiSlot="start" type="button" > Back </button>
<progress size="s" tuiProgressBar [max]="100" [style.width.rem]="10" [value]="35" ></progress>
<button tuiButton tuiSlot="end" type="button" > Action </button>
</tui-app-bar>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiProgress} from '@taiga-ui/kit';
import {TuiAppBar} from '@taiga-ui/layout';

@Component({
    imports: [TuiAppBar, TuiButton, TuiProgress, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
tui-app-bar {
    box-shadow: var(--tui-shadow-small);
    inline-size: 30rem;
    margin-block-end: 1rem;
}
```

#### Variants

**Template:**
```html
<h3>Customization</h3>
<tui-app-bar>
<progress size="s" tuiProgressBar [max]="100" [value]="35" ></progress>
</tui-app-bar>
<tui-app-bar class="gray">
<button appearance="" tuiButton tuiSlot="start" type="button" > Back </button>
<label tuiTitle>
<span tuiSubtitle>More interesting title</span> Taiga UI </label>
<button appearance="" tuiButton tuiSlot="end" type="button" > Accept </button>
</tui-app-bar>
<tui-app-bar class="black">
<button appearance="" tuiButton tuiSlot="start" type="button" > Cancel </button> Taiga UI <button appearance="" iconStart="@tui.settings" title="Settings" tuiIconButton tuiSlot="end" type="button" ></button>
</tui-app-bar>
<h3 class="tui-space_top-8">Centered Android</h3>
<section tuiPlatform="android">
<tui-app-bar>
<label tuiTitle>Taiga UI</label>
<button tuiButton tuiSlot="end" type="button" > Action </button>
</tui-app-bar>
<tui-app-bar>
<button tuiAppBarBack tuiSlot="start" type="button" > Back </button>
<label tuiFade tuiTitle > Taiga UI — Components library </label>
<button iconStart="@tui.user" tuiIconButton tuiSlot="end" type="button" > User </button>
</tui-app-bar>
<tui-app-bar>
<button iconStart="@tui.x" title="Settings" tuiIconButton tuiSlot="start" type="button" ></button>
<label tuiTitle>Taiga UI</label>
<button iconStart="@tui.user" tuiIconButton tuiSlot="end" type="button" > User </button>
<button iconStart="@tui.settings" title="Settings" tuiIconButton tuiSlot="end" type="button" ></button>
</tui-app-bar>
<tui-app-bar>
<button title="Back" tuiAppBarBack tuiSlot="start" type="button" ></button>
<label tuiTitle> Taiga UI <span tuiSubtitle>Components library</span>
</label>
<button iconStart="@tui.settings" title="Settings" tuiIconButton tuiSlot="end" type="button" ></button>
</tui-app-bar>
</section>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiFade, TuiProgress} from '@taiga-ui/kit';
import {TuiAppBar} from '@taiga-ui/layout';

@Component({
    imports: [TuiAppBar, TuiButton, TuiFade, TuiPlatform, TuiProgress, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils';

tui-app-bar {
    box-shadow: var(--tui-shadow-small);
    inline-size: 20rem;
    margin-block-end: 1rem;
}

.gray {
    box-shadow: none;
    background: var(--tui-background-base-alt);

    button {
        color: var(--tui-text-primary);
    }
}

.black {
    color: var(--tui-background-base);
    background: var(--tui-text-primary);

    button {
        color: var(--tui-status-warning);
    }
}

section tui-app-bar [tuiTitle] {
    .center-all();

    text-align: center;
}
```

#### Dialog

**Template:**
```html
<button size="m" tuiButton type="button" (click)="open(template)" > Show </button>
<ng-template #template let-observer >
<tui-app-bar tuiAppBarSize>
<button tuiAppBarBack tuiSlot="start" type="button" [disabled]="!step" (click)="step = step - 1" > Back </button>
<progress max="5" size="s" tuiProgressBar [style.width.rem]="8" [value]="step" ></progress>
<button tuiButton tuiSlot="end" type="button" (click)="observer.complete()" > Close </button>
</tui-app-bar>
<h2 tuiHeader="h3">
<span tuiTitle>I'm a stepper</span>
</h2>
<p appearance="floating" tuiCardLarge > Step {{ step }} </p>
<button tuiButton type="button" [disabled]="step === 5" (click)="step = step + 1" > Next </button>
</ng-template>
```

**TypeScript:**
```ts
import {Component, inject, type TemplateRef} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiDialogService, TuiTitle} from '@taiga-ui/core';
import {TuiProgress} from '@taiga-ui/kit';
import {TuiAppBar, TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [TuiAppBar, TuiButton, TuiCardLarge, TuiHeader, TuiProgress, TuiTitle],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly dialogs = inject(TuiDialogService);

    protected step = 0;

    protected open(template: TemplateRef<any>): void {
        this.step = 0;
        this.dialogs
            .open(template, {
                appearance: 'fullscreen',
                closable: false,
                dismissible: false,
            })
            .subscribe();
    }
}
```

#### Dynamic header

**Template:**
```html
<tui-segmented [(activeItemIndex)]="activeItemIndex">
<button type="button">IOS</button>
<button type="button">Android</button>
</tui-segmented>
<div tuiDynamicHeaderContainer class="container" [tuiPlatform]="activeItemIndex ? 'android' : 'ios'" >
<tui-app-bar>
<button title="Back" tuiAppBarBack tuiSlot="start" type="button" ></button>
<div tuiDynamicHeader></div>
</tui-app-bar>
<div class="content">
<div *tuiDynamicHeaderAnchor tuiHeader="h6" >
<h6 tuiTitle> Title 1 <div tuiSubtitle>Subtitle</div>
</h6>
</div> @for (_ of '-'.repeat(7); track $index) { <div tuiCell>
<div appearance="primary" tuiAvatar="@tui.star" ></div>
<div tuiTitle> Title <div tuiSubtitle>Description</div>
</div>
</div> } <div *tuiDynamicHeaderAnchor tuiHeader="h6" >
<h6 tuiTitle>Title 2</h6>
</div> @for (_ of '-'.repeat(15); track $index) { <div tuiCell>
<div appearance="secondary" tuiAvatar="@tui.heart" ></div>
<div tuiTitle> Title <div tuiSubtitle>Description</div>
</div>
</div> } <div *tuiDynamicHeaderAnchor tuiHeader="h6" >
<h6 tuiTitle>Title 3 Long title</h6>
</div> @for (_ of '-'.repeat(15); track $index) { <div tuiCell>
<div appearance="secondary" tuiAvatar="@tui.heart" ></div>
<div tuiTitle> Title <div tuiSubtitle>Description</div>
</div>
</div> } </div>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiCell, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiSegmented} from '@taiga-ui/kit';
import {TuiAppBar, TuiDynamicHeader, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [
        TuiAppBar,
        TuiAvatar,
        TuiCell,
        TuiDynamicHeader,
        TuiHeader,
        TuiPlatform,
        TuiSegmented,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected activeItemIndex = 0;
}
```

**LESS:**
```less
.container {
    max-block-size: 30rem;
    inline-size: 20rem;
    overflow: scroll;
    overscroll-behavior: none;
}

tui-app-bar {
    position: sticky;
    z-index: 1;
    inset-block-start: -1px;
    background: var(--tui-background-base);
}

tui-segmented {
    inline-size: 6rem;
    inline-size: fit-content;
    margin-block-end: 1rem;
}

.content > [tuiHeader] {
    padding: 0 1rem;
}
```

#### iOS Liquid glass

**Template:**
```html
<section tuiPlatform="ios">
<tui-app-bar>
<button tuiButton tuiSlot="start" type="button" > Back </button> Taiga UI <button tuiButton tuiSlot="end" type="button" > Action </button>
</tui-app-bar>
<tui-app-bar>
<button tuiAppBarBack tuiSlot="start" type="button" > Back </button> Taiga UI — Components library <button iconStart="@tui.user" tuiIconButton tuiSlot="end" type="button" > User </button>
</tui-app-bar>
<tui-app-bar>
<button title="Back" tuiAppBarBack tuiSlot="start" type="button" ></button> Taiga UI <button iconStart="@tui.user" tuiIconButton tuiSlot="end" type="button" > User </button>
<button iconStart="@tui.settings" title="Settings" tuiIconButton tuiSlot="end" type="button" ></button>
</tui-app-bar>
<tui-app-bar>
<label tuiTitle> Taiga UI <span tuiSubtitle>Components library</span>
</label>
<button iconStart="@tui.settings" title="Settings" tuiIconButton tuiSlot="end" type="button" ></button>
</tui-app-bar>
<tui-app-bar>
<button tuiAppBarBack tuiSlot="start" type="button" > Back </button>
<div>
<progress size="s" tuiProgressBar [max]="100" [value]="35" ></progress>
</div>
</tui-app-bar>
</section>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TUI_LIQUID_GLASS, TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiProgressBar} from '@taiga-ui/kit';
import {TuiAppBar} from '@taiga-ui/layout';

@Component({
    imports: [TuiAppBar, TuiButton, TuiPlatform, TuiProgressBar, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [{provide: TUI_LIQUID_GLASS, useValue: true}],
})
export default class Example {}
```

**LESS:**
```less
tui-app-bar {
    inline-size: 20rem;
    margin-block-end: 1rem;
}

section {
    padding: 1rem;
    margin: -1rem;
    overflow: hidden;
}
```

#### Liquid glass dynamic header

**Template:**
```html
<div #container tuiDynamicHeaderContainer tuiPlatform="ios" waIntersectionRootMargin="-120px 0px 1000000% 0px" class="container" [class.tui-liquid-glass_blur]="blur()" >
<tui-app-bar>
<button title="Back" tuiAppBarBack tuiSlot="start" type="button" ></button>
<div tuiDynamicHeader></div>
</tui-app-bar>
<div class="content">
<div *tuiDynamicHeaderAnchor tuiHeader="h6" >
<h6 tuiTitle (waIntersectionObservee)="blur.set(!$event[0]?.isIntersecting)" > Title 1 <div tuiSubtitle>Subtitle</div>
</h6>
</div> @for (_ of '-'.repeat(7); track $index) { <div tuiCell>
<div appearance="primary" tuiAvatar="@tui.star" ></div>
<div tuiTitle> Title <div tuiSubtitle>Description</div>
</div>
</div> } <div *tuiDynamicHeaderAnchor tuiHeader="h6" >
<h6 tuiTitle>Title 2</h6>
</div> @for (_ of '-'.repeat(15); track $index) { <div tuiCell>
<div appearance="secondary" tuiAvatar="@tui.heart" ></div>
<div tuiTitle> Title <div tuiSubtitle>Description</div>
</div>
</div> } <div *tuiDynamicHeaderAnchor tuiHeader="h6" >
<h6 tuiTitle>Title 3 Long title</h6>
</div> @for (_ of '-'.repeat(15); track $index) { <div tuiCell>
<div appearance="secondary" tuiAvatar="@tui.heart" ></div>
<div tuiTitle> Title <div tuiSubtitle>Description</div>
</div>
</div> } </div>
</div>
```

**TypeScript:**
```ts
import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WaIntersectionObserver} from '@ng-web-apis/intersection-observer';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TUI_LIQUID_GLASS, TuiCell, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiAppBar, TuiDynamicHeader, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [
        TuiAppBar,
        TuiAvatar,
        TuiCell,
        TuiDynamicHeader,
        TuiHeader,
        TuiPlatform,
        TuiTitle,
        WaIntersectionObserver,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [{provide: TUI_LIQUID_GLASS, useValue: true}],
})
export default class Example {
    protected readonly blur = signal(false);
}
```

**LESS:**
```less
.container {
    max-block-size: 30rem;
    inline-size: 20rem;
    overflow: scroll;
    overscroll-behavior: none;
}

tui-app-bar {
    position: sticky;
    z-index: 1;
    inset-block-start: 0;
    margin-block-end: 0.75rem;
}
```

#### Color background

**Template:**
```html
<div tuiDynamicHeaderContainer tuiPlatform="ios" waIntersectionRootMargin="-120px 0px 1000000% 0px" class="container" >
<tui-app-bar [attr.tuiTheme]="color() || mode() ? 'dark' : 'light'" [class.tui-liquid-glass_blur]="blur()" [style.--tui-appbar-background]="color()" >
<button title="Back" tuiAppBarBack tuiSlot="start" type="button" ></button>
<div tuiDynamicHeader tuiHeader="h6" ></div>
</tui-app-bar>
<div class="content">
<div tuiHeader="h4" (waIntersectionObservee)="blur.set(!$event[0]?.isIntersecting)" >
<h6 *tuiDynamicHeaderAnchor tuiTitle="l" > Backgrounds </h6>
</div>
<div waIntersectionObserver waIntersectionRootMargin="0px 0px -100% 0px" waIntersectionThreshold="0" > @for (item of colors; track item) { <div class="block" [style.background-color]="item" (waIntersectionObservee)="onIntersection(!!$event[0]?.isIntersecting, item)" >
<h3 tuiHeader="h5" tuiTheme="dark" > {{ item }} </h3>
</div> } </div>
</div>
</div>
```

**TypeScript:**
```ts
import {Component, inject, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WaIntersectionObserver} from '@ng-web-apis/intersection-observer';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TUI_DARK_MODE, TUI_LIQUID_GLASS, TuiTitle} from '@taiga-ui/core';
import {TuiAppBar, TuiDynamicHeader, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [
        TuiAppBar,
        TuiDynamicHeader,
        TuiHeader,
        TuiPlatform,
        TuiTitle,
        WaIntersectionObserver,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [{provide: TUI_LIQUID_GLASS, useValue: signal(true)}],
})
export default class Example {
    protected readonly mode = inject(TUI_DARK_MODE);
    protected readonly colors = ['#2f3f5b', '#3a3f66', '#5a2f3f', '#3f4e37', '#5a3851'];
    protected readonly color = signal('');
    protected readonly blur = signal(false);

    protected onIntersection(isIntersecting: boolean, color: string): void {
        if (isIntersecting) {
            this.color.set(color);
        } else if (this.color() === color) {
            this.color.set('');
        }
    }
}
```

**LESS:**
```less
.container {
    max-block-size: 30rem;
    inline-size: 20rem;
    overflow: scroll;
    overscroll-behavior: none;
}

tui-app-bar {
    position: sticky;
    z-index: 1;
    inset-block-start: 0;
    margin-block-end: 0.75rem;
}

.content {
    padding: 0;

    > [tuiHeader] {
        padding: 1rem;
    }
}

.block {
    block-size: 20rem;
}
```
