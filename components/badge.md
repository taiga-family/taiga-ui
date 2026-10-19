# Badge

- **Package**: `KIT`
- **Type**: components

Component for displaying text, pictures and icons.

### How to Use (Import)

```ts
import {Component} from '@angular/core';
import {TuiBadge} from '@taiga-ui/kit';
// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiBadge,
  ],
})
export class Example {}
```

### How to Use (Template)

```html
<tui-badge appearance="primary">{{ value }}</tui-badge>
```

### Example

```html
<p>
<tui-badge *ngIf="contentType === 'with icon'" iconStart="@tui.check" [appearance]="appearance" [size]="size" >
<div tuiFade>Taiga UI</div>
</tui-badge>
<tui-badge *ngIf="contentType === 'text'" [appearance]="appearance" [size]="size" > Taiga UI </tui-badge>
<img *ngIf="contentType === 'image'" alt="market" src="assets/images/avatar.jpg" tuiBadge [appearance]="appearance" [size]="size" />
</p>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [size] | `TuiSizeL` | Size |
| [appearance] | `TuiStatus` | Appearance |

### Usage Examples

#### Basic

**Template:**
```html
<tui-badge>Default</tui-badge>
<tui-badge appearance="primary">Primary</tui-badge>
<tui-badge appearance="accent">Accent</tui-badge>
<tui-badge appearance="positive" tuiStatus > Success </tui-badge>
<tui-badge appearance="negative" tuiStatus > Error </tui-badge>
<tui-badge appearance="warning" tuiStatus > Warning </tui-badge>
<tui-badge appearance="warning">Warning</tui-badge>
<tui-badge appearance="neutral">Neutral</tui-badge>
<tui-badge appearance="info">Info</tui-badge>
<p>Custom status</p>
<tui-badge tuiStatus="var(--tui-chart-categorical-09)" [style.background]="'var(--tui-chart-categorical-01)'" > Custom </tui-badge>
<p>Use CSS for support colors</p>
<tui-badge *tuiRepeatTimes="let index of 20" [style.background]="'var(--tui-chart-categorical-' + index.toString().padStart(2, '0') + ')'" > Taiga </tui-badge>
<p>Sizes</p>
<tui-badge appearance="positive" size="xl" tuiStatus > Success </tui-badge>
<tui-badge appearance="positive" size="l" tuiStatus > Success </tui-badge>
<tui-badge appearance="positive" size="m" tuiStatus > Success </tui-badge>
<tui-badge appearance="positive" size="s" tuiStatus > Success </tui-badge>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiBadge, TuiStatus} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiBadge, TuiRepeatTimes, TuiStatus],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
tui-badge {
    margin: 0.5rem;
}
```

#### Sizes

**Template:**
```html
<tui-badge appearance="primary" size="xl" > x-large </tui-badge>
<tui-badge appearance="primary" size="l" class="tui-space_left-1" > large </tui-badge>
<tui-badge appearance="primary" size="m" class="tui-space_left-1" > medium </tui-badge>
<tui-badge appearance="primary" size="s" class="tui-space_left-1" > small </tui-badge>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBadge} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiBadge],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### Content type (mobile platform)

**Template:**
```html
<div tuiPlatform="ios">
<h4 class="tui-space_vertical-1">Value with icon</h4>
<tui-badge appearance="primary" iconStart="@tui.box" size="xl" > x-large </tui-badge>
<tui-badge appearance="primary" iconStart="@tui.box" size="l" class="tui-space_left-1" > large </tui-badge>
<tui-badge appearance="primary" iconStart="@tui.box" size="m" class="tui-space_left-1" > medium </tui-badge>
<tui-badge appearance="primary" iconStart="@tui.box" size="s" class="tui-space_left-1" > small </tui-badge>
</div>
<div tuiPlatform="ios">
<h4 class="tui-space_top-3 tui-space_bottom-1">Icon only</h4>
<tui-icon appearance="accent" icon="@tui.box" size="xl" tuiBadge />
<tui-icon appearance="accent" icon="@tui.box" size="l" tuiBadge class="tui-space_left-1" />
<tui-icon appearance="accent" icon="@tui.box" size="m" tuiBadge class="tui-space_left-1" />
<tui-icon appearance="accent" icon="@tui.box" size="s" tuiBadge class="tui-space_left-1" />
</div>
<div tuiPlatform="ios">
<h4 class="tui-space_top-3 tui-space_bottom-1">Image</h4>
<img alt="market" size="xl" src="assets/images/avatar.jpg" tuiBadge />
<img alt="market" size="l" src="assets/images/avatar.jpg" tuiBadge class="tui-space_left-1" />
<img alt="market" size="m" src="assets/images/avatar.jpg" tuiBadge class="tui-space_left-1" />
<img alt="market" size="s" src="assets/images/avatar.jpg" tuiBadge class="tui-space_left-1" />
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiIcon} from '@taiga-ui/core';
import {TuiBadge} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiBadge, TuiIcon, TuiPlatform],
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
    display: block;
    min-inline-size: 18rem;
}
```

#### Long value

**Template:**
```html
<tui-badge appearance="primary" size="xl" class="badge" >
<div tuiFade>Very long value in badge</div>
</tui-badge>
<tui-badge appearance="accent" iconStart="@tui.box" size="l" class="badge tui-space_top-3" >
<div class="t-ellipsis">Very long value in badge</div>
</tui-badge>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBadge, TuiFade} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiBadge, TuiFade],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
.badge {
    max-inline-size: 10rem;
}

.t-ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
}
```

#### Customization

**Template:**
```html
<tui-badge appearance="custom" iconStart="@tui.lock" size="xl" class="custom-1" > 10 000 000 $ </tui-badge>
<tui-badge appearance="custom" size="xl" class="custom-2 tui-space_left-3" > Taiga </tui-badge>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBadge} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiBadge],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local.less';

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
<tui-badge>10 000 000 $</tui-badge>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBadge, tuiBadgeOptionsProvider} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiBadge],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiBadgeOptionsProvider({appearance: 'primary'})],
})
export default class Example {}
```
