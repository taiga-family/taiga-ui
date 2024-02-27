import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-mapper-example1',
    templateUrl: './template.html',
    encapsulation,
    changeDetection,
})
export class TuiMapperExample1 {
    protected readonly mapper = (amount: number, currencySymbol: string): string =>
        `Total: ${amount} ${currencySymbol}`;
}
