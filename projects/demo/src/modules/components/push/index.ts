import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiButton, TuiIcon} from '@taiga-ui/core';
import {TuiPush} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiPush, TuiIcon, TuiButton],
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
