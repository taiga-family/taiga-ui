import {NgModule} from '@angular/core';
import {TUI_ALERT_QUEUE_OPERATOR, TuiAlertModule} from '@taiga-ui/core';

import {latestAll} from './latest-all';

@NgModule({
    providers: [
        TuiAlertModule,
        {
            provide: TUI_ALERT_QUEUE_OPERATOR,
            useValue: () => latestAll(3),
        },
    ],
})
export class AppModule {}
