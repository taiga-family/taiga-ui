import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiExamplePipe, TuiSetupComponent} from '@demo/utils';
import type {TuiRawLoaderContent} from '@taiga-ui/addon-doc';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';

import {TuiCommentExample1} from './examples/1';
import {TuiCommentExample2} from './examples/2';

@Component({
    standalone: true,
    selector: 'example-comment',
    imports: [
        TuiCommentExample1,
        TuiCommentExample2,
        TuiExamplePipe,
        TuiAddonDoc,
        TuiSetupComponent,
    ],
    templateUrl: './comment.template.html',
    changeDetection,
})
export default class ExampleTuiCommentComponent {
    protected readonly import: TuiRawLoaderContent = import(
        './examples/import/import-module.md?raw'
    );

    protected readonly template: TuiRawLoaderContent = import(
        './examples/import/insert-template.md?raw'
    );
}
