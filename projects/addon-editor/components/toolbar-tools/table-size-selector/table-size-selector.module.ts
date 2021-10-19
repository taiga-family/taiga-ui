import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiRepeatTimesModule} from '@taiga-ui/cdk';
import {TuiTableSizeSelectorComponent} from './table-size-selector.component';

@NgModule({
    imports: [CommonModule, TuiRepeatTimesModule],
    declarations: [TuiTableSizeSelectorComponent],
    exports: [TuiTableSizeSelectorComponent],
})
export class TuiTableSizeSelectorModule {}
