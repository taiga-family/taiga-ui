import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiLegendItemModule, TuiRingChartModule} from '@taiga-ui/addon-charts';
import {TuiMoneyModule} from '@taiga-ui/addon-commerce';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiHoveredModule} from '@taiga-ui/cdk';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {TuiLegendItemExample1} from './examples/1';
import {ExampleTuiLegendItemComponent} from './legend-item.component';

@NgModule({
    imports: [
        CommonModule,
        TuiLegendItemModule,
        TuiRingChartModule,
        TuiMoneyModule,
        PolymorpheusModule,
        TuiHoveredModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ExampleTuiLegendItemComponent)),
    ],
    declarations: [ExampleTuiLegendItemComponent, TuiLegendItemExample1],
    exports: [ExampleTuiLegendItemComponent],
})
export class ExampleTuiLegendItemModule {}
