import {NgModule} from '@angular/core';
import {TuiFilterByInputWithPipe} from './filter-by-input-with.pipe';
import {TuiFilterByInputPipe} from './filter-by-input.pipe';

@NgModule({
    declarations: [TuiFilterByInputPipe, TuiFilterByInputWithPipe],
    exports: [TuiFilterByInputPipe, TuiFilterByInputWithPipe],
})
export class TuiFilterByInputPipeModule {}
