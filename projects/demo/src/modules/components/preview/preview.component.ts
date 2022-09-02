import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: `example-preview`,
    templateUrl: `./preview.template.html`,
    changeDetection,
})
export class ExampleTuiPreviewComponent {
    readonly exampleModule = import(`./examples/import/import-module.md?raw`);
    readonly exampleComponent = import(`./examples/import/component.md?raw`);
    readonly exampleHtml = import(`./examples/import/template.md?raw`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`./examples/1/index.ts?raw`),
        LESS: import(`./examples/1/index.less?raw`),
        HTML: import(`./examples/1/index.html?raw`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`./examples/2/index.ts?raw`),
        LESS: import(`./examples/2/index.less?raw`),
        HTML: import(`./examples/2/index.html?raw`),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import(`./examples/3/index.ts?raw`),
        LESS: import(`./examples/3/index.less?raw`),
        HTML: import(`./examples/3/index.html?raw`),
    };
}
