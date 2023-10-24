import {NgModule} from '@angular/core';
import {TuiFormatNumberPipe} from '@taiga-ui/core';

import {TuiAmountPipePipe} from './amount.pipe';

@NgModule({
    declarations: [TuiAmountPipePipe],
    exports: [TuiAmountPipePipe],
    providers: [TuiFormatNumberPipe],
})
export class TuiAmountPipeModule {}
