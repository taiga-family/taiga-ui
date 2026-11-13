# TablePagination

- **Package**: `ADDON-TABLE`
- **Type**: components

Component to show pagination in table footer

### How to Use (Import)

```ts
import {TuiTablePagination} from '@taiga-ui/addon-table';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiTablePagination,
  ],
})
export class Example {}
```

### How to Use (Template)

```html
<tui-table-pagination
  [total]="total"
  [(page)]="page"
  [(size)]="size"
></tui-table-pagination>
```

### Example

```html
<tui-table-pagination [items]="items" [page]="page" [size]="size" [total]="total" (paginationChange)="documentationPropertyPaginationChange.emitEvent($event); update($event)" />
```

### API - Inputs

| Property | Type | Description |
|----------|-----|----------|
| total | `number` | Total amount of items/lines in the table. |
| size | `number` | Items/Lines per page. Uses the first element inside items by default. |
| page | `number` | Current page. Indexing starts at zero. |
| items | `readonly number[]` | Options to select amount of lines per page. |
| paginationChange | `TuiTablePagination` | Event emits when page or size changes. |

### Usage Examples

#### Usage

**Template:**
```html
<tui-table-pagination [page]="page" [size]="size" [total]="237" (paginationChange)="onPagination($event)" />
<p>Current page: {{ page }}</p>
<p>Items per page: {{ size }}</p>
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTablePagination, type TuiTablePaginationEvent} from '@taiga-ui/addon-table';

@Component({
    standalone: true,
    imports: [TuiTablePagination],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected page = 3;
    protected size = 10;

    protected onPagination({page, size}: TuiTablePaginationEvent): void {
        this.page = page;
        this.size = size;
    }
}
```

#### Custom size-option content

You can customize the component via DI-token `TUI_TABLE_PAGINATION_OPTIONS` . Use function `tuiTablePaginationOptionsProvider` to provide new value of this token.

**Template:**
```html
<tui-table-pagination [items]="sizeOptions" [total]="total" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiTablePagination,
    tuiTablePaginationOptionsProvider,
} from '@taiga-ui/addon-table';

@Component({
    standalone: true,
    imports: [TuiTablePagination],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiTablePaginationOptionsProvider({
            sizeOptionContent: ({$implicit, total}) => {
                switch ($implicit) {
                    case 10:
                        return 'Ten';
                    case total:
                        return 'Show all rows';
                    default:
                        return $implicit;
                }
            },
        }),
    ],
})
export default class Example {
    protected total = 350;
    protected sizeOptions = [10, 50, 100, this.total];
}
```

#### Toggle pages label

**Template:**
```html
<tui-table-pagination [items]="sizeOptions" [total]="total" />
```

**TypeScript:**
```ts
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiTablePagination,
    tuiTablePaginationOptionsProvider,
} from '@taiga-ui/addon-table';

@Component({
    standalone: true,
    imports: [TuiTablePagination],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiTablePaginationOptionsProvider({
            showPages: false,
        }),
    ],
})
export default class Example {
    protected total = 350;
    protected sizeOptions = [10, 50, 100, this.total];
}
```
