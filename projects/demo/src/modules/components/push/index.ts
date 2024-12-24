import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiButton, TuiIcon} from '@taiga-ui/core';
import {TuiPush} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiButton, TuiDemo, TuiIcon, TuiPush],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Page {
    protected readonly examples = ['Basic', 'Service', 'Directive'];
    protected heading = '';
    protected type = '';

    protected readonly timestampVars = ['', 'A moment ago', 123456789];
    protected timestamp = this.timestampVars[0]!;
    protected readonly routes = DemoRoute;
}
