import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: `example-mobile-dialog`,
    templateUrl: `./mobile-dialog.template.html`,
    changeDetection,
})
export class ExampleTuiMobileDialogComponent {
    readonly example1: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/1/index.ts`),
        HTML: import(`!!raw-loader!./examples/1/index.html`),
    };

    readonly exampleModule = import(`!!raw-loader!./examples/import/import-module.md`);

    readonly exampleInsertComponent = import(
        `!!raw-loader!./examples/import/insert-component.md`
    );
}
