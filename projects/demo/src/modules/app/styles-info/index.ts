import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TuiLink, TuiNotification} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'tui-styles-info',
    imports: [RouterLink, TuiLink, TuiNotification],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StylesInfo {}
