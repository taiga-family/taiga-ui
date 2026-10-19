# Reorder

- **Package**: `ADDON-TABLE`
- **Type**: components

Component to change order of elements in an array

### How to Use (Import)

```ts
import {TuiReorder} from '@taiga-ui/addon-table';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiReorder,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<tui-reorder
  [(items)]="items"
  [(enabled)]="enabled"
></tui-reorder>
```

### Usage Examples

#### Usage

**Template:**
```html
<tui-reorder class="list" [(enabled)]="enabled" [(items)]="items" />
<p>{{ items | json }}</p>
<p>{{ enabled | json }}</p>
```

**TypeScript:**
```ts
import {JsonPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiReorder} from '@taiga-ui/addon-table';

@Component({
    standalone: true,
    imports: [JsonPipe, TuiReorder],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected items = inject<readonly string[]>('Pythons' as any);
    protected enabled = this.items;
}
```

**LESS:**
```less
.list {
    inline-size: 12.5rem;
}
```
