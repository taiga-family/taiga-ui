import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {DemoRoute} from '@demo/routes';
import {TuiLink, TuiNotificationComponent} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'tui-styles-info',
    imports: [TuiNotificationComponent, TuiLink, RouterLink],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StylesInfoComponent {
    protected readonly routes = DemoRoute;
}
