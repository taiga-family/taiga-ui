import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiCurrencyPipeModule} from '@taiga-ui/addon-commerce/pipes';
import {TuiMoneyComponent} from './money.component';

@NgModule({
    imports: [CommonModule, TuiCurrencyPipeModule],
    declarations: [TuiMoneyComponent],
    exports: [TuiMoneyComponent],
})
export class TuiMoneyModule {}
