# Link

- **Package**: `CORE`
- **Type**: components

Link component. It has focus highlight and can be customized with an icon

### How to Use (Import)

```ts
import {TuiLink} from '@taiga-ui/core';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiLink,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<a
  tuiLink
  href="#"
>
  Link
</a>

<a
  tuiLink
  iconStart="@tui.settings"
  href="#"
>
  Link with an icon on the left
</a>
```

### Usage Examples

#### Basic

**Template:**
```html
<a tuiLink [routerLink]="routes.Link" > Link </a>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {DemoRoute} from '@demo/routes';
import {TuiLink} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [RouterLink, TuiLink],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly routes = DemoRoute;
}
```

#### Icons

**Template:**
```html
<button iconEnd="@tui.settings" tuiLink type="button" [textContent]="'Link with icon right'" ></button>
<p>
<button iconStart="@tui.settings" tuiLink type="button" [textContent]="'Link with icon left'" ></button>
</p>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLink} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiLink],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### Appearances

**Template:**
```html
<tui-notification class="tui-space_bottom-3"> Use textContent binding to avoid extra whitespace introduced by browser when closing tag wraps to a new line — otherwise distance to the icons will be bigger than it should be </tui-notification>
<section>
<button iconEnd="@tui.chevron-down" iconStart="@tui.arrow-right" tuiLink type="button" [textContent]="'Link with icons'" ></button>
<button iconEnd="@tui.chevron-down" iconStart="@tui.arrow-right" tuiLink type="button" [style.text-decoration-line]="'underline'" [textContent]="'Link with icons'" ></button>
</section>
<section>
<button appearance="action-grayscale" iconEnd="@tui.chevron-down" iconStart="@tui.arrow-right" tuiLink type="button" [textContent]="'Link with icons'" ></button>
<button appearance="action-grayscale" iconEnd="@tui.chevron-down" iconStart="@tui.arrow-right" tuiLink type="button" [style.text-decoration-line]="'underline'" [textContent]="'Link with icons'" ></button>
</section>
<section tuiTheme="light" [style.background]="'#fff'" >
<button appearance="" iconEnd="@tui.chevron-down" iconStart="@tui.arrow-right" tuiLink type="button" [textContent]="'Link with icons'" ></button>
<button appearance="" iconEnd="@tui.chevron-down" iconStart="@tui.arrow-right" tuiLink type="button" [style.text-decoration-line]="'underline'" [textContent]="'Link with icons'" ></button>
</section>
<section tuiTheme="dark" [style.background]="'#000'" >
<button appearance="" iconEnd="@tui.chevron-down" iconStart="@tui.arrow-right" tuiLink type="button" [textContent]="'Link with icons'" ></button>
<button appearance="" iconEnd="@tui.chevron-down" iconStart="@tui.arrow-right" tuiLink type="button" [style.text-decoration-line]="'underline'" [textContent]="'Link with icons'" ></button>
</section>
<section>
<button appearance="" iconEnd="@tui.chevron-down" iconStart="@tui.arrow-right" tuiLink type="button" [style.color]="'var(--tui-status-negative)'" [textContent]="'Link with icons'" ></button>
<button appearance="" iconEnd="@tui.chevron-down" iconStart="@tui.arrow-right" tuiLink type="button" [style.color]="'var(--tui-status-negative)'" [style.text-decoration-line]="'underline'" [textContent]="'Link with icons'" ></button>
</section>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLink, TuiNotification} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiLink, TuiNotification],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
section {
    display: flex;
    padding: 1rem;
    gap: 2rem;
    inline-size: max-content;
}
```

#### Long text

**Template:**
```html
Link can be written inline in text. <!-- prettier-ignore -->
<a href="https://www.lipsum.com/" iconEnd="@tui.external-link" tuiLink > Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text block</a> and here you can see icon wrapping to the next line with the last word, unless you introduce whitespace
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLink} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiLink],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```
