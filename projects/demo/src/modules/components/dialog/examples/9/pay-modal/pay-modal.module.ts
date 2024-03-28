import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiInputCardGroupedModule} from '@taiga-ui/addon-commerce';
import {TuiAutoFocusDirective, TuiLetModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiFormatNumberPipeModule,
    TuiLinkModule,
    TuiLoaderModule,
    TuiSvgModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiLabelDirective} from '@taiga-ui/experimental';
import {TuiCheckboxComponent} from '@taiga-ui/kit';

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
        TuiAutoFocusDirective,
        ReactiveFormsModule,
        TuiInputCardGroupedModule,
        TuiFormatNumberPipeModule,
        TuiTextfieldControllerModule,
        TuiLabelDirective,
        TuiCheckboxComponent,
    ],
    declarations: [PayModalComponent],
})
export class PayExampleModalModule {}
