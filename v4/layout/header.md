# Header

- **Package**: `LAYOUT`
- **Type**: components

### How to Use (Import)

```ts
import {Component} from '@angular/core';
import {TuiHeader} from '@taiga-ui/layout';
import {TuiTitle} from '@taiga-ui/core';
// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiHeader,
    TuiTitle,
  ],
})
export class Example {}
```

### How to Use (Template)

```html
<header tuiHeader>
  <hgroup tuiTitle>
    <h1>Title</h1>
    <p tuiSubtitle>Subtitle</p>
  </hgroup>
  <aside tuiAccessories>Accessories</aside>
</header>
```

### Usage Examples

#### Sizes

**Template:**
```html
<header tuiHeader="h1">
<hgroup tuiTitle>
<h1>Title</h1>
<p tuiSubtitle>Subtitle</p>
</hgroup>
<aside tuiAccessories>
<tui-badge-notification>1</tui-badge-notification>
<button size="l" tuiButton type="button" > Button </button>
</aside>
</header>
<header tuiHeader="h2">
<hgroup tuiTitle>
<h2>Title</h2>
<p tuiSubtitle>Subtitle</p>
</hgroup>
<aside tuiAccessories>
<tui-badge-notification>1</tui-badge-notification>
<button size="m" tuiButton type="button" > Button </button>
</aside>
</header>
<header tuiHeader="h3">
<hgroup tuiTitle>
<h3>Title</h3>
<p tuiSubtitle>Subtitle</p>
</hgroup>
<aside tuiAccessories>
<tui-badge-notification>1</tui-badge-notification>
<button size="m" tuiButton type="button" > Button </button>
</aside>
</header>
<header tuiHeader="h4">
<hgroup tuiTitle>
<h4>Title</h4>
<p tuiSubtitle>Subtitle</p>
</hgroup>
<aside tuiAccessories>
<tui-badge-notification>1</tui-badge-notification>
<button tuiButton type="button" > Button </button>
</aside>
</header>
<header tuiHeader="h5">
<hgroup tuiTitle>
<h5>Title</h5>
<p tuiSubtitle>Subtitle</p>
</hgroup>
<aside tuiAccessories>
<tui-badge-notification>1</tui-badge-notification>
<button tuiButton type="button" > Button </button>
</aside>
</header>
<header tuiHeader="h6">
<hgroup tuiTitle>
<h6>Title</h6>
<p tuiSubtitle>Subtitle</p>
</hgroup>
<aside tuiAccessories>
<tui-badge-notification size="s">1</tui-badge-notification>
<button size="xs" tuiButton type="button" > Button </button>
</aside>
</header>
<header tuiHeader="body-xl">
<hgroup tuiTitle>
<h6>Title</h6>
<p tuiSubtitle>Subtitle</p>
</hgroup>
<aside tuiAccessories>
<tui-badge-notification size="s">1</tui-badge-notification>
<button size="xs" tuiButton type="button" > Button </button>
</aside>
</header>
<header tuiHeader="body-l">
<hgroup tuiTitle>
<h6>Title</h6>
<p tuiSubtitle>Subtitle</p>
</hgroup>
<aside tuiAccessories>
<tui-badge-notification size="s">1</tui-badge-notification>
<button size="xs" tuiButton type="button" > Button </button>
</aside>
</header>
<header tuiHeader="body-m">
<hgroup tuiTitle>
<h6>Title</h6>
<p tuiSubtitle>Subtitle</p>
</hgroup>
<aside tuiAccessories>
<tui-badge-notification size="s">1</tui-badge-notification>
<button size="xs" tuiButton type="button" > Button </button>
</aside>
</header>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiBadgeNotification} from '@taiga-ui/kit';
import {TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [TuiBadgeNotification, TuiButton, TuiHeader, TuiTitle],
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
    gap: 2rem;
}
```

#### Accessories

**Template:**
```html
<section>
<header tuiHeader>
<hgroup tuiTitle>
<p tuiCaption>Opensource</p>
<h5>Taiga UI</h5>
<p tuiSubtitle>Component library</p>
</hgroup>
<aside tuiAccessories>
<tui-badge-notification>1</tui-badge-notification>
<tui-icon tuiTooltip="Angular kit" />
<tui-avatar appearance="accent" src="@tui.star" />
</aside>
</header>
<p tuiDescription> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aliquam asperiores atque autem consequatur cumque cupiditate delectus doloremque doloribus ea earum eius eos error esse est eum eveniet </p>
</section>
<section>
<header tuiHeader>
<hgroup tuiTitle>
<h5>Maskito</h5>
<p tuiSubtitle> Awesome <span [tuiSensitive]="true">one</span>
</p>
</hgroup>
<aside tuiAccessories>
<tui-badge-notification>1</tui-badge-notification>
<tui-icon tuiTooltip="Mask it" />
<a href="https://maskito.dev/" rel="noreferrer" target="_blank" tuiButton > Support </a>
</aside>
</header>
<p tuiDescription> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aliquam asperiores atque autem consequatur cumque cupiditate delectus doloremque doloribus ea earum eius eos error esse est eum eveniet </p>
</section>
<header tuiHeader>
<hgroup tuiTitle>
<h5>Polymorpheus</h5>
<p tuiSubtitle>The power of dreams</p>
</hgroup>
<aside tuiAccessories>
<tui-badge>Free tier</tui-badge>
<a href="https://github.com/taiga-family/ng-polymorpheus" tuiLink > Link </a>
</aside>
</header>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiIcon, TuiLink, TuiTitle} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiBadge,
    TuiBadgeNotification,
    TuiSensitive,
    TuiTooltip,
} from '@taiga-ui/kit';
import {TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiAvatar,
        TuiBadge,
        TuiBadgeNotification,
        TuiButton,
        TuiHeader,
        TuiIcon,
        TuiLink,
        TuiSensitive,
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
    display: flex;
    flex-direction: column;
    gap: 3rem;
}
```

#### Interactive

**Template:**
```html
<header tuiHeader="h4">
<hgroup tuiTitle>
<h5 class="interactive-title"> Title <tui-icon icon="@tui.chevron-right" />
</h5>
<p tuiSubtitle>Subtitle</p>
</hgroup>
</header>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [TuiHeader, TuiIcon, TuiTitle],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

.interactive-title {
    .transition(color);

    cursor: pointer;

    & > tui-icon {
        .transition(transform);
    }

    &:hover {
        color: var(--tui-text-action);

        & > tui-icon {
            transform: translate(0.25rem);
        }
    }
}
```
