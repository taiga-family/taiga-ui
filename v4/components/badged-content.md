# BadgedContent

- **Package**: `KIT`
- **Type**: components

BadgedContent is a wrapper for other components to add badges and notifications to them.

### How to Use (Import)

```ts
import {Component} from '@angular/core';
import {TuiBadgedContent} from '@taiga-ui/kit';
// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiBadgedContent,
  ],
})
export class Example {}
```

### How to Use (Template)

```html
<tui-badged-content>
  <tui-badge-notification tuiSlot="top">1</tui-badge-notification>
  <tui-avatar src="@tui.user"></tui-avatar>
  <tui-badge-notification tuiSlot="bottom">1</tui-badge-notification>
</tui-badged-content>
```

### Example

```html
<tui-badged-content [style.--tui-radius]="radius">
<tui-badge-notification tuiSlot="top">1</tui-badge-notification>
<tui-avatar size="l" [round]="radius === '50%'" [src]="'https://avatars.githubusercontent.com/u/11832552' | tuiFallbackSrc: '@tui.user' | async" />
</tui-badged-content>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| style.--t-radius | `string` | Border radius |

### Usage Examples

#### Basic

**Template:**
```html
<tui-badged-content>
<tui-badge-notification size="s" tuiSlot="top" > 99 </tui-badge-notification>
<tui-avatar size="s" src="@tui.user" [round]="false" />
</tui-badged-content>
<tui-badged-content>
<tui-avatar size="m" src="@tui.user" [round]="false" />
<tui-badge-notification size="m" tuiSlot="bottom" > 120 </tui-badge-notification>
</tui-badged-content>
<tui-badged-content>
<tui-icon appearance="primary" icon="@tui.star" size="l" tuiBadge tuiSlot="top" />
<tui-avatar size="l" src="@tui.user" [round]="false" />
</tui-badged-content>
<tui-badged-content>
<tui-badge-notification size="l" tuiSlot="top" > 99 </tui-badge-notification>
<tui-avatar size="xl" src="@tui.user" [round]="false" />
<tui-icon appearance="accent" icon="@tui.star" size="l" tuiBadge tuiSlot="bottom" />
</tui-badged-content>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon} from '@taiga-ui/core';
import {TuiAvatar, TuiBadge, TuiBadgedContent, TuiBadgeNotification} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiAvatar, TuiBadge, TuiBadgedContent, TuiBadgeNotification, TuiIcon],
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
    gap: 1rem;
}
```

#### Rounded content

**Template:**
```html
<tui-badged-content [style.--tui-radius.%]="50">
<tui-badge-notification size="s" tuiSlot="top" > 8 </tui-badge-notification>
<tui-avatar size="s" src="@tui.user" />
</tui-badged-content>
<tui-badged-content [style.--tui-radius.%]="50">
<tui-icon appearance="accent" icon="@tui.star" size="m" tuiBadge tuiSlot="bottom" />
<tui-avatar size="m" src="@tui.user" />
</tui-badged-content>
<tui-badged-content [style.--tui-radius.%]="50">
<tui-badge appearance="accent" size="l" tuiSlot="top" > Taiga </tui-badge>
<tui-avatar size="l" src="@tui.user" />
</tui-badged-content>
<tui-badged-content [style.--tui-radius.%]="50">
<tui-badge-notification size="l" tuiSlot="top" > 99 </tui-badge-notification>
<tui-avatar size="xl" src="@tui.user" />
</tui-badged-content>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon} from '@taiga-ui/core';
import {TuiAvatar, TuiBadge, TuiBadgedContent, TuiBadgeNotification} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiAvatar, TuiBadge, TuiBadgedContent, TuiBadgeNotification, TuiIcon],
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
    gap: 1rem;
}
```

#### With different components

**Template:**
```html
<tui-badged-content>
<tui-badge-notification size="xs" tuiSlot="top" />
<tui-input class="input">Input text</tui-input>
</tui-badged-content>
<tui-badged-content>
<tui-icon appearance="accent" icon="@tui.check" size="s" tuiBadge tuiSlot="bottom" />
<button tuiButton type="button" > Button </button>
</tui-badged-content>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiIcon} from '@taiga-ui/core';
import {TuiBadge, TuiBadgedContent, TuiBadgeNotification} from '@taiga-ui/kit';
import {TuiInputModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiBadge,
        TuiBadgedContent,
        TuiBadgeNotification,
        TuiButton,
        TuiIcon,
        TuiInputModule,
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
    gap: 1rem;
}

tui-input {
    min-inline-size: 10rem;
}
```

#### With image

**Template:**
```html
<tui-badged-content>
<img alt="icon" src="assets/images/angular.svg" tuiSlot="top" width="24" />
<tui-avatar src="@tui.user" [round]="false" />
</tui-badged-content>
<tui-badged-content>
<img alt="icon" src="assets/images/angular.svg" tuiSlot="bottom" width="24" />
<tui-avatar src="@tui.user" [round]="false" />
</tui-badged-content>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAvatar, TuiBadgedContent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiAvatar, TuiBadgedContent],
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
    gap: 1rem;
}
```

The wrapped element is assumed to have 12px border-radius. If it is different, override the
`--tui-radius`
variable with actual value.
