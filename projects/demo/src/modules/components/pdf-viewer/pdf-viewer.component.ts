import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: `example-tui-pdf-viewer`,
    templateUrl: `./pdf-viewer.template.html`,
    changeDetection,
})
export class ExampleTuiPdfViewerComponent {
    readonly exampleService = import(`!!raw-loader!./examples/import/service.md`);
    readonly exampleModule = import(`!!raw-loader!./examples/import/import-module.md`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/1/index.ts`),
        HTML: import(`!!raw-loader!./examples/1/index.html`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/2/index.ts`),
        HTML: import(`!!raw-loader!./examples/2/index.html`),
        'actions-content.component.ts': import(
            `!!raw-loader!./examples/2/actions-content.component.ts`
        ),
        'pdf-content.component.ts': import(
            `!!raw-loader!./examples/2/pdf-content.component.ts`
        ),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/3/index.ts`),
        HTML: import(`!!raw-loader!./examples/3/index.html`),
        LESS: import(`!!raw-loader!./examples/3/index.less`),
    };
}
