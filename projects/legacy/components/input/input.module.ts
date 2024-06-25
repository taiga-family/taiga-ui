import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiDropdown} from '@taiga-ui/core/directives/dropdown';
import {
    TuiPrimitiveTextfieldModule,
    TuiTextfieldComponent,
} from '@taiga-ui/legacy/components/primitive-textfield';

import {TuiInputComponent} from './input.component';
import {TuiInputDirective} from './input.directive';

/**
 * @deprecated: drop in v5.0
 */
@NgModule({
    imports: [CommonModule, TuiPrimitiveTextfieldModule, ...TuiDropdown],
    declarations: [TuiInputComponent, TuiInputDirective],
    exports: [
        TuiInputComponent,
        TuiInputDirective,
        TuiTextfieldComponent,
        ...TuiDropdown,
    ],
})
export class TuiInputModule {}
