import {NgModule} from '@angular/core';
import {TUI_ALERT_QUEUE_OPERATOR, TuiAlertModule} from '@taiga-ui/core';
import {mergeAll} from 'rxjs/operators';

@NgModule({
    providers: [
        TuiAlertModule,
        {
            provide: TUI_ALERT_QUEUE_OPERATOR,
            useValue: () => mergeAll(3),
        },
    ],
})
export class AppModule {}
