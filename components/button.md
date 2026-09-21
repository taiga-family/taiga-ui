# Button

- **Package**: `CORE`
- **Type**: components

Button is a basic component used for both icon buttons and regular buttons with optional icons on either side. It can be applied to `button` , `a` and `label` tags. When used as `tuiIconButton` don't forget to still put text label within the tag for accessibility.

### Example

```html
<button tuiButton type="button" [appearance]="appearance.appearance" [iconEnd]="icons.iconEnd" [iconStart]="icons.iconStart" [loading]="loading" [size]="size" [tuiAppearanceFocus]="appearance.focus" [tuiAppearanceMode]="appearance.mode" [tuiAppearanceState]="appearance.state" > Button </button>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [size] | `TuiSizeXS | TuiSizeL` | — |
| [loading] | `boolean` | ) |

### Usage Examples

#### Sizes

Simple buttons with preset size options.

**Template:**
```html
<button size="l" tuiButton type="button" > Large </button>
<button size="m" tuiButton type="button" > Medium </button>
<button size="s" tuiButton type="button" > Small </button>
<button size="xs" tuiButton type="button" > Extra small </button>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';

@Component({
    imports: [TuiButton],
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

#### Appearance

Buttons support all built-in appearances. See Appearance directive for more.

**Template:**
```html
<button appearance="primary" tuiButton type="button" > Primary </button>
<button appearance="accent" tuiButton type="button" > Accent </button>
<button appearance="secondary" tuiButton type="button" > Secondary </button>
<button appearance="flat" tuiButton type="button" > Flat </button>
<button appearance="outline" tuiButton type="button" > Outline </button>
<button appearance="floating" tuiButton type="button" > Floating </button>
<button appearance="primary" disabled tuiButton type="button" > Primary disabled </button>
<div> Use <code>tuiAppearanceMode</code> to emulate <code>:checked</code> / <code>:invalid</code> CSS state for outline appearance: </div>
<button appearance="outline" tuiAppearanceMode="checked" tuiButton type="button" > Outline </button>
<button appearance="outline-grayscale" tuiAppearanceMode="checked invalid" tuiButton type="button" > Outline </button>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';

@Component({
    imports: [TuiButton],
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
    flex-wrap: wrap;
}
```

#### Icons

Using icons and other elements, such as an Avatar inside buttons in a variety of ways.

**Template:**
```html
<button appearance="accent" tuiButton type="button" >
<div size="xs" tuiAvatar="@tui.user" >
<img alt="" src="https://avatars.githubusercontent.com/u/11832552" />
</div> Alex Inkin </button>
<button appearance="secondary" size="m" tuiButton type="button" >
<tui-icon icon="@tui.users" /> Users </button>
<button appearance="outline" size="s" tuiButton tuiChevron type="button" > More </button>
<button iconStart="@font.help_outline" size="m" tuiIconButton type="button" > Help </button>
<button appearance="secondary-destructive" iconStart="@tui.heart" size="xs" tuiIconButton type="button" [style.border-radius.%]="100" > Favorite </button>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiIcon} from '@taiga-ui/core';
import {TuiAvatar, TuiChevron} from '@taiga-ui/kit';

@Component({
    imports: [TuiAvatar, TuiButton, TuiChevron, TuiIcon],
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
    align-items: flex-start;
    gap: 1rem;

    --tui-font-icon: 'Material Symbols Outlined';
}
```

#### Loading

Buttons can show a loading indicator when performing an action. Dedicated `TuiButtonLoading` component helps with accessibility by keeping button focusable while preventing click events.

**Template:**
```html
<button iconStart="@tui.clock" tuiButton type="button" [loading]="loading$ | async" (click)="trigger$.next()" > Click to start </button>
```

**TypeScript:**
```ts
import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {TuiButtonLoading} from '@taiga-ui/kit';
import {map, startWith, Subject, switchMap, timer} from 'rxjs';

@Component({
    imports: [AsyncPipe, TuiButton, TuiButtonLoading],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly trigger$ = new Subject<void>();

    protected readonly loading$ = this.trigger$.pipe(
        switchMap(() => timer(2000).pipe(map(TUI_FALSE_HANDLER), startWith('Loading'))),
    );
}
```

#### Options with DI

Default values for buttons can be configured using DI options.

**Template:**
```html
<button tuiButton type="button" > Options with DI </button>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, tuiButtonOptionsProvider} from '@taiga-ui/core';

@Component({
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiButtonOptionsProvider({size: 's'})],
})
export default class Example {}
```

#### Vertical

Use `tuiButtonVertical` attribute to set different layout.

**Template:**
```html
<button tuiButton tuiButtonVertical type="button" >
<div size="xs" tuiAvatar="@tui.user" >
<img alt="" src="https://avatars.githubusercontent.com/u/11832552" />
</div> Alex </button>
<button appearance="secondary" iconStart="@tui.users" tuiButton tuiButtonVertical type="button" > Users </button>
<button appearance="flat" iconStart="@tui.star" tuiButton tuiButtonVertical type="button" >
<div tuiFade tuiFadeHeight="1rem" tuiFadeOffset="0.5rem" > Very long label with fade </div>
</button>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiAvatar, TuiFade} from '@taiga-ui/kit';

@Component({
    imports: [TuiAvatar, TuiButton, TuiFade],
    templateUrl: './index.html',
    styles: ':host { display: flex; gap: 1rem; align-items: flex-start; }',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### Two labels

Nested elements with a little bit of CSS can make button appear to have sections.

**Template:**
```html
<button tuiButton type="button" class="button" >
<span tuiFade>Purchase gift certificate</span>
<strong>$500</strong>
</button>
<p>
<button tuiButton type="button" class="button" >
<span tuiFade>Purchase</span>
<strong>$500</strong>
</button>
</p>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {TuiFade} from '@taiga-ui/kit';

@Component({
    imports: [TuiButton, TuiFade],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
.button {
    inline-size: 15rem;
    justify-content: space-between;
}
```

#### Link

Using `tuiButton` on an `<a>` element preserves native link semantics — right-click, open in new tab, and URL preview all work as expected.

**Template:**
```html
<a href="https://taiga-ui.dev" rel="noopener noreferrer" target="_blank" tuiButton > Documents </a>
<a appearance="outline" href="https://taiga-ui.dev" iconStart="@tui.music" rel="noopener noreferrer" target="_blank" tuiButton > Music </a>
<a appearance="accent" href="https://taiga-ui.dev" iconEnd="@tui.book-open" rel="noopener noreferrer" target="_blank" tuiButton > Library </a>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';

@Component({
    imports: [TuiButton],
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

#### Label

Using `tuiButton` on a `<label>` element preserves native label semantics and can trigger associated controls, such as hidden file inputs.

**Template:**
```html
<label tuiButton> Upload file <input type="file" />
</label>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';

@Component({
    imports: [TuiButton],
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

label:has(input:focus-visible) {
    outline-color: var(--tui-border-focus);
}

input {
    position: absolute;
    inset: 0;
    block-size: 100%;
    inline-size: 100%;
    cursor: pointer;
    opacity: 0;
}
```
