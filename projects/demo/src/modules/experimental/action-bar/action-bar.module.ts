import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLetModule} from '@taiga-ui/cdk';
import {
    TuiDataListModule,
    TuiLinkModule,
    TuiModeModule,
    TuiNotificationModule,
} from '@taiga-ui/core';
import {TuiActionBarModule, TuiButtonModule, TuiIconModule} from '@taiga-ui/experimental';
import {TuiFilterModule} from '@taiga-ui/kit';

import {ExampleTuiActionBarComponent} from './action-bar.component';
import {TuiActionBarExample1} from './examples/1';
import {TuiActionBarExample2} from './examples/2';

@NgModule({
    imports: [
        CommonModule,
        TuiButtonModule,
        TuiNotificationModule,
        TuiActionBarModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiActionBarComponent)),
        ReactiveFormsModule,
        TuiFilterModule,
        TuiIconModule,
        TuiDataListModule,
        TuiLetModule,
        TuiLinkModule,
        TuiModeModule,
    ],
    declarations: [
        ExampleTuiActionBarComponent,
        TuiActionBarExample1,
        TuiActionBarExample2,
    ],
    exports: [ExampleTuiActionBarComponent],
})
export class ExampleTuiActionBarModule {}
