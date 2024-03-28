import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiFocusableModule} from '@taiga-ui/cdk';
import {TuiButtonModule} from '@taiga-ui/core/components/button';

import {TuiPrimitiveSpinButtonComponent} from './primitive-spin-button.component';

@NgModule({
    imports: [CommonModule, TuiButtonModule, TuiFocusableModule],
    declarations: [TuiPrimitiveSpinButtonComponent],
    exports: [TuiPrimitiveSpinButtonComponent],
})
export class TuiPrimitiveSpinButtonModule {}
