import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiEditorModule, TuiEditorSocketModule} from '@taiga-ui/addon-editor';

import {ExampleTuiEditorFontComponent} from './editor-font.component';
import {TuiEditorFontExample1} from './examples/1';
import {TuiEditorFontExample2} from './examples/2';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        ReactiveFormsModule,
        TuiEditorModule,
        TuiEditorSocketModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiEditorFontComponent)),
    ],
    declarations: [
        TuiEditorFontExample1,
        TuiEditorFontExample2,
        ExampleTuiEditorFontComponent,
    ],
})
export class ExampleTuiEditorFontModule {}
