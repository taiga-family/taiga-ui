# Message

- **Package**: `KIT`
- **Type**: components

Message component is used to display message block.

### Example

```html
<span tuiMessage [appearance]="appearance.appearance" > Message </span>
```

### Usage Examples

#### Basic

**Template:**
```html
<span tuiMessage>Incoming message</span>
<span appearance="accent" tuiMessage > Outgoing message </span>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiMessage} from '@taiga-ui/kit';

@Component({
    imports: [TuiMessage],
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
    gap: 1rem;
}
```

#### Custom color

**Template:**
```html
<span class="container incoming">
<span tuiMessage>
<span>I'm default 🤘</span>
</span>
</span>
<span class="container outgoing">
<span appearance="custom" tuiMessage >
<span>And I'm colored 🤘🏿</span>
</span>
</span>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiMessage} from '@taiga-ui/kit';

@Component({
    imports: [TuiMessage],
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

:host {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
}

[tuiAppearance][data-appearance='custom'] {
    background: rgba(175, 242, 24, 1);
}

.container {
    display: flex;
    inline-size: 100%;
}

.incoming {
    justify-content: flex-start;
}

.outgoing {
    justify-content: flex-end;
}
```

#### With link

**Template:**
```html
<span tuiMessage> All relevant guides in this&nbsp; <a href="#" tuiLink > project </a> &nbsp;with a lot of examples </span>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLink} from '@taiga-ui/core';
import {TuiMessage} from '@taiga-ui/kit';

@Component({
    imports: [TuiLink, TuiMessage],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### Chat messages

**Template:**
```html
<h3>Fade</h3>
<span class="container incoming">
<span tuiMessage class="fade" >
<span tuiFade>Left Comment with very long content</span>
</span>
</span>
<span class="container outgoing">
<span appearance="accent" tuiMessage class="fade" >
<span tuiFade>Right Comment with very long content</span>
</span>
</span>
<h3>Multiline</h3>
<span class="container incoming">
<span tuiMessage>
<span class="multiline">Very long content that goes on the second line</span>
</span>
</span>
<span class="container outgoing">
<span appearance="accent" tuiMessage >
<span class="multiline">Very long content that goes on the second line</span>
</span>
</span>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFade, TuiMessage} from '@taiga-ui/kit';

@Component({
    imports: [TuiFade, TuiMessage],
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

:host {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
}

.fade {
    max-inline-size: 11rem;
}

.multiline {
    white-space: initial;
}

.container {
    display: flex;
    inline-size: 100%;
}

.incoming {
    justify-content: flex-start;

    > [tuiMessage] {
        margin-inline-start: 1rem;
        margin-inline-end: 2rem;
    }
}

.outgoing {
    justify-content: flex-end;

    > [tuiMessage] {
        margin-inline-start: 2rem;
        margin-inline-end: 1rem;
    }
}
```

#### Inside cells

**Template:**
```html
<div tuiCell>
<div tuiAccessories tuiAvatar="@tui.user" >
<img alt="" src="assets/images/avatar.jpg" />
</div>
<div tuiTitle> Alexander I. <div tuiSubtitle>USD</div>
<span tuiMessage>Don't deny yourself anything</span>
</div>
<div tuiAccessories tuiTitle [style.overflow]="'visible'" [style.white-space]="'nowrap'" [style.width]="0" > + $123 456 <div tuiSubtitle>June 2</div>
</div>
</div>
<div tuiCell>
<div tuiAccessories tuiAvatar="@tui.user" >
<img alt="" src="https://avatars.githubusercontent.com/u/87331898" />
</div>
<div tuiAccessories tuiTitle > German P. <div tuiSubtitle>USD</div>
</div>
<div tuiTitle> – $10 000 <div tuiSubtitle>September 6</div>
<span appearance="accent" tuiMessage > For game </span>
</div>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCell, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiMessage} from '@taiga-ui/kit';

@Component({
    imports: [TuiAvatar, TuiCell, TuiMessage, TuiTitle],
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
    max-inline-size: 25rem;
}
```
