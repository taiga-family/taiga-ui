import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiSizeS} from '@taiga-ui/core';

@Component({
    selector: 'example-tui-legend-item',
    templateUrl: './legend-item.template.html',
    changeDetection,
})
export class ExampleTuiLegendItemComponent {
    readonly exampleModule = import('./examples/import/import-module.md?raw');

    readonly exampleHtml = import('./examples/import/insert-template.md?raw');

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

    text = 'Text inside';

    active = false;

    readonly sizeVariants: readonly TuiSizeS[] = ['s', 'm'];

    readonly colorVariants: readonly string[] = [
        'var(--tui-support-04)',
        'var(--tui-primary)',
        'var(--tui-secondary)',
    ];

    size = this.sizeVariants[0];

    disabled = false;

    color = '';
}
