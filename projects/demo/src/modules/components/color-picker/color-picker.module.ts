import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MaskitoModule} from '@maskito/angular';
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
    TuiLinkModule,
    TuiNotificationModule,
    TuiSvgModule,
    TuiTextfieldControllerModule,
    TuiWrapperModule,
} from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/kit';

import {ExampleTuiColorPickerComponent} from './color-picker.component';
import {TuiColorPickerExample1} from './examples/1';
import {TuiColorPickerExample2} from './examples/2';
import {TuiColorPickerExample3} from './examples/3';
import {TuiColorPickerExample4} from './examples/4';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaskitoModule,
        TuiColorPickerModule,
        TuiNotificationModule,
        TuiInputModule,
        TuiLinkModule,
        TuiSvgModule,
        TuiWrapperModule,
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
    ],
    declarations: [
        ExampleTuiColorPickerComponent,
        TuiColorPickerExample1,
        TuiColorPickerExample2,
        TuiColorPickerExample3,
        TuiColorPickerExample4,
    ],
    exports: [ExampleTuiColorPickerComponent],
})
export class ExampleTuiColorPickerModule {}
