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

import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {ExampleEditorComponent} from './editor.component';
import {TuiEditorExample1} from './examples/1';
import {ExampleSmilesToolModule} from './examples/1/smiles-tool/smiles-tool.module';
import {TuiEditorExample2} from './examples/2';
import {TuiEditorExample3} from './examples/3';
import {ImagePreviewExampleModule} from './examples/3/image-preview/image-preview.module';
import {TuiEditorExample4} from './examples/4';
import {TuiEditorExample5} from './examples/5';
import {TuiEditorExample6} from './examples/6';
import {TuiEditorExample7} from './examples/7';
import {TuiEditorExample8} from './examples/8';
import {TuiEditorExample9} from './examples/9';

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
        ExampleSmilesToolModule,
        ImagePreviewExampleModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleEditorComponent)),
        TuiLoaderModule,
    ],
    declarations: [
        ExampleEditorComponent,
        TuiEditorExample1,
        TuiEditorExample2,
        TuiEditorExample3,
        TuiEditorExample4,
        TuiEditorExample6,
        TuiEditorExample5,
        TuiEditorExample7,
        TuiEditorExample8,
        TuiEditorExample9,
    ],
    exports: [ExampleEditorComponent],
})
export class ExampleTuiEditorModule {}
