import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiNotificationModule} from '@taiga-ui/core/components/notification';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiNotificationAlertComponent} from './notification-alert.component';

@NgModule({
    imports: [CommonModule, PolymorpheusModule, TuiNotificationModule],
    declarations: [TuiNotificationAlertComponent],
    exports: [TuiNotificationAlertComponent],
})
export class TuiNotificationAlertModule {}
