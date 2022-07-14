import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiEditorModule, TuiEditorSocketModule} from '@taiga-ui/addon-editor';
import {
    TuiButtonModule,
    TuiLinkModule,
    TuiNotificationModule,
    TuiSvgModule,
} from '@taiga-ui/core';

import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {ExampleEditorNewComponent} from './editor-new.component';
import {TuiEditorNewExample1} from './examples/1';
import {TuiEditorNewExample2} from './examples/2';
import {ExampleSmilesToolModule} from './examples/2/smiles-tool/smiles-tool.module';
import {TuiEditorNewExample3} from './examples/3';
import {TuiEditorNewExample4} from './examples/4';
import {ImagePreviewExampleModule} from './examples/4/image-preview/image-preview.module';
import {TuiEditorNewExample5} from './examples/5';

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
        RouterModule.forChild(tuiGenerateRoutes(ExampleEditorNewComponent)),
    ],
    declarations: [
        ExampleEditorNewComponent,
        TuiEditorNewExample1,
        TuiEditorNewExample2,
        TuiEditorNewExample3,
        TuiEditorNewExample4,
        TuiEditorNewExample5,
    ],
    exports: [ExampleEditorNewComponent],
})
export class ExampleTuiEditorNewModule {}
