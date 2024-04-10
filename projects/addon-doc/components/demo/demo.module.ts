import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiResizerModule} from '@taiga-ui/cdk';
import {
    TuiButtonDirective,
    TuiDataListModule,
    TuiExpandModule,
    TuiGroupDirective,
    TuiHintModule,
    TuiLinkDirective,
    TuiSvgModule,
    TuiTextfieldControllerModule,
    TuiTooltipModule,
} from '@taiga-ui/core';
import {
    TuiBlockDirective,
    TuiCheckboxComponent,
    TuiChevronDirective,
    TuiDataListWrapperModule,
    TuiSelectModule,
    TuiSwitchComponent,
} from '@taiga-ui/kit';

import {TuiDocDemoComponent} from './demo.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        TuiLinkDirective,
        TuiButtonDirective,
        TuiSelectModule,
        TuiExpandModule,
        TuiGroupDirective,
        TuiTooltipModule,
        TuiCheckboxComponent,
        TuiSvgModule,
        TuiDataListWrapperModule,
        TuiDataListModule,
        TuiTextfieldControllerModule,
        TuiHintModule,
        TuiResizerModule,
        TuiBlockDirective,
        TuiChevronDirective,
        TuiSwitchComponent,
    ],
    declarations: [TuiDocDemoComponent],
    exports: [TuiDocDemoComponent],
})
export class TuiDocDemoModule {}
