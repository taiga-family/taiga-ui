import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiHoveredModule, TuiPressedModule} from '@taiga-ui/cdk';
import {TuiWrapperModule} from '@taiga-ui/core';
import {TuiCheckboxModule} from '@taiga-ui/kit/components/checkbox';

import {TuiCheckboxBlockComponent} from './checkbox-block.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiHoveredModule,
        TuiPressedModule,
        TuiCheckboxModule,
        TuiWrapperModule,
    ],
    declarations: [TuiCheckboxBlockComponent],
    exports: [TuiCheckboxBlockComponent],
})
export class TuiCheckboxBlockModule {}
