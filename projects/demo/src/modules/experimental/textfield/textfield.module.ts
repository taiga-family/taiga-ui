import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {
    TuiHintModule,
    TuiNotificationModule,
    TuiPrimitiveTextfieldModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    TuiIconModule,
    TuiTextfieldModule,
    TuiTooltipModule,
} from '@taiga-ui/experimental';

import {TuiTextfieldExample1} from './examples/1';
import {ExampleTuiTextfieldComponent} from './textfield.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiTextfieldModule,
        TuiTooltipModule,
        TuiNotificationModule,
        TuiPrimitiveTextfieldModule,
        TuiTextfieldControllerModule,
        TuiHintModule,
        TuiIconModule,
        tuiGetDocModules(ExampleTuiTextfieldComponent),
    ],
    declarations: [ExampleTuiTextfieldComponent, TuiTextfieldExample1],
    exports: [ExampleTuiTextfieldComponent],
})
export class ExampleTuiTextfieldModule {}
