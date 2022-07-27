import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

@Component({
    selector: `example-tui-data-list`,
    templateUrl: `./data-list.template.html`,
    changeDetection,
})
export class ExampleTuiDataListComponent {
    readonly exampleModule = import(`!!raw-loader!./examples/import/import-module.md`);

    readonly exampleHtml = import(`!!raw-loader!./examples/import/insert-template.md`);

    readonly example1 = {
        TypeScript: import(`!!raw-loader!./examples/1/index.ts`),
        HTML: import(`!!raw-loader!./examples/1/index.html`),
    };

    readonly example2 = {
        TypeScript: import(`!!raw-loader!./examples/2/index.ts`),
        HTML: import(`!!raw-loader!./examples/2/index.html`),
    };

    readonly example3 = {
        TypeScript: import(`!!raw-loader!./examples/3/index.ts`),
        HTML: import(`!!raw-loader!./examples/3/index.html`),
    };

    readonly example4 = {
        TypeScript: import(`!!raw-loader!./examples/4/index.ts`),
        HTML: import(`!!raw-loader!./examples/4/index.html`),
        'custom-list.component.ts': import(
            `!!raw-loader!./examples/4/custom-list/custom-list.component.ts`
        ),
        'custom-list.template.html': import(
            `!!raw-loader!./examples/4/custom-list/custom-list.template.html`
        ),
    };

    readonly example5 = {
        TypeScript: import(`!!raw-loader!./examples/5/index.ts`),
        HTML: import(`!!raw-loader!./examples/5/index.html`),
        LESS: import(`!!raw-loader!./examples/5/index.less`),
    };

    readonly example6 = {
        TypeScript: import(`!!raw-loader!./examples/6/index.ts`),
        HTML: import(`!!raw-loader!./examples/6/index.html`),
    };
}
