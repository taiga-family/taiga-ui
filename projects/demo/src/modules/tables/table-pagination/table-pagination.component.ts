import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'example-tui-table-pagination',
    templateUrl: './table-pagination.template.html',
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
        HTML: import('!!raw-loader!./examples/1/index.html'),
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/2/index.ts'),
        HTML: import('!!raw-loader!./examples/2/index.html'),
    };

    readonly exampleModule = import('!!raw-loader!./examples/import/import-module.md');
    readonly exampleHtml = import('!!raw-loader!./examples/import/insert-template.md');
}
