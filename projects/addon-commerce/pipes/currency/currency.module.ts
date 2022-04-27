import {NgModule} from '@angular/core';

import {TuiCurrencyPipe} from './currency.pipe';

@NgModule({
    declarations: [TuiCurrencyPipe],
    exports: [TuiCurrencyPipe],
})
export class TuiCurrencyPipeModule {}
