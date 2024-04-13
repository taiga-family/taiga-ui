import {Component} from '@angular/core';
import type {TuiDocExample} from '@taiga-ui/addon-doc';

import {changeDetection} from '#/demo/emulate/change-detection';

@Component({
    selector: 'example-mobile-dialog',
    templateUrl: './mobile-dialog.template.html',
    changeDetection,
})
export class ExampleTuiMobileDialogComponent {
    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    protected readonly exampleInsertComponent = import(
        './examples/import/insert-component.md?raw'
    );
}
