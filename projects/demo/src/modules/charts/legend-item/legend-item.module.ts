import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiLegendItemModule, TuiRingChartModule} from '@taiga-ui/addon-charts';
import {TuiMoneyModule} from '@taiga-ui/addon-commerce';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiHoveredModule} from '@taiga-ui/cdk';
import {
    TuiNotificationModule,
    TuiPrimitiveCheckboxModule,
    TuiSvgModule,
} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiLegendItemExample1} from './examples/1';
import {TuiLegendItemExample2} from './examples/2';
import {ExampleTuiLegendItemComponent} from './legend-item.component';

@NgModule({
    imports: [
        CommonModule,
        TuiLegendItemModule,
        TuiRingChartModule,
        TuiMoneyModule,
        TuiPrimitiveCheckboxModule,
        TuiSvgModule,
        TuiNotificationModule,
        PolymorpheusModule,
        TuiHoveredModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiLegendItemComponent)),
    ],
    declarations: [
        ExampleTuiLegendItemComponent,
        TuiLegendItemExample1,
        TuiLegendItemExample2,
    ],
    exports: [ExampleTuiLegendItemComponent],
})
export class ExampleTuiLegendItemModule {}
