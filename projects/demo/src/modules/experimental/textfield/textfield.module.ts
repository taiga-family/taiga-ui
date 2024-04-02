import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {
    TuiDropdownModule,
    TuiHintModule,
    TuiIconComponent,
    TuiNotificationModule,
} from '@taiga-ui/core';
import {TuiTextfieldModule, TuiTooltipModule} from '@taiga-ui/experimental';
import {
    TuiChevronDirective,
    TuiDataListWrapperModule,
    TuiFilterByInputPipeModule,
} from '@taiga-ui/kit';

import {TuiTextfieldExample1} from './examples/1';
import {TuiTextfieldExample2} from './examples/2';
import {TuiTextfieldExample3} from './examples/3';
import {ExampleTuiTextfieldComponent} from './textfield.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiTextfieldModule,
        TuiTooltipModule,
        TuiNotificationModule,
        TuiHintModule,
        TuiIconComponent,
        TuiDropdownModule,
        tuiGetDocModules(ExampleTuiTextfieldComponent),
        TuiDataListWrapperModule,
        TuiFilterByInputPipeModule,
        TuiChevronDirective,
    ],
    declarations: [
        ExampleTuiTextfieldComponent,
        TuiTextfieldExample1,
        TuiTextfieldExample2,
        TuiTextfieldExample3,
    ],
    exports: [ExampleTuiTextfieldComponent],
})
export class ExampleTuiTextfieldModule {}
