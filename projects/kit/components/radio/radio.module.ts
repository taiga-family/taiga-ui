import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
    TuiCheckedModule,
    TuiFocusableModule,
    TuiFocusedModule,
    TuiFocusVisibleModule,
} from '@taiga-ui/cdk';
import {TuiWrapperModule} from '@taiga-ui/core';

import {TuiRadioComponent} from './radio.component';

@NgModule({
    imports: [
        CommonModule,
        TuiCheckedModule,
        TuiFocusableModule,
        TuiFocusedModule,
        TuiFocusVisibleModule,
        TuiWrapperModule,
    ],
    declarations: [TuiRadioComponent],
    exports: [TuiRadioComponent],
})
export class TuiRadioModule {}
