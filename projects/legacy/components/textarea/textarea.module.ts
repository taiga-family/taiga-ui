import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
    TuiAppearanceDirective,
    TuiIconComponent,
    TuiScrollbarComponent,
    TuiTooltip,
} from '@taiga-ui/core';
import {
    TuiPrimitiveTextfieldModule,
    TuiTextfieldComponent,
} from '@taiga-ui/legacy/components/primitive-textfield';
import {TuiWrapperModule} from '@taiga-ui/legacy/directives';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import {TuiTextareaComponent} from './textarea.component';
import {TuiTextareaDirective} from './textarea.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiScrollbarComponent,
        TuiTooltip,
        TuiWrapperModule,
        TuiPrimitiveTextfieldModule,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiIconComponent,
        TuiAppearanceDirective,
    ],
    declarations: [TuiTextareaComponent, TuiTextareaDirective],
    exports: [
        TuiTextareaComponent,
        TuiTextareaDirective,
        TuiTextfieldComponent,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
    ],
})
export class TuiTextareaModule {}
