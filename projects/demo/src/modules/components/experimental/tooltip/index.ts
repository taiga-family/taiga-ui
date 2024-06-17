import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TUI_HINT_DIRECTIONS, TuiNotificationComponent} from '@taiga-ui/core';
import {TuiTooltipModule} from '@taiga-ui/experimental';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiNotificationComponent, TuiTooltipModule],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly appearanceVariants = ['', 'error'];

    protected appearance = this.appearanceVariants[0];

    protected directionVariants = TUI_HINT_DIRECTIONS;

    protected direction = this.directionVariants[0];

    protected describeId = '';

    protected showDelay = 500;

    protected hideDelay = 200;
}
