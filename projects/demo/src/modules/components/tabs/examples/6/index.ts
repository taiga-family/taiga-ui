import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {DemoRoute} from '@demo/routes';
import {TuiTabDirective, TuiTabsVerticalDirective} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiTabsVerticalDirective, RouterLink, RouterLinkActive, TuiTabDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly docRoutes = DemoRoute;
}
