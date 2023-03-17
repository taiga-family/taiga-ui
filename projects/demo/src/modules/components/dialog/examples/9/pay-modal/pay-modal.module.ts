import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiInputCardGroupedModule} from '@taiga-ui/addon-commerce';
import {TuiAutoFocusModule, TuiLetModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiFormatNumberPipeModule,
    TuiLinkModule,
    TuiLoaderModule,
    TuiSvgModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiCheckboxLabeledModule} from '@taiga-ui/kit';

import {PayModalComponent} from './pay-modal.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiLinkModule,
        TuiSvgModule,
        TuiLetModule,
        TuiLoaderModule,
        TuiButtonModule,
        TuiAutoFocusModule,
        ReactiveFormsModule,
        TuiCheckboxLabeledModule,
        TuiInputCardGroupedModule,
        TuiFormatNumberPipeModule,
        TuiTextfieldControllerModule,
    ],
    declarations: [PayModalComponent],
})
export class PayExampleModalModule {}
