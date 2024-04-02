import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
    TuiButtonDirective,
    TuiFormatDatePipeModule,
    TuiLinkModule,
    TuiSvgModule,
} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiPushComponent} from './push.component';
import {TuiPushDirective} from './push.directive';
import {TuiPushAlertComponent} from './push-alert.component';
import {TuiPushAlertDirective} from './push-alert.directive';

@NgModule({
    imports: [
        CommonModule,
        PolymorpheusModule,
        TuiButtonDirective,
        TuiLinkModule,
        TuiSvgModule,
        TuiFormatDatePipeModule,
    ],
    declarations: [
        TuiPushComponent,
        TuiPushDirective,
        TuiPushAlertComponent,
        TuiPushAlertDirective,
    ],
    exports: [
        TuiPushComponent,
        TuiPushDirective,
        TuiPushAlertComponent,
        TuiPushAlertDirective,
    ],
})
export class TuiPushModule {}
