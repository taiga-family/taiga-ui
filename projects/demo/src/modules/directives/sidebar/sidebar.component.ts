import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: `example-tui-sidebar`,
    templateUrl: `./sidebar.template.html`,
    changeDetection,
})
export class ExampleTuiSidebarComponent {
    readonly exampleModule = import(`!!raw-loader!./examples/import/import-module.md`);
    readonly exampleHtml = import(`!!raw-loader!./examples/import/insert-template.md`);
    readonly exampleComponent = import(`!!raw-loader!./examples/import/component.md`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/1/index.ts`),
        HTML: import(`!!raw-loader!./examples/1/index.html`),
        LESS: import(`!!raw-loader!./examples/1/index.less`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/2/index.ts`),
        HTML: import(`!!raw-loader!./examples/2/index.html`),
        LESS: import(`!!raw-loader!./examples/2/index.less`),
        './sidebar/my-sidebar.component.html': import(
            `!!raw-loader!./examples/2/sidebar/my-sidebar.component.html`
        ),
        './sidebar/my-sidebar.component.less': import(
            `!!raw-loader!./examples/2/sidebar/my-sidebar.component.less`
        ),
        './sidebar/my-sidebar.component.ts': import(
            `!!raw-loader!./examples/2/sidebar/my-sidebar.component.ts`
        ),
        './sidebar/my-sidebar.module.ts': import(
            `!!raw-loader!./examples/2/sidebar/my-sidebar.module.ts`
        ),
    };
}
