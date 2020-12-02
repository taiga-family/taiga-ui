import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {
    TuiButtonModule,
    TuiHintControllerModule,
    TuiLinkModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiInputPasswordModule} from '@taiga-ui/kit';
import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {TuiInputPasswordExample1} from './examples/1';
import {ExampleTuiInputPasswordComponent} from './input-password.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiInputPasswordModule,
        TuiLinkModule,
        InheritedDocumentationModule,
        ...TUI_DOC_PAGE_MODULES,
        TuiButtonModule,
        TuiTextfieldControllerModule,
        TuiHintControllerModule,
        RouterModule.forChild(generateRoutes(ExampleTuiInputPasswordComponent)),
    ],
    declarations: [ExampleTuiInputPasswordComponent, TuiInputPasswordExample1],
    exports: [ExampleTuiInputPasswordComponent],
})
export class ExampleTuiInputPasswordModule {}
