import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiButtonDirective,
    TuiHintModule,
    TuiLinkModule,
    TuiModeModule,
    TuiNotificationModule,
    TuiSvgModule,
} from '@taiga-ui/core';

import {TuiNotificationExample1} from './examples/1';
import {TuiNotificationExample2} from './examples/2';
import {TuiNotificationExample3} from './examples/3';
import {ExampleTuiNotificationComponent} from './notification.component';

@NgModule({
    imports: [
        TuiNotificationModule,
        TuiButtonDirective,
        TuiLinkModule,
        TuiModeModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiNotificationComponent)),
        TuiHintModule,
        TuiSvgModule,
    ],
    declarations: [
        ExampleTuiNotificationComponent,
        TuiNotificationExample1,
        TuiNotificationExample2,
        TuiNotificationExample3,
    ],
    exports: [ExampleTuiNotificationComponent],
})
export class ExampleTuiNotificationModule {}
