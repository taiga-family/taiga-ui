import {NgModule} from '@angular/core';

import {TuiAmountPipePipe} from './amount.pipe';

@NgModule({
    declarations: [TuiAmountPipePipe],
    exports: [TuiAmountPipePipe],
})
export class TuiAmountPipeModule {}
