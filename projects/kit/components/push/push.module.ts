import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
    TuiButtonDirective,
    TuiFormatDatePipe,
    TuiLinkDirective,
    TuiSvgComponent,
} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiPushComponent} from './push.component';
import {TuiPushAlertComponent} from './push-alert.component';
import {TuiPushAlertDirective} from './push-alert.directive';

@NgModule({
    imports: [
        CommonModule,
        PolymorpheusModule,
        TuiButtonDirective,
        TuiLinkDirective,
        TuiSvgComponent,
        TuiFormatDatePipe,
    ],
    declarations: [TuiPushComponent, TuiPushAlertComponent, TuiPushAlertDirective],
    exports: [TuiPushComponent, TuiPushAlertComponent, TuiPushAlertDirective],
})
export class TuiPushModule {}
