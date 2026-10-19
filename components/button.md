# Button

- **Package**: `CORE`
- **Type**: components

### How to Use (Import)

```ts
import {Component} from '@angular/core';
import {TuiButton} from '@taiga-ui/core';
// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiButton,
  ],
})
export class Example {}
```

### How to Use (Template)

```html
<button tuiButton>Press me</button>
<a tuiButton>Press me</a>
```

### Example

```html
<button tuiButton type="button" [appearance]="appearance.appearance" [iconEnd]="icons.iconEnd" [iconStart]="icons.iconStart" [loading]="loading" [size]="size" [tuiAppearanceFocus]="appearance.focus" [tuiAppearanceMode]="appearance.mode" [tuiAppearanceState]="appearance.state" > Button </button>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [size] | `TuiSizeXS | TuiSizeL` | Size of the button |
| [loading] | `boolean` | ) |

### Usage Examples

#### Sizes

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
    standalone: true,
    imports: [TuiButton],
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

#### Appearance

**Template:**
```html
<button appearance="primary" tuiButton type="button" > Primary </button>
<button appearance="accent" tuiButton type="button" > Accent </button>
<button appearance="secondary" tuiButton type="button" > Secondary </button>
<button appearance="flat" tuiButton type="button" > Flat </button>
<button appearance="outline" tuiButton type="button" > Outline </button>
<button appearance="floating" tuiButton type="button" > Floating </button>
<button appearance="primary" disabled tuiButton type="button" > Primary disabled </button>
<div> See <a tuiLink [routerLink]="routes.Appearance" > Appearance </a> directive for more. </div>
<div> Use <code>tuiAppearanceMode</code> to emulate <code>:checked</code> / <code>:invalid</code> CSS state for outline appearance: </div>
<button appearance="outline" tuiAppearanceMode="checked" tuiButton type="button" > Outline </button>
<button appearance="outline-grayscale" tuiAppearanceMode="checked invalid" tuiButton type="button" > Whiteblock </button>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {DemoRoute} from '@demo/routes';
import {TuiButton, TuiLink} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [RouterLink, TuiButton, TuiLink],
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
    gap: 1rem;
    flex-wrap: wrap;
}
```

#### Icons

**Template:**
```html
<button appearance="accent" tuiButton type="button" >
<tui-avatar size="xs" src="https://avatars.githubusercontent.com/u/11832552" /> Alex Inkin </button>
<button appearance="secondary" size="m" tuiButton type="button" >
<tui-icon icon="@tui.users" [style.height.rem]="1" /> Users </button>
<button appearance="outline" iconEnd="@tui.chevron-down" size="s" tuiButton type="button" > More </button>
<button appearance="secondary-destructive" iconStart="@tui.heart" size="xs" tuiIconButton type="button" [style.border-radius.%]="100" > Favorite </button>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiIcon} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiAvatar, TuiButton, TuiIcon],
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
    align-items: flex-start;
    gap: 1rem;
}
```

#### Loading

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
    standalone: true,
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
    standalone: true,
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [tuiButtonOptionsProvider({size: 's'})],
})
export default class Example {}
```

#### Vertical

**Template:**
```html
<button tuiButton tuiButtonVertical type="button" >
<tui-avatar size="xs" src="https://avatars.githubusercontent.com/u/11832552" /> Alex </button>
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
    standalone: true,
    imports: [TuiAvatar, TuiButton, TuiFade],
    templateUrl: './index.html',
    styles: [':host { display: flex; gap: 1rem; align-items: flex-start; }'],
    encapsulation,
    changeDetection,
})
export default class Example {}
```

#### Two labels

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
    standalone: true,
    imports: [TuiButton, TuiFade],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
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

#### Label

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
    standalone: true,
    imports: [TuiButton],
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
