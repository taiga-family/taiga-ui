# RTL

- **Type**: info

Taiga UI supports setting
`dir="rtl"`
to implement right-to-left (RTL) layouts. This is particularly useful for languages that are read from right to
left, such as Arabic or Hebrew.

## Variables

There are a few CSS variables that would be helpful for you when implementing bidirectional interfaces

### Usage Examples

#### Variables

**Template:**
```html
<div tuiCell>
<tui-icon icon="@tui.chevron-right" />
<div tuiTitle>
<div> Use <code>--tui-inline</code> variable </div>
<div tuiSubtitle> When you need to flip <code>calc()</code>
</div>
</div>
</div>
<div tuiCell>
<div tuiTitle>
<div> Use <code>--tui-inline-start/end</code> variable </div>
<div tuiSubtitle>When you need direction in gradients etc</div>
</div>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiCell, TuiIcon, TuiTitle} from '@taiga-ui/core';

@Component({
    imports: [TuiCell, TuiIcon, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
tui-icon {
    transform: scaleX(var(--tui-inline));
}

[tuiCell]:last-child {
    background: linear-gradient(to var(--tui-inline-end), transparent, var(--tui-background-neutral-1));
    box-shadow: calc(0.25rem * var(--tui-inline)) 0 0 var(--tui-background-neutral-2);
}
```
