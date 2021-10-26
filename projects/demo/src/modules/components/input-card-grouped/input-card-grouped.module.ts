import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiCardModule, TuiInputCardGroupedModule} from '@taiga-ui/addon-commerce';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {
    TuiDataListModule,
    TuiLabelModule,
    TuiLinkModule,
    TuiSvgModule,
} from '@taiga-ui/core';
import {TuiFieldErrorModule} from '@taiga-ui/kit';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiInputCardGroupedExample1} from './examples/1';
import {TuiInputCardGroupedExample2} from './examples/2';
import {TuiInputCardGroupedExample3} from './examples/3';
import {ExampleTuiInputCardGroupedComponent} from './input-card-grouped.component';

@NgModule({
    imports: [
        TuiInputCardGroupedModule,
        TuiLinkModule,
        TuiFieldErrorModule,
        TuiDataListModule,
        TuiCardModule,
        TuiLabelModule,
        TuiSvgModule,
        CommonModule,
        ReactiveFormsModule,
        TuiAddonDocModule,
        InheritedDocumentationModule,
        RouterModule.forChild(generateRoutes(ExampleTuiInputCardGroupedComponent)),
        PolymorpheusModule,
    ],
    declarations: [
        ExampleTuiInputCardGroupedComponent,
        TuiInputCardGroupedExample1,
        TuiInputCardGroupedExample2,
        TuiInputCardGroupedExample3,
    ],
    exports: [ExampleTuiInputCardGroupedComponent],
})
export class ExampleTuiInputCardGroupedModule {}
