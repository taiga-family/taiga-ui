import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiComponentPipe, TuiExamplePipe, TuiSetupComponent} from '@demo/utils';
import {TuiAddonDocModule} from '@taiga-ui/addon-doc';

@Component({
    standalone: true,
    selector: 'example-title',
    imports: [TuiExamplePipe, TuiComponentPipe, TuiAddonDocModule, TuiSetupComponent],
    templateUrl: './index.html',
    changeDetection,
})
export default class ExampleTuiTitleComponent {
    protected readonly import = import('./examples/import/import-module.md?raw');
    protected readonly template = import('./examples/import/insert-template.md?raw');
}
