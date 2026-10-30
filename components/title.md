# Title

- **Package**: `CORE`
- **Type**: components

A directive for title with optional subtitle

### Usage Examples

#### Basic

**Template:**
```html
<h2 tuiTitle>I am a title</h2>
<h2 tuiTitle> I am a title <div tuiSubtitle>I'm a subtitle</div>
</h2>
<h2 tuiTitle>
<div tuiSubtitle>Caption</div> I am a title </h2>
<h2 tuiTitle>
<div tuiSubtitle>Caption</div> I am a title <div tuiSubtitle>I'm a subtitle</div>
</h2>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTitle} from '@taiga-ui/core';

@Component({
    imports: [TuiTitle],
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
    gap: 2rem;
}
```

#### Sizes

**Template:**
```html
<h2 tuiTitle="s">
<div tuiSubtitle>Caption</div> I am a title <div tuiSubtitle>I'm a subtitle</div>
</h2>
<h2 tuiTitle="m">
<div tuiSubtitle>Caption</div> I am a title </h2>
<h2 tuiTitle="l"> I am a title <div tuiSubtitle>I'm a subtitle</div>
</h2>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTitle} from '@taiga-ui/core';

@Component({
    imports: [TuiTitle],
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
    gap: 2rem;
}
```

#### Custom

**Template:**
```html
<h2 tuiTitle>
<b>I am a title</b>
<div tuiSubtitle [style.color]="'var(--tui-text-secondary)'" > I'm a subtitle </div>
</h2>
<a href="https://github.com/taiga-family/taiga-ui" tuiLink tuiTitle [style.font-size.rem]="1" [style.line-height.rem]="1.25" > Taiga UI — GitHub <div tuiSubtitle [style.font]="'var(--tui-typography-body-s)'" > Drop us a star! </div>
</a>
<label class="flex">
<div size="s" tuiAvatar="@tui.user" >
<img alt="" src="assets/images/avatar.jpg" />
</div>
<div tuiTitle="s">
<strong>Alex Inkin</strong>
<div tuiSubtitle>Available</div>
</div>
</label>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLink, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';

@Component({
    imports: [TuiAvatar, TuiLink, TuiTitle],
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
    gap: 2rem;
}

.flex {
    display: flex;
    gap: 0.5rem;

    [tuiSubtitle] {
        color: var(--tui-text-positive);
    }
}
```
