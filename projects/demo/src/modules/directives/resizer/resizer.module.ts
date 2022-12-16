import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiResizerModule} from '@taiga-ui/cdk';
import {TuiNotificationModule} from '@taiga-ui/core';

import {TuiResizerExample1} from './examples/1';
import {ExampleTuiResizerComponent} from './resizer.component';

@NgModule({
    imports: [
        CommonModule,
        TuiResizerModule,
        TuiNotificationModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiResizerComponent)),
    ],
    declarations: [ExampleTuiResizerComponent, TuiResizerExample1],
    exports: [ExampleTuiResizerComponent],
})
export class ExampleTuiResizerModule {}
