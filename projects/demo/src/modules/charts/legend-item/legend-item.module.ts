import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiSetupComponent} from '@demo/utils';
import {TuiLegendItemModule, TuiRingChartModule} from '@taiga-ui/addon-charts';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiHoveredDirective} from '@taiga-ui/cdk';
import {TuiNotificationModule, TuiSvgComponent} from '@taiga-ui/core';
import {TuiCheckboxComponent} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiLegendItemExample1} from './examples/1';
import {TuiLegendItemExample2} from './examples/2';
import {ExampleTuiLegendItemComponent} from './legend-item.component';

@NgModule({
    imports: [
        CommonModule,
        TuiLegendItemModule,
        TuiRingChartModule,
        TuiSvgComponent,
        TuiNotificationModule,
        PolymorpheusModule,
        TuiHoveredDirective,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiLegendItemComponent)),
        TuiAmountPipe,
        TuiCheckboxComponent,
        TuiSetupComponent,
    ],
    declarations: [
        ExampleTuiLegendItemComponent,
        TuiLegendItemExample1,
        TuiLegendItemExample2,
    ],
    exports: [ExampleTuiLegendItemComponent],
})
export class ExampleTuiLegendItemModule {}
