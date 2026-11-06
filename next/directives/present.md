# Present

- **Package**: `KIT`
- **Type**: directives

`tuiPresent` allows to detect appearance of elements in DOM

### Usage Examples

#### Basic

**Template:**
```html
<p (tuiHoveredChange)="onHovered($event)"> Hover <span [class.hidden]="!hovered" (tuiPresent)="onCSS($event)" > I am a component hidden with CSS </span> @if (hovered) { <span (tuiPresent)="onIf($event)">I am a component hidden with *ngIf</span> } </p>
<p>Counter of component appearance minus counter of its disappearance:</p>
<p> CSS: <span tuiBadge>{{ counterCSS }}</span>
</p>
<p> ngIf: <span tuiBadge>{{ counterIf }}</span>
</p>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHovered} from '@taiga-ui/cdk';
import {TuiBadge, TuiPresent} from '@taiga-ui/kit';

@Component({
    imports: [TuiBadge, TuiHovered, TuiPresent],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
