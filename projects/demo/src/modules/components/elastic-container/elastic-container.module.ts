import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {TuiButtonModule, TuiLinkModule} from '@taiga-ui/core';
import {TuiElasticContainerModule} from '@taiga-ui/kit';

import {ExampleTuiElasticContainerComponent} from './elastic-container.component';
import {TuiElasticContainerExample1} from './examples/1';
import {TuiElasticContainerExample2} from './examples/2';
import {TuiElasticContainerExample3} from './examples/3';

@NgModule({
    imports: [
        CommonModule,
        TuiElasticContainerModule,
        TuiRepeatTimesModule,
        TuiButtonModule,
        TuiLinkModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiElasticContainerComponent)),
    ],
    declarations: [
        ExampleTuiElasticContainerComponent,
        TuiElasticContainerExample1,
        TuiElasticContainerExample2,
        TuiElasticContainerExample3,
    ],
    exports: [ExampleTuiElasticContainerComponent],
})
export class ExampleTuiElasticContainerModule {}
