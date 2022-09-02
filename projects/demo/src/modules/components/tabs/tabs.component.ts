import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: `example-tui-tabs`,
    templateUrl: `./tabs.template.html`,
    changeDetection,
})
export class ExampleTuiTabsComponent {
    buttons = [`button 1`, `button 2`, `button 3`, `button 4`];

    readonly exampleModule = import(`./examples/import/import-module.md?raw`);
    readonly exampleHtml = import(`./examples/import/insert-template.md?raw`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`./examples/1/index.ts?raw`),
        HTML: import(`./examples/1/index.html?raw`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`./examples/2/index.ts?raw`),
        HTML: import(`./examples/2/index.html?raw`),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import(`./examples/3/index.ts?raw`),
        HTML: import(`./examples/3/index.html?raw`),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import(`./examples/4/index.ts?raw`),
        HTML: import(`./examples/4/index.html?raw`),
    };

    readonly example5: TuiDocExample = {
        TypeScript: import(`./examples/5/index.ts?raw`),
        HTML: import(`./examples/5/index.html?raw`),
        LESS: import(`./examples/5/index.less?raw`),
    };

    readonly example6: TuiDocExample = {
        TypeScript: import(`./examples/6/index.ts?raw`),
        HTML: import(`./examples/6/index.html?raw`),
        LESS: import(`./examples/6/index.less?raw`),
    };

    readonly example7: TuiDocExample = {
        TypeScript: import(`./examples/7/index.ts?raw`),
        HTML: import(`./examples/7/index.html?raw`),
    };

    readonly moreContentVariants = [``, `And more`];

    moreContent = this.moreContentVariants[0];

    underline = true;

    activeItemIndex = 0;

    itemsLimit = 999;
}
