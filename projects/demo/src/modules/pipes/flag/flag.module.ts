import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiFlagPipeModule} from '@taiga-ui/core';

import {TuiFlagExample1} from './examples/1/component';
import {ExampleTuiFlagComponent} from './flag.component';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        TuiFlagPipeModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiFlagComponent)),
    ],
    declarations: [ExampleTuiFlagComponent, TuiFlagExample1],
    exports: [ExampleTuiFlagComponent],
})
export class ExampleTuiFlagModule {}
