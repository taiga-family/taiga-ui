# Badge

- **Package**: `KIT`
- **Type**: components

Component for displaying text, pictures and icons.

### Example

```html
<p> @if (contentType === 'with icon') { <span iconStart="@tui.check" tuiBadge [appearance]="appearance" [size]="size" >
<div tuiFade>Taiga UI</div>
</span> } @if (contentType === 'text') { <span tuiBadge [appearance]="appearance" [size]="size" > Taiga UI </span> } @if (contentType === 'image') { <img alt="User" src="assets/images/avatar.jpg" tuiBadge [appearance]="appearance" [size]="size" /> } </p>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [size] | `TuiSizeL` | — |
| [appearance] | `string` | — |

### Usage Examples

#### Basic

**Template:**
```html
<div tuiBadge>Default</div>
<div appearance="primary" tuiBadge > Primary </div>
<div appearance="accent" tuiBadge > Accent </div>
<div appearance="positive" tuiBadge tuiStatus > Success </div>
<div appearance="negative" tuiBadge tuiStatus > Error </div>
<div appearance="warning" tuiBadge tuiStatus > Warning </div>
<div appearance="warning" tuiBadge > Warning </div>
<div appearance="neutral" tuiBadge > Neutral </div>
<div appearance="info" tuiBadge > Info </div>
<p>Custom status</p>
<div tuiBadge tuiStatus="var(--tui-chart-categorical-09)" [style.background]="'var(--tui-chart-categorical-01)'" > Custom </div>
<p>Use CSS for support colors</p> @for (_ of '-'.repeat(20); track $index) { <div tuiBadge [style.background]="`var(--tui-chart-categorical-${$index.toString().padStart(2, '0')})`" > Taiga </div> } <p>Sizes</p>
<div appearance="positive" size="xl" tuiBadge tuiStatus > Success </div>
<div appearance="positive" size="l" tuiBadge tuiStatus > Success </div>
<div appearance="positive" size="m" tuiBadge tuiStatus > Success </div>
<div appearance="positive" size="s" tuiBadge tuiStatus > Success </div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBadge, TuiStatus} from '@taiga-ui/kit';

@Component({
    imports: [TuiBadge, TuiStatus],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
[tuiBadge] {
    margin: 0.5rem;
}
```

#### Sizes

**Template:**
```html
<div appearance="primary" size="xl" tuiBadge > x-large </div>
<div appearance="primary" size="l" tuiBadge > large </div>
<div appearance="primary" size="m" tuiBadge > medium </div>
<div appearance="primary" size="s" tuiBadge > small </div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBadge} from '@taiga-ui/kit';

@Component({
    imports: [TuiBadge],
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
    gap: 0.25rem;
    align-items: center;
}
```

#### Content type

**Template:**
```html
<section tuiPlatform="ios">
<h4>Value with icon</h4>
<div appearance="primary" iconStart="@tui.box" size="xl" tuiBadge > x-large </div>
<div appearance="primary" iconStart="@tui.box" size="l" tuiBadge > large </div>
<div appearance="primary" iconStart="@tui.box" size="m" tuiBadge > medium </div>
<div appearance="primary" iconStart="@tui.box" size="s" tuiBadge > small </div>
</section>
<section tuiPlatform="ios">
<h4>Icon only</h4>
<tui-icon appearance="accent" iconStart="@tui.box" size="xl" tuiBadge />
<tui-icon appearance="accent" iconStart="@tui.box" size="l" tuiBadge />
<tui-icon appearance="accent" iconStart="@tui.box" size="m" tuiBadge />
<tui-icon appearance="accent" iconStart="@tui.box" size="s" tuiBadge />
</section>
<section tuiPlatform="ios">
<h4>Image</h4>
<img alt="User" size="xl" src="assets/images/avatar.jpg" tuiBadge />
<img alt="User" size="l" src="assets/images/avatar.jpg" tuiBadge />
<img alt="User" size="m" src="assets/images/avatar.jpg" tuiBadge />
<img alt="User" size="s" src="assets/images/avatar.jpg" tuiBadge />
</section>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiBadge} from '@taiga-ui/kit';

@Component({
    imports: [TuiBadge, TuiPlatform],
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
    display: block;
    min-inline-size: 18rem;
}

section {
    display: flex;
    gap: 0.25rem;
    flex-wrap: wrap;
    align-items: center;
    margin-block-end: 1rem;
}

h4 {
    flex-basis: 100%;
    margin: 0;
}
```

#### Long value

**Template:**
```html
<div appearance="primary" size="xl" tuiBadge >
<div tuiFade>Very long value in badge</div>
</div>
<div appearance="accent" iconStart="@tui.box" size="l" tuiBadge >
<div class="ellipsis">Very long value in badge</div>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBadge, TuiFade} from '@taiga-ui/kit';

@Component({
    imports: [TuiBadge, TuiFade],
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
    gap: 1rem;
}

[tuiBadge] {
    max-inline-size: 10rem;
}

.ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
}
```

#### Customization

**Template:**
```html
<div appearance="custom" iconStart="@tui.lock" size="xl" tuiBadge class="custom-1" > 10 000 000 $ </div>
<div appearance="custom" size="xl" tuiBadge class="custom-2" > Taiga </div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBadge} from '@taiga-ui/kit';

@Component({
    imports: [TuiBadge],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
@import '@taiga-ui/styles/utils.less';

:host {
    display: flex;
    gap: 0.75rem;
}

.custom-1 {
    .gradient(#0094cf, #24c0ff);

    box-shadow: var(--tui-shadow-small);
}

.custom-2 {
    .gradient(#c86dd7, #3023ae);
}
```

#### Options with DI

**Template:**
```html
<div tuiBadge>10 000 000 $</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBadge, tuiBadgeOptionsProvider} from '@taiga-ui/kit';

@Component({
    imports: [TuiBadge],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiBadgeOptionsProvider({appearance: 'primary'})],
})
export default class Example {}
```
