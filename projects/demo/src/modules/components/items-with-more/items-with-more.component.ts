import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'example-items-with-more',
    templateUrl: './items-with-more.template.html',
    changeDetection,
})
export class ExampleTuiItemsWithMoreComponent {
    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    protected readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
    };

    protected readonly items = [
        'John Cleese',
        'Eric Idle',
        'Graham Chapman',
        'Michael Palin',
        'Terry Gilliam',
        'Terry Jones',
    ];

    protected readonly requiredVariants = [-1, 2, 4];

    protected readonly itemsLimitVariants = [Infinity, 4, 2];

    protected required = this.requiredVariants[0];

    protected itemsLimit = this.itemsLimitVariants[0];
}
