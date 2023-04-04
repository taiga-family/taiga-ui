import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiButtonModule, TuiLinkModule} from '@taiga-ui/core';
import {TuiAvatarModule, TuiBlockStatusModule} from '@taiga-ui/kit';

import {ExampleTuiBlockStatusComponent} from './block-status.component';
import {TuiBlockStatusExample1} from './examples/1';
import {TuiBlockStatusExample2} from './examples/2';
import {TuiBlockStatusExample3} from './examples/3';

@NgModule({
    imports: [
        TuiLinkModule,
        TuiBlockStatusModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiAddonDocModule,
        TuiButtonModule,
        TuiAvatarModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiBlockStatusComponent)),
    ],
    declarations: [
        ExampleTuiBlockStatusComponent,
        TuiBlockStatusExample1,
        TuiBlockStatusExample2,
        TuiBlockStatusExample3,
    ],
    exports: [ExampleTuiBlockStatusComponent],
})
export class ExampleTuiBlockStatusModule {}
