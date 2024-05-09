import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
    TuiPrimitiveTextfieldModule,
    TuiScrollbarComponent,
    TuiSvgComponent,
    TuiTextfieldComponent,
    TuiTooltipModule,
    TuiWrapperModule,
} from '@taiga-ui/core';
import {TuiTabDirective} from '@taiga-ui/kit/components';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiTextareaComponent} from './textarea.component';
import {TuiTextareaDirective} from './textarea.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiScrollbarComponent,
        TuiTooltipModule,
        TuiWrapperModule,
        TuiSvgComponent,
        TuiPrimitiveTextfieldModule,
        PolymorpheusModule,
        TuiTabDirective,
    ],
    declarations: [TuiTextareaComponent, TuiTextareaDirective],
    exports: [TuiTextareaComponent, TuiTextareaDirective, TuiTextfieldComponent],
})
export class TuiTextareaModule {}
