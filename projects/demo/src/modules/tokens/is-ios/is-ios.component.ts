import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {Component} from '@angular/core';
import {changeDetection} from '../../../change-detection-strategy';

@Component({
    selector: 'example-tui-is-ios',
    templateUrl: './is-ios.template.html',
    changeDetection,
})
export class ExampleTuiIsIOSComponent {
    readonly exampleInsertTemplate = exampleInsertTemplate;
}
