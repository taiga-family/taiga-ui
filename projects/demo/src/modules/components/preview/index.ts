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
        {name: 'Full preview', content: 'html,ts,less'},
        {name: 'Preview with directive', content: 'html,ts'},
        {name: 'Simple mode', content: 'html,ts'},
        {name: 'With loading and unavailable image', content: 'html,ts'},
    ] as const;
}
