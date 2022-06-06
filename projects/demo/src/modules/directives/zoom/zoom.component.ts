import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'example-tui-zoom',
    templateUrl: './zoom.template.html',
    changeDetection,
})
export class ExampleTuiZoomComponent {
    readonly exampleModule = import('!!raw-loader!./examples/import/import-module.txt');
    readonly exampleHtml = import('!!raw-loader!./examples/import/insert-template.txt');
    readonly exampleComponent = import('!!raw-loader!./examples/import/component.txt');

    readonly example1: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
        HTML: import('!!raw-loader!./examples/1/index.html'),
    };
}
