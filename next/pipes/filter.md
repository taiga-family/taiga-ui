# Filter

- **Package**: `CDK`
- **Type**: pipes

Pipe for filtering an array

### Usage Examples

#### Usage

**Template:**
```html
<table tuiTable [style.width.rem]="17" >
<thead>
<tr>
<th tuiTh>Name</th>
<th tuiTh>Sum, $</th>
</tr>
</thead>
<tbody tuiTbody> @for (item of items | tuiFilter: matcher : 300; track item) { <tr>
<td tuiTd>{{ item.name }}</td>
<td tuiTd>{{ item.price }}</td>
</tr> } </tbody>
</table>
```

**TypeScript:**
```ts
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
    imports: [TuiFilterPipe, TuiTable],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
@import '@taiga-ui/styles/utils';

[tuiTh],
[tuiTd] {
    border: none;
}

[tuiTd] {
    font: var(--tui-typography-body-m) !important;
}
```
