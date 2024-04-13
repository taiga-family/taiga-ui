import {Component} from '@angular/core';
import type {TuiRawLoaderContent} from '@taiga-ui/addon-doc';

import {changeDetection} from '#/demo/emulate/change-detection';

@Component({
    selector: 'example-card',
    templateUrl: './card-large.template.html',
    changeDetection,
})
export class ExampleTuiCardLargeComponent {
    protected readonly exampleModule: TuiRawLoaderContent = import(
        './examples/import/import-module.md?raw'
    );

    protected readonly exampleHtml: TuiRawLoaderContent = import(
        './examples/import/insert-template.md?raw'
    );
}
