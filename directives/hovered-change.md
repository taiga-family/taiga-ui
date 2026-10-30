# HoveredChange

- **Package**: `CDK`
- **Type**: directives

`tuiHoveredChange` is used for emitting true/false when users hovers over an element or moves cursor away from it.

### Usage Examples

#### Basic

**Template:**
```html
<button tuiButton type="button" class="tui-space_bottom-5" (tuiHoveredChange)="onHovered($event)" > Hover to reveal hidden text! </button>
<p> Hidden Text Appears Here: <span class="text-style" [class.hidden]="!hovered" > You Just Hovered Over The Button! </span>
</p>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiHovered} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';

@Component({
    imports: [TuiButton, TuiHovered],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected hovered = false;

    protected onHovered(hovered: boolean): void {
        this.hovered = hovered;
    }
}
```

**LESS:**
```less
.text-style {
    font-size: 16px;
    color: #f00;
}

.hidden {
    display: none;
}
```
