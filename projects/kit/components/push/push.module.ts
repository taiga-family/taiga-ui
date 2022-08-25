import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TUI_ALERTS} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiFormatDatePipeModule,
    TuiLinkModule,
    TuiSvgModule,
} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiPushComponent} from './push.component';
import {TuiPushDirective} from './push.directive';
import {TuiPushService} from './push.service';
import {TuiPushAlertComponent} from './push-alert.component';
import {TuiPushAlertDirective} from './push-alert.directive';

@NgModule({
    imports: [
        CommonModule,
        PolymorpheusModule,
        TuiButtonModule,
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
    providers: [
        {
            provide: TUI_ALERTS,
            useExisting: TuiPushService,
            multi: true,
        },
    ],
})
export class TuiPushModule {}
