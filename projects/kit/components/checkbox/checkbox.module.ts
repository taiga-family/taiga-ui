import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
    TuiCheckedModule,
    TuiFocusableModule,
    TuiFocusedModule,
    TuiFocusVisibleModule,
    TuiHoveredModule,
    TuiPressedModule,
} from '@taiga-ui/cdk';
import {TuiPrimitiveCheckboxModule} from '@taiga-ui/core';

import {TuiCheckboxComponent} from './checkbox.component';

@NgModule({
    imports: [
        CommonModule,
        TuiCheckedModule,
        TuiFocusableModule,
        TuiFocusedModule,
        TuiHoveredModule,
        TuiPressedModule,
        TuiFocusVisibleModule,
        TuiPrimitiveCheckboxModule,
    ],
    declarations: [TuiCheckboxComponent],
    exports: [TuiCheckboxComponent],
})
export class TuiCheckboxModule {}
