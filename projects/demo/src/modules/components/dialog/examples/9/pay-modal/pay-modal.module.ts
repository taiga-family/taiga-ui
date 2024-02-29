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
import {TuiCheckboxModule, TuiLabelDirective} from '@taiga-ui/experimental';

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
        TuiInputCardGroupedModule,
        TuiFormatNumberPipeModule,
        TuiTextfieldControllerModule,
        TuiLabelDirective,
        TuiCheckboxModule,
    ],
    declarations: [PayModalComponent],
})
export class PayExampleModalModule {}
