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

import {ExampleTuiEditorPasteEmojiToolComponent} from './editor-paste-emoji.component';
import {TuiEditorPasteEmojiToolExample1} from './examples/1';
import {ExampleTuiSmilesToolModule} from './examples/1/smiles-tool/smiles-tool.module';

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
        ExampleTuiSmilesToolModule,
        TuiEditorSocketModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiEditorPasteEmojiToolComponent)),
        TuiTextCodeModule,
    ],
    declarations: [
        TuiEditorPasteEmojiToolExample1,
        ExampleTuiEditorPasteEmojiToolComponent,
    ],
})
export class ExampleTuiEditorPasteEmojiToolModule {}
