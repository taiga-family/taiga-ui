import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiLegendItemModule, TuiRingChartModule} from '@taiga-ui/addon-charts';
import {TuiMoneyModule} from '@taiga-ui/addon-commerce';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiHoveredModule} from '@taiga-ui/cdk';
import {TuiToggleModule} from '@taiga-ui/kit';
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
        TuiAddonDocModule,
        TuiToggleModule,
        RouterModule.forChild(generateRoutes(ExampleTuiLegendItemComponent)),
        FormsModule,
    ],
    declarations: [ExampleTuiLegendItemComponent, TuiLegendItemExample1],
    exports: [ExampleTuiLegendItemComponent],
})
export class ExampleTuiLegendItemModule {}
