import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: `example-tui-table-pagination`,
    templateUrl: `./table-pagination.template.html`,
    changeDetection,
    encapsulation,
})
export class ExampleTuiTablePaginationComponent {
    readonly itemsVariants = [
        [10, 20, 50, 100],
        [10, 100, 500],
    ];

    total = 1000;
    page = 5;
    items = this.itemsVariants[0];
    size = this.items[0];

    readonly example1: TuiDocExample = {
        HTML: import(`./examples/1/index.html?raw`),
        TypeScript: import(`./examples/1/index.ts?raw`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`./examples/2/index.ts?raw`),
        HTML: import(`./examples/2/index.html?raw`),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import(`./examples/3/index.ts?raw`),
        HTML: import(`./examples/3/index.html?raw`),
    };

    readonly exampleModule = import(`./examples/import/import-module.md?raw`);
    readonly exampleHtml = import(`./examples/import/insert-template.md?raw`);
}
