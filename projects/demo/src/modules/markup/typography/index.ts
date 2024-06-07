import {ClipboardModule} from '@angular/cdk/clipboard';
import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiLinkDirective, TuiNotificationComponent} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiNotificationComponent,
        TuiLinkDirective,
        RouterLink,
        ClipboardModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class PageComponent {
    protected readonly routes = DemoRoute;
}
