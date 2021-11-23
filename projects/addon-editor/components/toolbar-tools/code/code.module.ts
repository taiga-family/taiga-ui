import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiDescribedByModule,
    TuiHintModule,
    TuiHostedDropdownModule,
} from '@taiga-ui/core';

import {CodeComponent} from './code.component';

@NgModule({
    imports: [
        CommonModule,
        TuiHostedDropdownModule,
        TuiButtonModule,
        TuiHintModule,
        TuiDescribedByModule,
        TuiDataListModule,
    ],
    declarations: [CodeComponent],
    exports: [CodeComponent],
})
export class TuiCodeModule {}
