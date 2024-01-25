import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiButtonModule, TuiLinkModule} from '@taiga-ui/core';
import {TuiAutoColorModule, TuiInitialsModule} from '@taiga-ui/experimental';
import {TuiAvatarComponent} from '@taiga-ui/kit';
import {TuiBlockStatusModule} from '@taiga-ui/layout';

import {ExampleTuiBlockStatusComponent} from './block-status.component';
import {TuiBlockStatusExample1} from './examples/1';
import {TuiBlockStatusExample2} from './examples/2';
import {TuiBlockStatusExample3} from './examples/3';
import {TuiBlockStatusExample4} from './examples/4';

@NgModule({
    imports: [
        TuiLinkModule,
        TuiBlockStatusModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiAddonDocModule,
        TuiButtonModule,
        TuiAvatarComponent,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiBlockStatusComponent)),
        TuiInitialsModule,
        TuiAutoColorModule,
    ],
    declarations: [
        ExampleTuiBlockStatusComponent,
        TuiBlockStatusExample1,
        TuiBlockStatusExample2,
        TuiBlockStatusExample3,
        TuiBlockStatusExample4,
    ],
    exports: [ExampleTuiBlockStatusComponent],
})
export class ExampleTuiBlockStatusModule {}
