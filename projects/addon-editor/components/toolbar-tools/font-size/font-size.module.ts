import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiHintModule,
    TuiHostedDropdownModule,
} from '@taiga-ui/core';

import {TuiFontSizeComponent} from './font-size.component';

@NgModule({
    imports: [
        CommonModule,
        TuiHostedDropdownModule,
        TuiButtonModule,
        TuiHintModule,
        TuiDataListModule,
    ],
    declarations: [TuiFontSizeComponent],
    exports: [TuiFontSizeComponent],
})
export class TuiFontSizeModule {}
