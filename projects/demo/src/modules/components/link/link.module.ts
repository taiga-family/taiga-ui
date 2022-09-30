import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiLinkModule, TuiModeModule} from '@taiga-ui/core';

import {TuiLinkExample1} from './examples/1';
import {TuiLinkExample2} from './examples/2';
import {TuiLinkExample3} from './examples/3';
import {TuiLinkExample4} from './examples/4';
import {ExampleTuiLinkComponent} from './link.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiLinkModule,
        TuiModeModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiLinkComponent)),
    ],
    declarations: [
        ExampleTuiLinkComponent,
        TuiLinkExample1,
        TuiLinkExample2,
        TuiLinkExample3,
        TuiLinkExample4,
    ],
    exports: [ExampleTuiLinkComponent],
})
export class ExampleTuiLinkModule {}
