import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

@Component({
    selector: `example-tree`,
    templateUrl: `./tree.template.html`,
    changeDetection,
})
export class ExampleTuiTreeComponent {
    readonly exampleModule = import(`./examples/import/import-module.md?raw`);

    readonly exampleHtml = import(`./examples/import/insert-template.md?raw`);

    readonly example1 = {
        TypeScript: import(`./examples/1/index.ts?raw`),
        HTML: import(`./examples/1/index.html?raw`),
    };

    readonly example2 = {
        TypeScript: import(`./examples/2/index.ts?raw`),
        HTML: import(`./examples/2/index.html?raw`),
        LESS: import(`./examples/2/index.less?raw`),
    };

    readonly example3 = {
        TypeScript: import(`./examples/3/index.ts?raw`),
        HTML: import(`./examples/3/index.html?raw`),
        LESS: import(`./examples/3/index.less?raw`),
    };

    readonly example4 = {
        TypeScript: import(`./examples/4/index.ts?raw`),
        HTML: import(`./examples/4/index.html?raw`),
    };

    readonly example5 = {
        TypeScript: import(`./examples/5/index.ts?raw`),
        HTML: import(`./examples/5/index.html?raw`),
        LESS: import(`./examples/5/index.less?raw`),
        'content.ts': import(`./examples/5/content.ts?raw`),
        'content.less': import(`./examples/5/content.less?raw`),
    };

    readonly example6 = {
        TypeScript: import(`./examples/6/index.ts?raw`),
        HTML: import(`./examples/6/index.html?raw`),
    };

    readonly example7 = {
        TypeScript: import(`./examples/7/index.ts?raw`),
        HTML: import(`./examples/7/index.html?raw`),
        LESS: import(`./examples/7/index.less?raw`),
        'service.ts': import(`./examples/7/service.ts?raw`),
    };
}
