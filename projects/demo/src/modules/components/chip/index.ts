import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';

@Component({
    standalone: true,
    selector: 'example-chip',
    imports: [TuiDemo],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected readonly examples = [
        'Basic',
        'Sizes and content',
        'Interactive',
        'Use cases',
    ];
}
