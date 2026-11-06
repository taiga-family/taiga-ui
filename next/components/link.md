# Link

- **Package**: `CORE`
- **Type**: components

Link component. It has focus highlight and can be customized with an icon Use `textContent` binding or wrapping entire content with a `span` to avoid extra whitespace introduced by browser to `a` tag when closing tag wraps to a new line — otherwise distance to the icons will be bigger than it should be

### Usage Examples

#### Basic

Can be used on native `a` tag with `routerLink` or `href`

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

Can also be used on buttons as well as with icons on either side.

**Template:**
```html
<button iconEnd="@tui.settings" tuiLink type="button" [textContent]="'Link with icon right'" ></button>
<p>
<button iconStart="@tui.settings" tuiLink type="button" [textContent]="'Link with icon left'" ></button>
</p>
<button iconEnd="@font.home" tuiLink type="button" [style.--tui-font-icon]="'Material Symbols Outlined'" [textContent]="'Link with font icon'" ></button>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLink} from '@taiga-ui/core';

@Component({
    imports: [TuiLink],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### Appearances

Different color and underline styles.

**Template:**
```html
Links by default have <button iconStart="@tui.edit" tuiLink type="button" >
<span>action</span>
</button> appearance which you can override with <button appearance="action-grayscale" tuiLink type="button" > action-grayscale </button> or <button appearance="action-destructive" iconEnd="@tui.trash" tuiLink type="button" [textContent]="'action-destructive'" ></button>
<p> If you use no appearance, links would <button appearance="" iconEnd="@tui.external-link" tuiLink type="button" >
<span>inherit text color</span>
</button> in tandem with an underline decoration to make them visible. </p>
<p tuiTheme="dark"> It would also work well together with <a appearance="" iconStart="@tui.paintbrush" tuiLink >
<span>dark theme</span>
</a> and other text colors </p> If you want, you can <button iconStart="@tui.heart" tuiLink type="button" [style.text-decoration-line]="'underline'" >
<span>enable</span>
</button> dashed underline for any appearance using <code>text-decoration-line: underline</code> or switch <button appearance="" tuiLink type="button" [style.text-decoration-style]="'dashed'" > inherited </button> link underline to dashed style by <code>text-decoration-style: dashed</code>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLink} from '@taiga-ui/core';

@Component({
    imports: [TuiLink],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
[tuiTheme='dark'] {
    background: var(--tui-background-base);
    color: var(--tui-text-secondary);
    padding: 1rem;
    margin: 1rem -1rem;
}
```

#### Long text

Multi line wrapping also works with icons.

**Template:**
```html
Link can be written inline in text. <!-- prettier-ignore -->
<a href="https://www.lipsum.com/" iconEnd="@tui.external-link" tuiLink > Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text block</a> and if no extra whitespace is introduced, the icon would wrap together with the last word inside the tag
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLink} from '@taiga-ui/core';

@Component({
    imports: [TuiLink],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
```
