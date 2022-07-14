import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiButtonModule, TuiSvgModule} from '@taiga-ui/core';
import {TuiFilterModule, TuiTagModule} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiFilterExample1} from './examples/1';
import {TuiFilterExample2} from './examples/2';
import {TuiFilterExample3} from './examples/3';
import {TuiFilterExample4} from './examples/4';
import {ExampleTuiFilterComponent} from './filter.component';

@NgModule({
    imports: [
        PolymorpheusModule,
        TuiFilterModule,
        TuiButtonModule,
        TuiTagModule,
        TuiSvgModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiFilterComponent)),
    ],
    declarations: [
        ExampleTuiFilterComponent,
        TuiFilterExample1,
        TuiFilterExample2,
        TuiFilterExample3,
        TuiFilterExample4,
    ],
    exports: [ExampleTuiFilterComponent],
})
export class ExampleTuiFilterModule {}
