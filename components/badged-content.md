# BadgedContent

- **Package**: `KIT`
- **Type**: components

BadgedContent is a wrapper for other components to add badges and notifications to them.

### Example

```html
<tui-badged-content [style.--tui-radius]="radius">
<tui-badge-notification tuiSlot="top">1</tui-badge-notification>
<div size="l" tuiAvatar="@tui.user" [round]="radius === '50%'" >
<img alt="" src="https://avatars.githubusercontent.com/u/11832552" />
</div>
</tui-badged-content>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| style.--t-radius | `string` | border radius |

### Usage Examples

#### Basic

**Template:**
```html
<tui-badged-content>
<tui-badge-notification size="s" tuiSlot="top" > 99 </tui-badge-notification>
<div size="s" tuiAvatar="@tui.user" [round]="false" ></div>
</tui-badged-content>
<tui-badged-content>
<div size="m" tuiAvatar="@tui.user" [round]="false" ></div>
<tui-badge-notification size="m" tuiSlot="bottom" > 120 </tui-badge-notification>
</tui-badged-content>
<tui-badged-content>
<tui-icon appearance="primary" iconStart="@tui.star" size="l" tuiBadge tuiSlot="top" />
<div size="l" tuiAvatar="@tui.user" [round]="false" ></div>
</tui-badged-content>
<tui-badged-content>
<tui-badge-notification size="l" tuiSlot="top" > 99 </tui-badge-notification>
<div size="xl" tuiAvatar="@tui.user" [round]="false" ></div>
<tui-icon appearance="accent" iconStart="@tui.star" size="l" tuiBadge tuiSlot="bottom" />
</tui-badged-content>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAvatar, TuiBadge, TuiBadgedContent, TuiBadgeNotification} from '@taiga-ui/kit';

@Component({
    imports: [TuiAvatar, TuiBadge, TuiBadgedContent, TuiBadgeNotification],
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

#### Rounded content

**Template:**
```html
<tui-badged-content [style.--tui-radius.%]="50">
<tui-badge-notification size="s" tuiSlot="top" > 8 </tui-badge-notification>
<div size="s" tuiAvatar="@tui.user" ></div>
</tui-badged-content>
<tui-badged-content [style.--tui-radius.%]="50">
<tui-icon appearance="accent" iconStart="@tui.star" size="m" tuiBadge tuiSlot="bottom" />
<div size="m" tuiAvatar="@tui.user" ></div>
</tui-badged-content>
<tui-badged-content [style.--tui-radius.%]="50">
<span appearance="accent" size="l" tuiBadge tuiSlot="top" > Taiga </span>
<div size="l" tuiAvatar="@tui.user" ></div>
</tui-badged-content>
<tui-badged-content [style.--tui-radius.%]="50">
<tui-badge-notification size="l" tuiSlot="top" > 99 </tui-badge-notification>
<div size="xl" tuiAvatar="@tui.user" ></div>
</tui-badged-content>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAvatar, TuiBadge, TuiBadgedContent, TuiBadgeNotification} from '@taiga-ui/kit';

@Component({
    imports: [TuiAvatar, TuiBadge, TuiBadgedContent, TuiBadgeNotification],
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

#### With different components

**Template:**
```html
<tui-badged-content>
<tui-badge-notification size="xs" tuiSlot="top" />
<tui-textfield class="input">
<input tuiInput />
<label tuiLabel>Input text</label>
</tui-textfield>
</tui-badged-content>
<tui-badged-content>
<tui-icon appearance="accent" iconStart="@tui.check" size="s" tuiBadge tuiSlot="bottom" />
<button tuiButton type="button" > Button </button>
</tui-badged-content>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiInput} from '@taiga-ui/core';
import {TuiBadge, TuiBadgedContent, TuiBadgeNotification} from '@taiga-ui/kit';

@Component({
    imports: [TuiBadge, TuiBadgedContent, TuiBadgeNotification, TuiButton, TuiInput],
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

tui-textfield {
    min-inline-size: 10rem;
}
```

#### With image

**Template:**
```html
<tui-badged-content>
<img alt="icon" src="assets/images/angular.svg" tuiSlot="top" width="24" />
<div tuiAvatar="@tui.user" [round]="false" ></div>
</tui-badged-content>
<tui-badged-content>
<img alt="icon" src="assets/images/angular.svg" tuiSlot="bottom" width="24" />
<div tuiAvatar="@tui.user" [round]="false" ></div>
</tui-badged-content>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAvatar, TuiBadgedContent} from '@taiga-ui/kit';

@Component({
    imports: [TuiAvatar, TuiBadgedContent],
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

The wrapped element is assumed to have 12px border-radius. If it is different, override the
`--tui-radius`
variable with actual value.
