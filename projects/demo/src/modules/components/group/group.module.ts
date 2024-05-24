import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiSetupComponent} from '@demo/utils';
import {TuiCurrencyPipe} from '@taiga-ui/addon-commerce';
import {tuiGetDocModules} from '@taiga-ui/addon-doc';
import {
    TuiButtonDirective,
    TuiDataList,
    TuiErrorComponent,
    TuiGroupDirective,
    TuiHint,
    TuiLinkDirective,
    TuiTextfieldControllerModule,
    TuiTitleDirective,
} from '@taiga-ui/core';
import {
    TuiBadgeDirective,
    TuiBlockDirective,
    TuiDataListWrapperModule,
    TuiFieldErrorPipeModule,
    TuiRadioComponent,
} from '@taiga-ui/kit';
import {
    TuiComboBoxModule,
    TuiInputModule,
    TuiInputNumberModule,
    TuiMultiSelectModule,
    TuiSelectModule,
} from '@taiga-ui/legacy';

import {TuiGroupExample1} from './examples/1';
import {TuiGroupExample2} from './examples/2';
import {TuiGroupExample3} from './examples/3';
import {TuiGroupExample4} from './examples/4';
import {ExampleTuiGroupComponent} from './group.component';

@NgModule({
    imports: [
        TuiLinkDirective,
        TuiBadgeDirective,
        TuiButtonDirective,
        TuiSelectModule,
        TuiGroupDirective,
        TuiInputModule,
        TuiErrorComponent,
        TuiFieldErrorPipeModule,
        TuiComboBoxModule,
        TuiCurrencyPipe,
        TuiInputNumberModule,
        TuiDataList,
        TuiDataListWrapperModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiTextfieldControllerModule,
        TuiHint,
        TuiMultiSelectModule,
        TuiBlockDirective,
        TuiRadioComponent,
        tuiGetDocModules(ExampleTuiGroupComponent),
        TuiTitleDirective,
        TuiSetupComponent,
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
