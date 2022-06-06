import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'example-preview',
    templateUrl: './preview.template.html',
    changeDetection,
})
export class ExampleTuiPreviewComponent {
    readonly exampleModule = import('!!raw-loader!./examples/import/import-module.md');
    readonly exampleComponent = import('!!raw-loader!./examples/import/component.md');
    readonly exampleHtml = import('!!raw-loader!./examples/import/template.md');

    readonly example1: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
        LESS: import('!!raw-loader!./examples/1/index.less'),
        HTML: import('!!raw-loader!./examples/1/index.html'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/2/index.ts'),
        LESS: import('!!raw-loader!./examples/2/index.less'),
        HTML: import('!!raw-loader!./examples/2/index.html'),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/3/index.ts'),
        LESS: import('!!raw-loader!./examples/3/index.less'),
        HTML: import('!!raw-loader!./examples/3/index.html'),
    };
}
