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
    TuiSvgModule,
} from '@taiga-ui/core';

import {ExampleTuiEditorResizableImagesComponent} from './editor-preview-images.component';
import {TuiEditorPreviewImagesExample1} from './examples/1';
import {ImagePreviewExampleModule} from './examples/1/image-preview/image-preview.module';

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
        TuiEditorSocketModule,
        ImagePreviewExampleModule,
        RouterModule.forChild(
            tuiGenerateRoutes(ExampleTuiEditorResizableImagesComponent),
        ),
    ],
    declarations: [
        TuiEditorPreviewImagesExample1,
        ExampleTuiEditorResizableImagesComponent,
    ],
})
export class ExampleTuiEditorPreviewImagesToolModule {}
