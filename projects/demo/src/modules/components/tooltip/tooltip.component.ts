import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {type TuiDocExample} from '@taiga-ui/addon-doc';
import {TUI_HINT_DIRECTIONS} from '@taiga-ui/core';

@Component({
    selector: 'example-tooltip',
    templateUrl: './tooltip.template.html',
    changeDetection,
})
export class ExampleTuiTooltipComponent {
    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
    };

    protected readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
    };

    protected readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
        LESS: import('./examples/3/index.less?raw'),
    };

    protected readonly example4: TuiDocExample = {
        TypeScript: import('./examples/4/index.ts?raw'),
        HTML: import('./examples/4/index.html?raw'),
    };

    protected readonly exampleModule = import('./examples/import/import-module.md?raw');

    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected readonly appearanceVariants = ['', 'error'];

    protected appearance = this.appearanceVariants[0];

    protected directionVariants = TUI_HINT_DIRECTIONS;

    protected direction = this.directionVariants[0];

    protected describeId = '';

    protected showDelay = 500;

    protected hideDelay = 200;
}
