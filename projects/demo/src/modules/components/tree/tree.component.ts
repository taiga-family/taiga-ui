import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

@Component({
    selector: 'example-tree',
    templateUrl: './tree.template.html',
    changeDetection,
})
export class ExampleTuiTreeComponent {
    readonly exampleModule = import('!!raw-loader!./examples/import/import-module.md');

    readonly exampleHtml = import('!!raw-loader!./examples/import/insert-template.md');

    readonly example1 = {
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
        HTML: import('!!raw-loader!./examples/1/index.html'),
    };

    readonly example2 = {
        TypeScript: import('!!raw-loader!./examples/2/index.ts'),
        HTML: import('!!raw-loader!./examples/2/index.html'),
        LESS: import('!!raw-loader!./examples/2/index.less'),
    };

    readonly example3 = {
        TypeScript: import('!!raw-loader!./examples/3/index.ts'),
        HTML: import('!!raw-loader!./examples/3/index.html'),
        LESS: import('!!raw-loader!./examples/3/index.less'),
    };

    readonly example4 = {
        TypeScript: import('!!raw-loader!./examples/4/index.ts'),
        HTML: import('!!raw-loader!./examples/4/index.html'),
    };

    readonly example5 = {
        TypeScript: import('!!raw-loader!./examples/5/index.ts'),
        HTML: import('!!raw-loader!./examples/5/index.html'),
        LESS: import('!!raw-loader!./examples/5/index.less'),
        'content.ts': import('!!raw-loader!./examples/5/content'),
        'content.less': import('!!raw-loader!./examples/5/content.less'),
    };

    readonly example6 = {
        TypeScript: import('!!raw-loader!./examples/6/index.ts'),
        HTML: import('!!raw-loader!./examples/6/index.html'),
    };

    readonly example7 = {
        TypeScript: import('!!raw-loader!./examples/7/index.ts'),
        HTML: import('!!raw-loader!./examples/7/index.html'),
        LESS: import('!!raw-loader!./examples/7/index.less'),
        'service.ts': import('!!raw-loader!./examples/7/service'),
    };
}
