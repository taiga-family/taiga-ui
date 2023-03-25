import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: `example-tui-is-present`,
    templateUrl: `./is-present.template.html`,
    changeDetection,
})
export class ExampleTuiIsPresentComponent {
    readonly exampleModule = import(`!!raw-loader!./examples/import/import-module.md`);
    readonly exampleHtml = import(`!!raw-loader!./examples/import/insert-template.md`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/1/component.ts`),
        HTML: import(`!!raw-loader!./examples/1/template.html`),
    };
}
