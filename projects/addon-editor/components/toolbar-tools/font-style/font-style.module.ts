import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiLetModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDescribedByModule,
    TuiHintModule,
    TuiHostedDropdownModule,
} from '@taiga-ui/core';

import {TuiFontStyleComponent} from './font-style.component';

@NgModule({
    imports: [
        CommonModule,
        TuiHostedDropdownModule,
        TuiButtonModule,
        TuiHintModule,
        TuiDescribedByModule,
        TuiLetModule,
    ],
    declarations: [TuiFontStyleComponent],
    exports: [TuiFontStyleComponent],
})
export class TuiFontStyleModule {}
