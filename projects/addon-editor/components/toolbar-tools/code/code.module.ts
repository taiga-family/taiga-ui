import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiDescribedByModule,
    TuiHintModule,
    TuiHostedDropdownModule,
} from '@taiga-ui/core';

import {TuiCodeComponent} from './code.component';

@NgModule({
    imports: [
        CommonModule,
        TuiHostedDropdownModule,
        TuiButtonModule,
        TuiHintModule,
        TuiDescribedByModule,
        TuiDataListModule,
    ],
    declarations: [TuiCodeComponent],
    exports: [TuiCodeComponent],
})
export class TuiCodeModule {}
