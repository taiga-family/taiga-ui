import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'skeleton',
    templateUrl: './skeleton.template.html',
    changeDetection,
})
export class ExampleTuiSkeletonComponent {
    readonly import = import('./examples/import/import.md?raw');
    readonly template = import('./examples/import/insert.md?raw');

    readonly example1: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
    };

    readonly example2: TuiDocExample = {
        HTML: import('./examples/2/index.html?raw'),
    };
}
