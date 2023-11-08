import {NgModule} from '@angular/core';

import {TuiFormatPhonePipe} from './format-phone.pipe';

@NgModule({
    declarations: [TuiFormatPhonePipe],
    exports: [TuiFormatPhonePipe],
})
export class TuiFormatPhonePipeModule {}
