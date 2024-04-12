import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiInputCardGroupedModule} from '@taiga-ui/addon-commerce';
import {TuiAutoFocusDirective, TuiLetModule} from '@taiga-ui/cdk';
import {
    TuiButtonDirective,
    TuiFormatNumberPipeModule,
    TuiLinkDirective,
    TuiLoaderModule,
    TuiSvgComponent,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiLabelDirective} from '@taiga-ui/experimental';
import {TuiButtonLoadingComponent, TuiCheckboxComponent} from '@taiga-ui/kit';

import {PayModalComponent} from './pay-modal.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiLinkDirective,
        TuiSvgComponent,
        TuiLetModule,
        TuiLoaderModule,
        TuiButtonDirective,
        TuiAutoFocusDirective,
        ReactiveFormsModule,
        TuiInputCardGroupedModule,
        TuiFormatNumberPipeModule,
        TuiTextfieldControllerModule,
        TuiLabelDirective,
        TuiCheckboxComponent,
        TuiButtonLoadingComponent,
    ],
    declarations: [PayModalComponent],
})
export class PayExampleModalModule {}
