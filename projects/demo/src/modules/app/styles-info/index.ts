import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {DemoRoute} from '@demo/routes';
import {TuiLink, TuiNotification} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'tui-styles-info',
    imports: [TuiNotification, TuiLink, RouterLink],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StylesInfo {
    protected readonly routes = DemoRoute;
}
