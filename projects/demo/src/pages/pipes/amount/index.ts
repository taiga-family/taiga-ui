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
    protected readonly examples = [
        'base',
        'format',
        'options (DI)',
        'separate decimal part',
        'options (without DI)',
    ];
    protected readonly routes = DemoRoute;
}
