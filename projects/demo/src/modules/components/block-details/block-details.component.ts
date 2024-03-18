import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiExamplePipe, TuiSetupComponent} from '@demo/utils';
import type {TuiRawLoaderContent} from '@taiga-ui/addon-doc';
import {TuiAddonDocModule} from '@taiga-ui/addon-doc';

import {TuiBlockDetailsExample1} from './examples/1';
import {TuiBlockDetailsExample2} from './examples/2';

@Component({
    standalone: true,
    selector: 'example-block-details',
    imports: [
        TuiExamplePipe,
        TuiBlockDetailsExample1,
        TuiBlockDetailsExample2,
        TuiAddonDocModule,
        TuiSetupComponent,
    ],
    templateUrl: './block-details.template.html',
    changeDetection,
})
export default class ExampleTuiBlockDetailsComponent {
    protected readonly import: TuiRawLoaderContent = import(
        './examples/import/import-module.md?raw'
    );

    protected readonly template: TuiRawLoaderContent = import(
        './examples/import/insert-template.md?raw'
    );
}
