import {NgModule} from '@angular/core';

import {TuiFormatCardPipe} from './format-card.pipe';

@NgModule({
    declarations: [TuiFormatCardPipe],
    exports: [TuiFormatCardPipe],
})
export class TuiFormatCardModule {}
