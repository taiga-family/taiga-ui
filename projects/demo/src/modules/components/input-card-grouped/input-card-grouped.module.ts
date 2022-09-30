import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiCardModule, TuiInputCardGroupedModule} from '@taiga-ui/addon-commerce';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiDataListModule,
    TuiErrorModule,
    TuiLabelModule,
    TuiLinkModule,
    TuiSvgModule,
} from '@taiga-ui/core';
import {TuiFieldErrorPipeModule} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiInputCardGroupedExample1} from './examples/1';
import {TuiInputCardGroupedExample2} from './examples/2';
import {TuiInputCardGroupedExample3} from './examples/3';
import {TuiInputCardGroupedExample4} from './examples/4';
import {ExampleTuiInputCardGroupedComponent} from './input-card-grouped.component';

@NgModule({
    imports: [
        TuiInputCardGroupedModule,
        TuiLinkModule,
        TuiErrorModule,
        TuiFieldErrorPipeModule,
        TuiDataListModule,
        TuiCardModule,
        TuiLabelModule,
        TuiSvgModule,
        CommonModule,
        ReactiveFormsModule,
        TuiAddonDocModule,
        InheritedDocumentationModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiInputCardGroupedComponent)),
        PolymorpheusModule,
    ],
    declarations: [
        ExampleTuiInputCardGroupedComponent,
        TuiInputCardGroupedExample1,
        TuiInputCardGroupedExample2,
        TuiInputCardGroupedExample3,
        TuiInputCardGroupedExample4,
    ],
    exports: [ExampleTuiInputCardGroupedComponent],
})
export class ExampleTuiInputCardGroupedModule {}
