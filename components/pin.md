# Pin

- **Package**: `KIT`
- **Type**: components

Pins are used to show a location on a 2D plane. Use `color` , `background` , `border` and `box-shadow` to customize the pin Pins are designed to be absolutely positioned on map or similar medium, therefore specifically their center is placed where you put them.

### Usage Examples

#### Default

**Template:**
```html
<div tuiPin>
<img alt="avatar" src="assets/images/avatar.jpg" />
</div>
<div tuiPin>
<tui-icon icon="@tui.dollar-sign" />
</div>
<div tuiPin class="white" >
<span tuiPin>
<tui-icon icon="@tui.dollar-sign" />
</span>
</div>
<div tuiPin class="white" >
<span tuiPin>4.5</span>
<tui-icon iconStart="@tui.heart" tuiBadge />
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon} from '@taiga-ui/core';
import {TuiBadge, TuiPin} from '@taiga-ui/kit';

@Component({
    imports: [TuiBadge, TuiIcon, TuiPin],
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
    gap: 2rem;
    background: var(--tui-background-base-alt);
    box-shadow: 0 0 0 2rem var(--tui-background-base-alt);
    padding: 1rem 0 0 1rem;
    margin-block-end: -1rem;
}

.white {
    color: var(--tui-background-accent-2);
}
```

#### Dot

**Template:**
```html
<div tuiPin class="blue" ></div>
<div tuiPin class="yellow" ></div>
<div tuiPin class="green" ></div>
<div tuiPin class="red" ></div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPin} from '@taiga-ui/kit';

@Component({
    imports: [TuiPin],
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
    gap: 2rem;
    background: var(--tui-background-base-alt);
    box-shadow: 0 0 0 2rem var(--tui-background-base-alt);
    padding: 0.375rem 0 0 0.375rem;
    margin-block-end: -0.375rem;
}

.blue {
    background: #428bf9;
}

.yellow {
    background: #ffdd2d;
}

.green {
    background: #00b92d;
}

.red {
    background: #f52222;
}
```

#### Openable

**Template:**
```html
<button type="button" [tuiPin]="a" (click)="a = !a" >
<img alt="avatar" src="assets/images/avatar.jpg" />
</button>
<button title="dollar" type="button" [style.inset-inline-start.rem]="5" [tuiPin]="b" (click)="b = !b" >
<tui-icon icon="@tui.dollar-sign" />
</button>
<button title="dollar" type="button" class="link" [style.inset-inline-start.rem]="10" [tuiPin]="c" (click)="c = !c" >
<span tuiPin>
<tui-icon icon="@tui.dollar-sign" />
</span>
<tui-icon iconStart="@tui.heart" tuiBadge />
</button>
<button type="button" [style.inset-inline-start.rem]="15" [tuiPin]="d" (click)="d = !d" > 4.5 </button>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon} from '@taiga-ui/core';
import {TuiBadge, TuiPin} from '@taiga-ui/kit';

@Component({
    imports: [TuiBadge, TuiIcon, TuiPin],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected a = true;
    protected b = false;
    protected c = true;
    protected d = false;
}
```

**LESS:**
```less
:host {
    position: relative;
    display: block;
    block-size: 5rem;
    border-inline-start: 2rem solid transparent;
    background: var(--tui-background-base-alt);
    box-shadow: 0 0 0 2rem var(--tui-background-base-alt);
}

button[tuiPin] {
    position: absolute;
    inset-block-start: 4rem;
}

.link {
    color: var(--tui-text-action);
    background: var(--tui-background-elevation-1);
}
```

#### Label

**Template:**
```html
<button type="button" [tuiPin]="a" (click)="a = !a" >
<img alt="avatar" src="assets/images/avatar.jpg" />
<span tuiTitle>Title</span>
</button>
<button type="button" [tuiPin]="b" (click)="b = !b" >
<tui-icon icon="@tui.dollar-sign" />
<span tuiTitle> Title <span tuiSubtitle>Subtitle</span>
</span>
</button>
<button type="button" class="link" [tuiPin]="c" (click)="c = !c" >
<span tuiPin>
<tui-icon icon="@tui.dollar-sign" />
</span>
<span tuiFade tuiTitle > Very very long title that gets cut </span>
<tui-icon iconStart="@tui.heart" tuiBadge />
</button>
<button type="button" class="link" [tuiPin]="d" (click)="d = !d" >
<span tuiPin>4.5</span>
<span tuiTitle> Title <span tuiFade tuiSubtitle >
<tui-icon icon="@tui.heart" /> Subtitle with an icon </span>
</span>
</button>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiBadge, TuiFade, TuiPin} from '@taiga-ui/kit';

@Component({
    imports: [TuiBadge, TuiFade, TuiIcon, TuiPin, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected a = true;
    protected b = false;
    protected c = false;
    protected d = false;
}
```

**LESS:**
```less
:host {
    display: grid;
    gap: 1rem;
    grid-auto-rows: 2rem;
    place-items: start;
    padding: 3rem 6rem 0;
    background-color: var(--tui-background-base-alt);
    box-shadow: 0 0 0 2rem var(--tui-background-base-alt);
}

.link {
    color: var(--tui-text-action);
}
```
