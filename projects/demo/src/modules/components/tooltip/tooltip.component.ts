import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiDirection, TuiHintMode} from '@taiga-ui/core';

@Component({
    selector: 'example-tooltip',
    templateUrl: './tooltip.template.html',
    changeDetection,
})
export class ExampleTuiTooltipComponent {
    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
        LESS: import('./examples/3/index.less?raw'),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import('./examples/4/index.ts?raw'),
        HTML: import('./examples/4/index.html?raw'),
    };

    readonly exampleModule = import('./examples/import/import-module.md?raw');

    readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    readonly modeVariants: readonly TuiHintMode[] = ['error'];

    mode: TuiHintMode | null = null;

    directionVariants: readonly TuiDirection[] = [
        'left',
        'right',
        'bottom-left',
        'bottom-right',
        'bottom-middle',
        'top-left',
        'top-right',
        'top-middle',
    ];

    direction: TuiDirection = this.directionVariants[2];

    describeId = '';

    showDelay = 500;

    hideDelay = 200;
}
