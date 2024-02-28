import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

@Component({
    selector: 'example-tui-label',
    templateUrl: './label.template.html',
    changeDetection,
})
export class ExampleTuiLabelComponent {
    protected readonly import = import('./examples/import/import.md?raw');
    protected readonly template = import('./examples/import/insert.md?raw');
}
