import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {Component} from '@angular/core';
import {changeDetection} from '../../../change-detection-strategy';

@Component({
    selector: 'example-tui-months',
    templateUrl: './months.template.html',
    changeDetection,
})
export class ExampleTuiMonthsComponent {
    readonly exampleInsertTemplate = exampleInsertTemplate;
}
