import {Component} from '@angular/core';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: `example-tui-scrollbar`,
    templateUrl: `./scrollbar.template.html`,
})
export class ExampleTuiScrollbarComponent {
    readonly exampleModule = import(`!!raw-loader!./examples/import/import-module.md`);
    readonly exampleHtml = import(`!!raw-loader!./examples/import/insert-template.md`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/1/component.ts`),
        HTML: import(`!!raw-loader!./examples/1/template.html`),
        LESS: import(`!!raw-loader!./examples/1/style.less`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/2/component.ts`),
        HTML: import(`!!raw-loader!./examples/2/template.html`),
        LESS: import(`!!raw-loader!./examples/2/style.less`),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/3/component.ts`),
        HTML: import(`!!raw-loader!./examples/3/template.html`),
        LESS: import(`!!raw-loader!./examples/3/style.less`),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/4/component.ts`),
        HTML: import(`!!raw-loader!./examples/4/template.html`),
    };

    readonly example5: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/5/component.ts`),
        HTML: import(`!!raw-loader!./examples/5/template.html`),
    };

    readonly example6: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/6/component.ts`),
        HTML: import(`!!raw-loader!./examples/6/template.html`),
        LESS: import(`!!raw-loader!./examples/6/style.less`),
    };
}
