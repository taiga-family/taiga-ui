import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {
    TuiLegendItemModule,
    TuiPieChartModule,
    TuiRingChartModule,
} from '@taiga-ui/addon-charts';
import {TuiMoneyModule} from '@taiga-ui/addon-commerce';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiHoveredModule} from '@taiga-ui/cdk';
import {TuiButtonModule} from '@taiga-ui/core';
import {TuiToggleModule} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {TuiLegendItemExample1} from './examples/1';
import {TuiLegendItemExample2} from './examples/2';
import {ExampleTuiLegendItemComponent} from './legend-item.component';

@NgModule({
    imports: [
        CommonModule,
        TuiLegendItemModule,
        TuiRingChartModule,
        TuiPieChartModule,
        TuiMoneyModule,
        PolymorpheusModule,
        TuiHoveredModule,
        TuiAddonDocModule,
        TuiToggleModule,
        TuiButtonModule,
        RouterModule.forChild(generateRoutes(ExampleTuiLegendItemComponent)),
        FormsModule,
    ],
    declarations: [
        ExampleTuiLegendItemComponent,
        TuiLegendItemExample1,
        TuiLegendItemExample2,
    ],
    exports: [ExampleTuiLegendItemComponent],
})
export class ExampleTuiLegendItemModule {}
