# Filter

- **Package**: `CDK`
- **Type**: pipes

Pipe for filtering an array

### How to Use (Import)

```ts
import {TuiFilterPipe} from '@taiga-ui/cdk';

// ...

@Component({
  standalone: true,
  imports: [
    // ...
    TuiFilterPipe,
  ],
  // ...
})
export class Example {}
```

### How to Use (Template)

```html
<div *ngFor="let item of items | tuiFilter: matcher: someArg">{{item}}</div>
```

### Usage Examples

#### Usage

**Template:**
```html
<table tuiTable [style.width.rem]="17" >
<thead tuiThead>
<tr tuiThGroup>
<th tuiTh>Name</th>
<th tuiTh>Sum, $</th>
</tr>
</thead>
<tbody tuiTbody>
<tr *ngFor="let item of items | tuiFilter: matcher : 300">
<td tuiTd>{{ item.name }}</td>
<td tuiTd>{{ item.price }}</td>
</tr>
</tbody>
</table>
```

**TypeScript:**
```ts
import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTable} from '@taiga-ui/addon-table';
import {TuiFilterPipe} from '@taiga-ui/cdk';

export interface Item {
    readonly name: string;
    readonly price: number;
}

@Component({
    standalone: true,
    imports: [NgForOf, TuiFilterPipe, TuiTable],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items: readonly Item[] = [
        {
            name: 'Sword',
            price: 1000,
        },
        {
            name: 'Axe',
            price: 100,
        },
        {
            name: 'Spear',
            price: 500,
        },
    ];

    protected readonly matcher = (item: Item, search: number): boolean =>
        item.price > search;
}
```

**LESS:**
```less
@import '@taiga-ui/core/styles/taiga-ui-local';

[tuiTh],
[tuiTd] {
    border: none;
}

[tuiTd] {
    font: var(--tui-font-text-m) !important;
}
```
