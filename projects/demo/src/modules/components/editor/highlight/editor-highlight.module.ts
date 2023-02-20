import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiEditorModule, TuiEditorSocketModule} from '@taiga-ui/addon-editor';
import {TuiButtonModule, TuiLinkModule, TuiSvgModule} from '@taiga-ui/core';

import {ExampleTuiEditorHighlightComponent} from './editor-highlight.component';
import {TuiEditorHighlightExample1} from './examples/1';

@NgModule({
    imports: [
        CommonModule,
        TuiSvgModule,
        TuiLinkModule,
        TuiButtonModule,
        TuiAddonDocModule,
        FormsModule,
        ReactiveFormsModule,
        TuiEditorModule,
        TuiEditorSocketModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiEditorHighlightComponent)),
    ],
    declarations: [TuiEditorHighlightExample1, ExampleTuiEditorHighlightComponent],
})
export class ExampleTuiEditorHighlightModule {}
