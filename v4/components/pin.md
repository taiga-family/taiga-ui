# Pin

- **Package**: `KIT`
- **Type**: components

Pins are used to show a location on a 2D plane. Use `color` , `background` , `border` and `box-shadow` to customize the pin Pins are designed to be absolutely positioned on map or similar medium, therefore specifically their center is placed where you put them.

### How to Use (Import)

```ts
import {Component} from '@angular/core';
import {TuiPin} from '@taiga-ui/kit';
// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiPin,
  ],
})
export class Example {}
```

### How to Use (Template)

```html
<tui-pin [open]="open">16</tui-pin>
```

### Usage Examples

#### Default

**Template:**
```html
<tui-pin>
<img alt="avatar" src="assets/images/avatar.jpg" />
</tui-pin>
<tui-pin>
<tui-icon icon="@tui.dollar-sign" />
</tui-pin>
<tui-pin class="white">
<tui-icon icon="@tui.dollar-sign" />
</tui-pin>
<tui-pin class="white">4.5</tui-pin>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon} from '@taiga-ui/core';
import {TuiPin} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiIcon, TuiPin],
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
    gap: 2rem;
    background: var(--tui-background-base-alt);
    box-shadow: 0 0 0 2rem var(--tui-background-base-alt);
    padding: 1rem 0 0 1rem;
    margin-block-end: -1rem;
}

.white {
    background: var(--tui-background-base);
    color: var(--tui-background-accent-2);
    border-width: 0.125rem;
}
```

#### Dot

**Template:**
```html
<tui-pin class="blue" />
<tui-pin class="yellow" />
<tui-pin class="green" />
<tui-pin class="red" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPin} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiPin],
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
<button tuiPin type="button" [open]="a" (click)="a = !a" >
<img alt="avatar" src="assets/images/avatar.jpg" />
</button>
<button title="dollar" tuiPin type="button" [open]="b" [style.inset-inline-start.rem]="5" (click)="b = !b" >
<tui-icon icon="@tui.dollar-sign" />
</button>
<button title="dollar" tuiPin type="button" class="link" [open]="c" [style.inset-inline-start.rem]="10" (click)="c = !c" >
<tui-icon icon="@tui.dollar-sign" />
</button>
<button tuiPin type="button" class="crazy" [open]="d" [style.inset-inline-start.rem]="15" (click)="d = !d" > 4.5 </button>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon} from '@taiga-ui/core';
import {TuiPin} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiIcon, TuiPin],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
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

[tuiPin] {
    position: absolute;
    top: 4rem;
}

.link {
    border: 0.125rem solid var(--tui-text-action);
    color: var(--tui-text-action);
    background: var(--tui-background-base);
}

.crazy {
    background: #ff9bda;
    color: #0075ff;
    border-color: #7b439e;
    box-shadow: 0 0 0 0.125rem #b286ff;
}
```
