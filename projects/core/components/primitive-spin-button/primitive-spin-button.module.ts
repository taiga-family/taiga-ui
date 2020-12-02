import {NgModule} from '@angular/core';
import {
    TuiFocusableModule,
    TuiFocusedModule,
    TuiFocusVisibleModule,
    TuiPreventDefaultModule,
} from '@taiga-ui/cdk';
import {TuiButtonModule} from '@taiga-ui/core/components/button';

import {TuiPrimitiveSpinButtonComponent} from './primitive-spin-button.component';

@NgModule({
    imports: [
        TuiFocusVisibleModule,
        TuiFocusedModule,
        TuiFocusableModule,
        TuiPreventDefaultModule,
        TuiButtonModule,
    ],
    declarations: [TuiPrimitiveSpinButtonComponent],
    exports: [TuiPrimitiveSpinButtonComponent],
})
export class TuiPrimitiveSpinButtonModule {}
