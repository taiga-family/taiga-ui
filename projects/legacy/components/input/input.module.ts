import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiDropdownModule} from '@taiga-ui/core';
import {
    TuiPrimitiveTextfieldModule,
    TuiTextfieldComponent,
} from '@taiga-ui/legacy/components/primitive-textfield';

import {TuiInputComponent} from './input.component';
import {TuiInputDirective} from './input.directive';

@NgModule({
    imports: [CommonModule, TuiPrimitiveTextfieldModule, TuiDropdownModule],
    declarations: [TuiInputComponent, TuiInputDirective],
    exports: [TuiInputComponent, TuiInputDirective, TuiTextfieldComponent],
})
export class TuiInputModule {}
