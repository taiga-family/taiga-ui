import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import type {TuiSizeS} from '@taiga-ui/core';

@Component({
    selector: 'example-tui-legend-item',
    templateUrl: './legend-item.template.html',
    changeDetection,
})
export class ExampleTuiLegendItemComponent {
    protected readonly exampleModule = import('./examples/import/import-module.md?raw');

    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

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

    protected text = 'Text inside';

    protected active = false;

    protected readonly sizeVariants: readonly TuiSizeS[] = ['s', 'm'];

    protected readonly colorVariants: readonly string[] = [
        'var(--tui-support-04)',
        'var(--tui-primary)',
        'var(--tui-secondary)',
    ];

    protected size = this.sizeVariants[0];

    protected disabled = false;

    protected color = '';
}
