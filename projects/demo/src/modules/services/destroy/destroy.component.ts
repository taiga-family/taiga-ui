import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: `example-tui-destroy`,
    templateUrl: `./destroy.template.html`,
    changeDetection,
})
export class ExampleTuiDestroyComponent {
    provideService = import(`./examples/provide-service.md?raw`);
    injectService = import(`./examples/inject-service.md?raw`);

    readonly example: TuiDocExample = {
        TypeScript: import(`./examples/1/component.ts?raw`),
        HTML: import(`./examples/1/template.html?raw`),
    };
}
