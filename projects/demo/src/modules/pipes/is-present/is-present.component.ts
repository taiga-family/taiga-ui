import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: `example-tui-is-present`,
    templateUrl: `./is-present.template.html`,
    changeDetection,
})
export class ExampleTuiIsPresentComponent {
    readonly exampleModule = import(`./examples/import/import-module.md?raw`);
    readonly exampleHtml = import(`./examples/import/insert-template.md?raw`);

    readonly example1: TuiDocExample = {
        TypeScript: import(`./examples/1/component.ts?raw`),
        HTML: import(`./examples/1/template.html?raw`),
    };
}
