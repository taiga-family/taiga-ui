# HintPointer

- **Package**: `CORE`
- **Type**: directives

A directive to show a hint above the cursor

### Example

```html
<div tuiHint="Some information" tuiHintPointer [tuiHintAppearance]="hint.appearance" [tuiHintDirection]="hint.direction" [tuiHintHideDelay]="hideDelay" [tuiHintShowDelay]="showDelay" > It is followed inside the block </div>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| [tuiHint] | `PolymorpheusContent` | content of the hint |
| [tuiHintShowDelay] | `number` | show delay in milliseconds |
| [tuiHintHideDelay] | `number` | hide delay in milliseconds |

### Usage Examples

#### Basic

**Template:**
```html
<div tuiHint="Wow! How exciting!" tuiHintDirection="top-start" tuiHintPointer class="block" >
<p>In this block hint follows cursor</p>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiHint} from '@taiga-ui/core';

@Component({
    imports: [TuiHint],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Example {}
```

**LESS:**
```less
.block {
    border: 1px solid var(--tui-border-normal);
    border-radius: 1rem;
    padding: 5rem 3.125rem;
    inline-size: 18.75rem;
    text-align: center;
}
```
