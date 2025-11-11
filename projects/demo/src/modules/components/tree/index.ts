import {Component} from '@angular/core';
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
        'content.ts': import('./examples/5/content.ts?raw'),
        'content.less': import('./examples/5/content.less?raw'),
    };

    protected readonly routes = DemoRoute;
}
