# CardLarge

- **Package**: `LAYOUT`
- **Type**: components

### Usage Examples

#### Basic

**Template:**
```html
<div tuiPlatform="web">
<h4>Desktop</h4>
<div appearance="floating" tuiCardLarge >
<header tuiHeader>
<h2 tuiTitle>Header</h2>
</header>
<section>Replace me</section>
<footer>
<button appearance="secondary" size="m" tuiButton type="button" > Label </button>
</footer>
</div>
<div appearance="floating" tuiCardLarge class="tui-space_top-4" >
<header tuiHeader>
<h2 tuiTitle>Header</h2>
<aside tuiAccessories>
<div appearance="neutral" iconStart="@tui.heart" size="xl" tuiBadge > Like </div>
</aside>
</header>
<section>Replace me</section>
</div>
</div>
<div tuiPlatform="ios">
<h4>iOS/Android</h4>
<div appearance="floating" tuiCardLarge >
<header tuiHeader>
<h2 tuiTitle>Header</h2>
<aside tuiAccessories>
<a tuiLink class="label" > Label </a>
</aside>
</header>
<section>Replace me</section>
<footer>
<button appearance="secondary" size="m" tuiButton type="button" > Label </button>
</footer>
</div>
<div appearance="floating" tuiCardLarge class="tui-space_top-4" >
<header tuiHeader>
<h2 tuiTitle>Header</h2>
<aside tuiAccessories>
<a tuiLink class="label" > Label </a>
</aside>
</header>
<section>Replace me</section>
</div>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiButton, TuiLink, TuiTitle} from '@taiga-ui/core';
import {TuiBadge} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [
        TuiBadge,
        TuiButton,
        TuiCardLarge,
        TuiHeader,
        TuiLink,
        TuiPlatform,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
section {
    display: flex;
    block-size: 3.125rem;
    border-radius: 0.75rem;
    justify-content: center;
    align-items: center;
    color: var(--tui-text-secondary);
    border: 1px dashed;
}

[tuiLink].label {
    font: var(--tui-typography-body-l);
}
```

#### Avatar

**Template:**
```html
<div tuiPlatform="web">
<h4>Desktop</h4>
<div appearance="floating" tuiCardLarge >
<header tuiHeader>
<h1 tuiTitle> Title <span tuiSubtitle>Subtitle</span>
</h1>
<aside tuiAccessories>
<div appearance="primary" tuiAvatar="@tui.star" ></div>
</aside>
</header>
<footer>
<button appearance="secondary" size="m" tuiButton type="button" > Label </button>
</footer>
</div>
</div>
<div tuiPlatform="ios">
<h4>iOS/Android</h4>
<div appearance="floating" tuiCardLarge >
<div tuiHeader>
<h2 tuiTitle> Title <span tuiSubtitle>Subtitle</span>
</h2>
<aside tuiAccessories>
<div appearance="primary" tuiAvatar="@tui.star" ></div>
</aside>
</div>
<footer>
<button appearance="secondary" size="m" tuiButton type="button" > Label </button>
</footer>
</div>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [TuiAvatar, TuiButton, TuiCardLarge, TuiHeader, TuiPlatform, TuiTitle],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### Single item

**Template:**
```html
<button appearance="floating" tuiCardLarge tuiHeader type="button" >
<h1 tuiTitle> Title <span tuiSubtitle>Subtitle</span>
</h1>
<aside tuiAccessories>
<div appearance="primary" tuiAvatar="@tui.star" ></div>
</aside>
</button>
<button appearance="floating" tuiCardLarge tuiCell type="button" >
<div appearance="primary" tuiAvatar="@tui.star" ></div>
<div tuiTitle> Title <div tuiSubtitle>Description</div>
</div>
</button>
<section class="actions">
<button appearance="floating" tuiCardLarge tuiHeader type="button" >
<h2 tuiTitle>Title</h2>
<aside tuiAccessories>
<tui-icon icon="@tui.star" tuiAppearance="flat" />
</aside>
</button>
<button appearance="floating" tuiCardLarge tuiHeader type="button" >
<h2 tuiTitle>Title</h2>
<aside tuiAccessories>
<tui-icon icon="@tui.star" tuiAppearance="flat" />
</aside>
</button>
</section>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAppearance, TuiCell, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [
        TuiAppearance,
        TuiAvatar,
        TuiCardLarge,
        TuiCell,
        TuiHeader,
        TuiIcon,
        TuiTitle,
    ],
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
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    inline-size: 20rem;
}

.actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
}
```

#### Cards List

**Template:**
```html
<div appearance="floating" tuiCardLarge >
<header tuiHeader>
<h1 tuiTitle> Title <span tuiSubtitle>Subtitle</span>
</h1>
</header>
<section> @for (_ of '-'.repeat(3); track $index) { <div appearance="neutral" tuiCardMedium >
<tui-icon icon="@tui.square-plus" class="plus" />
<h2 tuiTitle> Title <span tuiSubtitle>Subtitle</span>
</h2>
</div> } </section>
<footer>
<button appearance="secondary" size="m" tuiButton type="button" > Label </button>
</footer>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiCardLarge, TuiCardMedium, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [TuiButton, TuiCardLarge, TuiCardMedium, TuiHeader, TuiIcon, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
section {
    display: flex;
    gap: 0.75rem;
    margin: 0 -1.5rem;
    padding: 0 1.5rem;
    overflow: scroll;
}

.plus {
    background: var(--tui-background-accent-1);
    border-radius: 0.25rem;
    color: #fff;
}
```

#### Cell List

**Template:**
```html
<div appearance="floating" tuiCardLarge >
<header tuiHeader>
<h1 tuiTitle> Title <span tuiSubtitle>Subtitle</span>
</h1>
</header> @for (_ of '-'.repeat(3); track $index) { <div tuiCell="l">
<div appearance="primary" tuiAvatar="@tui.star" ></div>
<div tuiTitle> Title <div tuiSubtitle>Description</div>
</div>
</div> } <footer>
<button appearance="secondary" size="m" tuiButton type="button" > Label </button>
</footer>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiCell, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [TuiAvatar, TuiButton, TuiCardLarge, TuiCell, TuiHeader, TuiTitle],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### Cell List (2 columns)

**Template:**
```html
<div appearance="floating" tuiCardLarge >
<header tuiHeader>
<h1 tuiTitle> Title <span tuiSubtitle>Subtitle</span>
</h1>
</header>
<section class="actions"> @for (_ of '-'.repeat(6); track $index) { <div tuiCell="l">
<div appearance="primary" tuiAvatar="@tui.star" ></div>
<div tuiTitle> Title <div tuiSubtitle>Description</div>
</div>
</div> } </section>
<footer>
<button appearance="secondary" size="m" tuiButton type="button" > Label </button>
</footer>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiCell, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [TuiAvatar, TuiButton, TuiCardLarge, TuiCell, TuiHeader, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
.actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: inherit;
}
```

#### Cell List (actions)

**Template:**
```html
<div appearance="floating" tuiCardLarge >
<header tuiHeader>
<h1 tuiTitle> Title <span tuiSubtitle>Subtitle</span>
</h1>
</header> @for (_ of '-'.repeat(3); track $index) { <button tuiCell="l" tuiDropdownAlign="end" tuiDropdownAuto type="button" [tuiDropdown]="dropdown" [tuiDropdownSided]="true" >
<div appearance="primary" tuiAvatar="@tui.star" ></div>
<div tuiTitle> Title <div tuiSubtitle>Description</div>
</div>
<tui-icon icon="@tui.chevron-right" tuiAppearance="icon" />
</button> } <button tuiLink type="button" > Show all </button>
</div>
<ng-template #dropdown let-close >
<tui-data-list>
<tui-opt-group> @for (item of ['Edit', 'Download', 'Rename', 'Delete']; track item) { <button tuiOption>{{ item }}</button> } </tui-opt-group>
<hr />
<tui-opt-group>
<button tuiOption (click)="close()" > Nevermind </button>
</tui-opt-group>
</tui-data-list>
</ng-template>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiAppearance,
    TuiCell,
    TuiDataList,
    TuiDropdown,
    TuiIcon,
    TuiLink,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [
        TuiAppearance,
        TuiAvatar,
        TuiCardLarge,
        TuiCell,
        TuiDataList,
        TuiDropdown,
        TuiHeader,
        TuiIcon,
        TuiLink,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
.actions {
    display: flex;
    flex-direction: column;
}
```

#### Cell List (headless)

**Template:**
```html
<div appearance="floating" tuiCardLarge > @for (_ of '-'.repeat(3); track $index) { <div tuiCell="l">
<div appearance="primary" tuiAvatar="@tui.star" ></div>
<div tuiTitle> Title <div tuiSubtitle>Description</div>
</div>
</div> } </div>
<div appearance="floating" tuiCardLarge >
<div tuiCell="l">
<div appearance="primary" tuiAvatar="@tui.star" ></div>
<div tuiTitle> Title <div tuiSubtitle>Description</div>
</div>
</div>
<button appearance="secondary" size="m" tuiButton type="button" > Label </button>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiCell, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge} from '@taiga-ui/layout';

@Component({
    imports: [TuiAvatar, TuiButton, TuiCardLarge, TuiCell, TuiTitle],
    templateUrl: './index.html',
    styles: ':host { display: flex; flex-direction: column; gap: 2rem }',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### Footer alignment

**Template:**
```html
<div appearance="floating" tuiCardLarge >
<header tuiHeader>
<h2 tuiTitle>Title</h2>
</header>
<div tuiCell>
<div appearance="primary" tuiAvatar="@tui.star" ></div>
<div tuiTitle> Title <div tuiSubtitle>Description</div>
</div>
</div>
<footer>
<button appearance="secondary" size="m" tuiButton type="button" > Label </button>
</footer>
</div>
<div appearance="floating" tuiCardLarge >
<header tuiHeader>
<h2 tuiTitle>Title</h2>
</header> Some text <footer>
<button appearance="secondary" size="m" tuiButton type="button" > Label </button>
</footer>
</div>
<div appearance="floating" tuiCardLarge >
<header tuiHeader>
<h2 tuiTitle>Card with text content</h2>
<aside tuiAccessories>
<tui-icon tuiTooltip="It's strange, I know" />
</aside>
</header>
<div tuiDescription>Use description for text content of a card with spacings according to the specs.</div>
<footer>
<div tuiTitle>
<div tuiSubtitle>Remaining $25 120.23</div>
<progress tuiProgressBar value="0.75" ></progress>
<div tuiSubtitle>out of $100 000</div>
</div>
</footer>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiCell, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiProgressBar, TuiTooltip} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [
        TuiAvatar,
        TuiButton,
        TuiCardLarge,
        TuiCell,
        TuiHeader,
        TuiIcon,
        TuiProgressBar,
        TuiTitle,
        TuiTooltip,
    ],
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
    grid-template-columns: 1fr 1fr;
    grid-template-rows: min-content 1fr;
    gap: 1rem;
    inline-size: 30rem;

    > :last-child {
        grid-column: span 2;
    }
}

[tuiSubtitle] {
    font: var(--tui-typography-body-m);
}
```

#### Image

**Template:**
```html
<div tuiCardLarge tuiHeader class="image-1" >
<h1 tuiTitle> Title <span tuiSubtitle>Subtitle</span>
</h1>
<aside tuiAccessories>
<button appearance="secondary-grayscale" tuiButtonX tuiTheme="dark" > Close </button>
</aside>
</div>
<div tuiCardLarge tuiHeader tuiTheme="dark" class="image-2" >
<h1 tuiTitle> Title <span tuiSubtitle>Subtitle</span>
</h1>
<aside tuiAccessories>
<button appearance="secondary-grayscale" tuiButtonX > Close </button>
</aside>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButtonX, TuiTitle} from '@taiga-ui/core';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [TuiButtonX, TuiCardLarge, TuiHeader, TuiTitle],
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
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.image-1 {
    background: url('/assets/images/illustration.jpg') no-repeat top right / 250%;
}

.image-2 {
    background: url('/assets/images/road-illustration.jpg') no-repeat center / cover;
}

.image-2,
:host-context([tuiTheme='dark']) .image-1 {
    &::before {
        content: '';
        position: absolute;
        inset-block-start: 0;
        inset-inline-start: 0;
        inline-size: 100%;
        block-size: 100%;
        background: rgba(0, 0, 0, 0.5);
    }
}

[tuiButtonX] {
    backdrop-filter: blur(1rem) brightness(1.25);
}

[tuiButtonX][tuiTheme='dark'] {
    backdrop-filter: blur(1rem) brightness(0.5);
}
```

#### Cell with close

**Template:**
```html
<div tuiPlatform="ios">
<h4>iOS/Android</h4>
<div appearance="floating" tuiCardLarge="compact" tuiCell >
<div appearance="primary" tuiAvatar="@tui.star" ></div>
<div tuiTitle>
<div tuiFade tuiFadeHeight="1.2rem" tuiFadeOffset="1.5em" tuiFadeSize="1.5em" [style.block-size.rem]="2.5" > Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. </div>
<div tuiFade tuiFadeHeight="1rem" tuiFadeOffset="1.5em" tuiFadeSize="1.5em" tuiSubtitle [style.align-items]="'flex-start'" [style.block-size.rem]="2" > Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </div>
</div>
<aside tuiAccessories>
<button tuiButtonX type="button" > Close </button>
</aside>
</div>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiButtonX, TuiCell, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiFade} from '@taiga-ui/kit';
import {TuiCardLarge} from '@taiga-ui/layout';

@Component({
    imports: [
        TuiAvatar,
        TuiButtonX,
        TuiCardLarge,
        TuiCell,
        TuiFade,
        TuiPlatform,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
[tuiCardLarge] {
    max-inline-size: 21.4375rem;
}
```

#### Paddings and radii

**Template:**
```html
<div tuiPlatform="web">
<h4>Desktop</h4>
<div appearance="floating" tuiCardLarge="normal" >
<header tuiHeader>
<h2 tuiTitle> Normal <span tuiSubtitle>Radius: 24, padding: 24</span>
</h2>
</header>
<footer>
<button appearance="secondary" size="m" tuiButton type="button" > Label </button>
</footer>
</div>
<div appearance="floating" tuiCardLarge="compact" class="tui-space_top-4" >
<header tuiHeader>
<h2 tuiTitle> Compact <span tuiSubtitle>Radius: 16, padding: 20</span>
</h2>
</header>
<footer>
<button appearance="secondary" size="m" tuiButton type="button" > Label </button>
</footer>
</div>
</div>
<div tuiPlatform="ios">
<h4>iOS/Android</h4>
<div appearance="floating" tuiCardLarge="normal" >
<header tuiHeader="h6">
<h2 tuiTitle> Normal <span tuiSubtitle>Radius: 24, padding: 20</span>
</h2>
</header>
<footer>
<button appearance="secondary" size="m" tuiButton type="button" > Label </button>
</footer>
</div>
<div appearance="floating" tuiCardLarge="compact" class="tui-space_top-4" >
<header tuiHeader="h6">
<h2 tuiTitle> Compact <span tuiSubtitle>Radius: 16, padding: 16</span>
</h2>
</header>
<footer>
<button appearance="secondary" size="m" tuiButton type="button" > Label </button>
</footer>
</div>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [TuiButton, TuiCardLarge, TuiHeader, TuiPlatform, TuiTitle],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### Map

**Template:**
```html
<div appearance="floating" tuiCardLarge >
<header tuiHeader>
<h1 tuiTitle> Title <span tuiSubtitle>Subtitle</span>
</h1>
</header>
<section>
<iframe height="450" loading="lazy" src="https://yandex.ru/map-widget/v1/?um=constructor%3A0ff7188173ceeea1b3c1d5b2ebeaca63ceb70dc60ebc79513c51bb855356a6ac&amp;source=constructor" title="map" width="100%" class="map" ></iframe>
</section>
<footer>
<button appearance="secondary" size="m" tuiButton type="button" > Label </button>
</footer>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [TuiButton, TuiCardLarge, TuiHeader, TuiTitle],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### In portal

**Template:**
```html
<button tuiButton type="button" (click)="step.set(step() || 1)" > Show popover </button>
<div *tuiPopup="!!step()" appearance="floating" tuiAnimated tuiCardLarge="compact" class="popover" > @if (step() === 1) { <h1 tuiTitle> Leave your feedback <span tuiSubtitle>It will only take 3 minutes</span>
</h1>
<tui-rating [(ngModel)]="rating" /> } @if (step() === 2) { <h1 tuiTitle>Why so?</h1>
<tui-textfield tuiTextfieldSize="m">
<textarea placeholder="Leave a few words" tuiAutoFocus tuiTextarea [max]="3" [min]="3" [(ngModel)]="comment" ></textarea>
</tui-textfield> } <button appearance="icon" iconStart="@tui.x" size="xs" tuiIconButton type="button" class="close" (click)="close()" > Close </button>
<footer class="footer"> @if (step() === 2) { <button appearance="secondary" size="s" tuiButton type="button" (click)="step.set(1)" > Back </button> } <button appearance="primary" size="s" tuiButton type="button" (click)="step() === 1 ? step.set(2) : close()" > {{ step() === 1 ? 'Next' : 'Submit' }} </button>
</footer>
</div>
```

**TypeScript:**
```ts
import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAnimated, TuiAutoFocus} from '@taiga-ui/cdk';
import {TuiButton, TuiPopup, TuiTitle} from '@taiga-ui/core';
import {TuiRating, TuiTextarea} from '@taiga-ui/kit';
import {TuiCardLarge} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
        TuiAnimated,
        TuiAutoFocus,
        TuiButton,
        TuiCardLarge,
        TuiPopup,
        TuiRating,
        TuiTextarea,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly step = signal(0);
    protected rating = 0;
    protected comment = '';

    protected close(): void {
        this.rating = 0;
        this.comment = '';
        this.step.set(0);
    }
}
```

**LESS:**
```less
.popover {
    position: fixed;
    inset-inline-end: 1.5rem;
    inset-block-end: 1.5rem;
    inline-size: 20rem;

    --tui-from: translateX(100%);

    &.tui-enter,
    &.tui-leave {
        animation-name: tuiFade, tuiSlide;
    }
}

.close {
    position: absolute;
    inset-block-start: 0.5rem;
    inset-inline-end: 0.75rem;
}

.footer {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
}
```
