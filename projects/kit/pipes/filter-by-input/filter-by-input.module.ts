import {NgModule} from '@angular/core';

import {TuiFilterByInputPipe} from './filter-by-input.pipe';
import {TuiFilterByInputWithPipe} from './filter-by-input-with.pipe';

@NgModule({
    declarations: [TuiFilterByInputPipe, TuiFilterByInputWithPipe],
    exports: [TuiFilterByInputPipe, TuiFilterByInputWithPipe],
})
export class TuiFilterByInputPipeModule {}
