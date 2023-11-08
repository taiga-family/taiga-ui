import {NgModule} from '@angular/core';

import {TuiReplacePipe} from './replace.pipe';

@NgModule({
    declarations: [TuiReplacePipe],
    exports: [TuiReplacePipe],
})
export class TuiReplacePipeModule {}
