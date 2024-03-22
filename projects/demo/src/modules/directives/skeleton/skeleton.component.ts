import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

@Component({
    selector: 'skeleton',
    templateUrl: './skeleton.template.html',
    changeDetection,
})
export class ExampleTuiSkeletonComponent {
    protected readonly import = import('./examples/import/import.md?raw');
    protected readonly template = import('./examples/import/insert.md?raw');
}
