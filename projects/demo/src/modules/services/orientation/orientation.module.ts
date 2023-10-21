import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';

import {TuiOrientationExample1} from './examples/1';
import {ExampleTuiOrientationComponent} from './orientation.component';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiOrientationComponent)),
    ],
    declarations: [ExampleTuiOrientationComponent, TuiOrientationExample1],
    exports: [ExampleTuiOrientationComponent],
})
export class ExampleTuiOrientationModule {}
