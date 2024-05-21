import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TuiLinkDirective, TuiNotificationComponent} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'tui-styles-info',
    imports: [TuiNotificationComponent, TuiLinkDirective, RouterLink],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StylesInfoComponent {}
