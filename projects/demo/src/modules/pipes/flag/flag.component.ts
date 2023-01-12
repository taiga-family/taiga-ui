import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'example-tui-flag',
    templateUrl: './flag.template.html',
    changeDetection,
})
export class ExampleTuiFlagComponent {
    readonly exampleModule = import('!!raw-loader!./examples/import/import-module.md');
    readonly exampleHtml = import('!!raw-loader!./examples/import/insert-template.md');

    readonly example1: TuiDocExample = {
        HTML: import('!!raw-loader!./examples/1/template.html'),
        TypeScript: import('!!raw-loader!./examples/1/component.ts'),
    };
}
