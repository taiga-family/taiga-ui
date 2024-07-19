import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {DemoRoute} from '@demo/routes';
import {TuiLink, TuiTitle} from '@taiga-ui/core';
import {TuiNotification} from '@taiga-ui/experimental';

@Component({
    standalone: true,
    imports: [TuiNotification, RouterLink, TuiLink, TuiTitle],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly routes = DemoRoute;
}
