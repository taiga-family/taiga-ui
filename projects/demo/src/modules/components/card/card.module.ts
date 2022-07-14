import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiCardModule} from '@taiga-ui/addon-commerce';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';

import {ExampleTuiCardComponent} from './card.component';
import {TuiCardExample1} from './examples/1';
import {TuiCardExample2} from './examples/2';
import {TuiCardExample3} from './examples/3';

@NgModule({
    imports: [
        CommonModule,
        TuiCardModule,
        RouterModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiCardComponent)),
    ],
    declarations: [
        ExampleTuiCardComponent,
        TuiCardExample1,
        TuiCardExample2,
        TuiCardExample3,
    ],
    exports: [ExampleTuiCardComponent],
})
export class ExampleTuiCardModule {}
