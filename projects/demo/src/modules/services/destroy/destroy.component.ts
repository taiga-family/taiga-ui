import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'example-tui-destroy',
    templateUrl: './destroy.template.html',
    changeDetection,
})
export class ExampleTuiDestroyComponent {
    injectService = import('!!raw-loader!./examples/inject-service.md');

    readonly example: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/1/component.ts'),
        HTML: import('!!raw-loader!./examples/1/template.html'),
    };
}
