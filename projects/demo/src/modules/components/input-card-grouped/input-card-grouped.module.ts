import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiInputCardGroupedModule} from '@taiga-ui/addon-commerce';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {TuiFieldErrorModule} from '@taiga-ui/kit';
import {InheritedDocumentationModule} from '../../components/abstract/inherited-documentation/inherited-documentation.module';
import {TuiInputCardGroupedExample1} from './examples/1';
import {ExampleTuiInputCardGroupedComponent} from './input-card-grouped.component';

@NgModule({
    imports: [
        TuiInputCardGroupedModule,
        TuiLinkModule,
        TuiFieldErrorModule,
        CommonModule,
        ReactiveFormsModule,
        ...TUI_DOC_PAGE_MODULES,
        InheritedDocumentationModule,
        RouterModule.forChild(generateRoutes(ExampleTuiInputCardGroupedComponent)),
    ],
    declarations: [ExampleTuiInputCardGroupedComponent, TuiInputCardGroupedExample1],
    exports: [ExampleTuiInputCardGroupedComponent],
})
export class ExampleTuiInputCardGroupedModule {}
