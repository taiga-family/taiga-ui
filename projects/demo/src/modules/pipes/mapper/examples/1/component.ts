import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-mapper-example1`,
    templateUrl: `./template.html`,
    changeDetection,
    encapsulation,
})
export class TuiMapperExample1 {
    readonly mapper = (amount: number, currencySymbol: string): string =>
        `Total: ${amount} ${currencySymbol}`;
}
