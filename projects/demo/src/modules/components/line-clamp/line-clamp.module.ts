import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiButtonModule} from '@taiga-ui/core';
import {TuiIslandModule, TuiLineClampModule} from '@taiga-ui/kit';

import {TuiLineClampExample1} from './examples/1';
import {TuiLineClampExample2} from './examples/2';
import {TuiLineClampExample3} from './examples/3';
import {ExampleTuiLineClampComponent} from './line-clamp.component';

@NgModule({
    imports: [
        CommonModule,
        TuiLineClampModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiLineClampComponent)),
        TuiButtonModule,
        TuiIslandModule,
    ],
    declarations: [
        ExampleTuiLineClampComponent,
        TuiLineClampExample1,
        TuiLineClampExample2,
        TuiLineClampExample3,
    ],
    exports: [ExampleTuiLineClampComponent],
})
export class ExampleTuiLineClampModule {}
