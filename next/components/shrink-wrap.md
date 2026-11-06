# ShrinkWrap

- **Package**: `KIT`
- **Type**: components

A tight shrink wrapping implementation in modern browsers using progressive enhancement concept, see examples below for visual explanation. Requires scroll-driven animations to work, gracefully ignored in older browsers.

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [tuiShrinkWrap] | `string` | max size of the container, 100% by default |

### Usage Examples

#### Chat

Making sure chat messages only span as wide as they have to.

**Template:**
```html
<section tuiMessage class="incoming" > I'm a short message </section>
<section tuiMessage class="incoming" > I'm a broken long message wrapping to a new line </section>
<section tuiMessage tuiShrinkWrap class="incoming" >
<tui-shrink-wrap>I'm a fixed long message wrapping to a new line</tui-shrink-wrap>
</section>
<section tuiMessage class="outgoing" > I'm a short message </section>
<section tuiMessage class="outgoing" > I'm a broken long message wrapping to a new line </section>
<section tuiMessage tuiShrinkWrap class="outgoing" >
<tui-shrink-wrap>I'm a fixed long message wrapping to a new line</tui-shrink-wrap>
</section>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiMessage, TuiShrinkWrap} from '@taiga-ui/kit';

@Component({
    imports: [TuiMessage, TuiShrinkWrap],
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
    inline-size: 16rem;
}

.incoming {
    background: var(--tui-background-neutral-1);
    border-end-start-radius: 0;
    white-space: normal;

    & + .incoming {
        margin-block-start: -0.5rem;
    }
}

.outgoing {
    background: var(--tui-background-accent-1);
    color: var(--tui-text-primary-on-accent-1);
    align-self: flex-end;
    white-space: normal;
    border-end-end-radius: 0;

    & + .outgoing {
        margin-block-start: -0.5rem;
    }
}
```

#### Toasts

Toasts already have `tuiShrinkWrap` directive on host.

**Template:**
```html
<h4 tuiHeader="body-l">With ShrinkWrap</h4>
<div tuiToast>
<tui-shrink-wrap>Long messages are wrapping perfectly to fit into max width of the toast</tui-shrink-wrap>
</div>
<h4 tuiHeader="body-l">Without ShrinkWrap</h4>
<div tuiToast>Long messages are wrapping perfectly to fit into max width of the toast</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiShrinkWrap, TuiToast} from '@taiga-ui/kit';
import {TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [TuiHeader, TuiShrinkWrap, TuiToast],
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
```

#### Custom width

Any valid CSS size string can be used, including `calc` , different units, vars and math functions.

**Template:**
```html
<div tuiCell tuiShrinkWrap="15rem" >
<div tuiAvatar="@tui.user"></div>
<div tuiTitle>
<strong>Title</strong>
<tui-shrink-wrap>Long messages are wrapping perfectly to fit into max width of the cell</tui-shrink-wrap>
</div>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCell, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiShrinkWrap} from '@taiga-ui/kit';

@Component({
    imports: [TuiAvatar, TuiCell, TuiShrinkWrap, TuiTitle],
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

[tuiCell] {
    background: var(--tui-background-neutral-1);
}
```
