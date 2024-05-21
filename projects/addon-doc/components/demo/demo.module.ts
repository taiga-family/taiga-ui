import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiResizeableDirective, TuiResizerDirective} from '@taiga-ui/cdk';
import {
    TuiButtonDirective,
    TuiDataList,
    TuiExpand,
    TuiGroupDirective,
    TuiHint,
    TuiLinkDirective,
    TuiSvgComponent,
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
        TuiExpand,
        TuiGroupDirective,
        TuiTooltipModule,
        TuiCheckboxComponent,
        TuiSvgComponent,
        TuiDataListWrapperModule,
        TuiDataList,
        TuiTextfieldControllerModule,
        TuiHint,
        TuiResizerDirective,
        TuiResizeableDirective,
        TuiBlockDirective,
        TuiChevronDirective,
        TuiSwitchComponent,
    ],
    declarations: [TuiDocDemoComponent],
    exports: [TuiDocDemoComponent],
})
export class TuiDocDemoModule {}
