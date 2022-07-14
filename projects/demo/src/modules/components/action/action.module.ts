import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiActionModule} from '@taiga-ui/kit';

import {ExampleTuiActionComponent} from './action.component';
import {TuiActionExample1} from './examples/1';
import {TuiActionExample2} from './examples/2';

@NgModule({
    imports: [
        CommonModule,
        TuiActionModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiActionComponent)),
    ],
    declarations: [ExampleTuiActionComponent, TuiActionExample1, TuiActionExample2],
    exports: [ExampleTuiActionComponent],
})
export class ExampleTuiActionModule {}
