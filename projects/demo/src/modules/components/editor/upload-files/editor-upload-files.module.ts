import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiEditorModule, TuiEditorSocketModule} from '@taiga-ui/addon-editor';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiHostedDropdownModule,
    TuiLinkModule,
    TuiLoaderModule,
    TuiSvgModule,
} from '@taiga-ui/core';

import {ExampleTuiEditorUploadFilesComponent} from './editor-upload-files.component';
import {TuiEditorUploadFilesExample1} from './examples/1';

@NgModule({
    imports: [
        CommonModule,
        TuiActiveZoneModule,
        TuiSvgModule,
        TuiLinkModule,
        TuiHostedDropdownModule,
        TuiButtonModule,
        TuiAddonDocModule,
        FormsModule,
        ReactiveFormsModule,
        TuiEditorModule,
        TuiLoaderModule,
        TuiEditorSocketModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiEditorUploadFilesComponent)),
    ],
    declarations: [TuiEditorUploadFilesExample1, ExampleTuiEditorUploadFilesComponent],
})
export class ExampleTuiEditorUploadFilesModule {}
