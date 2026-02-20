import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';

@Component({
    imports: [TuiDemo],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly customContent = {
        'content.ts': import('./examples/5/content.ts?raw', {with: {loader: 'text'}}),
        'content.less': import('./examples/5/content.less'),
    };

    protected readonly routes = DemoRoute;
}
`;export{o as default};
