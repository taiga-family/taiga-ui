import {NgModule} from '@angular/core';

import {TuiFilterPipe} from './filter.pipe';

@NgModule({
    declarations: [TuiFilterPipe],
    exports: [TuiFilterPipe],
})
export class TuiFilterPipeModule {}
