import {default as injectService} from '!!raw-loader!./examples/inject-service.txt';
import {Component} from '@angular/core';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

import {default as exampleTs} from '!!raw-loader!./examples/1/component.ts';
import {default as exampleHtml} from '!!raw-loader!./examples/1/template.html';

@Component({
    selector: 'example-tui-destroy',
    templateUrl: './destroy.template.html',
    changeDetection,
})
export class ExampleTuiDestroyComponent {
    injectService = injectService;

    readonly example: FrontEndExample = {
        TypeScript: exampleTs,
        HTML: exampleHtml,
    };
}
