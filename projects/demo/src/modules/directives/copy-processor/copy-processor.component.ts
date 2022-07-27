import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: `example-tui-copy-processor`,
    templateUrl: `./copy-processor.template.html`,
    changeDetection,
})
export class ExampleTuiCopyProcessorComponent {
    readonly example1: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/1/index.ts`),
        HTML: import(`!!raw-loader!./examples/1/index.html`),
    };

    readonly exampleModule = import(`!!raw-loader!./examples/import/import-module.md`);

    readonly exampleHtml = import(`!!raw-loader!./examples/import/insert-template.md`);
}
