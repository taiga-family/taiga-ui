import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiIconComponent, TuiLink} from '@taiga-ui/core';
import {TuiPushComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiPushComponent, TuiLink, RouterLink, TuiIconComponent],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Page {
    protected heading = '';
    protected type = '';

    protected readonly timestampVars = ['', 'A moment ago', 123456789];
    protected timestamp = this.timestampVars[0];
    protected readonly routes = DemoRoute;
}
