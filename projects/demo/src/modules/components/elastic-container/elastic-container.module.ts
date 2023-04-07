import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {TuiButtonModule, TuiExpandModule, TuiLinkModule} from '@taiga-ui/core';
import {TuiElasticContainerModule, TuiInputModule} from '@taiga-ui/kit';

import {ExampleTuiElasticContainerComponent} from './elastic-container.component';
import {TuiElasticContainerExample1} from './examples/1';
import {TuiElasticContainerExample2} from './examples/2';
import {TuiElasticContainerExample3} from './examples/3';
import {TuiElasticContainerExample4} from './examples/4';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiInputModule,
        TuiElasticContainerModule,
        TuiRepeatTimesModule,
        TuiExpandModule,
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
        TuiElasticContainerExample4,
    ],
    exports: [ExampleTuiElasticContainerComponent],
})
export class ExampleTuiElasticContainerModule {}
