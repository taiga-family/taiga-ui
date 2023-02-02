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

import {ExampleTuiEditorEmbedComponent} from './editor-embed.component';
import {TuiEditorEmbedExample1} from './examples/1';
import {ExampleTuiYoutubeToolModule} from './examples/1/youtube-tool/youtube-tool.module';
import {TuiEditorEmbedExample2} from './examples/2';
import {ExampleTuiEmbedToolModule} from './examples/2/embed-tool/embed-tool.module';

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
        ExampleTuiYoutubeToolModule,
        ExampleTuiEmbedToolModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiEditorEmbedComponent)),
    ],
    declarations: [
        ExampleTuiEditorEmbedComponent,
        TuiEditorEmbedExample1,
        TuiEditorEmbedExample2,
    ],
})
export class ExampleTuiEditorEmbedModule {}
