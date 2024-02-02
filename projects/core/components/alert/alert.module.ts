import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiNotificationModule} from '@taiga-ui/core/components/notification';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiAlertComponent} from './alert.component';
import {TuiAlertDirective} from './alert.directive';

@NgModule({
    imports: [CommonModule, PolymorpheusModule, TuiNotificationModule],
    declarations: [TuiAlertComponent, TuiAlertDirective],
    exports: [TuiAlertComponent, TuiAlertDirective],
})
export class TuiAlertModule {}
