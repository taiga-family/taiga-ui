import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiSetupComponent} from '@demo/utils';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiMapperPipe} from '@taiga-ui/cdk';
import {TuiErrorComponent, TuiLabelDirective, TuiLinkDirective} from '@taiga-ui/core';
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
        TuiErrorComponent,
        TuiLinkDirective,
        PolymorpheusModule,
        TuiMapperPipe,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiErrorComponent)),
        TuiSetupComponent,
    ],
    declarations: [ExampleTuiErrorComponent, TuiErrorExample1],
    exports: [ExampleTuiErrorComponent],
})
export class ExampleTuiErrorModule {}
