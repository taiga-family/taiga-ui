import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiReorderModule} from '@taiga-ui/addon-table';

import {TuiReorderExample1} from './examples/1';
import {ExampleTuiReorderComponent} from './reorder.component';

@NgModule({
    imports: [
        CommonModule,
        TuiReorderModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiReorderComponent)),
    ],
    declarations: [ExampleTuiReorderComponent, TuiReorderExample1],
    exports: [ExampleTuiReorderComponent],
})
export class ExampleTuiReorderModule {}
