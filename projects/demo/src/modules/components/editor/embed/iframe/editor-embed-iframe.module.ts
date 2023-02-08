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

import {ExampleTuiEditorEmbedIframeComponent} from './editor-embed-iframe.component';
import {ExampleTuiEmbedToolModule} from './examples/1/embed-tool/embed-tool.module';
import {TuiEditorEmbedIframeExample1} from './examples/1';

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
        ExampleTuiEmbedToolModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiEditorEmbedIframeComponent)),
    ],
    declarations: [ExampleTuiEditorEmbedIframeComponent, TuiEditorEmbedIframeExample1],
})
export class ExampleTuiEditorEmbedIframeModule {}
