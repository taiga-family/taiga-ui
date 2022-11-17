import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiEditorNewModule, TuiEditorSocketModule} from '@taiga-ui/addon-editor';
import {
    TuiButtonModule,
    TuiLinkModule,
    TuiLoaderModule,
    TuiNotificationModule,
    TuiSvgModule,
} from '@taiga-ui/core';

import {InheritedDocumentationModule} from '../abstract/inherited-documentation/inherited-documentation.module';
import {ExampleEditorNewComponent} from './editor-new.component';
import {TuiEditorNewExample1} from './examples/1';
import {ExampleSmilesToolModule} from './examples/1/smiles-tool/smiles-tool.module';
import {TuiEditorNewExample2} from './examples/2';
import {TuiEditorNewExample3} from './examples/3';
import {ImagePreviewExampleModule} from './examples/3/image-preview/image-preview.module';
import {TuiEditorNewExample4} from './examples/4';
import {TuiEditorNewExample5} from './examples/5';
import {TuiEditorNewExample6} from './examples/6';
import {TuiEditorNewExample7} from './examples/7';
import {TuiEditorNewExample8} from './examples/8';
import {TuiEditorNewExample9} from './examples/9';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiEditorNewModule,
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
        TuiLoaderModule,
    ],
    declarations: [
        ExampleEditorNewComponent,
        TuiEditorNewExample1,
        TuiEditorNewExample2,
        TuiEditorNewExample3,
        TuiEditorNewExample4,
        TuiEditorNewExample6,
        TuiEditorNewExample5,
        TuiEditorNewExample7,
        TuiEditorNewExample8,
        TuiEditorNewExample9,
    ],
    exports: [ExampleEditorNewComponent],
})
export class ExampleTuiEditorNewModule {}
