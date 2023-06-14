import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiDropdownModule,
    TuiHostedDropdownModule,
} from '@taiga-ui/core';

import {ExampleTuiFontSizeToolComponent} from './font-size-tool.component';

@NgModule({
    imports: [
        CommonModule,
        TuiButtonModule,
        TuiHostedDropdownModule,
        TuiDropdownModule,
        TuiDataListModule,
    ],
    declarations: [ExampleTuiFontSizeToolComponent],
    exports: [ExampleTuiFontSizeToolComponent],
})
export class ExampleTuiFontSizeToolModule {}
