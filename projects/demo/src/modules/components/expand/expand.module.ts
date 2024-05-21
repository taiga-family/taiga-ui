import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiSetupComponent} from '@demo/utils';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiButtonDirective, TuiExpand} from '@taiga-ui/core';

import {TuiExpandExample1} from './examples/1';
import {ExampleTuiExpandComponent} from './expand.component';

@NgModule({
    imports: [
        TuiExpand,
        TuiButtonDirective,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiAddonDoc,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiExpandComponent)),
        TuiSetupComponent,
    ],
    declarations: [ExampleTuiExpandComponent, TuiExpandExample1],
    exports: [ExampleTuiExpandComponent],
})
export class ExampleTuiExpandModule {}
