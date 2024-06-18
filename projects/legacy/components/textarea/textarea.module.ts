import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiAppearance, TuiIcon, TuiScrollbar} from '@taiga-ui/core';
import {
    TuiPrimitiveTextfieldModule,
    TuiTextfieldComponent,
} from '@taiga-ui/legacy/components/primitive-textfield';
import {TuiTooltip} from '@taiga-ui/legacy/components/tooltip';
import {TuiWrapperModule} from '@taiga-ui/legacy/directives';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import {TuiTextareaComponent} from './textarea.component';
import {TuiTextareaDirective} from './textarea.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiScrollbar,
        TuiTooltip,
        TuiWrapperModule,
        TuiPrimitiveTextfieldModule,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiIcon,
        TuiAppearance,
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
