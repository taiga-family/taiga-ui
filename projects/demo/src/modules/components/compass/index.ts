import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemoModule, TuiSetupComponent} from '@demo/utils';
import {TuiNotificationModule} from '@taiga-ui/core';
import {TuiCompassComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiDemoModule,
        TuiCompassComponent,
        TuiNotificationModule,
        TuiSetupComponent,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
    protected colorVariants = ['#428bf9', 'rgb(234, 56, 24)', 'var(--tui-positive)', ''];

    protected color = this.colorVariants[0];

    protected degrees = 90;
}
