import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAxesModule, TuiBarChartModule} from '@taiga-ui/addon-charts';
import {TuiMoneyModule} from '@taiga-ui/addon-commerce';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiColorModule, TuiHintModule, TuiLinkModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {ExampleTuiBarChartComponent} from './bar-chart.component';
import {TuiBarChartExample1} from './examples/1';
import {TuiBarChartExample2} from './examples/2';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TuiAxesModule,
        TuiBarChartModule,
        TuiColorModule,
        TuiHintModule,
        PolymorpheusModule,
        TuiLinkModule,
        TuiMoneyModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ExampleTuiBarChartComponent)),
    ],
    declarations: [ExampleTuiBarChartComponent, TuiBarChartExample1, TuiBarChartExample2],
    exports: [ExampleTuiBarChartComponent],
})
export class ExampleTuiBarChartModule {}
