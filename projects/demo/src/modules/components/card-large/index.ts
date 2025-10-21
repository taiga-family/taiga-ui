import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';

@Component({
    standalone: true,
    imports: [TuiDemo],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected readonly examples = [
        'Basic',
        'Avatar',
        'Single item',
        'Cards List',
        'Cell List',
        'Cell List (2 columns)',
        'Cell List (actions)',
        'Cell List (headless)',
        'Footer alignment',
        'Image',
        'Cell with close',
        'Paddings and radii',
        'Map',
        'In portal',
    ];
}
