import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiEditorModule, TuiEditorSocketModule} from '@taiga-ui/addon-editor';

import {ExampleTuiEditorFontComponent} from './editor-font.component';
import {TuiEditorFontExample1} from './examples/1';
import {TuiEditorFontExample2} from './examples/2';
import {TuiEditorFontExample3} from './examples/3';
import {ExampleTuiFontSizeToolModule} from './examples/3/font-size-tool/font-size-tool.module';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        ReactiveFormsModule,
        TuiEditorModule,
        TuiEditorSocketModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiEditorFontComponent)),
        ExampleTuiFontSizeToolModule,
    ],
    declarations: [
        TuiEditorFontExample1,
        TuiEditorFontExample2,
        TuiEditorFontExample3,
        ExampleTuiEditorFontComponent,
    ],
})
export class ExampleTuiEditorFontModule {}
