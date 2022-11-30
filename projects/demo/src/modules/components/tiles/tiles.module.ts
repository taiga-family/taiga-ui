import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiSvgModule} from '@taiga-ui/core';
import {TuiTilesModule} from '@taiga-ui/kit';

import {TuiTilesExample1} from './examples/1';
import {TuiTilesExample2} from './examples/2';
import {ExampleTuiTilesComponent} from './tiles.component';

@NgModule({
    imports: [
        CommonModule,
        TuiSvgModule,
        TuiTilesModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiTilesComponent)),
    ],
    declarations: [ExampleTuiTilesComponent, TuiTilesExample1, TuiTilesExample2],
    exports: [ExampleTuiTilesComponent],
})
export class ExampleTuiTilesModule {}
