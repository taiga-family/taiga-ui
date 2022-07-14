import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {TuiProgressModule} from '@taiga-ui/kit';

import {TuiProgressBarExample1} from './examples/1';
import {TuiProgressBarExample2} from './examples/2';
import {TuiProgressBarExample3} from './examples/3';
import {TuiProgressBarExample4} from './examples/4';
import {TuiProgressBarExample5} from './examples/5';
import {ExampleProgressBarComponent} from './progress-bar.component';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        TuiProgressModule,
        TuiLinkModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleProgressBarComponent)),
    ],
    declarations: [
        ExampleProgressBarComponent,
        TuiProgressBarExample1,
        TuiProgressBarExample2,
        TuiProgressBarExample3,
        TuiProgressBarExample4,
        TuiProgressBarExample5,
    ],
    exports: [ExampleProgressBarComponent],
})
export class ExampleTuiProgressBarModule {}
