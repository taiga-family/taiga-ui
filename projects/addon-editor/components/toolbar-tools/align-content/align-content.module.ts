import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiLetModule} from '@taiga-ui/cdk';
import {TuiButtonModule, TuiHintModule, TuiHostedDropdownModule} from '@taiga-ui/core';

import {TuiAlignContentComponent} from './align-content.component';

@NgModule({
    imports: [
        CommonModule,
        TuiHostedDropdownModule,
        TuiButtonModule,
        TuiHintModule,
        TuiLetModule,
    ],
    declarations: [TuiAlignContentComponent],
    exports: [TuiAlignContentComponent],
})
export class TuiAlignContentModule {}
