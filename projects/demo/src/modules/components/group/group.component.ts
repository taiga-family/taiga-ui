import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiOrientationT, TuiSizeL} from '@taiga-ui/core';

@Component({
    selector: 'example-group',
    templateUrl: './group.template.html',
    styleUrls: ['./group.style.less'],
    changeDetection,
})
export class ExampleTuiGroupComponent {
    readonly exampleModule = import('!!raw-loader!./examples/import/import-module.md');
    readonly exampleHtml = import('!!raw-loader!./examples/import/insert-template.md');

    readonly example1: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
        HTML: import('!!raw-loader!./examples/1/index.html'),
        LESS: import('!!raw-loader!./examples/1/index.style.less'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/2/index.ts'),
        HTML: import('!!raw-loader!./examples/2/index.html'),
        LESS: import('!!raw-loader!./examples/2/index.style.less'),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/3/index.ts'),
        HTML: import('!!raw-loader!./examples/3/index.html'),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/4/index.ts'),
        HTML: import('!!raw-loader!./examples/4/index.html'),
    };

    adaptive = false;
    rounded = true;
    collapsed = false;

    readonly orientationVariants: readonly TuiOrientationT[] = ['horizontal', 'vertical'];

    orientation: TuiOrientationT = this.orientationVariants[0];

    readonly sizeVariants: readonly TuiSizeL[] = ['m', 'l'];

    size: TuiSizeL = this.sizeVariants[0];
}
