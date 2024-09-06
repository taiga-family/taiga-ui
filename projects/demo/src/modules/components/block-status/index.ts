import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiButton} from '@taiga-ui/core';
import {TuiAsideItemDirective, TuiBlockStatus} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [TuiAsideItemDirective, TuiBlockStatus, TuiButton, TuiDemo],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected card = false;

    protected readonly examples = [
        {name: 'Basic', content: 'html,ts'},
        {name: 'With actions', content: 'html,ts'},
        {name: 'Cards', content: 'html,ts,less'},
        {name: 'Customization', content: 'html,ts,less'},
        {name: 'Mobile', content: 'html,ts,less'},
    ] as const;
}
