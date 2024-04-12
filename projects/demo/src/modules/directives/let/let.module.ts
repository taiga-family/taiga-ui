import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiSetupComponent} from '@demo/utils';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLetModule} from '@taiga-ui/cdk';
import {TuiBadgeDirective} from '@taiga-ui/kit';

import {TuiLetExample1} from './examples/1';
import {TuiLetExample2} from './examples/2';
import {ExampleTuiLetComponent} from './let.component';

@NgModule({
    imports: [
        CommonModule,
        TuiLetModule,
        TuiBadgeDirective,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiLetComponent)),
        TuiSetupComponent,
    ],
    declarations: [ExampleTuiLetComponent, TuiLetExample1, TuiLetExample2],
    exports: [ExampleTuiLetComponent],
})
export class ExampleTuiLetModule {}
