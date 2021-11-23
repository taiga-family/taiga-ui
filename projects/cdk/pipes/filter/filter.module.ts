import {NgModule} from '@angular/core';

import {TuiFilterPipe} from './filter.pipe';

@NgModule({
    exports: [TuiFilterPipe],
    declarations: [TuiFilterPipe],
})
export class TuiFilterPipeModule {}
