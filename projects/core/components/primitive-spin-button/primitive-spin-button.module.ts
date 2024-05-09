import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiButtonDirective} from '@taiga-ui/core/components/button';

import {TuiPrimitiveSpinButtonComponent} from './primitive-spin-button.component';

@NgModule({
    imports: [CommonModule, TuiButtonDirective],
    declarations: [TuiPrimitiveSpinButtonComponent],
    exports: [TuiPrimitiveSpinButtonComponent],
})
export class TuiPrimitiveSpinButtonModule {}
