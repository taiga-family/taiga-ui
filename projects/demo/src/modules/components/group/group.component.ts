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
    readonly exampleModule = import('./examples/import/import-module.md');
    readonly exampleHtml = import('./examples/import/insert-template.md');

    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html'),
        LESS: import('./examples/1/index.style.less'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html'),
        LESS: import('./examples/2/index.style.less'),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html'),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import('./examples/4/index.ts?raw'),
        HTML: import('./examples/4/index.html'),
    };

    adaptive = false;
    rounded = true;
    collapsed = false;

    readonly orientationVariants: readonly TuiOrientationT[] = ['horizontal', 'vertical'];

    orientation: TuiOrientationT = this.orientationVariants[0];

    readonly sizeVariants: readonly TuiSizeL[] = ['m', 'l'];

    size: TuiSizeL = this.sizeVariants[0];
}
