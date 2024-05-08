import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiSetupComponent} from '@demo/utils';
import {TuiAxesModule, TuiBarChartModule, TuiBarComponent} from '@taiga-ui/addon-charts';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiHintModule, TuiNotificationModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {ExampleTuiAxesComponent} from './axes.component';
import {TuiAxesExample1} from './examples/1';
import {TuiAxesExample2} from './examples/2';
import {TuiAxesExample3} from './examples/3';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TuiAxesModule,
        TuiBarChartModule,
        TuiBarComponent,
        TuiHintModule,
        PolymorpheusModule,
        TuiAmountPipe,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiAxesComponent)),
        TuiNotificationModule,
        TuiSetupComponent,
    ],
    declarations: [
        ExampleTuiAxesComponent,
        TuiAxesExample1,
        TuiAxesExample2,
        TuiAxesExample3,
    ],
    exports: [ExampleTuiAxesComponent],
})
export class ExampleTuiAxesModule {}
