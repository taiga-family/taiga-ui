# BadgeNotification

- **Package**: `KIT`
- **Type**: components

Simple non-interactive badge. Used in headers, cells, cards, avatars to indicate notifications, such as new messages

### Example

```html
<tui-badge-notification [size]="size">11</tui-badge-notification>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [size] | `TuiSizeL` | — |

### Usage Examples

#### Basic

**Template:**
```html
<h4>Desktop</h4>
<p tuiPlatform="web">
<tui-badge-notification size="l">9</tui-badge-notification>
<tui-badge-notification>9</tui-badge-notification>
<tui-badge-notification size="s">9</tui-badge-notification>
<tui-badge-notification size="xs">9</tui-badge-notification>
</p>
<h4>Android</h4>
<p tuiPlatform="android">
<tui-badge-notification size="l">9</tui-badge-notification>
<tui-badge-notification>9</tui-badge-notification>
<tui-badge-notification size="s">9</tui-badge-notification>
<tui-badge-notification size="xs">9</tui-badge-notification>
</p>
<h4>IOS</h4>
<p tuiPlatform="ios">
<tui-badge-notification size="l">9</tui-badge-notification>
<tui-badge-notification>9</tui-badge-notification>
<tui-badge-notification size="s">9</tui-badge-notification>
<tui-badge-notification size="xs">9</tui-badge-notification>
</p>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiBadgeNotification} from '@taiga-ui/kit';

@Component({
    imports: [TuiBadgeNotification, TuiPlatform],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
tui-badge-notification {
    margin: 0.2rem;
}
```

#### Custom color

**Template:**
```html
<tui-badge-notification size="l">10</tui-badge-notification>
<tui-badge-notification>11</tui-badge-notification>
<tui-badge-notification size="s">12</tui-badge-notification>
<tui-badge-notification size="xs" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBadgeNotification} from '@taiga-ui/kit';

@Component({
    imports: [TuiBadgeNotification],
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

tui-badge-notification {
    margin: 0.2rem;
    .gradient(#c86dd7, #3023ae);
}
```
