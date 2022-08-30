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
        TypeScript: import(`./examples/1/index.ts?raw`),
        HTML: import(`./examples/1/index.html?raw`),
    };

    readonly exampleModule = import(`./examples/import/import-module.md?raw`);

    readonly exampleHtml = import(`./examples/import/insert-template.md?raw`);
}
