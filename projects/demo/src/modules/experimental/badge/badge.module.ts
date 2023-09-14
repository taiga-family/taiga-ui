import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {
    TuiLabelModule,
    TuiModeModule,
    TuiNotificationModule,
    TuiSvgModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiBadgeModule, TuiFadeModule} from '@taiga-ui/experimental';
import {TuiRadioListModule} from '@taiga-ui/kit';

import {ExampleTuiBadgeComponent} from './badge.component';
import {TuiBadgeExample1} from './examples/1';
import {TuiBadgeExample2} from './examples/2';
import {TuiBadgeExample3} from './examples/3';
import {TuiBadgeExample4} from './examples/4';
import {TuiBadgeExample5} from './examples/5';

@NgModule({
    imports: [
        TuiBadgeModule,
        TuiModeModule,
        TuiRepeatTimesModule,
        TuiSvgModule,
        TuiRadioListModule,
        FormsModule,
        CommonModule,
        TuiFadeModule,
        TuiNotificationModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiBadgeComponent)),
        TuiBadgeModule,
        TuiTextfieldControllerModule,
        TuiLabelModule,
    ],
    declarations: [
        ExampleTuiBadgeComponent,
        TuiBadgeExample1,
        TuiBadgeExample2,
        TuiBadgeExample3,
        TuiBadgeExample4,
        TuiBadgeExample5,
    ],
    exports: [ExampleTuiBadgeComponent],
})
export class ExampleTuiBadgeModule {}
