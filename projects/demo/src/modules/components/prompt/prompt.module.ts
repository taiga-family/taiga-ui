import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiButtonModule, TuiLinkModule, TuiNotificationModule} from '@taiga-ui/core';
import {TuiPromptModule} from '@taiga-ui/kit';

import {TuiPromptExample1} from './examples/1';
import {ExampleTuiPromptComponent} from './prompt.component';

@NgModule({
    imports: [
        CommonModule,
        TuiButtonModule,
        TuiLinkModule,
        TuiPromptModule,
        RouterModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiPromptComponent)),
        TuiNotificationModule,
    ],
    declarations: [ExampleTuiPromptComponent, TuiPromptExample1],
    exports: [ExampleTuiPromptComponent],
})
export class ExampleTuiPromptModule {}
