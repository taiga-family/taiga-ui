import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiLink} from '@taiga-ui/core';

@Component({
    imports: [TuiDemo, TuiLink, RouterLink],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly routes = DemoRoute;
}
