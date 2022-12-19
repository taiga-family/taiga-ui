import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiEditorModule, TuiEditorSocketModule} from '@taiga-ui/addon-editor';
import {
    TuiButtonModule,
    TuiLinkModule,
    TuiLoaderModule,
    TuiNotificationModule,
    TuiSvgModule,
} from '@taiga-ui/core';

import {InheritedDocumentationModule} from '../../abstract/inherited-documentation/inherited-documentation.module';
import {ExampleEditorComponent} from './editor.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiEditorModule,
        TuiEditorSocketModule,
        TuiNotificationModule,
        TuiButtonModule,
        InheritedDocumentationModule,
        TuiAddonDocModule,
        TuiLinkModule,
        TuiSvgModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleEditorComponent)),
        TuiLoaderModule,
    ],
    declarations: [ExampleEditorComponent],
    exports: [ExampleEditorComponent],
})
export class ExampleTuiEditorModule {}
