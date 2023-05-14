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
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiHostedDropdownModule,
    TuiLinkModule,
    TuiSvgModule,
} from '@taiga-ui/core';

import {ExampleTuiEditorPasteImageToolComponent} from './editor-paste-image-tool.component';
import {TuiEditorPasteImageToolExample1} from './examples/1';
import {ExampleTuiPasteImageToolModule} from './examples/1/image-tool/image-tool.module';

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
        ExampleTuiPasteImageToolModule,
        TuiEditorSocketModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiEditorPasteImageToolComponent)),
        TuiTextCodeModule,
    ],
    declarations: [
        TuiEditorPasteImageToolExample1,
        ExampleTuiEditorPasteImageToolComponent,
    ],
})
export class ExampleTuiEditorPasteImageToolModule {}
