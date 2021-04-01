import {default as injectService} from '!!raw-loader!./examples/inject-service.txt';
import {Component} from '@angular/core';
import {changeDetection} from '../../../change-detection-strategy';

@Component({
    selector: 'example-tui-destroy',
    templateUrl: './destroy.template.html',
    changeDetection,
})
export class ExampleTuiDestroyComponent {
    injectService = injectService;
}
