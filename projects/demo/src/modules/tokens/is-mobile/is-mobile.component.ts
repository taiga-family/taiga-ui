import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {Component} from '@angular/core';
import {changeDetection} from '../../../change-detection-strategy';

@Component({
    selector: 'example-tui-is-mobile',
    templateUrl: './is-mobile.template.html',
    changeDetection,
})
export class ExampleTuiIsMobileComponent {
    readonly exampleInsertTemplate = exampleInsertTemplate;
}
