import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiCurrencyPipeModule} from '@taiga-ui/addon-commerce/pipes';
import {TuiLetModule} from '@taiga-ui/cdk';

import {TuiMoneyComponent} from './money.component';
import {TuiFractionPartPipe} from './pipes/fraction-part.pipe';
import {TuiIntegerPartPipe} from './pipes/integer-part.pipe';
import {TuiSignSymbolPipe} from './pipes/sign-symbol.pipe';

@NgModule({
    imports: [CommonModule, TuiCurrencyPipeModule, TuiLetModule],
    declarations: [
        TuiMoneyComponent,
        TuiFractionPartPipe,
        TuiIntegerPartPipe,
        TuiSignSymbolPipe,
    ],
    exports: [TuiMoneyComponent],
})
export class TuiMoneyModule {}
