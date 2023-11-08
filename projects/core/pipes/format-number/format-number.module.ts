import {NgModule} from '@angular/core';

import {TuiFormatNumberPipe} from './format-number.pipe';

@NgModule({
    declarations: [TuiFormatNumberPipe],
    exports: [TuiFormatNumberPipe],
})
export class TuiFormatNumberPipeModule {}
