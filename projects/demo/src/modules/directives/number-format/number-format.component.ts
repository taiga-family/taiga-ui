import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiExamplePipe, TuiSetupComponent} from '@demo/utils';
import {TuiAddonDocModule} from '@taiga-ui/addon-doc';

import {TuiNumberFormatExample1} from './examples/1';

@Component({
    standalone: true,
    selector: 'example-tui-number-format',
    imports: [
        TuiExamplePipe,
        TuiSetupComponent,
        AsyncPipe,
        TuiAddonDocModule,
        TuiNumberFormatExample1,
    ],
    templateUrl: './number-format.template.html',
    changeDetection,
})
export default class ExampleTuiNumberFormatComponent {
    protected readonly import = import('./examples/import/import-module.md?raw');
    protected readonly template = import('./examples/import/insert-template.md?raw');
}
