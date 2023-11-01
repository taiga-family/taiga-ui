import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ResizeObserverModule} from '@ng-web-apis/resize-observer';
import {TuiResizerModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiExpandModule,
    TuiGroupModule,
    TuiHintModule,
    TuiLinkModule,
    TuiModeModule,
    TuiSvgModule,
    TuiTextfieldControllerModule,
    TuiTooltipModule,
} from '@taiga-ui/core';
import {
    TuiCheckboxLabeledModule,
    TuiDataListWrapperModule,
    TuiElasticContainerModule,
    TuiRadioBlockModule,
    TuiSelectModule,
} from '@taiga-ui/kit';

import {TuiDocCodeModule} from '../code/code.module';
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
        TuiGroupModule,
        TuiTooltipModule,
        TuiModeModule,
        TuiRadioBlockModule,
        TuiCheckboxLabeledModule,
        TuiSvgModule,
        TuiDataListWrapperModule,
        TuiDataListModule,
        TuiTextfieldControllerModule,
        TuiHintModule,
        TuiResizerModule,
        TuiDocCodeModule,
        ResizeObserverModule,
        TuiElasticContainerModule,
    ],
    declarations: [TuiDocDemoComponent],
    exports: [TuiDocDemoComponent],
})
export class TuiDocDemoModule {}
