import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiEditorModule, TuiEditorSocketModule} from '@taiga-ui/addon-editor';
import {TuiActiveZoneModule, TuiValidatorModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiErrorModule,
    TuiHostedDropdownModule,
    TuiLinkModule,
    TuiLoaderModule,
    TuiSvgModule,
} from '@taiga-ui/core';
import {TuiFieldErrorPipeModule} from '@taiga-ui/kit';

import {ExampleTuiEditorUploadingImagesComponent} from './editor-upload-images.component';
import {TuiEditorUploadingImagesExample1} from './examples/1';

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
        TuiErrorModule,
        TuiFieldErrorPipeModule,
        RouterModule.forChild(
            tuiGenerateRoutes(ExampleTuiEditorUploadingImagesComponent),
        ),
        TuiValidatorModule,
    ],
    declarations: [
        TuiEditorUploadingImagesExample1,
        ExampleTuiEditorUploadingImagesComponent,
    ],
})
export class ExampleTuiEditorUploadImagesModule {}
