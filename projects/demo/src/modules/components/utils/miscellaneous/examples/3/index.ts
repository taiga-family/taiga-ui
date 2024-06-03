import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiGetPaymentSystem} from '@taiga-ui/addon-commerce';
import {TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiSelectModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiSelectModule, TuiDataListWrapper],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
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
