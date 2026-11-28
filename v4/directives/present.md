# Present

- **Package**: `KIT`
- **Type**: directives

`tuiPresentChange` allows to detect appearance of elements in DOM

### How to Use (Import)

```ts
import {TuiPresent} from '@taiga-ui/kit';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiPresent,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<div
  [class.hidden]="!visible"
  (tuiPresentChange)="onPresentChange($event)"
>
  I am a component hidden with CSS
</div>
or
<div
  *ngIf="visible"
  (tuiPresentChange)="onPresentChange($event)"
>
  I am a component hidden with *ngIf
</div>
```

### Usage Examples

#### Basic

**Template:**
```html
<p (tuiHoveredChange)="onHovered($event)"> Hover <span [class.hidden]="!hovered" (tuiPresentChange)="onCSS($event)" > I am a component hidden with CSS </span>
<span *ngIf="hovered" (tuiPresentChange)="onIf($event)" > I am a component hidden with *ngIf </span>
</p>
<p>Counter of component appearance minus counter of its disappearance:</p>
<p> CSS: <tui-badge>{{ counterCSS }}</tui-badge>
</p>
<p> ngIf: <tui-badge>{{ counterIf }}</tui-badge>
</p>
```

**TypeScript:**
```ts
import {NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHovered} from '@taiga-ui/cdk';
import {TuiBadge, TuiPresent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [NgIf, TuiBadge, TuiHovered, TuiPresent],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected counterCSS = 0;

    protected counterIf = 0;

    protected hovered = false;

    protected onHovered(hovered: boolean): void {
        this.hovered = hovered;
    }

    protected onCSS(visible: boolean): void {
        this.counterCSS += visible ? 1 : -1;
    }

    protected onIf(visible: boolean): void {
        this.counterIf += visible ? 1 : -1;
    }
}
```

**LESS:**
```less
.hidden {
    display: none;
}
```
