import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiColorSelectorModule} from '@taiga-ui/addon-editor/components';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDescribedByModule,
    TuiDropdownControllerModule,
    TuiHintModule,
    TuiHostedDropdownModule,
} from '@taiga-ui/core';
import {TuiTableCellColorComponent} from './table-cell-color.component';

@NgModule({
    imports: [
        CommonModule,
        TuiHostedDropdownModule,
        TuiColorSelectorModule,
        TuiButtonModule,
        TuiHintModule,
        TuiDescribedByModule,
        TuiActiveZoneModule,
        TuiDropdownControllerModule,
    ],
    declarations: [TuiTableCellColorComponent],
    exports: [TuiTableCellColorComponent],
})
export class TuiTableCellColorModule {}
