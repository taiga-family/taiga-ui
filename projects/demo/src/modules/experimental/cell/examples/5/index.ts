import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiMoneyOptionsProvider} from '@taiga-ui/addon-commerce';

@Component({
    selector: 'tui-cell-example-5',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    providers: [tuiMoneyOptionsProvider({sign: 'always', colored: true})],
    changeDetection,
    encapsulation,
})
export class TuiCellExample5 {
    moneyAmount = 250;
    maxMoneyAmount = 1000;

    addMoney(): void {
        this.moneyAmount = Math.min(this.moneyAmount + 250, this.maxMoneyAmount);
    }
}
