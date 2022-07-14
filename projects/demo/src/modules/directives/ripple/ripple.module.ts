import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiRippleModule} from '@taiga-ui/addon-mobile';
import {TuiIslandModule} from '@taiga-ui/kit';

import {TuiRippleExample1} from './examples/1';
import {ExampleTuiRippleComponent} from './ripple.component';

@NgModule({
    imports: [
        CommonModule,
        TuiIslandModule,
        TuiRippleModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiRippleComponent)),
    ],
    declarations: [ExampleTuiRippleComponent, TuiRippleExample1],
    exports: [ExampleTuiRippleComponent],
})
export class ExampleTuiRippleModule {}
