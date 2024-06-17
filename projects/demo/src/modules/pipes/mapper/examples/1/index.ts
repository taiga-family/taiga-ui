import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiMapperPipe} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    imports: [TuiMapperPipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly mapper = (amount: number, currencySymbol: string): string =>
        `Total: ${amount} ${currencySymbol}`;
}
