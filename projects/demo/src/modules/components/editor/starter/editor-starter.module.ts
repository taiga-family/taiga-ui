import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {
    TuiAddonDocModule,
    tuiGenerateRoutes,
    TuiTextCodeModule,
} from '@taiga-ui/addon-doc';
import {TuiEditorModule, TuiEditorSocketModule} from '@taiga-ui/addon-editor';
import {
    TuiButtonModule,
    TuiLinkModule,
    TuiLoaderModule,
    TuiNotificationModule,
    TuiSvgModule,
} from '@taiga-ui/core';

import {InheritedDocumentationModule} from '../../abstract/inherited-documentation/inherited-documentation.module';
import {ExampleEditorStarterComponent} from './editor-starter.component';

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
        RouterModule.forChild(tuiGenerateRoutes(ExampleEditorStarterComponent)),
        TuiLoaderModule,
        TuiTextCodeModule,
    ],
    declarations: [ExampleEditorStarterComponent],
    exports: [ExampleEditorStarterComponent],
})
export class ExampleTuiEditorStarterModule {}
