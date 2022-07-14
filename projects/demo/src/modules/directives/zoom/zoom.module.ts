import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiZoomModule} from '@taiga-ui/cdk';

import {TuiZoomExample1} from './examples/1';
import {ExampleTuiZoomComponent} from './zoom.component';

@NgModule({
    imports: [
        CommonModule,
        TuiZoomModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiZoomComponent)),
    ],
    declarations: [ExampleTuiZoomComponent, TuiZoomExample1],
    exports: [ExampleTuiZoomComponent],
})
export class ExampleTuiZoomModule {}
