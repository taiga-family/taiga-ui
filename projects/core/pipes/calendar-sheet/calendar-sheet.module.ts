import {NgModule} from '@angular/core';
import {TuiCalendarSheetPipe} from './calendar-sheet.pipe';

@NgModule({
    declarations: [TuiCalendarSheetPipe],
    exports: [TuiCalendarSheetPipe],
})
export class TuiCalendarSheetPipeModule {}
