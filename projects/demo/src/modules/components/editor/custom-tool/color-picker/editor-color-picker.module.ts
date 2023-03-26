import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiEditorModule, TuiEditorSocketModule} from '@taiga-ui/addon-editor';
import {TuiButtonModule, TuiLinkModule} from '@taiga-ui/core';

import {ExampleTuiEditorColorPickerToolComponent} from './editor-color-picker.component';
import {TuiEditorColorPickerToolExample1} from './examples/1';
import {CustomColorPickerModule} from './examples/1/custom-color-picker/custom-color-picker.module';

@NgModule({
    imports: [
        CommonModule,
        TuiLinkModule,
        TuiButtonModule,
        TuiAddonDocModule,
        ReactiveFormsModule,
        TuiEditorModule,
        TuiEditorSocketModule,
        CustomColorPickerModule,
        RouterModule.forChild(
            tuiGenerateRoutes(ExampleTuiEditorColorPickerToolComponent),
        ),
    ],
    declarations: [
        TuiEditorColorPickerToolExample1,
        ExampleTuiEditorColorPickerToolComponent,
    ],
})
export class ExampleTuiEditorColorPickerToolModule {}
