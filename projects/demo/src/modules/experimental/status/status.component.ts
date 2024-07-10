import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'status',
    templateUrl: './status.template.html',
    changeDetection,
})
export class ExampleTuiStatusComponent {
    readonly import = import('./examples/import/import.md?raw');
    readonly template = import('./examples/import/insert.md?raw');

    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };
}
