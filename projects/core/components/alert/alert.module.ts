import {NgIf} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiNotification} from '@taiga-ui/core/components/notification';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiAlertComponent} from './alert.component';
import {TuiAlertDirective} from './alert.directive';

@NgModule({
    imports: [TuiNotification, PolymorpheusOutlet, NgIf],
    declarations: [TuiAlertDirective, TuiAlertComponent],
    exports: [TuiAlertDirective, TuiAlertComponent],
})
export class TuiAlert {}
