import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiFocusableModule} from '@taiga-ui/cdk';
import {
    TuiDescribedByModule,
    TuiPrimitiveTextfieldModule,
    TuiScrollbarModule,
    TuiSvgModule,
    TuiTextfieldComponent,
    TuiTooltipModule,
    TuiWrapperModule,
} from '@taiga-ui/core';

import {TuiTextAreaComponent} from './text-area.component';
import {TuiTextAreaDirective} from './text-area.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiFocusableModule,
        TuiScrollbarModule,
        TuiTooltipModule,
        TuiWrapperModule,
        TuiDescribedByModule,
        TuiSvgModule,
        TuiPrimitiveTextfieldModule,
    ],
    declarations: [TuiTextAreaComponent, TuiTextAreaDirective],
    exports: [TuiTextAreaComponent, TuiTextAreaDirective, TuiTextfieldComponent],
})
export class TuiTextAreaModule {}
