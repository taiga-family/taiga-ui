import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiButtonModule, TuiErrorModule, TuiExpandModule} from '@taiga-ui/core';
import {TuiToggleModule} from '@taiga-ui/kit';

import {TuiExpandExample1} from './examples/1';
import {TuiExpandExample2} from './examples/2';
import {ExampleTuiExpandComponent} from './expand.component';

@NgModule({
    imports: [
        TuiExpandModule,
        TuiButtonModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiAddonDocModule,
        TuiErrorModule,
        TuiToggleModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiExpandComponent)),
    ],
    declarations: [ExampleTuiExpandComponent, TuiExpandExample1, TuiExpandExample2],
    exports: [ExampleTuiExpandComponent],
})
export class ExampleTuiExpandModule {}
