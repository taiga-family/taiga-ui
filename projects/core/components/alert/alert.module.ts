import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TUI_ALERTS} from '@taiga-ui/cdk';
import {TuiNotificationModule} from '@taiga-ui/core/components/notification';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiAlertComponent} from './alert.component';
import {TuiAlertService} from './alert.service';

@NgModule({
    imports: [CommonModule, PolymorpheusModule, TuiNotificationModule],
    declarations: [TuiAlertComponent],
    exports: [TuiAlertComponent],
    entryComponents: [TuiAlertComponent],
    providers: [
        {
            provide: TUI_ALERTS,
            useExisting: TuiAlertService,
            multi: true,
        },
    ],
})
export class TuiAlertModule {}
