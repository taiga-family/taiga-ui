import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';

@Component({
    standalone: true,
    imports: [TuiDemo],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly examples = [
        {name: 'Basic', content: 'html,ts,less'},
        {name: 'Custom icons', content: 'html,ts,less'},
        {name: 'Static', content: 'html,ts'},
    ] as const;
}
