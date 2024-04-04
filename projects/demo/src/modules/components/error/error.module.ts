import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiMapperPipeModule} from '@taiga-ui/cdk';
import {TuiErrorModule, TuiLinkDirective} from '@taiga-ui/core';
import {TuiLabelDirective} from '@taiga-ui/experimental';
import {TuiSwitchComponent} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {ExampleTuiErrorComponent} from './error.component';
import {TuiErrorExample1} from './examples/1';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiSwitchComponent,
        TuiLabelDirective,
        TuiErrorModule,
        TuiLinkDirective,
        PolymorpheusModule,
        TuiMapperPipeModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiErrorComponent)),
    ],
    declarations: [ExampleTuiErrorComponent, TuiErrorExample1],
    exports: [ExampleTuiErrorComponent],
})
export class ExampleTuiErrorModule {}
