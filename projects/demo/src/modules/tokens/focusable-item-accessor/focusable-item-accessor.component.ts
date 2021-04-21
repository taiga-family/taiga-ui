import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {Component} from '@angular/core';
import {changeDetection} from '../../../change-detection-strategy';

@Component({
    selector: 'example-tui-focusable-item-accessor',
    templateUrl: './focusable-item-accessor.template.html',
    changeDetection,
})
export class ExampleTuiFocusableItemAccessorComponent {
    readonly exampleInsertTemplate = exampleInsertTemplate;
}
