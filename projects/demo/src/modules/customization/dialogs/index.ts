import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';

import {TuiDialogsExample1} from './examples/1';
import {TuiDialogsExample2} from './examples/2';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiDialogsExample1, TuiDialogsExample2],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly example1 = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
        'prompt/prompt.service.ts': import('./examples/1/prompt/prompt.service.ts?raw'),
        'prompt/prompt-options.ts': import('./examples/1/prompt/prompt-options.ts?raw'),
        'prompt/prompt.component.ts': import(
            './examples/1/prompt/prompt.component.ts?raw'
        ),
        'prompt/prompt.template.html': import(
            './examples/1/prompt/prompt.template.html?raw'
        ),
        'prompt/prompt.style.less': import('./examples/1/prompt/prompt.style.less?raw'),
    };

    protected readonly example2 = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
        'custom-dialog/custom-dialog.service.ts': import(
            './examples/2/custom-dialog/custom-dialog.service.ts?raw'
        ),
        'custom-dialog/custom-dialog.directive.ts': import(
            './examples/2/custom-dialog/custom-dialog.directive.ts?raw'
        ),
        'custom-dialog/custom-dialog.component.ts': import(
            './examples/2/custom-dialog/custom-dialog.component.ts?raw'
        ),
        'custom-dialog/custom-dialog.style.less': import(
            './examples/2/custom-dialog/custom-dialog.style.less?raw'
        ),
    };
}
