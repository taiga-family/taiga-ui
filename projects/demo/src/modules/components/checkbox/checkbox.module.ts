import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {TuiCheckboxModule} from '@taiga-ui/kit';
import {MarkdownModule} from 'ngx-markdown';
import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {ExampleTuiCheckboxComponent} from './checkbox.component';
import {TuiCheckboxExample1} from './examples/1';
import {TuiCheckboxExample2} from './examples/2';
import {TuiCheckboxExample3} from './examples/3';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        TuiCheckboxModule,
        TuiLinkModule,
        MarkdownModule,
        ...TUI_DOC_PAGE_MODULES,
        InheritedDocumentationModule,
        RouterModule.forChild(generateRoutes(ExampleTuiCheckboxComponent)),
    ],
    declarations: [
        ExampleTuiCheckboxComponent,
        TuiCheckboxExample1,
        TuiCheckboxExample2,
        TuiCheckboxExample3,
    ],
    exports: [ExampleTuiCheckboxComponent],
})
export class ExampleTuiCheckboxModule {}
