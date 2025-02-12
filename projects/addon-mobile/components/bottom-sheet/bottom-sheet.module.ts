import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {TuiBottomSheetComponent} from './bottom-sheet.component';

@NgModule({
    imports: [CommonModule],
    declarations: [TuiBottomSheetComponent],
    exports: [TuiBottomSheetComponent],
})
export class TuiBottomSheetModule {}
