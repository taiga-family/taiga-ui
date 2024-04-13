import {Component} from '@angular/core';
import type {TuiDocExample} from '@taiga-ui/addon-doc';

import {changeDetection} from '#/demo/emulate/change-detection';

@Component({
    selector: 'example-tui-scrollbar',
    templateUrl: './scroll.template.html',
    styleUrls: ['./scroll.style.less'],
    changeDetection,
})
export class ExampleTuiScrollComponent {
    protected readonly exampleScroll = import('./examples/import/scroll.md?raw');
    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleInjectService = import(
        './examples/import/inject-service.md?raw'
    );

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
    };
}
