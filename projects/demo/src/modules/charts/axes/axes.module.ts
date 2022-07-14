import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAxesModule, TuiBarChartModule} from '@taiga-ui/addon-charts';
import {TuiMoneyModule} from '@taiga-ui/addon-commerce';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiHintModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {ExampleTuiAxesComponent} from './axes.component';
import {TuiAxesExample1} from './examples/1';
import {TuiAxesExample2} from './examples/2';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TuiAxesModule,
        TuiBarChartModule,
        TuiHintModule,
        PolymorpheusModule,
        TuiMoneyModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiAxesComponent)),
    ],
    declarations: [ExampleTuiAxesComponent, TuiAxesExample1, TuiAxesExample2],
    exports: [ExampleTuiAxesComponent],
})
export class ExampleTuiAxesModule {}
