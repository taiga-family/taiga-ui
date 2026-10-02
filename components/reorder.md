# Reorder

- **Package**: `ADDON-TABLE`
- **Type**: components

Component to change order of elements in an array

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
    imports: [JsonPipe, TuiReorder],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
