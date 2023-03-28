import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiEditorModule, TuiEditorSocketModule} from '@taiga-ui/addon-editor';
import {TuiButtonModule, TuiLinkModule, TuiSvgModule} from '@taiga-ui/core';

import {ExampleTuiEditorCodeBlockComponent} from './editor-code-block.component';
import {TuiEditorCodeBlockExample1} from './examples/1';

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
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiEditorCodeBlockComponent)),
    ],
    declarations: [TuiEditorCodeBlockExample1, ExampleTuiEditorCodeBlockComponent],
})
export class ExampleTuiEditorCodeBlockModule {}
