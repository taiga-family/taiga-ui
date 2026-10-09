# Header

- **Package**: `LAYOUT`
- **Type**: components

Buttons/badges sizes according to the header size.

Various content in the right side of the header.

Header can contain interactive button or link.

Accessories are not meant to take up much space. You should try to keep it this way, but if you
cannot – you can enable wrapping using
`flex-wrap: wrap`
. Watch for
`TUI_FONT_OFFSET`
signal token if you only want to enable it due to OS font scaling. This would only wrap if title
has to shrink below 60% to accommodate long accessories section.

### Usage Examples

#### Sizes

Buttons/badges sizes according to the header size.

**Template:**
```html
@for (size of sizes; track $index) { <header [tuiHeader]="size">
<!-- Giving [tuiHeader] binding time to apply and provide proper default size for children --> @if (true) { <hgroup tuiTitle>
<h2>Title</h2>
<p tuiSubtitle>Subtitle</p>
</hgroup>
<aside tuiAccessories>
<tui-badge-notification>1</tui-badge-notification>
<button tuiButton type="button" > Button </button>
</aside> } </header>
<div tuiDescription> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </div>
<br />
<br /> }
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
    imports: [TuiBadgeNotification, TuiButton, TuiHeader, TuiTitle],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly sizes = [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'body-l',
        'body-m',
        'body-s',
    ] as const;
}
```

#### Accessories

Various content in the right side of the header.

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
<div appearance="accent" tuiAvatar="@tui.star" ></div>
</aside>
</header>
<p tuiDescription> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aliquam asperiores atque autem consequatur cumque cupiditate delectus doloremque doloribus ea earum eius eos error esse est eum eveniet </p>
</section>
<section>
<header tuiHeader="h4">
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
<div tuiBadge>Free tier</div>
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
    gap: 3rem;
}
```

#### Interactive

Header can contain interactive button or link.

**Template:**
```html
<header tuiHeader="h4">
<hgroup tuiTitle>
<a appearance="" href="https://maskito.dev" iconEnd="@tui.chevron-right" tuiLink [textContent]="'Maskito'" ></a>
<p tuiSubtitle>Best masking library for the web</p>
</hgroup>
</header>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLink, TuiTitle} from '@taiga-ui/core';
import {TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [TuiHeader, TuiLink, TuiTitle],
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

[tuiLink] {
    text-decoration: none;

    --tui-icon-size: 1.5rem;

    &::after {
        .transition(margin-inline-start);
    }

    &:hover {
        color: var(--tui-text-action);

        &::after {
            margin-inline-start: 0.5rem;
        }
    }
}
```

#### Wrapping

Accessories are not meant to take up much space. You should try to keep it this way, but if you cannot – you can enable wrapping using `flex-wrap: wrap` . Watch for `TUI_FONT_OFFSET` signal token if you only want to enable it due to OS font scaling. This would only wrap if title has to shrink below 60% to accommodate long accessories section.

**Template:**
```html
@for (item of variants | keyvalue; track $index) { <header tuiHeader="h4">
<h2 tuiTitle>{{ item.key }}</h2>
<aside tuiAccessories>
<button tuiButton type="button" > {{ item.value }} </button>
</aside>
</header>
<p tuiDescription>Some description text</p> }
```

**TypeScript:**
```ts
import {KeyValuePipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [KeyValuePipe, TuiButton, TuiHeader, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly variants = {
        'A rather long title': 'Long action text',
        'Long title text': 'OK',
        Title: 'Even Longer action text',
    };
}
```

**LESS:**
```less
[tuiHeader] {
    flex-wrap: wrap;
}
```
