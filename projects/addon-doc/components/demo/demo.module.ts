import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiResizerModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiExpandModule,
    TuiGroupDirective,
    TuiHintModule,
    TuiLinkModule,
    TuiModeModule,
    TuiSvgModule,
    TuiTextfieldControllerModule,
    TuiTooltipModule,
} from '@taiga-ui/core';
import {
    TuiBlockDirective,
    TuiCheckboxLabeledModule,
    TuiDataListWrapperModule,
    TuiSelectModule,
} from '@taiga-ui/kit';

import {TuiDocDemoComponent} from './demo.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        TuiLinkModule,
        TuiButtonModule,
        TuiSelectModule,
        TuiExpandModule,
        TuiGroupDirective,
        TuiTooltipModule,
        TuiModeModule,
        TuiCheckboxLabeledModule,
        TuiSvgModule,
        TuiDataListWrapperModule,
        TuiDataListModule,
        TuiTextfieldControllerModule,
        TuiHintModule,
        TuiResizerModule,
        TuiBlockDirective,
    ],
    declarations: [TuiDocDemoComponent],
    exports: [TuiDocDemoComponent],
})
export class TuiDocDemoModule {}
