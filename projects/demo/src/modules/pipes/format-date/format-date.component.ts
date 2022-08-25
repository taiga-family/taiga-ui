import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: `example-tui-format-date`,
    templateUrl: `./format-date.template.html`,
    changeDetection,
})
export class ExampleTuiFormatDateComponent {
    readonly exampleModule = import(`!!raw-loader!./examples/import/import-module.md`);
    readonly exampleHtml = import(`!!raw-loader!./examples/import/insert-template.md`);
    readonly exampleTs = import(`!!raw-loader!./examples/import/provide-service.md`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/1/index.ts`),
        HTML: import(`!!raw-loader!./examples/1/index.html`),
        'service.ts': import(`!!raw-loader!./examples/1/service.ts`),
    };
}
