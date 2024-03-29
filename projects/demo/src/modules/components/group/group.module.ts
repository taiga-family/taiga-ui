import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiCurrencyPipeModule} from '@taiga-ui/addon-commerce';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {
    TuiButtonDirective,
    TuiDataListModule,
    TuiErrorModule,
    TuiGroupDirective,
    TuiHintModule,
    TuiLinkModule,
    TuiModeModule,
    TuiTextfieldControllerModule,
    TuiTitleDirective,
} from '@taiga-ui/core';
import {
    TuiBadgeDirective,
    TuiBlockDirective,
    TuiComboBoxModule,
    TuiDataListWrapperModule,
    TuiFieldErrorPipeModule,
    TuiInputModule,
    TuiInputNumberModule,
    TuiMultiSelectModule,
    TuiProjectClassModule,
    TuiRadioComponent,
    TuiSelectModule,
} from '@taiga-ui/kit';

import {TuiGroupExample1} from './examples/1';
import {TuiGroupExample2} from './examples/2';
import {TuiGroupExample3} from './examples/3';
import {TuiGroupExample4} from './examples/4';
import {ExampleTuiGroupComponent} from './group.component';

@NgModule({
    imports: [
        TuiProjectClassModule,
        TuiLinkModule,
        TuiBadgeDirective,
        TuiButtonDirective,
        TuiSelectModule,
        TuiGroupDirective,
        TuiInputModule,
        TuiErrorModule,
        TuiFieldErrorPipeModule,
        TuiComboBoxModule,
        TuiCurrencyPipeModule,
        TuiInputNumberModule,
        TuiModeModule,
        TuiDataListModule,
        TuiDataListWrapperModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiTextfieldControllerModule,
        TuiHintModule,
        TuiMultiSelectModule,
        TuiBlockDirective,
        TuiRadioComponent,
        tuiGetDocModules(ExampleTuiGroupComponent),
        TuiTitleDirective,
    ],
    declarations: [
        ExampleTuiGroupComponent,
        TuiGroupExample1,
        TuiGroupExample2,
        TuiGroupExample3,
        TuiGroupExample4,
    ],
    exports: [ExampleTuiGroupComponent],
})
export class ExampleTuiGroupModule {}
