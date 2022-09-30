import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: `example-tui-format-date`,
    templateUrl: `./format-date.template.html`,
    changeDetection,
    encapsulation,
})
export class ExampleTuiFormatDateComponent {
    readonly exampleModule = import(`./examples/import/import-module.md?raw`);
    readonly exampleHtml = import(`./examples/import/insert-template.md?raw`);
    readonly exampleTs = import(`./examples/import/provide-service.md?raw`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`./examples/1/index.ts?raw`),
        HTML: import(`./examples/1/index.html?raw`),
        'service.ts': import(`./examples/1/service.ts?raw`),
    };
}
