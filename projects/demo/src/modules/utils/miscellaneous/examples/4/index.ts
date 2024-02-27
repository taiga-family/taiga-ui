import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiGetPaymentSystem} from '@taiga-ui/addon-commerce';

@Component({
    selector: 'tui-miscellaneous-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiMiscellaneousExample4 {
    protected readonly items = [
        '6734567890123456',
        '5536567890123456',
        '2202567890123456',
        '4405567890123456',
        '4000567890123456',
    ];

    protected parametersForm = new FormGroup({
        cardNumber: new FormControl(''),
    });

    protected get paymentSystem(): string | null {
        const {cardNumber} = this.parametersForm.value;

        return tuiGetPaymentSystem(cardNumber ?? '');
    }
}
