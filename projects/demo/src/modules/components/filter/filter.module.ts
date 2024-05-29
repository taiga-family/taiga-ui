import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiSetupComponent} from '@demo/utils';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiButtonDirective, TuiSvgComponent} from '@taiga-ui/core';
import {TuiFilterComponent} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiFilterExample1} from './examples/1';
import {TuiFilterExample2} from './examples/2';
import {TuiFilterExample3} from './examples/3';
import {TuiFilterExample4} from './examples/4';
import {ExampleTuiFilterComponent} from './filter.component';

@NgModule({
    imports: [
        PolymorpheusModule,
        TuiFilterComponent,
        TuiButtonDirective,
        TuiSvgComponent,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiAddonDoc,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiFilterComponent)),
        TuiSetupComponent,
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
