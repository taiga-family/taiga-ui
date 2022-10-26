import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiColorPickerModule,
    TuiColorSelectorModule,
    TuiInputColorModule,
    TuiPaletteModule,
} from '@taiga-ui/addon-editor';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDropdownModule,
    TuiHostedDropdownModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';

import {ExampleTuiColorPickerComponent} from './color-picker.component';
import {TuiColorPickerExample1} from './examples/1';
import {TuiColorPickerExample2} from './examples/2';
import {TuiColorPickerExample3} from './examples/3';

@NgModule({
    imports: [
        CommonModule,
        TuiButtonModule,
        TuiHostedDropdownModule,
        TuiColorSelectorModule,
        TuiActiveZoneModule,
        TuiDropdownModule,
        TuiInputColorModule,
        TuiTextfieldControllerModule,
        TuiAddonDocModule,
        TuiPaletteModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiColorPickerComponent)),
        FormsModule,
        TuiColorPickerModule,
    ],
    declarations: [
        ExampleTuiColorPickerComponent,
        TuiColorPickerExample1,
        TuiColorPickerExample2,
        TuiColorPickerExample3,
    ],
    exports: [ExampleTuiColorPickerComponent],
})
export class ExampleTuiColorPickerModule {}
