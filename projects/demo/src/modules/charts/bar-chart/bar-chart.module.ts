import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAxesModule, TuiBarChartModule} from '@taiga-ui/addon-charts';
import {TuiMoneyModule} from '@taiga-ui/addon-commerce';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiColorModule, TuiHintModule, TuiLinkModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {ExampleTuiBarChartComponent} from './bar-chart.component';
import {TuiBarChartExample1} from './examples/1';

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
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ExampleTuiBarChartComponent)),
    ],
    declarations: [ExampleTuiBarChartComponent, TuiBarChartExample1],
    exports: [ExampleTuiBarChartComponent],
})
export class ExampleTuiBarChartModule {}
