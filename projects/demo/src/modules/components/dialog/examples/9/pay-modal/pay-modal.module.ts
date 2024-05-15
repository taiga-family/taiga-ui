import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiInputCardGroupedModule} from '@taiga-ui/addon-commerce';
import {TuiAutoFocusDirective, TuiLetDirective} from '@taiga-ui/cdk';
import {
    TuiButtonDirective,
    TuiFormatNumberPipe,
    TuiLabelDirective,
    TuiLinkDirective,
    TuiLoaderModule,
    TuiSvgComponent,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiButtonLoadingComponent, TuiCheckboxComponent} from '@taiga-ui/kit';

import {PayModalComponent} from './pay-modal.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiLinkDirective,
        TuiSvgComponent,
        TuiLetDirective,
        TuiLoaderModule,
        TuiButtonDirective,
        TuiAutoFocusDirective,
        ReactiveFormsModule,
        TuiInputCardGroupedModule,
        TuiFormatNumberPipe,
        TuiTextfieldControllerModule,
        TuiLabelDirective,
        TuiCheckboxComponent,
        TuiButtonLoadingComponent,
    ],
    declarations: [PayModalComponent],
})
export class PayExampleModalModule {}
