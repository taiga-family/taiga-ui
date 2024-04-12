import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiSetupComponent} from '@demo/utils';
import {
    TuiAddonDocModule,
    tuiGenerateRoutes,
    TuiTextCodeModule,
} from '@taiga-ui/addon-doc';
import {TuiLinkDirective, TuiNotificationModule} from '@taiga-ui/core';
import {TuiProgressModule} from '@taiga-ui/kit';

import {TuiProgressBarExample1} from './examples/1';
import {TuiProgressBarExample2} from './examples/2';
import {TuiProgressBarExample3} from './examples/3';
import {TuiProgressBarExample4} from './examples/4';
import {TuiProgressBarExample5} from './examples/5';
import {TuiProgressBarExample6} from './examples/6';
import {TuiProgressBarExample7} from './examples/7';
import {ExampleProgressBarComponent} from './progress-bar.component';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        TuiProgressModule,
        TuiLinkDirective,
        TuiTextCodeModule,
        TuiNotificationModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleProgressBarComponent)),
        TuiSetupComponent,
    ],
    declarations: [
        ExampleProgressBarComponent,
        TuiProgressBarExample1,
        TuiProgressBarExample2,
        TuiProgressBarExample3,
        TuiProgressBarExample4,
        TuiProgressBarExample5,
        TuiProgressBarExample6,
        TuiProgressBarExample7,
    ],
    exports: [ExampleProgressBarComponent],
})
export class ExampleTuiProgressBarModule {}
