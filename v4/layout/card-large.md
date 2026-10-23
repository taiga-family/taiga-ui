# CardLarge

- **Package**: `LAYOUT`
- **Type**: components

### How to Use (Import)

```ts
import {Component} from '@angular/core';
import {TuiAppearance} from '@taiga-ui/core';
import {TuiCardLarge} from '@taiga-ui/layout';
// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiAppearance,
    TuiCardLarge,
  ],
})
export class Example {}
```

### How to Use (Template)

```html
<div
  tuiCardLarge
  tuiAppearance="floating"
>
  <div tuiHeader>
    <h2 tuiTitle>Header</h2>
  </div>
</div>
```

### Usage Examples

#### Basic

**Template:**
```html
<div tuiPlatform="web">
<h4>Desktop</h4>
<div tuiCardLarge tuiSurface="floating" >
<header tuiHeader>
<h2 tuiTitle>Header</h2>
</header>
<section>Replace me</section>
<footer>
<button appearance="secondary" size="m" tuiButton type="button" > Label </button>
</footer>
</div>
<div tuiCardLarge tuiSurface="floating" class="tui-space_top-4" >
<header tuiHeader>
<h2 tuiTitle>Header</h2>
<aside tuiAccessories>
<tui-badge appearance="neutral" iconStart="@tui.heart" size="xl" > Like </tui-badge>
</aside>
</header>
<section>Replace me</section>
</div>
</div>
<div tuiPlatform="ios">
<h4>iOS/Android</h4>
<div tuiCardLarge tuiSurface="floating" >
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
<div tuiCardLarge tuiSurface="floating" class="tui-space_top-4" >
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
import {TuiButton, TuiLink, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiBadge} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiBadge,
        TuiButton,
        TuiCardLarge,
        TuiHeader,
        TuiLink,
        TuiPlatform,
        TuiSurface,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
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

.label {
    font: var(--tui-font-text-l);
}
```

#### Avatar

**Template:**
```html
<div tuiPlatform="web">
<h4>Desktop</h4>
<div tuiCardLarge tuiSurface="floating" >
<header tuiHeader>
<h1 tuiTitle> Title <span tuiSubtitle>Subtitle</span>
</h1>
<aside tuiAccessories>
<tui-avatar appearance="primary" src="@tui.star" />
</aside>
</header>
<footer>
<button appearance="secondary" size="m" tuiButton type="button" > Label </button>
</footer>
</div>
</div>
<div tuiPlatform="ios">
<h4>iOS/Android</h4>
<div tuiCardLarge tuiSurface="floating" >
<div tuiHeader>
<h2 tuiTitle> Title <span tuiSubtitle>Subtitle</span>
</h2>
<aside tuiAccessories>
<tui-avatar appearance="primary" src="@tui.star" />
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
import {TuiButton, TuiTitle, TuiSurface} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiAvatar,
        TuiButton,
        TuiCardLarge,
        TuiHeader,
        TuiPlatform,
        TuiSurface,
        TuiTitle,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### Single item

**Template:**
```html
<button tuiCardLarge tuiHeader tuiSurface="floating" type="button" >
<h1 tuiTitle> Title <span tuiSubtitle>Subtitle</span>
</h1>
<aside tuiAccessories>
<tui-avatar appearance="primary" src="@tui.star" />
</aside>
</button>
<button tuiCardLarge tuiCell tuiSurface="floating" type="button" >
<tui-avatar appearance="primary" src="@tui.star" />
<div tuiTitle> Title <div tuiSubtitle>Description</div>
</div>
</button>
<section class="actions">
<button tuiCardLarge tuiHeader tuiSurface="floating" type="button" >
<h2 tuiTitle>Title</h2>
<aside tuiAccessories>
<tui-icon icon="@tui.star" tuiAppearance="flat" />
</aside>
</button>
<button tuiCardLarge tuiHeader tuiSurface="floating" type="button" >
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
import {TuiAppearance, TuiIcon, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCell, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiAppearance,
        TuiAvatar,
        TuiCardLarge,
        TuiCell,
        TuiHeader,
        TuiIcon,
        TuiSurface,
        TuiTitle,
    ],
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
<div tuiCardLarge tuiSurface="floating" >
<header tuiHeader>
<h1 tuiTitle> Title <span tuiSubtitle>Subtitle</span>
</h1>
</header>
<section>
<div *tuiRepeatTimes="let index of 3" tuiAppearance="neutral" tuiCardMedium >
<tui-icon icon="@tui.square-plus" class="plus" />
<h2 tuiTitle> Title <span tuiSubtitle>Subtitle</span>
</h2>
</div>
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
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiAppearance, TuiButton, TuiIcon, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiCardLarge, TuiCardMedium, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiAppearance,
        TuiButton,
        TuiCardLarge,
        TuiCardMedium,
        TuiHeader,
        TuiIcon,
        TuiRepeatTimes,
        TuiSurface,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
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
<div tuiCardLarge tuiSurface="floating" >
<header tuiHeader>
<h1 tuiTitle> Title <span tuiSubtitle>Subtitle</span>
</h1>
</header>
<div *tuiRepeatTimes="let index of 3" tuiCell="l" >
<tui-avatar appearance="primary" src="@tui.star" />
<div tuiTitle> Title <div tuiSubtitle>Description</div>
</div>
</div>
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
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiButton, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCell, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiAvatar,
        TuiButton,
        TuiCardLarge,
        TuiCell,
        TuiHeader,
        TuiRepeatTimes,
        TuiSurface,
        TuiTitle,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### Cell List (2 columns)

**Template:**
```html
<div tuiCardLarge tuiSurface="floating" >
<header tuiHeader>
<h1 tuiTitle> Title <span tuiSubtitle>Subtitle</span>
</h1>
</header>
<section class="actions">
<div *tuiRepeatTimes="let index of 6" tuiCell="l" >
<tui-avatar appearance="primary" src="@tui.star" />
<div tuiTitle> Title <div tuiSubtitle>Description</div>
</div>
</div>
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
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiButton, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCell, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiAvatar,
        TuiButton,
        TuiCardLarge,
        TuiCell,
        TuiHeader,
        TuiRepeatTimes,
        TuiSurface,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
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
<div tuiCardLarge tuiSurface="floating" >
<header tuiHeader>
<h1 tuiTitle> Title <span tuiSubtitle>Subtitle</span>
</h1>
</header>
<button *tuiRepeatTimes="let index of 3" tuiCell="l" tuiDropdownAlign="right" tuiDropdownOpen type="button" [tuiDropdown]="dropdown" [tuiDropdownSided]="true" >
<tui-avatar appearance="primary" src="@tui.star" />
<div tuiTitle> Title <div tuiSubtitle>Description</div>
</div>
<tui-icon icon="@tui.chevron-right" tuiAppearance="icon" />
</button>
<button tuiLink type="button" > Show all </button>
</div>
<ng-template #dropdown let-close >
<tui-data-list>
<tui-opt-group>
<button *ngFor="let item of ['Edit', 'Download', 'Rename', 'Delete']" tuiOption type="button" > {{ item }} </button>
</tui-opt-group>
<tui-opt-group>
<button tuiOption type="button" (click)="close()" > Nevermind </button>
</tui-opt-group>
</tui-data-list>
</ng-template>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {
    TuiAppearance,
    TuiDataList,
    TuiDropdown,
    TuiIcon,
    TuiLink,
    TuiSurface,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCell, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        NgForOf,
        TuiAppearance,
        TuiAvatar,
        TuiCardLarge,
        TuiCell,
        TuiDataList,
        TuiDropdown,
        TuiHeader,
        TuiIcon,
        TuiLink,
        TuiRepeatTimes,
        TuiSurface,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
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
<div tuiCardLarge tuiSurface="floating" >
<div *tuiRepeatTimes="let index of 3" tuiCell="l" >
<tui-avatar appearance="primary" src="@tui.star" />
<div tuiTitle> Title <div tuiSubtitle>Description</div>
</div>
</div>
</div>
<div tuiCardLarge tuiSurface="floating" >
<div tuiCell="l">
<tui-avatar appearance="primary" src="@tui.star" />
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
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiButton, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCell} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiAvatar,
        TuiButton,
        TuiCardLarge,
        TuiCell,
        TuiRepeatTimes,
        TuiSurface,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styles: [':host { display: flex; flex-direction: column; gap: 2rem}'],
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### Footer alignment

**Template:**
```html
<div tuiCardLarge tuiSurface="floating" >
<header tuiHeader>
<h2 tuiTitle>Title</h2>
</header>
<div tuiCell>
<tui-avatar appearance="primary" src="@tui.star" />
<div tuiTitle> Title <div tuiSubtitle>Description</div>
</div>
</div>
<footer>
<button appearance="secondary" size="m" tuiButton type="button" > Label </button>
</footer>
</div>
<div tuiCardLarge tuiSurface="floating" >
<header tuiHeader>
<h2 tuiTitle>Title</h2>
</header> Some text <footer>
<button appearance="secondary" size="m" tuiButton type="button" > Label </button>
</footer>
</div>
<div tuiCardLarge tuiSurface="floating" >
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
import {TuiButton, TuiIcon, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiProgress, TuiTooltip} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCell, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiAvatar,
        TuiButton,
        TuiCardLarge,
        TuiCell,
        TuiHeader,
        TuiIcon,
        TuiProgress,
        TuiSurface,
        TuiTitle,
        TuiTooltip,
    ],
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
    grid-template-columns: 1fr 1fr;
    grid-template-rows: min-content 1fr;
    gap: 1rem;
    inline-size: 30rem;

    > :last-child {
        grid-column: span 2;
    }
}

[tuiSubtitle] {
    font: var(--tui-font-text-m);
}
```

#### Image

**Template:**
```html
<div tuiCardLarge tuiHeader class="image-1" >
<h1 tuiTitle> Title <span tuiSubtitle>Subtitle</span>
</h1>
<aside tuiAccessories>
<button appearance="glass" tuiButtonClose tuiIconButton type="button" > Close </button>
</aside>
</div>
<div tuiCardLarge tuiHeader tuiTheme="dark" class="image-2" >
<h1 tuiTitle> Title <span tuiSubtitle>Subtitle</span>
</h1>
<aside tuiAccessories>
<button appearance="glass" tuiButtonClose tuiIconButton type="button" > Close </button>
</aside>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiButtonClose} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [TuiButton, TuiButtonClose, TuiCardLarge, TuiHeader, TuiTitle],
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
        top: 0;
        left: 0;
        inline-size: 100%;
        block-size: 100%;
        background: rgba(0, 0, 0, 0.5);
    }
}
```

#### Cell with close

**Template:**
```html
<div tuiPlatform="ios">
<h4>iOS/Android</h4>
<div tuiCardLarge="compact" tuiCell tuiSurface="floating" >
<tui-avatar appearance="primary" src="@tui.star" />
<div tuiTitle>
<div tuiFade tuiFadeHeight="1.2rem" tuiFadeOffset="1.5em" tuiFadeSize="1.5em" [style.block-size.rem]="2.5" > Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. </div>
<div tuiFade tuiFadeHeight="1rem" tuiFadeOffset="1.5em" tuiFadeSize="1.5em" tuiSubtitle [style.align-items]="'flex-start'" [style.block-size.rem]="2" > Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </div>
</div>
<aside tuiAccessories>
<button tuiButtonClose tuiIconButton type="button" > Close </button>
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
import {TuiButton, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiButtonClose, TuiFade} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCell} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiAvatar,
        TuiButton,
        TuiButtonClose,
        TuiCardLarge,
        TuiCell,
        TuiFade,
        TuiPlatform,
        TuiSurface,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
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
<div tuiCardLarge="normal" tuiSurface="floating" >
<header tuiHeader>
<h2 tuiTitle> Normal <span tuiSubtitle>Radius: 24, padding: 24</span>
</h2>
</header>
<footer>
<button appearance="secondary" size="m" tuiButton type="button" > Label </button>
</footer>
</div>
<div tuiAppearance="floating" tuiCardLarge="compact" class="tui-space_top-4" >
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
<div tuiCardLarge="normal" tuiSurface="floating" >
<header tuiHeader="xs">
<h2 tuiTitle> Normal <span tuiSubtitle>Radius: 24, padding: 20</span>
</h2>
</header>
<footer>
<button appearance="secondary" size="m" tuiButton type="button" > Label </button>
</footer>
</div>
<div tuiCardLarge="compact" tuiSurface="floating" class="tui-space_top-4" >
<header tuiHeader="xs">
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
import {TuiAppearance, TuiButton, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiAppearance,
        TuiButton,
        TuiCardLarge,
        TuiHeader,
        TuiPlatform,
        TuiSurface,
        TuiTitle,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### Map

**Template:**
```html
<div tuiCardLarge tuiSurface="floating" >
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
import {TuiButton, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [TuiButton, TuiCardLarge, TuiHeader, TuiSurface, TuiTitle],
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
<div *tuiPopup="!!step()" tuiAnimated tuiCardLarge="compact" tuiSurface="floating" class="popover" >
<ng-container *ngIf="step() === 1">
<h1 tuiTitle> Leave your feedback <span tuiSubtitle>It will only take 3 minutes</span>
</h1>
<tui-rating [(ngModel)]="rating" />
</ng-container>
<ng-container *ngIf="step() === 2">
<h1 tuiTitle>Why so?</h1>
<tui-textfield tuiTextfieldSize="m">
<textarea placeholder="Leave a few words" tuiAutoFocus tuiTextarea [max]="3" [min]="3" [(ngModel)]="comment" ></textarea>
</tui-textfield>
</ng-container>
<button appearance="icon" iconStart="@tui.x" size="xs" tuiIconButton type="button" class="close" (click)="close()" > Close </button>
<footer class="footer">
<button *ngIf="step() === 2" appearance="secondary" size="s" tuiButton type="button" (click)="step.set(1)" > Back </button>
<button appearance="primary" size="s" tuiButton type="button" (click)="step() === 1 ? step.set(2) : close()" > {{ step() === 1 ? 'Next' : 'Submit' }} </button>
</footer>
</div>
```

**TypeScript:**
```ts
import {NgIf} from '@angular/common';
import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAnimated, TuiAutoFocus} from '@taiga-ui/cdk';
import {TuiButton, TuiPopup, TuiSurface, TuiTextfield, TuiTitle} from '@taiga-ui/core';
import {TuiRating, TuiTextarea} from '@taiga-ui/kit';
import {TuiCardLarge} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        NgIf,
        TuiAnimated,
        TuiAutoFocus,
        TuiButton,
        TuiCardLarge,
        TuiPopup,
        TuiRating,
        TuiSurface,
        TuiTextarea,
        TuiTextfield,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
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
    right: 1.5rem;
    bottom: 1.5rem;
    inline-size: 20rem;

    --tui-from: translateX(100%);

    &.tui-enter,
    &.tui-leave {
        animation-name: tuiFade, tuiSlide;
    }
}

.close {
    position: absolute;
    top: 0.5rem;
    right: 0.75rem;
}

.footer {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
}
```
