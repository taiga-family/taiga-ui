import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemoModule} from '@demo/utils';

@Component({
    standalone: true,
    selector: 'example-chip',
    imports: [TuiDemoModule],
    templateUrl: './index.html',
    changeDetection,
})
export default class ExampleComponent {
    protected readonly examples = [
        'Basic',
        'Sizes and content',
        'Interactive',
        'Use cases',
    ];
}
