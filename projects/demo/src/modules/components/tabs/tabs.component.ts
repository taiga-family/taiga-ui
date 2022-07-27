import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: `example-tui-tabs`,
    templateUrl: `./tabs.template.html`,
    changeDetection,
})
export class ExampleTuiTabsComponent {
    buttons = [`button 1`, `button 2`, `button 3`, `button 4`];

    readonly exampleModule = import(`!!raw-loader!./examples/import/import-module.md`);
    readonly exampleHtml = import(`!!raw-loader!./examples/import/insert-template.md`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/1/index.ts`),
        HTML: import(`!!raw-loader!./examples/1/index.html`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/2/index.ts`),
        HTML: import(`!!raw-loader!./examples/2/index.html`),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/3/index.ts`),
        HTML: import(`!!raw-loader!./examples/3/index.html`),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/4/index.ts`),
        HTML: import(`!!raw-loader!./examples/4/index.html`),
    };

    readonly example5: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/5/index.ts`),
        HTML: import(`!!raw-loader!./examples/5/index.html`),
        LESS: import(`!!raw-loader!./examples/5/index.less`),
    };

    readonly example6: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/6/index.ts`),
        HTML: import(`!!raw-loader!./examples/6/index.html`),
        LESS: import(`!!raw-loader!./examples/6/index.less`),
    };

    readonly example7: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/7/index.ts`),
        HTML: import(`!!raw-loader!./examples/7/index.html`),
    };

    readonly moreContentVariants = [``, `And more`];

    moreContent = this.moreContentVariants[0];

    underline = true;

    activeItemIndex = 0;

    itemsLimit = 999;
}
