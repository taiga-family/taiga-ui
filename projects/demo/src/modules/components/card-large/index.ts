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
        {name: 'Basic', content: 'html,less'},
        {name: 'Avatar', content: 'html'},
        {name: 'Single item', content: 'html,less'},
        {name: 'Cards List', content: 'html,less'},
        {name: 'Cell List', content: 'html'},
        {name: 'Cell List (2 columns)', content: 'html,less'},
        {name: 'Cell List (actions)', content: 'html,less'},
        {name: 'Footer alignment', content: 'html,less'},
        {name: 'Map', content: 'html'},
        {name: 'Image', content: 'html,less'},
        {name: 'Image-dark', content: 'html,less'},
        {name: "Paddings and radius's", content: 'html'},
    ] as const;
}
