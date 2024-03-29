import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiButtonDirective} from '@taiga-ui/core/components/button';
import {TuiSvgModule} from '@taiga-ui/core/components/svg';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiNotificationComponent} from './notification.component';

@NgModule({
    imports: [CommonModule, TuiSvgModule, TuiButtonDirective, PolymorpheusModule],
    declarations: [TuiNotificationComponent],
    exports: [TuiNotificationComponent],
})
export class TuiNotificationModule {}
