import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiSetupComponent} from '@demo/utils';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiButtonDirective,
    TuiErrorModule,
    TuiLinkDirective,
    TuiNotificationModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiAvatarComponent,
    TuiFieldErrorPipeModule,
    TuiInputPhoneModule,
    TuiIslandModule,
    TuiSwitchComponent,
} from '@taiga-ui/kit';
import {TuiCardLargeDirective} from '@taiga-ui/layout';

import {StylesInfoModule} from '../../app/styles-info/styles-info.module';
import {TuiIslandExample1} from './examples/1';
import {TuiIslandExample2} from './examples/2';
import {TuiIslandExample3} from './examples/3';
import {ExampleTuiIslandComponent} from './island.component';

@NgModule({
    imports: [
        TuiIslandModule,
        TuiLinkDirective,
        TuiSwitchComponent,
        TuiButtonDirective,
        TuiErrorModule,
        TuiFieldErrorPipeModule,
        TuiInputPhoneModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiTextfieldControllerModule,
        TuiAddonDocModule,
        TuiNotificationModule,
        StylesInfoModule,
        TuiButtonDirective,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiIslandComponent)),
        TuiCardLargeDirective,
        TuiAvatarComponent,
        TuiSetupComponent,
    ],
    declarations: [
        ExampleTuiIslandComponent,
        TuiIslandExample1,
        TuiIslandExample2,
        TuiIslandExample3,
    ],
    exports: [ExampleTuiIslandComponent],
})
export class ExampleTuiIslandModule {}
