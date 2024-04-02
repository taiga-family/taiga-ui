import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiButtonDirective, TuiExpandModule} from '@taiga-ui/core';

import {TuiExpandExample1} from './examples/1';
import {ExampleTuiExpandComponent} from './expand.component';

@NgModule({
    imports: [
        TuiExpandModule,
        TuiButtonDirective,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiExpandComponent)),
    ],
    declarations: [ExampleTuiExpandComponent, TuiExpandExample1],
    exports: [ExampleTuiExpandComponent],
})
export class ExampleTuiExpandModule {}
