import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: `example-tui-push`,
    templateUrl: `./push.template.html`,
    changeDetection,
})
export class ExampleTuiPushComponent {
    readonly exampleImportModule = import(
        `!!raw-loader!./examples/import/import-module.md`
    );

    readonly exampleInsertTemplate = import(
        `!!raw-loader!./examples/import/insert-template.md`
    );

    readonly example1: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/1/index.ts`),
        HTML: import(`!!raw-loader!./examples/1/index.html`),
        LESS: import(`!!raw-loader!./examples/1/index.less`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/2/index.ts`),
        HTML: import(`!!raw-loader!./examples/2/index.html`),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/3/index.ts`),
        HTML: import(`!!raw-loader!./examples/3/index.html`),
    };
}
