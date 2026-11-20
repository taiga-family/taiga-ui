# HintPointer

- **Package**: `CORE`
- **Type**: directives

A directive to show a hint above the cursor

### How to Use (Import)

```ts
import {TuiHint} from '@taiga-ui/core';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiHint,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<div
  tuiHintPointer
  tuiHint="Hint text"
>
  Block with pointer hint
</div>
```

### Example

```html
<div tuiHint="Some information" tuiHintPointer [tuiHintAppearance]="appearance" [tuiHintDirection]="direction" [tuiHintHideDelay]="hideDelay" [tuiHintShowDelay]="showDelay" > It is followed inside the block </div>
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| tuiHint | `PolymorpheusContent` | Hint content |
| tuiHintShowDelay | `number` | Show Delay |
| tuiHintHideDelay | `number` | Hide Delay |

### Usage Examples

#### Basic

**Template:**
```html
<div tuiHint="Wow! How exciting!" tuiHintDirection="top-left" tuiHintPointer class="block" >
<p>In this block hint follows cursor</p>
</div>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiHint} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiHint],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
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
