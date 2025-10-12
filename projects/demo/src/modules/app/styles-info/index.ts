import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiNotification} from '@taiga-ui/core';

@Component({
    selector: 'tui-styles-info',
    imports: [TuiNotification],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StylesInfo {}
