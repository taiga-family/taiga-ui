import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';

@Component({
    imports: [TuiDemo],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page extends Array {
    protected readonly examples = ['Popout window', 'Picture in Picture', 'Directive'];
    protected readonly [1] = {
        'popout.ts': import('./examples/2/popout.ts?raw', {with: {loader: 'text'}}),
    };
}
`;export{o as default};
