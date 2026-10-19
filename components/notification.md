# Notification

- **Package**: `CORE`
- **Type**: components

An inline message with a type (info, positive, warning, negative or neutral) that does not interrupt user actions

### How to Use (Import)

```ts
import {TuiNotification} from '@taiga-ui/core';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiNotification,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<tui-notification appearance="negative">Some content</tui-notification>
```

### Usage Examples

#### Basic

**Template:**
```html
<tui-notification size="l"> Hello world <button iconStart="@tui.x" tuiIconButton type="button" > Close </button>
</tui-notification>
<tui-notification appearance="warning" size="m" >
<div tuiTitle [style.padding-inline-end.rem]="2" > I am title <div tuiSubtitle>I am content of the notification and I can even wrap to multiple lines.</div>
<div>
<button tuiButton type="button" > So what? </button>
<button tuiLink type="button" > Whatever </button>
</div>
</div>
<button iconStart="@tui.x" tuiIconButton type="button" > Close </button>
</tui-notification>
<tui-notification appearance="neutral" icon="" size="s" > Most boring notification </tui-notification>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiLink, TuiNotification, TuiTitle} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiButton, TuiLink, TuiNotification, TuiTitle],
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
    gap: 1rem;
}
```

#### Options

**Template:**
```html
<tui-notification>Works with token options</tui-notification>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiNotification, tuiNotificationOptionsProvider} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiNotification],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiNotificationOptionsProvider({
            icon: '@tui.alarm-clock',
            appearance: 'neutral',
            size: 's',
        }),
    ],
})
export default class Example {}
```

#### Interactive

**Template:**
```html
<button appearance="neutral" iconEnd="@tui.chevron-right" size="m" tuiNotification type="button" > Click here to read more </button>
<a iconEnd="@tui.chevron-right" size="l" tuiNotification [routerLink]="routes.Alert" >
<span tuiTitle> Alerts <span tuiSubtitle>A notification as a toast</span>
</span>
</a>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {DemoRoute} from '@demo/routes';
import {TuiNotification, TuiTitle} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [RouterLink, TuiNotification, TuiTitle],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly routes = DemoRoute;
}
```

**LESS:**
```less
:host {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
```

#### Icon customization

**Template:**
```html
<button icon="@tui.heart" iconEnd="@tui.chevron-right" size="l" tuiNotification type="button" >
<span tuiTitle> Custom icon color <span tuiSubtitle>Vertically centered</span>
</span>
</button>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiNotification, TuiTitle} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiNotification, TuiTitle],
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

[tuiNotification]::before {
    .center-top();

    color: var(--tui-text-negative);
}
```
